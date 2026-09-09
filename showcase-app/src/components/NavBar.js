function NavBar({ activePage, onNavigate }) {
  return (
    <nav aria-label="Showcase navigation">
      <a
        className={activePage === 'art' ? 'active' : ''}
        href="#art-showcase"
        onClick={() => onNavigate('art')}
      >
        Art Showcase
      </a>
      <a
        className={activePage === 'product' ? 'active' : ''}
        href="#product-showcase"
        onClick={() => onNavigate('product')}
      >
        Product Showcase
      </a>
    </nav>
  );
}

export default NavBar;
