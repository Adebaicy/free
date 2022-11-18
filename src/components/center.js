import React from 'react'
import {InnerContainer, Container, Outside}  from './center.style.js';
import JustifyContent from './card.js';

export default function center() {
  return (
    <Outside>
    <Container>Accurate and reliable real time historical market data API for
    hundreds of global currencies.</Container>
    <InnerContainer>



With over 180+ Countries, Street Rates Currency API is integrated with reputable

global sources guranteeing accurate and up to date data, providing you with a
currency API you can trust.
    </InnerContainer>
    <JustifyContent/>
    </Outside>
  )
}
