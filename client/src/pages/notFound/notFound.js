import React from 'react';
import { Container } from 'reactstrap';

class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <h2 className='text-center mt-3'>Sorry, this page doesn't exist.</h2>
      </Container>
    )
  }
}

export default NotFound;