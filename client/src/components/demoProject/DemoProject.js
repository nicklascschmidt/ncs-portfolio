import React, { Component } from 'react';
import CarouselComponent from '../carousel/CarouselComponent';
import { projectArray } from '../../pages/projects/projectArray';

class DemoProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h5 className='mb-3'>Demo Video Coming Soon!</h5>
        <CarouselComponent array={projectArray[0].imgSrcArray} />
      </div>
    )
  }
}

export default DemoProjectComponent;
