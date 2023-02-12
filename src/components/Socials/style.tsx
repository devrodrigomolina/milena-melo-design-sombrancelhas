import styled from "styled-components";

export const ContainerSociais = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
  .icon {
    font-size: 1.3rem;
    color: #c3c6ce;
    transition: all .6s;
    cursor: pointer;
    &:hover {
      color:#fb90b1;;
    }

  }
`