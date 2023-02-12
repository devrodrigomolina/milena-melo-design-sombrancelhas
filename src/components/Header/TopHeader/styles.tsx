import styled from "styled-components";
import { devices } from "../../../styles/Responsive";

export const ContainerTopHeader = styled.div`
  width: calc(100% - 100px) ;
  height: 120px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 110px;
  top: 0;
  right: 0;
  z-index: 9;
  @media ${devices.tabletM} {
    display: none;
  }
  .logo {
    width: 200px;
    height: 100%;
    object-fit: contain;
  }
  .adress {
    display: flex;
    align-items: center;
    p {
      font-family: Lato;
      font-weight: 400;
      font-size: 1.05rem;
      line-height: 1.9rem;
      color: #5c656d;
    }
    .phone {
      color: #95DBE0;
      font-weight: bold;
      font-size: 1.8rem;
      margin-left: 50px;
    }
  }
  
`