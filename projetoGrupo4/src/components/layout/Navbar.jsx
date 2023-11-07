import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logoflora from '../../../public/logoflora.png'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/home">
          <img src={logoflora} style={{width: '50px', height: 'auto'}}/>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Produtos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newproject">Novo produto</Link>
          </li>
        </ul>
        <hr className={styles.line} />
      </Container>
    </nav>
  );
}

export default Navbar;
