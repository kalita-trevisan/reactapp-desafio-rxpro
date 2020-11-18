import React from 'react';

import { Container } from './styles'

function Button({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}

export default Button;