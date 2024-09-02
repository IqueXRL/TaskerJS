import styles from './Home.module.css'
import homeImh from '../../../public/homeImg.webp'
import LinkButton from '../../layout/linkButton/LinkButton'

const Home = () => {
    return(
        <section className={styles.homeContainer}>
            <h1>Bem-vindo ao <strong>Tasker</strong></h1>
            <p>Gerencie seus projetos de forma prática!</p>

            <LinkButton to='/newproject' text="Novo projeto"/>

            <img src={homeImh} alt='Tasker'/>

        </section>
    )
}

export default Home