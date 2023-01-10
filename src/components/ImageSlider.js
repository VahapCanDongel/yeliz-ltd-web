import React, { useState, useEffect } from 'react';

const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = props.images.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= props.images.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = () => {
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    startInterval();
  };

  const startInterval = () => {
    intervalId = setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= props.images.length) {
        newIndex = 0;
      }
      setCurrentIndex(newIndex);
    }, props.interval);
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  let intervalId = null;

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='lg:w-[60%]'>
      <img src={props.images[currentIndex]} alt="slider"/>
    </div>
  );
};

export default ImageSlider;
