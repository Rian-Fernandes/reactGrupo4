import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "../layout/Container";
import Loading from "../layout/Loading";

import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Message from "../layout/Message";

import styles from "./Projects.module.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Projects() {
  useEffect(() => {
    document.body.style = "background: #576851";
  }, {});

  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      setAllProjects(json);
      setProjects(json);

      const catResponse = await fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const catJson = await catResponse.json();
      setCategories(catJson);
      setRemoveLoading(true);
    };

    fetchData();
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Produto removido com sucesso!");
      });
  }

  function handleCategoryFilter(selectedCategory) {
    const currentProjects = [...allProjects];

    if (selectedCategory === "all") {
      setProjects(allProjects);
    } else {
      const filteredProjects = currentProjects.filter(
        (proj) => proj.category.id === selectedCategory
      );
      setProjects(filteredProjects);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.project_container}>
        <div className={styles.title_container}>
          <h1>Meus Produtos</h1>
          <LinkButton to="/newproject" text="Criar produtos" />
        </div>
        <div>
          <select
            defaultValue={"all"}
            onChange={(e) => handleCategoryFilter(e.currentTarget.value)}
          >
            {categories.map((cat) => {
              return <option value={cat.id}>{cat.name}</option>;
            })}
            <option value="all">Todos</option>
          </select>
        </div>
        {message && <Message type="success" msg={message} />}
        {projectMessage && <Message type="success" msg={projectMessage} />}
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                url={project.url}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há produtos cadastrados!</p>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
