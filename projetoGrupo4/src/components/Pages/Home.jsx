import styles from './Home.module.css'
import { useEffect } from 'react';
import woman from '../../Images/woman.png'
import LinkButton from '../layout/LinkButton';

function Home() {
    useEffect ( () =>{
        document.body.style = 'background-image: linear-gradient(to right, #576851 0%, #576851 50%, #A58567 50%, #A58567 100%);';
    },[])
  return (
    <>
    <section className={styles.home_container}>
        <h1>
            Bem vindo ao <span>Flor & Folha</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Cadastrar"/>
        <img src={woman}/>
    </section>
    </>
  )
     
}

export default Home;



