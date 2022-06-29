import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsComp = () => {
    let images = [
        {
            img: "images/kalios-img.png", 
            title: "Kalios", 
            desc: "Procedurally generated platforming game.\nCreated with Unity\n\nClick for more Information...", 
            link: "https://4nz.itch.io/kalios/devlog/309699/kalios-demo"
        },
        {
            img: "images/server-img.png", 
            title: "Server", 
            desc: "Networking solution for multiplayer game concept.\nCreated with C# Core and Unity\n\nClick for more Information...", 
            link: "https://github.com/Cerestar/GameServer"
        },
        {
            img: "images/bot-img.png", 
            title: "Bot", 
            desc: "Discord chat bot made using Node.js.\nCreated with Javascript & Node.js\n\nClick for more Information...", 
            link: "https://github.com/Cerestar/SakuraBot"
        },
        {
            img: "images/asteroids-img.png", 
            title: "Asteroids C++", 
            desc: "Asteroids created using a from scratch game engine.\nC++ Core\n\nClick for direct download...", 
            link: "dataFiles/Asteroids C++.zip"
        }
        
    ]

    let items = []

    images.forEach( i => {
        items.push(<ProjectCard img={i.img} title={i.title} desc={i.desc} link={i.link} target="_blank"/>)
    })

    const titleStyle = {
        color: "#7fccbd",
        paddingTop: "20px",
        paddingBottom: "10px",
        fontSize: "30pt",
        fontWeight: "normal",
        margin: "0px"
    }

    
  return (
    <div className="container dark-blue">
        <h1 style={titleStyle}>Projects</h1>

        <div className="centered">
            {items}
        </div>
        
    </div>
  )
}

export default ProjectsComp