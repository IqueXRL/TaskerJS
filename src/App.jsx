import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './layout/container/Container'
//Pages
import NavBar from './layout/navbar/NavBar'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import NewProject from './pages/newproject/NewProject'
import Footer from './layout/footer/Footer'
import Project from './pages/project/Project'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <NavBar/>

        <Container customClass="minHeight">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/newproject' element={<NewProject/>} />
            <Route path='/project/:id' element={<Project/>} />
          </Routes>
        </Container>

          <Footer/>

      </Router>
        
    </div>
  )
}

export default App
