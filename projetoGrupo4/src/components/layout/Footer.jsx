import {FaFacebook, FaInstagram, FaGoogle} from 'react-icons/fa'

import styles from './Footer.module.css'
function Footer (){
    return (
        
        <footer className={styles.footer}> 
            <ul className={styles.social_list}>
                Conheça nossas redes!
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaGoogle/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Flor & Folha2023. Todos os direitos reservados.</span>&copy;</p>
        </footer>
    )
}

export default Footer