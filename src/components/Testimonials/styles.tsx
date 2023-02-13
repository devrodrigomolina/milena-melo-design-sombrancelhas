import styled from "styled-components";

export const ContainerTestimonials = styled.section`
  max-width: 75vw;
  margin: 0 auto;
  .title {
    padding-top: 150px;
    margin-bottom: 30px;
    display: flex;
  }
  .container-comments {
    width: 100%;
    height: 400px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card {
      max-width: 450px;
      height: 300px;
      padding: 10px;
      font-family: "Lato", sans-serif;
      margin-bottom: 20px;
      .client-info {
        display: flex;
        align-items: center;
        .client-name-work {
          margin-left: 10px;
          color: #202020;
          padding-top: 10px;
          font-size: 18px;
          font-weight: 400;
          text-align: left;
          .work {
            font-size: 15px;
          }
        }
      }
      img {
        width: 80px;
        height: 80px;
        border-radius: 50px;
      }
      .comment {
        padding-top: 20px;
        color: #5c656d;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.9em;
      }
    }
  }
`;
