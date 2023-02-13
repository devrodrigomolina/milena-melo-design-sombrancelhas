import styled from "styled-components";
import img_icon_bg from "../../assets/icon_title_full-1.png";
import img_work from "../../assets/img_bg.jpg";
import bg_home from "../../assets/bg_home_02.jpg";

export const ContainerAbout = styled.section`
  margin-top: 100px;
  width: 100%;
  min-height: 180vh;
  background-image: url(${bg_home});
  background-position: bottom !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
`;

export const InfosAbout = styled.section`
  font-family: "Lato", sans-serif;
  .about {
    font-size: 1.3rem;
    line-height: 38px;
    text-align: center;
    max-width: 75vw;
    margin: 50px auto;
    font-weight: 500;
    color: #000000b7;

    p {
      margin-bottom: 50px;
    }
    .image {
      margin-top: 100px;
      width: 100%;
      height: 600px;
      background-image: url(${img_work});
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
    }
    .container-cards {
      display: flex;
      flex-direction: column;
      .cards {
        width: 100%;
        min-height: 330px;
        padding-top: 80px;
        text-align: start;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        .img {
          width: 200px;
        }
        .card {
          display: flex;
          width: 380px;
          .title-card {
            font-weight: 600;
          }
          .text-card {
            font-size: 1rem;
            opacity: 0.9;
          }
        }
      }
    }
  }
`;
