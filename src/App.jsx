import './style/App.scss'
import './style/Nav.scss'
import './style/Home.scss'
import './style/Skill.scss'
import './style/About.scss'
import './style/Project.scss'
import './style/Clone.scss'

import Nav from './component/Nav'
import Home from './component/Home'
import Skill from './component/Skill'
import About from './component/About'
import Project from './component/Project'
import Clone from './component/Clone.jsx'
import Portfolio from './component/portfolio'

import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/clone" element={<Clone />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      
    </Router>
  )
}

export default App
