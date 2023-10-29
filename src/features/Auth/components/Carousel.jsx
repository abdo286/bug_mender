import  { useState } from "react";
import DOMPurify from 'dompurify'

// Your component code...

const Carousel = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`mb-6 flex justify-center ${
            index === currentIndex ? "" : "hidden"
          }`}
        >
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-[#dee2e6] mb-2 text-center">
              {feature.name}
            </h2>
            <p
              className="text-[#dee2e6] mx-auto"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(feature.description),
              }}
            />
          </div>
        </div>
      ))}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
