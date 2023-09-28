import React from 'react'
import {AiFillTwitterCircle ,AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineArrowRight} from 'react-icons/ai'


import aa from '../assets/mba/11.png'
import bb from '../assets/mba/22.png'
import cc from '../assets/mba/33.png'
import dd from '../assets/mba/44.png'
import ee from '../assets/mba/55.png'
import ff from '../assets/mba/66.png'
import gg from '../assets/mba/77.png'
import hh from '../assets/mba/88.png'

const icon = {
    fontSize : "2vw",
    margin : " 0 1vw",
    color : "#123"
    
}

const Clone = () => {
  return (
    <div className="clone">
       <div className="heading">
            <h1>MBA CHAI WALA</h1>
            <p>Clone old mba chai wala website using React.js , Rass and other.</p>

        </div>

        <div className="links">
            <a href="https://www.linkedin.com/in/anshul25/"><div><AiFillLinkedin className='hover' style={icon}/></div></a>
            <a href="https://www.instagram.com/anshul._012/"><div><AiFillInstagram style={icon}/></div></a>
            <a href="https://github.com/Anshul-251204"><div><AiFillGithub style={icon}/></div></a>
            <a href="https://twitter.com/Anshul__012"><div><AiFillTwitterCircle style={icon}/></div></a>
        </div>

        <h3>WORK.</h3>

        <div className="parallax">

          <img src={aa} alt="" />
          <img src={bb} alt="" />
          <img src={cc} alt="" />
          <img src={dd} alt="" />
          <img src={ee} alt="" />
          <img src={ff} alt="" />
          <img src={gg} alt="" />
          <img src={hh} alt="" />
          
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