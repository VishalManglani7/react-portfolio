//import image here for portfolio
import React from 'react'
import Avatar from "../assets/projects/avatar.png"

function AboutMe() {
    return (
    <div className="AboutMeClass" id="AboutMe">
        <h2 className="title">
          About Me
        </h2>
        <img src={Avatar} alt="Avatar" className="avatar" />
        <article id="aboutMeArticle">
          <div className="text">
            <p>This is where my about me will go once I know what to write here!</p>
          </div>
        </article>
    </div>
    );
  }
  
  export default AboutMe;