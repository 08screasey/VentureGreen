import { type PropsWithChildren } from "react";
import "./PhotoGrid.css";

export const PhotoGrid = ({ children }: PropsWithChildren) => (
  <div className="PhotoGrid">{children}</div>
);
