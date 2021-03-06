const NavBar = () => {
    let pages = [
        {text: "Home", url: "https://cerestar.github.io/"},
        {text: "Projects", url: "#projectsDiv"},
        {text: "Contact Info", url: "#contactDiv"},
    ]

    let navItems = [];

    let i = 0;
    pages.forEach( ref => {
        navItems.push(<a key={i++} href={ref.url}> {ref.text} </a>)
    })
    
  return (
    <nav className="navBar">
        {navItems}
        <a href="https://www.linkedin.com/in/javierviolante/"> Linkedin </a>
        <a href="https://github.com/Cerestar"> Github </a>
    </nav>
  )
}

export default NavBar