import NavBar from './NavBar';

function Header({ activePage, onNavigate }) {
  return (
    <header>
      <h1>BUNNYMOB ARTWORKS</h1>
      {/* <p className="tagline">I make art focusing on anime, manga, and gaming.</p> */}
      <NavBar activePage={activePage} onNavigate={onNavigate} />
    </header>
  );
}

export default Header;
