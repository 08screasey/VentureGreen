import { type ReactNode } from "react";
import "./Navbar.css";

type NavbarProps = {
  children: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => (
  <div className="Navbar">{children}</div>
);
