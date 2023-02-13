import styled from "styled-components";
import home_image from '../../assets/home_01.jpg'
import { devices } from "../../styles/Responsive";

export const ContainerHome = styled.section`
  padding-left: 100px;
  @media ${devices.tabletM} {
    padding-left: 0;
    padding-top: 100px;
  }
  
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
  top: 28%;
  right: 50px;
  margin-right: 20px;
  @media ${devices.tabletM} {
    max-width: 480px;
    top: 48%;
    right: 50px;
  }
  @media ${devices.tablet} {
    max-width: 70vw;
    top: 48%;
    right: 10px;
    margin-right: 10px;
  }
  h2 {
    text-align: end;
    padding-right: 20px;
    font-size: 8vw;
    font-family: 'Great Vibes', cursive;
    font-weight: bold;
    color: #80DFDF;
    background-image: -webkit-linear-gradient(45deg, #80DFDF 11%,#CAB4C7 56%,#F297B5 72%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    @media ${devices.tablet} {
      font-size: 3rem;
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media ${devices.tablet} {
      flex-direction: column;
    }
    button {
      margin: 25px 0 0 30px;
    }
  }
`