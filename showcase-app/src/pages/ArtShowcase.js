import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const images = [
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Momo_jirou_MHA.png`, alt: 'Momo & Jirou artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Gwen.png`, alt: 'Gwen artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/BT21_5_7.png`, alt: 'BT21 artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Tandemaus.png`, alt: 'Tandemaus artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Marnie__Morpeko.png`, alt: 'Marnie & Morpeko artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/green_yuri.png`, alt: 'Green Yuri artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/frieren.png`, alt: 'Frieren artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/darkelf_bunny_zoomed.png`, alt: 'Dark Elf Bunny artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/jacket_ninja.png`, alt: 'Jacket Ninja artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Dark_magician_girl.png`, alt: 'Dark Magician Girl artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Lovely_Labrynth.png`, alt: 'Lovely Labrynth artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Evil_Twins.png`, alt: 'Evil Twins artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Bunny_Boy.png`, alt: 'Bunny Boy artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Yuta__Rikka.png`, alt: 'Yuta & Rikka artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Luigi.png`, alt: 'Luigi artwork' },
  { src: `${process.env.PUBLIC_URL}/images/showcase_gallery/Farcille2.png`, alt: 'Farcille artwork' },
];

function ArtShowcase({ activePage, onNavigate }) {
  return (
    <div className="showcase-app">
      <Header activePage={activePage} onNavigate={onNavigate} />
      <main>
        <div className="heading" id="art-showcase">
          <h2>Art Showcase</h2>
        </div>
        <Gallery images={images} />
      </main>
      <Footer />
    </div>
  );
}

export default ArtShowcase;
