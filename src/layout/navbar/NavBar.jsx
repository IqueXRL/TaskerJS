import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import styles from './NavBar.module.css'
import logo from '../../../public/logo.png'

const NavBar = () => {
    return(
        <nav className={styles.navbar}>
            <Container>
            <NavLink to={'/'}><img src={logo}/></NavLink>
            
            <ul className={styles.list}>
                <li className={styles.item}><NavLink to={'/'}>Home</NavLink></li>
                <li className={styles.item}><NavLink to={'/projects'}>Projetos</NavLink></li>
            </ul>

            </Container>
        </nav>
    )
}

export default NavBar