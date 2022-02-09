import React from 'react'

const ProjectCard = () => {
    const titleStyle = {
        color: "#7fccbd",
        fontSize: "20pt",
        fontWeight: "normal",
        margin: "0px"
    }

    const descStyle = {
        color: "white",
        fontSize: "14pt",
        fontWeight: "normal",
        padding: "10px"
    }

  return (
    <div className="project-card">
        <img></img>
        <h1 style={titleStyle}>Title</h1>
        <h2 style={descStyle}>Desc</h2>
    </div>
  )
}

export default ProjectCard