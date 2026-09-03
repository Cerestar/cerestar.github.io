import { useState } from 'react';
const images = [
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Momo_Jirou_MHA.png`, alt: 'Momo & Jirou artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Gwen.png`, alt: 'Gwen artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/BT21_5_7.png`, alt: 'BT21 artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Tandemaus.png`, alt: 'Tandemaus artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Marnie__Morpeko.png`, alt: 'Marnie & Morpeko artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/green_yuri.png`, alt: 'Green Yuri artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/frieren.png`, alt: 'Frieren artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/darkelf_bunny_zoomed.png`, alt: 'Dark Elf Bunny artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/jacket_ninja.png`, alt: 'Jacket Ninja artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Dark_magician_girl.png`, alt: 'Dark Magician Girl artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Lovely_Labrynth.png`, alt: 'Lovely Labrynth artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Evil_Twins.png`, alt: 'Evil Twins artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Bunny_Boy.png`, alt: 'Bunny Boy artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Yuta__Rikka.png`, alt: 'Yuta & Rikka artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Luigi.png`, alt: 'Luigi artwork' },
    { src: `${process.env.PUBLIC_URL}/images/showcase_gallery_resized/Farcille2.png`, alt: 'Farcille artwork' },
];

function App() {
  const [landscapeImages, setLandscapeImages] = useState([]);

  const handleImageLoad = (event, source) => {
    if (event.currentTarget.naturalWidth > event.currentTarget.naturalHeight) {
      setLandscapeImages((currentImages) => (
        currentImages.includes(source) ? currentImages : [...currentImages, source]
      ));
    }
  };

  return (
    <div className="showcase-app">
      <header>
        <h1>BUNNYMOB STUDIO</h1>
        <p className="tagline">I make art focusing on anime, manga, and gaming.</p>
      </header>
      <main>
        <div className="heading" id="art-showcase">
          <h2>Art Showcase</h2>
        </div>
        <div className="gallery">
          {images.map((image) => (
            <figure className={landscapeImages.includes(image.src) ? 'landscape' : ''} key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={(event) => handleImageLoad(event, image.src)}
              />
            </figure>
          ))}
        </div>
      </main>
      <footer>
        <nav aria-label="Social links">
          <a href="https://www.instagram.com/bunnymob_studio">Instagram</a>
          <a href="https://x.com/BunnyMob_">X / Twitter</a>
          <a href="mailto:bunnymobstudio@gmail.com">Email</a>
        </nav>
        <p>© 2026 Bunny Mob Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
