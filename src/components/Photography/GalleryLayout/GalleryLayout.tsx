import { PropsWithChildren, useEffect } from "react";
import "./GalleryLayout.css";

type GalleryLayoutProps = PropsWithChildren<{
  images: string[];
  onClick: (index: number) => void;
  header?: string;
}>;

export const GalleryLayout = ({
  children,
  header,
  images,
  onClick,
}: GalleryLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Gallery">
      <h2 className="F-Bodini">{header}</h2>
      <p className="F-OldStandard">{children}</p>
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={image.toString()}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};
