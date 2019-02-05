import React from "react";
import styled from 'styled-components';


const IconATag = styled.a`
  display: inline-block;
  margin: ${props => props.margin || '10px'};
`;

class IconATagComponent extends React.Component {  
  render() {
    return (
      <IconATag href={this.props.hrefLink} margin={this.props.margin} target='_blank' rel="noopener noreferrer">
        {this.props.children}
      </IconATag>
    );
  }
}

export default IconATagComponent;


