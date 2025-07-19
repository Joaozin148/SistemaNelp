'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

// Define the Image type
interface Image {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Array of images with type
const images: Image[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', alt: 'Paisagem 1', width: 400, height: 600 },
  { id: 2, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba', alt: 'Paisagem 2', width: 600, height: 400 },
  { id: 3, src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946', alt: 'Flores', width: 400, height: 500 },
  { id: 4, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', alt: 'Praia', width: 500, height: 700 },
  { id: 5, src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', alt: 'Cidade', width: 600, height: 400 },
  { id: 6, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', alt: 'Montanha', width: 400, height: 600 },
];

export default function Galery() {
  // Define state with type Image or null
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openImage = (image: Image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative pt-20">
      {/* Galeria com layout masonry */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="mb-4 break-inside-avoid cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg shadow-md"
              style={{ aspectRatio: `${image.width}/${image.height}` }}
            />
          </div>
        ))}
      </div>

      {/* Modal para imagem ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="rounded-lg shadow-xl"
              style={{ maxWidth: '870px', maxHeight: '580px', objectFit: 'contain', width: '100%', height: 'auto' }}
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeImage}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}