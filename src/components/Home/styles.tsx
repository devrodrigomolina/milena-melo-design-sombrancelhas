import styled from "styled-components";
import home_image from '../../assets/home_01.jpg'

export const ContainerHome = styled.section`
  padding-left: 100px;

`
export const ImageBG = styled.section`
  height: 100vh;
  background-image: url(${home_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const TextInfos = styled.div`
  max-width: 780px;
  position: absolute;
  top: 30%;
  right: 50px;
  h2 {
    text-align: end;
    padding-right: 20px;
    font-size: 10rem;
    font-family: 'Great Vibes', cursive;
    font-weight: bold;
    color: #80DFDF;
    background-image: -webkit-linear-gradient(45deg, #80DFDF 11%,#CAB4C7 56%,#F297B5 72%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
`