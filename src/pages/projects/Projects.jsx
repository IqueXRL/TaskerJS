import {useLocation} from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../../layout/message/Message"
import Container from '../../layout/container/Container'
import LinkButton from '../../layout/linkButton/LinkButton'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import Loading from '../../layout/loading/Loading'

const Projects = () => {

    const [projects, setProjects] = useState([])

    const [removeLoading, setRemoveLoading] = useState(false)

    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    function removeProject(id) {
         fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
         }).then(resp => resp.json())
         .then(() =>{
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido!')
         })
         .catch(err => console.log(err))
    }

    return(
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message}/>}
            {projectMessage && <Message type="success" msg={projectMessage}/>}
            <Container customClass="start">
                {projects.length > 0 &&
                projects.map((project) => (
                    <ProjectCard 
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category?.name}
                    key={project.id}
                    handleRemove={removeProject} />
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.lenght === 0 && (
                    <p>Não há projetos cadastrados...</p>
                )}
            </Container>
        </div>
    )
}

export default Projects