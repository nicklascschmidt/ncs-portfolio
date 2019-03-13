import React from "react";
import styled from 'styled-components';

import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const CardCustom = styled(Card)`
  margin: ${props => props.margin || '0 0 10px 0'};
  width: ${props => props.width || ''};
`;

const CardBodyCustom = styled(CardBody)`
  color: #3F2113;
  text-align: ${props => props.align || ''};
`;

class CardComponent extends React.Component {
  render() {
    return (
      <CardCustom margin={this.props.margin} width={this.props.width}>
        <CardHeader className='card-header-style'>
          <h5>{this.props.header}</h5>
        </CardHeader>
        <CardBodyCustom align={this.props.align}>
          {this.props.children}
        </CardBodyCustom>
      </CardCustom>
    )
  }
}

export default CardComponent;
