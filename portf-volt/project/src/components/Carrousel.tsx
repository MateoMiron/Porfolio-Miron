import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export function Carrousel({ isOpen, onClose, images }: CarouselModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#1a1a1a]/60 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-10"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-[#4ade80]/10 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-[#4ade80]" />
          </button>

          <div className="relative p-8">
            <div className="relative h-[60vh]">
              <img
                src={images[currentImage]}
                alt={`Screenshot ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}