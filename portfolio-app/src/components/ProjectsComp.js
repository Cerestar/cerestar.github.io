import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsComp = () => {
    let images = [
        {
            img: "images/kalios-img.png", 
            title: "Kalios", 
            desc: "Procedurally generated platforming game.\nCreated with Unity.\n\nClick for more information.", 
            link: "https://4nz.itch.io/kalios/devlog/309699/kalios-demo"
        },
        {
            img: "images/server-img.png", 
            title: "Realtime Server", 
            desc: "Realtime networking solution for multiplayer game concept. Can be paired to a custom client\nCreated with C# Core and Unity.\n\nClick for more information.", 
            link: "https://github.com/Cerestar/GameServer"
        },
        {
            img: "images/bot-img.png", 
            title: "Discord Bot", 
            desc: "Discord chat bot which is able to process commands, send messages and connect to a database.\nCreated with Javascript & Node.js.\n\nClick for more information.", 
            link: "https://github.com/Cerestar/SakuraBot"
        },
        {
            img: "images/asteroids-img.png", 
            title: "Asteroids C++", 
            desc: "Asteroids game recreated using a from scratch game engine.\nCreated with C++ Core.\n\nClick for direct download.", 
            link: "dataFiles/Asteroids C++.zip"
        },
        {
            img: "images/ac-img.png", 
            title: "Audio Converter", 
            desc: "Audio format converter which can convert audio files to other audio formats.\nCreated with C# Core.\n\nClick for download & more information.", 
            link: "https://github.com/Cerestar/AudioConverter"
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
    <div className="container dark-blue" id="projectsDiv">
        <h1 style={titleStyle}>Projects</h1>

        <div className="centered">
            {items}
        </div>
        
    </div>
  )
}

export default ProjectsComp