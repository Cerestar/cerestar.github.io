import React from 'react'

const Welcome = () => {

    const titleStyle = {
        color: "#7fccbd",
        fontSize: "50pt",
        fontWeight: "normal",
        margin: "0px"
    }

    const subtitleStyle = {
        color: "white",
        fontSize: "16pt",
        fontWeight: "normal",
        padding: "10px"
    }

    const imgStyle = {
        backgroundColor: "#574007", 
        height: "100%",
        width: "100%",
        margin: "auto"
    }
  return (
    <div className="container">
        <div className="inner-container" style={{height: "660px"}}>

            {/* when phone sized hide img and make welcom card 100% */}
          
          <div className="welcome-card">
              <div>
                    <h1 style={titleStyle}>
                        Javier <br/> Violante
                    </h1>

                    <h2 style={subtitleStyle}>
                        Software Engineer, Game Programmer
                    </h2>
              </div>
          </div>

            <div  style={imgStyle}></div>

        </div>
      </div>
  )
}

export default Welcome