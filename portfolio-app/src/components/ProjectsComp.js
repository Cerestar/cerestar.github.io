import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsComp = () => {
    let images = [
        {img: "images/kalios-img.png", title: "Kalios", desc: "Procedurally generated platforming game.", link: "javascript:void(0);"},
        {img: "images/server-img.png", title: "Server", desc: "Networking solution for multiplayer game concept.", link: "https://github.com/Cerestar/GameServer"},
        {img: "images/bot-img.png", title: "Bot", desc: "Discord chat bot made using Node.js.", link: "https://github.com/Cerestar/SakuraBot"}
    ]

    let items = []

    images.forEach( i => {
        items.push(<ProjectCard img={i.img} title={i.title} desc={i.desc} link={i.link}/>)
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