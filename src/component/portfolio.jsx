import React from 'react'
import {AiFillTwitterCircle ,AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineArrowRight} from 'react-icons/ai'


import home from '../assets/portfolio/home.png'
import skill from '../assets/portfolio/skill.png'
import about from '../assets/portfolio/about.png'
import work from '../assets/portfolio/work.png'
import project from '../assets/portfolio/project.png'


const icon = {
    fontSize : "2vw",
    margin : " 0 1vw",
    color : "#123"
    
}

const Clone = () => {
  return (
    <div className="clone">
       <div className="heading">
            <h1>MY PORTFOLIO</h1>
            <p>DEVELOPED MY portfolio website using React.js, sass and Libraries and technology.</p>

        </div>

        <div className="links">
            <a href="https://www.linkedin.com/in/anshul25/"><div><AiFillLinkedin className='hover' style={icon}/></div></a>
            <a href="https://www.instagram.com/anshul._012/"><div><AiFillInstagram style={icon}/></div></a>
            <a href="https://github.com/Anshul-251204"><div><AiFillGithub style={icon}/></div></a>
            <a href="https://twitter.com/Anshul__012"><div><AiFillTwitterCircle style={icon}/></div></a>
        </div>

        <h3>WORK.</h3>

        <div className="parallax">

          <img src={home} alt="" />
          <img src={skill} alt="" />
          <img src={about} alt="" />
          <img src={project} alt="" />
          <img src={work} alt="" />
          
        </div>

        <div className='scroll'>Scroll Horizontal<AiOutlineArrowRight/></div>

        <div className="what-i-do">
          <h1>Thinks I Do.</h1>
          <p>Design, strategy, management, creative direction, & development are my specialities, and I have had nearly a decade honing in my skills. In all my project, I find that efficient work - flows, excellent communication skills and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties.</p>
          <h1>Skill & Libraries I Use.</h1>
          <p>FIGMA, JS, HTML, CSS, SASS, VS-CODE, REACT.JS, REACT-ROUTER-DOM, REACT-ICON ans other. </p>
        </div>


        <div className="con-div">
          <h1>Let's Talk About Your Idea and Project.</h1>
          <p>something on your mind ? | get in touch let's make it</p>
            <div className="links">
              <a href="https://www.linkedin.com/in/anshul25/"><div><AiFillLinkedin className='hover' style={icon}/></div></a>
              <a href="https://www.instagram.com/anshul._012/"><div><AiFillInstagram style={icon}/></div></a>
              <a href="https://github.com/Anshul-251204"><div><AiFillGithub style={icon}/></div></a>
              <a href="https://twitter.com/Anshul__012"><div><AiFillTwitterCircle style={icon}/></div></a>
            </div>

            <button><a href="mailto: annshulch1@gmail.com">Send a Email</a></button>


        </div>


    </div>
  )
}

export default Clone