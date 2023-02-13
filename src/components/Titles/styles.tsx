import styled from "styled-components";
import img_icon_bg from "../../assets/icon_title_full-1.png";
interface TitlesTypes {
  position?: string
}

export const ContainerTitles = styled.div<TitlesTypes>`
    width: 100%;
    max-width: 75vw;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: ${(props) =>  props.position ? props.position : 'center'};
    margin: 0 auto;
    font-weight: bold;
    background-image: url(${img_icon_bg});
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    img {
      width: 100px;
      padding-top: 20px;
    }
  .quality {
    color: #fb90b1;
    margin-bottom: 25px;
  }
  .welcome {
    font-size: 2rem;
  }
`;
