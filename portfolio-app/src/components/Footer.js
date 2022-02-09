import React from 'react'

const Footer = () => {
    let links = [
        {class: "fa fa-linkedin", url: "https://www.github.com/"},
        {class: "fa fa-github", url: "https://github.com/Cerestar"},
        {class: "fa fa-at", url: "mailto:javier.violante123@gmail.com"},
        {class: "fa fa-phone", url: "tel:4168025034"},
    ]

    let items = []

    let i = 0;
    links.forEach( l => {
        items.push(<a key={i++} href={l.url} class={l.class}/>)
    })

  return (
    <footer>
        <nav>
            {items}
        </nav>

        ©2022 by Javier Violante.
    </footer>
  )
}

export default Footer