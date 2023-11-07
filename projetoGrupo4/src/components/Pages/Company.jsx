import styles from "./Company.module.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Company() {
  return (
    <>
      <Navbar />
      <section id={styles.categorias}>
        <span className={styles.categoriaTitle}>Sobre a Flor & Folha</span>
        <span className={styles.categoriaDesc}>
          Somos à Flor & Folha, onde a beleza da natureza encontra a praticidade
          da gestão de produtos. Somos uma empresa dedicada a tornar a
          experiência de gerenciar plantas e produtos relacionados tão simples e
          eficiente quanto possível. Com uma paixão pela diversidade botânica,
          oferecemos uma ampla variedade de produtos que podem transformar seu
          espaço em um oásis verde.
        </span>
        <br />
        <span className={styles.categoriaDesc}>
          Na Flor & Folha, acreditamos que a natureza é uma fonte infinita de
          inspiração. Estamos aqui para ajudá-lo a elevar a gestão de seus
          produtos, tornando a conexão com a natureza mais acessível e
          encantadora do que nunca. Comece agora a explorar nossas categorias de
          produtos e descubra o que a Flor & Folha tem a oferecer. Seja
          bem-vindo ao nosso mundo de beleza botânica e praticidade.
        </span>
        <br />
        <span className={styles.categoriaTitle}>
          Nossas Categorias de Produtos:
        </span>
        <div className={styles.categoriaBars}>
          <div className={styles.categoriaBar}>
            <div className={styles.categoriaBarText}>
              <h3>Cactos</h3>
              <p>
                Descubra a beleza única dos cactos, com suas formas intrigantes
                e resistência surpreendente. Nossa seleção de cactos é perfeita
                para quem procura plantas de baixa manutenção com um toque de
                exotismo.
              </p>
            </div>
          </div>
          <div className={styles.categoriaBar}>
            <div className={styles.categoriaBarText}>
              <h3>Suculentas</h3>
              <p>
                As suculentas são conhecidas por sua capacidade de armazenar
                água e vêm em uma variedade de formas e cores. Elas são ideais
                para adicionar um toque de verde em espaços pequenos ou para
                quem gosta de plantas de fácil cuidado.
              </p>
            </div>
          </div>
          <div className={styles.categoriaBar}>
            <div className={styles.categoriaBarText}>
              <h3>Bonsai</h3>
              <p>
                Encante-se com a arte dos bonsais, árvores em miniatura que
                representam harmonia e equilíbrio. Nossos bonsais são
                cuidadosamente cultivados para trazer a elegância desta tradição
                japonesa ao seu lar ou jardim.
              </p>
            </div>
          </div>
          <div className={styles.categoriaBar}>
            <div className={styles.categoriaBarText}>
              <h3>Plantas de Jardim</h3>
              <p>
                Se você está buscando plantas para transformar seu jardim em um
                paraíso natural, explore nossa seleção de plantas de jardim.
                Desde flores deslumbrantes até plantas perenes resistentes,
                temos tudo o que você precisa para criar um espaço ao ar livre
                incrível.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Company;
