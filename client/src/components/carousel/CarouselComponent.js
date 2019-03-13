/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imgStyle = {
  height:'100%',
};

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkArray: props.array
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({ linkArray: props.array });
  }

  render() {
    // For carousels with different sized images
    // this.state.linkArray.map( (link,i) => <div key={`carouselImage${i}`} className='carousel-item-style' style={{backgroundImage:`url(${link})`}}></div>);
  
    return (
      <Carousel autoPlay showIndicators={false} infiniteLoop={true} showThumbs={false}>
        {this.state.linkArray.map( (link,i) => <img key={`carouselImage${i}`} src={link} alt={`picture${i+1}`} style={imgStyle}/>)}
      </Carousel>
    )
  }
}

export default CarouselComponent;