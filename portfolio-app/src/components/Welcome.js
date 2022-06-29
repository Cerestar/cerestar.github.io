import React from 'react'

const Welcome = () => {

    const titleStyle = {
        color: "#7fccbd",
        fontSize: "50pt",
        fontWeight: "normal",
    }

    const subtitleStyle = {
        color: "white",
        fontSize: "16pt",
        fontWeight: "normal",
        padding: "10px"
    }

    const imgDivStyle = {
        minWidth: "400px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "600px",
        width: "50%",
        backgroundColor: "white",
    }

    const imgStyle = {
        objectFit: "cover",
        height: "100%",
        width: "100%",
    }


  return (
    <div className="container">
        <div className="inner-container">
            {/* when phone sized hide img and make welcom card 100% */}
          <div className="centered">
            <div className="welcome-card">
                <div>
                        <h1 style={titleStyle}>
                            Javier <br/> Violante
                        </h1>

                        <h2 style={subtitleStyle}>
                            Software Engineer, Game Developer
                        </h2>
                </div>
            </div>

            <div style={imgDivStyle}>
                <img style={imgStyle} src="images/welcome.png" alt="welcome"/>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Welcome