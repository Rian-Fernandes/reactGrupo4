import { useState, useEffect } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";
import ImageCard from "../form/ImageCard";
import axios from "axios";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        // Handle error here
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do produto"
        name="name"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Preço do produto"
        name="budget"
        placeholder="Insira o preço total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Input
        type="text"
        name="url"
        text="Digite a url da imagem"
        handleOnChange={handleChange}
        placeholder="Insira a url da imagem"
        value={project.url ? project.url : ""}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
