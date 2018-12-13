import styled from 'styled-components';

const Button = styled.button`

  color: ${props => props.color || 'white'};
  background-color: ${props => props.backgroundColor || '#E8ECEF'};
`;

export default Button;

