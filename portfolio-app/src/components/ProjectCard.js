import React from 'react'

const ProjectCard = (props) => {
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
        padding: "10px",
        whiteSpace: "pre-wrap"

    }

    const imgStyle = {
      objectFit: "cover",
      objectPosition: "0% 100%",
      aspectRatio: "16 / 9",
      width: "95%"
    }

  return (
    <div className="project-card">
      <a href={props.link}>
        <img style={imgStyle} src={props.img} alt="Test"></img>
        <h1 style={titleStyle}>{props.title}</h1>
        <h2 style={descStyle}>{props.desc}</h2>
      </a>
    </div>
  )
}

export default ProjectCard