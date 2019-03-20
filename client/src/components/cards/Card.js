import React from "react";
import styled from 'styled-components';
import './card.css';

import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const CardHeaderCustom = styled(CardHeader)`
  text-align: ${props => props.headerAlign || ''};
`;
const CardBodyCustom = styled(CardBody)`
  text-align: ${props => props.align || ''};
`;

class CardComponent extends React.Component {
  render() {
    return (
      <Card className={this.props.classNameProp}>
        <CardHeaderCustom headerAlign={this.props.headerAlign} className='card-header-style'>
          <h5>{this.props.header}</h5>
        </CardHeaderCustom>
        <CardBodyCustom align={this.props.align}>
          {this.props.children}
        </CardBodyCustom>
      </Card>
    )
  }
}

export default CardComponent;
