import React, { Component, Fragment } from "react";
import MobileDetect from "mobile-detect";
import Image from "../carousel/image";
import Carousel from "react-multi-carousel";
import "../carousel/style.css";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../images/c1.jpg';
import img3 from '../../images/c3.jpg';
import img4 from '../../images/c4.jpg';
import img5 from '../../images/c5.jpg';
import img6 from '../../images/c6.jpg';
import img7 from '../../images/c7.jpg';
import img8 from '../../images/c8.jpg';
import img9 from '../../images/c9.jpg';
import img10 from '../../images/c10.jpg';
import img11 from '../../images/c11.jpg';
import img12 from '../../images/c12.jpg';
import img13 from '../../images/c13.jpg';
import img15 from '../../images/c15.jpg';
import Section from './Section';

class Gallery extends Component {
  static getInitialProps({ req }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  }

  state = { isMoving: false };

  render() {
    const images = [
      {
   
        imgPath:
        img1
      },
      {
        
        imgPath:
        img3
      },
      {
       
        imgPath:
        img4
      },
      {
       
        imgPath:
        img5
      },
      {
       
        imgPath:
        img6
      },
      {
        
        imgPath:
        img7
      },
      {
        
        imgPath:
        img8
      },
      {
        
        imgPath:
        img9
      },
      {
        
        imgPath:
        img10
      },
      {
       
        imgPath:
        img11
      },
      {
   
        imgPath:
        img12
      },
      {
        
        imgPath:
        img13
      },
     
      {
       
        imgPath:
        img15
      }
    ];

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };
   
    return (
      <Fragment>
        <Section>
            <Carousel
                ssr
                itemClass='image-item'
                responsive={responsive}
                deviceType={this.props.deviceType}
              >
                {images.slice(0, 14).map(image => {
              return (
                <Image
                key={image}
                  url={image.imgPath}
                />
              );
                 })}
              </Carousel>
        </Section>
      </Fragment>
    );
  }
}

export default Gallery;