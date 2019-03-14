import React from "react";
import styled from 'styled-components';
import { Col } from 'reactstrap';

const ColCustom = styled(Col)`
  margin: ${props => props.margin || ''};
  width: ${props => props.width || ''};
`;

class ColComponent extends React.Component {
  render() {
    return (
      <ColCustom xs='12' sm='12' md={this.props.md} lg={this.props.lg} xl={this.props.xl} margin={this.props.margin} width={this.props.width}>
        {this.props.children}
      </ColCustom>
    )
  }
}

export default ColComponent;
