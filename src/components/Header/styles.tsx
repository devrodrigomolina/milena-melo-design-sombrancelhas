import styled from "styled-components";
import { devices } from "../../styles/Responsive";

interface menuTypes {
  menuChecked: boolean
}
export const ContainerMenu = styled.aside`

display: flex;
`
export const ContainerHeader = styled.header<menuTypes>`
  width: 100px;
  background-color: white;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
  @media ${devices.tabletM} {
    width: 100%;
    background-color: white;
    height: 100px;
  }
  .text-and-sociais {
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text-menu-desc {
      transform: rotate(-90deg);
      display: block;
      white-space: nowrap;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
      line-height: 12px;
      letter-spacing: 2px;
    @media ${devices.tabletM} {
      display: none;
    }
  }
  }
`


export const MenuOpened = styled.aside<menuTypes>`
  transition: all 1s;
  width: ${props => !props.menuChecked ? '0' : '100%'};
  height: 100vh;
  background-color: rgba(255,255,255, 0.9);;
  position: fixed;
   z-index: 10;
  backdrop-filter: blur(2px);
`

export const ContainerMenuMobile = styled.div<menuTypes>`
  position: fixed;
  top: 40px;
  left: 35px;
  @media ${devices.tabletM} {
    top: 10px;
    left: 35px;
  }
  p {
    font-size: 10px;
    font-weight: bold;
    margin-top: 10px;
  }
  #menu-toggle {
  opacity: 0;
}

#menu-toggle:${props => !props.menuChecked && 'checked'} ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu-toggle${props => !props.menuChecked && 'checked'} ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu-toggle${props => !props.menuChecked && 'checked'} ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}

.menu__btn {
  display: flex;
  align-items: center;

  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
`