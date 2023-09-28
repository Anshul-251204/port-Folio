import  React from 'react'
import {Link} from "react-router-dom"
import {MdDarkMode, MdOutlineDarkMode} from 'react-icons/md'
import { useState } from "react"


const Nav = () => {

  const [mode, setmode] = useState(true)

  const changeMode = () =>{
    setmode(!mode);
    
  }

  return (
    
    <nav>
        <h1>Anshul choure </h1>

        <div>
            <Link to={"/"} >Home</Link>
            <Link to={"/skill"} >Skills</Link>
            <Link to={"/project"} >Project</Link>
            <Link to={"/about"} >About</Link>

            {/* <button
            onClick={changeMode}
            >{mode?<MdDarkMode/>:<MdOutlineDarkMode/>}</button> */}
        </div>
    </nav>
  )
}

export default Nav