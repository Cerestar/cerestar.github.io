import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsComp = () => {
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
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        
    </div>
  )
}

export default ProjectsComp