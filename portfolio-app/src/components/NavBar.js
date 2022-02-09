const NavBar = () => {
    let pages = [
        {text: "Home", url: "https://cerestar.github.io/"},
    ]

    let navItems = [];

    let i = 0;
    pages.forEach( ref => {
        navItems.push(<a key={i++} href={ref.url}> {ref.text} </a>)
    })
    
  return (
    <nav className="navBar">
        {navItems}
    </nav>
  )
}

export default NavBar