import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importe o Axios

import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function NewProject() {
  const navigate = useNavigate();

  async function createPost(project) {
    project.cost = 0;
    project.services = [];

    try {
      const response = await axios.post(
        "http://localhost:5000/projects",
        project,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/projects", { message: "Produto criado com sucesso!" });
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
  }

  return (
    <>
      <Navbar />

      <div className={styles.newproject_container}>
        <h1>Adicionar Produto</h1>
        <p>Adicione o seu produto para depois adicionar a descrição</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Produto" />
      </div>
      <Footer />
    </>
  );
}

export default NewProject;
