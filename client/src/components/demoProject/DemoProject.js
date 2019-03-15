import React, { Component } from 'react';
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { desktopLinksArray, mobileLinksArray } from '../featuredProject/featuredProjectLinks';
import CarouselComponent from '../carousel/CarouselComponent';

class DemoProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCarouselDesktop: true,
    };
  }

  switchToDesktop = () => {
    this.setState({ isCarouselDesktop: true });
  }
  switchToMobile = () => {
    this.setState({ isCarouselDesktop: false });
  }

  render() {
    return (
      <div>
        <div>
          <h4>Movie Master</h4>
          <span>
            <FaDesktop size='2em' onClick={this.switchToDesktop}/>
            <FaMobileAlt size='2em' onClick={this.switchToMobile}/>
          </span>
        </div>
        <CarouselComponent array={this.state.isCarouselDesktop ? desktopLinksArray : mobileLinksArray} />
      </div>
    )
  }
}

export default DemoProjectComponent;
