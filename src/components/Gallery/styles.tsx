import styled from "styled-components";


export const ContainerGallery = styled.section`
  width: 100%;
  max-width: 75vw;
  margin: 0 auto;
`

export const ContainerPhotos = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  width: 100%;
  margin-top: 70px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .card {
    cursor: pointer;
    position: relative;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }
    .overlay {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      background: red linear-gradient(130deg, rgba(116,243,239, 0.95) 0%, rgba(251,144,177, 0.95)) no-repeat center;
      z-index: 10;
      transition: opacity 500ms;
    }

    .title-overlay {
      color: white;
      text-align: center;
      padding: 20px;
      opacity: 0;
      font-size: 2rem;
    }
    
    .text-overlay {
      color: white;
      text-align: center;
      padding: 20px;
      opacity: 0;
      font-size: 1rem;
    }
    &:hover .overlay {
      opacity: 0.9;
      z-index: 10;
      .title-overlay, .text-overlay {
        opacity: 1;
      }
    }
    img {
      width: 100%;
    
    }
  }

`