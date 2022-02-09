import React from 'react'

const Contact = () => {

    let links = [
        {class: "fa fa-linkedin", url: "https://www.linkedin.com/in/javierviolante/"},
        {class: "fa fa-github", url: "https://github.com/Cerestar"}
    ]

    let items = []

    let i = 0;
    links.forEach( l => {
        items.push(<a key={i++} href={l.url} className={l.class} target="_blank" rel="noreferrer"/>)
    })

    const titleStyle = {
        color: "#7fccbd",
        paddingTop: "20px",
        paddingBottom: "10px",
        fontSize: "30pt",
        fontWeight: "normal",
        margin: "0px",
    }

    const descStyle = {
        color: "white",
        fontSize: "12pt",
        fontWeight: "normal"
    }

  return (
    <div className="container">
         <div className="inner-container dark-gray">
             <div className="centered">
             <div style={{padding: "50px"}}>
            <h1 style={titleStyle}>Get in Touch</h1>

            <br/>

            <nav>
                {items}
            </nav>
            
            <br/>

            <h2 style={descStyle}>Toronto, Ontario</h2>
            <a style={descStyle} href="mailto:javier.violante123@gmail.com">javier.violante123@gmail.com</a>
            <br/>
            <br/>

            <a style={descStyle} href="tel:4168025034">416-802-5034</a>

            </div>
            </div>
         </div>
    </div>
  )
}

export default Contact