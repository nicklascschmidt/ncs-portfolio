import React from "react";
import styled from 'styled-components';


const IconATag = styled.a`
  display: inline-block;
  margin: 10px;
`;

class IconATagComponent extends React.Component {
  render() {
    return (
      <IconATag href={this.props.hrefLink} target='_blank' rel="noopener noreferrer">
        {this.props.children}
      </IconATag>
    );
  }
}

export default IconATagComponent;


