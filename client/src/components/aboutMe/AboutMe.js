import React from "react";
import { FaCode, FaHome, FaRegHeart, FaUser } from "react-icons/fa";
import { Table } from 'reactstrap';

// style inline bc styled components not overriding style for th || tr

class AboutMeComponent extends React.Component {
  render() {
    return (
      <Table borderless className='mb-0'>
        <thead>
          <tr>
            <th style={{verticalAlign:'middle'}}><FaUser size='1.5em'/></th>
            <th><em>I’m a full-stack developer seeking opportunities in the Bay Area.</em></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{verticalAlign:'middle'}}><FaCode size='1.5em'/></td>
            <td>As a software developer, I love building and improving web apps, solving puzzles, and learning new concepts.</td>
          </tr>
          <tr>
            <td style={{verticalAlign:'middle'}}><FaHome size='1.5em'/></td>
            <td>When I'm not coding, I like playing guitar (poorly), playing tennis (pretty well), and walking leisurely outdoors (i.e. hiking).</td>
          </tr>
          <tr>
            <td style={{verticalAlign:'middle'}}><FaRegHeart size='1.5em'/></td>
            <td>At heart, I'm a builder and a problem solver with a passion for learning and growing.</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default AboutMeComponent;
