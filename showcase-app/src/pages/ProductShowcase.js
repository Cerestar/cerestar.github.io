import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const images = [
  { src: `${process.env.PUBLIC_URL}/images/product_gallery/small_print_sample2.jpg`, alt: 'Small Print Sample 2' },
  { src: `${process.env.PUBLIC_URL}/images/product_gallery/big_print_sample2.jpg`, alt: 'Big Print Sample 2' },
  { src: `${process.env.PUBLIC_URL}/images/product_gallery/sticker_sample.jpg`, alt: 'Sticker Sample' },
//   { src: `${process.env.PUBLIC_URL}/images/product_gallery/big_print_sample.jpg`, alt: 'Big Print Sample' },
//   { src: `${process.env.PUBLIC_URL}/images/product_gallery/small_print_sample.jpg`, alt: 'Small Print Sample' },
];

function ProductShowcase({ activePage, onNavigate }) {
  return (
    <div className="showcase-app">
      <Header activePage={activePage} onNavigate={onNavigate} />
      <main>
        <div className="heading" id="product-showcase">
          <h2>Product Showcase</h2>
        </div>
        <Gallery images={images} />
      </main>
      <Footer />
    </div>
  );
}

export default ProductShowcase;
