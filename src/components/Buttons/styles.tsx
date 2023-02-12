import styled from "styled-components";

export const Buttons = styled.button`
  padding: 15px 60px;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 25px;
  cursor: pointer;
  background-color: #f78da7;
  transition: all .3s;
  &:hover {
    background-color: transparent;
    border: 1px solid #f78da7;
    color: black;
  }
`