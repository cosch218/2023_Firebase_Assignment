import React from 'react'
import { styled } from 'styled-components'

const Button = styled.button`
  padding: 5px 10px;
  margin-left: ${props=>props.marginL? props.marginL : "0"};
  background-color: ${props=>props.bgcolor? props.bgcolor : "tomato"};
  color: white;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
`

export default function MyBtn({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}
