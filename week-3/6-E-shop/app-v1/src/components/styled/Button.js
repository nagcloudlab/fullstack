
import React from 'react';

import styled from 'styled-components'



const Button = styled.a`

  display: inline-block;
  border-radius: 3px; 
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
  * edit this to target it specifically! */
 ${props => props.primary?`
   background: white;
   color: black;
 `:''}

`

export default Button;