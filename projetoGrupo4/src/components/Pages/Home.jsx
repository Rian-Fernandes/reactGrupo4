import styles from "./Home.module.css";
import { useEffect } from "react";
import LinkButton from "../layout/LinkButton";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Home() {
  return (
    <div className={styles.home_grad}>
      <Navbar />
      <div className={styles.home_container}>
        <h1>
          Bem vindo ao <span>Flor & Folha</span>
        </h1>
        <p>
          Seja muito bem-vindo ao Flor & Folha,
          <br /> o seu novo destino para gerenciar produtos de forma simples e
          eficiente.
          <br /> Com uma abordagem dedicada à praticidade e à beleza da
          natureza,
          <br /> estamos aqui para ajudá-lo a organizar e apresentar seus
          produtos de forma única.
          <br /> Comece agora a explorar as infinitas possibilidades que o<br />{" "}
          Flor & Folha oferece e eleve a gestão dos seus produtos a um novo
          patamar.
        </p>
        <LinkButton to="/newproject" text="Cadastrar" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
