import { useState } from 'react';

function Gallery({ images }) {
  const [landscapeImages, setLandscapeImages] = useState([]);

  const handleImageLoad = (event, source) => {
    if (event.currentTarget.naturalWidth > event.currentTarget.naturalHeight) {
      setLandscapeImages((currentImages) => (
        currentImages.includes(source) ? currentImages : [...currentImages, source]
      ));
    }
  };

  return (
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
  );
}

export default Gallery;
