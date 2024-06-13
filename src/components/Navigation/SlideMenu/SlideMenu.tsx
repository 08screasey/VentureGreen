import { MenuItem } from "./MenuItem/MenuItem";
import "./SlideMenu.css";

type SlideMenuProps = {
  handleClick: () => void;
  showMenu: boolean;
};

export const SlideMenu = (props: SlideMenuProps) => (
  <div className={props.showMenu ? "SlideMenu Show" : "SlideMenu"}>
    <MenuItem link="/" onClick={props.handleClick}>
      Home
    </MenuItem>
    <MenuItem link="/photography" onClick={props.handleClick}>
      Photography
    </MenuItem>
    <MenuItem link="/development" onClick={props.handleClick}>
      Development
    </MenuItem>
    <MenuItem link="/about-me" onClick={props.handleClick}>
      About Me
    </MenuItem>
    <MenuItem link="/contact" onClick={props.handleClick}>
      Contact
    </MenuItem>
  </div>
);
