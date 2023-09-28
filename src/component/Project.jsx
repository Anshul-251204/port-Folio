import React from 'react'
import {Link} from 'react-router-dom'
import clone from '../assets/clone.jpg'
import portfolio from '../assets/portfolio.jpg'

const Project = () => {
  return (
    <div className='project'>
        <h1>Projects</h1>
        <h1>I <span>Made.</span></h1>


        <div className='project-section'>
            <div>
                <Link to={"/clone"} ><img src={clone} alt="clone" /></Link>
                <p>CLONE</p>
            </div>

            <div>
                <Link to={"/portfolio"} ><img src={portfolio} alt="clone" /></Link>   
                <p>PORTFOLIO</p>
            </div>
           
            
        </div>
    </div>
  )
}

export default Project