import styled from 'styled-components'

export const BannerWrapper = styled.section`
  position: relative;
`

export const BannerBackground = styled.div`
  width: 100%;
  position: relative;
  
  img {
    opacity: 0.9;
    width: 100%;
  }

  div {
    background-color: black;
    opacity: 0.6;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
  }

`;