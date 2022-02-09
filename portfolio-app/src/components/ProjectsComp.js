import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsComp = () => {
    let images = [
        {img: "images/kalios-img.png", title: "Kalios", desc: "Procedurally generated platforming game."},
        {img: "images/server-img.png", title: "Server", desc: "Networking solution for multiplayer game concept."},
        {img: "images/bot-img.png", title: "Bot", desc: "Discord chat bot made using Node.js."}
    ]

    let items = []

    images.forEach( i => {
        items.push(<ProjectCard img={i.img} title={i.title} desc={i.desc}/>)
    })

    const TitleStyle = {
        color: "#7fccbd",
        paddingTop: "20px",
        paddingBottom: "10px",
        fontSize: "30pt",
        fontWeight: "normal",
        margin: "0px"
    }

    const compStyle = {
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }

    
  return (
    <div className="container dark-blue">
        <h1 style={TitleStyle}>Projects</h1>

        <div style={compStyle}>
            {items}
        </div>
        
    </div>
  )
}

export default ProjectsComp