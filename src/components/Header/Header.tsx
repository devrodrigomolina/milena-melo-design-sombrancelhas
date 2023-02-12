import { useState } from "react";
import Socials from "../Socials/Socials";
import * as C from "./styles";

const Header = () => {
  const [menuChecked, setMenuChecked] = useState<boolean>(false);

  return (
    <C.ContainerMenu>
      <C.ContainerHeader menuChecked={menuChecked}>
        <C.ContainerMenuMobile menuChecked={menuChecked}>
          <input
            onChange={() => setMenuChecked(!menuChecked)}
            id="menu-toggle"
            type="checkbox"
            />
          <label className="menu__btn" htmlFor="menu-toggle">
            <span></span>
          </label>

          <p>MENU</p>
        </C.ContainerMenuMobile>
        <div className="text-and-sociais">
          <p className="text-menu-desc">SUAS SOBRANCELHAS PERFEITAS</p>
          <Socials />
        </div>
      </C.ContainerHeader>
      <C.MenuOpened menuChecked={menuChecked}>

      </C.MenuOpened>
      
    </C.ContainerMenu>
  );
};

export default Header;
