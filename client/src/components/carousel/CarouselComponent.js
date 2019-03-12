/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkArray: []
    };
  }

  componentDidMount = () => {
    this.setState({
      linkArray: this.props.array
    });
  }

  render() {
    let arrayHtml = this.state.linkArray.map( (link,i) => <img src={link} alt={`picture${i+1}`}/>)
    return (
      <Carousel autoPlay showIndicators={false} infiniteLoop={true}>
        {arrayHtml}
      </Carousel>
    )
  }
}

export default CarouselComponent;