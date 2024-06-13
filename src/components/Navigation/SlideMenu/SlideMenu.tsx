import MenuItem from "./MenuItem/MenuItem";
import "./SlideMenu.css";

type SlideMenuProps = {
  handleClick: () => void;
  showMenu: boolean;
};

export const SlideMenu = (props: SlideMenuProps) => (
  <div className={props.showMenu ? "SlideMenu Show" : "SlideMenu"}>
    <MenuItem link="/" exact clicked={props.handleClick}>
      Home
    </MenuItem>
    <MenuItem link="/photography" clicked={props.handleClick}>
      Photography
    </MenuItem>
    <MenuItem link="/development" clicked={props.handleClick}>
      Development
    </MenuItem>
    <MenuItem link="/about-me" clicked={props.handleClick}>
      About Me
    </MenuItem>
    <MenuItem link="/contact" clicked={props.handleClick}>
      Contact
    </MenuItem>
  </div>
);
