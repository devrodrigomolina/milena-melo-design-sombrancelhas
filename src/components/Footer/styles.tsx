import styled from "styled-components";
import bg_home from "../../assets/bg_home_02.jpg";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 400px;
  background-image: url(${bg_home});
  background-position: bottom !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  .logo-footer {
    width: 15%;
    margin-left: 200px;
    border: 1px solid red;
    img {
      width: 250px;
      margin-top: 50px;
    }
    p {
      padding-top: 20px;
      color: #5c656d;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.6em;
    }
  }
`