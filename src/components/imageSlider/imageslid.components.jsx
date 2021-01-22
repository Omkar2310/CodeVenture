import React,{useState} from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa';
import { SliderData } from './imageData';
import './imageSlider.styles.css'
const ImageSlider = () => {
    const slides = SliderData
    // const [current,setCurrent] = useState(0)
    // const length = slides.length    

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1);
    //   };
    
    //   const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    //   };
      
    //   const 

    //   if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    //   }

  const [curr, setCurr] = React.useState(0);
  const { length } = slides;
  
  const goToNext = () => {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else curr + 1
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }
  
  // useEffect will run at every re-render
  React.useEffect(() => {
    // At every render, set a new timeout to go to the next slide
    setTimeout(goToNext, 4000);
    // And, when unmounting <Slider />, clear the timeout
    // See the reactjs.org docs on hooks for more info
    return function() {
      clearTimeout(goToNext);
    }
  })

    // return (
    //        <div className='slider'>
    //     <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    //     <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    //     {SliderData.map((slide,index) => {
    //         return (
    //             <div
    //                 className={index === current ? 'slide active' : 'slide'}
    //                 key={index}
    //             >
    //             {index === current && (
    //                 <img src={slide.image} alt='' className='image' />
    //             )}
    //             </div>
    //         );
    //     })

    //     }
    // </div>
    // );

    if (!Array.isArray(slides) || length <= 0) {
      return null;
    }
    
    return (
      <section className="slider">
        {slides.map((s, i) => (
          <div
            className={i === curr ? "slide active" : "slide"}
            key={s.id}
            aria-hidden={i !== curr}
          >
            <div>
              <h1>{s.title}</h1>
              <h2>{s.subtitle}</h2>
            </div>
            {i === curr && (
              <img className="image" src={s.image} />
            )}
          </div>
        ))}
      </section>
    );  
};

export default ImageSlider;
