import React from 'react'
import { styled } from 'styled-components'



const Button = styled.button`
  padding: 5px 10px;
  margin-left: ${props=>props.marginleft? props.marginleft : props.theme.marginLeft};
  background-color: ${props=>props.bgcolor? props.bgcolor : props.theme.buttonBackgroundColor};
  color: white;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
`

// Button에 color 값을 기본으로 지정
Button.defaultProps = {
  theme: {
    buttonBackgroundColor: 'tomato',
    marginLeft: '0'
  },
}

export default function MyBtn({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}


