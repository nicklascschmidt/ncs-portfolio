import React from "react";
import { FaCode, FaHome, FaRegHeart, FaUser } from "react-icons/fa";

class AboutMeComponent extends React.Component {
  render() {
    return (
      <div>
        <p>
          <FaUser size='1.5em' className='my-2 mr-3 float-left align-middle'/>
          <span className='clearfix align-middle'><em><strong>I’m a full-stack developer seeking opportunities in the Bay Area.</strong></em></span>
        </p>
        <p>
          <FaCode size='1.5em' className='my-3 mr-3 float-left align-middle'/>
          <span className='clearfix align-middle'>As a software developer, I love building and improving web apps, solving puzzles, and learning new concepts.</span>
        </p>
        <p>
          <FaHome size='1.5em' className='my-3 mr-3 float-left align-middle'/>
          <span className='clearfix align-middle'>When I'm not coding, I like playing guitar (poorly), playing tennis (pretty well), and walking leisurely outdoors (i.e. hiking).</span>
        </p>
        <p>
          <FaRegHeart size='1.5em' className='my-3 mr-3 float-left align-middle'/>
          <span className='clearfix align-middle'>At heart, I'm a builder and a problem solver with a passion for learning and growing.</span>
        </p>
      </div>
    );
  }
}

export default AboutMeComponent;
