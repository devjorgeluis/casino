import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = (props) => {
  return (
    <div className="slide-container">
      <Slide easing="ease" duration={3000} arrows={false} indicators={true} autoplay={true} pauseOnHover={false} infinite={true}>
        {
          props.images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
        }
      </Slide>
    </div>
  )
}

export default Slideshow