import React from 'react'
import avitar from '../assets/avitar.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className='img'>
            <img src={avitar} alt="avitar" />
        </div>
        <div className="text">
            <h2>About me</h2>
            <p>I am a passionate web developer currently pursuing my B.Tech 
                at Sage University, Indore. With expertise in HTML, CSS, JavaScript,
                 and React.js, I thrive on creating engaging and dynamic web experiences.
                  I'm dedicated to staying at the forefront of web development trends,
                   constantly expanding my skill set to deliver exceptional results.
            </p>

            <div>
                <a className='linked' href="https://www.linkedin.com/in/anshul25/" target='blank'>LINKEDIN</a>
                <a className='insta' href="https://www.instagram.com/anshul._012/" target='blank'>INSTAGRAM</a>
                <a className='github' href="https://github.com/Anshul-251204" target='blank'>GITHUB</a>
            </div>
        </div>
    </div>
  )
}

export default About