import { parse, v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Project.module.css";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import axios from "axios"; // Import Axios

function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:5000/projects/${id}`)
        .then((response) => {
          setProject(response.data);
          setServices(response.data.services);
        })
        .catch((error) => {
          // Handle error here
        });
    }, 0);
  }, [id]);

  function editPost(project) {
    if (project.budget < project.cost) {
      setMessage("O Preço não pode ser menor que o custo do produto!");
      setType("error");
      return false;
    }

    axios
      .patch(`http://localhost:5000/projects/${project.id}`, project)
      .then((response) => {
        setProject(response.data);
        setShowProjectForm(!showProjectForm);
        setMessage("Produto atualizado!");
        setType("success");
      })
      .catch((error) => {
        // Handle error here
      });
  }

  function createService(project) {
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Preço ultrapassado, verifique o valor do serviço!");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    axios
      .patch(`http://localhost:5000/projects/${project.id}`, project)
      .then((response) => {
        setServices(response.data.services);
        setShowServiceForm(!showServiceForm);
        setMessage("Serviço adicionado!");
        setType("success");
      })
      .catch((error) => {
        // Handle error here
      });
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    axios
      .patch(
        `http://localhost:5000/projects/${projectUpdated.id}`,
        projectUpdated
      )
      .then((response) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso!");
      })
      .catch((error) => {});
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      <Navbar />
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Produto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar produto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.form}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Preço do Produto:</span> R${project.budget}
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione uma descrição:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar Descrição" : "Fechar"}
              </button>
              <div className={styles.form}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Descrição"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Descrição:</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há descrições cadastradas.</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}

export default Project;
