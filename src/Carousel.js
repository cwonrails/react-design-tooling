import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  overflow: hidden;

  @media print {
    overflow: visible;
  }
`

const Inner = styled.div`
  display: flex;
  width: ${props => props.length * 100}vw;
  transform: translateX(${props => props.index * -100}vw);
  transition-property: transform;
  transition-duration: .2s;
  transition-timing-function: ease-out;

  @media print {
    width: 100%;
    display: block;
    transform: none;
  }
`

const Carousel = props => (
  <Root>
    <Inner {...props} />
  </Root>
)

export default Carousel
