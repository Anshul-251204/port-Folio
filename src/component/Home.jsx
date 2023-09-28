import React from 'react'
import { AiFillLinkedin , AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Skill from './Skill'

const Home = () => {
  return (
    <>
    <div className='home'>
        <div>
        <h1 className='h1'>Web</h1>
        <h1><span>Deve</span>loper<span>.</span></h1>
        <h5>Indore based</h5>
        <div>
            
         
        </div>
        
        </div>

        <div className="footer">
          <a className='linked' href="https://www.linkedin.com/in/anshul25/" target='blank'><AiFillLinkedin/></a>
          <a className='insta' href="https://www.instagram.com/anshul._012/" target='blank'> <AiFillInstagram/></a>
          <a className='github' href="https://github.com/Anshul-251204" target='blank'><AiFillGithub/></a>

        </div>
    </div>

    <Skill/>
    </>
  )
}

export default Home