import { useEffect, useState } from 'react';
import ArtShowcase from './pages/ArtShowcase';
import ProductShowcase from './pages/ProductShowcase';

function App() {
  const [activePage, setActivePage] = useState(() => (
    window.location.hash === '#product-showcase' ? 'product' : 'art'
  ));

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(window.location.hash === '#product-showcase' ? 'product' : 'art');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  switch (activePage) {
    case 'product':
      return (
        <ProductShowcase
          activePage={activePage}
          onNavigate={setActivePage}
        />
      );
    case 'art':
    default:
      return (
        <ArtShowcase
          activePage={activePage}
          onNavigate={setActivePage}
        />
      );
  }
}

export default App;
