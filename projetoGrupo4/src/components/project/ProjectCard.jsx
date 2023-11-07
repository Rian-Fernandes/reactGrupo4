import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import woman from "../../Images/woman.png";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, url, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <div className={styles.urlImg}>
        <img src={url} />
      </div>
      <h4>{name}</h4>
      <p>
        <span>Preço do produto:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
