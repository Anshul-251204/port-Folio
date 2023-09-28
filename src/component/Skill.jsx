import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import java from '../assets/java.png'
import nodejs from '..//assets/other/nodejs.png'
import mysql from '..//assets/other/mysql.png'
import mongo from '..//assets/other/mongo.png'
import vscode from '..//assets/other/vscode.png'
import figma from '..//assets/other/figma.png'
import react from '..//assets/other/react.png'
import tailwind from '..//assets/other/tailwind.png'

const Skill = () => {
  return (
    <div className='skill' id='skill'>
        <h1>What i'm Good At</h1>
        <h1><span>SKILLS</span> and TOOLS</h1>

        <div className="lang">
            <h2>Language</h2>
            <div className="box">
                <img src={html} alt="html" />
                <img src={css} alt="html" />
                <img src={js} alt="html" />
                <img src={java} alt="html" />
            </div>

        </div>

        <div className="lang">
            <h2>Libraries</h2>
            <div className="box">
                <img src={react} alt="html" />
                <img src={tailwind} alt="html" />
                
            </div>
            
        </div>

        <div className="lang">
            <h2>Other</h2>
            <div className="box">
                <img src={nodejs} alt="html" />
                <img src={mysql} alt="html" />
                <img src={mongo} alt="html" />
                <img src={vscode} alt="html" />
                <img src={figma} alt="html" />
            </div>
            
        </div>
    </div>
  )
}

export default Skill