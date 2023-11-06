import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";

import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/projects", { message: "Produto criado com sucesso!" });
      });
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Adicionar Produto</h1>
      <p>Adicione o seu produto para depois adicionar a descrição</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Produto" />
    </div>
  );
}

export default NewProject;
