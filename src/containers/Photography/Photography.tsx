import { useState, useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Animals } from "../../components/Photography/Gallery/Animals/Animals";
import { Asia } from "../../components/Photography/Gallery/Asia/Asia";
import { Canada } from "../../components/Photography/Gallery/Canada/Canada";
import { CatMotors } from "../../components/Photography/Gallery/CatMotors/CatMotors";
import { Climate } from "../../components/Photography/Gallery/Climate/Climate";
import { Europe } from "../../components/Photography/Gallery/Europe/Europe";
import { Gemma } from "../../components/Photography/Gallery/Gemma/Gemma";
import { Luna } from "../../components/Photography/Gallery/Luna/Luna";
import { Oceania } from "../../components/Photography/Gallery/Oceania/Oceania";
import { Portrait } from "../../components/Photography/Gallery/Portrait/Portrait";
import { Sprout } from "../../components/Photography/Gallery/Sprout/Sprout";
import { GalleryView } from "../../components/Photography/GalleryView/GalleryView";
import { PhotoCard } from "../../components/Photography/PhotoCard/PhotoCard";
import { PhotoGrid } from "../../components/Photography/PhotoGrid/PhotoGrid";

import "./Photography.css";

export type ImageGalleryProps = {
  onImageClick: (imageIndex: number, collection: string[]) => void;
};

export const Photography = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [galleryView, setGalleryView] = useState(false);
  const [collection, setCollection] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const onCardSelect = (card: string) => {
    navigate(pathname + "/" + card);
  };

  const openGallery = (index: number, col: string[]) => {
    console.log(index);
    setCollection(col);
    setGalleryView(true);
  };
  const closeGallery = () => {
    setGalleryView(false);
    setCollection([]);
    setIndex(0);
  };

  const moveGallery = (num: number) => {
    const newIndex = (index + num + collection.length) % collection.length;
    setIndex(newIndex);
  };

  return (
    <div className="Photography">
      {galleryView ? (
        <GalleryView
          imageSrc={collection[index]}
          onNext={() => moveGallery(+1)}
          onPrev={() => moveGallery(-1)}
          onExit={closeGallery}
        />
      ) : null}
      <Routes>
        <Route
          path="/photography/Travel/Asia"
          element={
            <LazyLoadComponent>
              <Asia
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Travel/Canada"
          element={
            <LazyLoadComponent>
              <Canada
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Travel/Oceania"
          element={
            <LazyLoadComponent>
              <Oceania
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Travel/Europe"
          element={
            <LazyLoadComponent>
              <Europe
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Client/Cat-Motors"
          element={
            <LazyLoadComponent>
              <CatMotors
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Client/Sprout"
          element={
            <LazyLoadComponent>
              <Sprout
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Client/Luna"
          element={
            <LazyLoadComponent>
              <Luna
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Client/Climate"
          element={
            <LazyLoadComponent>
              <Climate
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Client/Gemma"
          element={
            <LazyLoadComponent>
              <Gemma
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Animal"
          element={
            <LazyLoadComponent>
              <Animals
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Portrait"
          element={
            <LazyLoadComponent>
              <Portrait
                onImageClick={(image, collection) =>
                  openGallery(image, collection)
                }
              />
            </LazyLoadComponent>
          }
        />
        <Route
          path="/photography/Travel"
          element={
            <PhotoGrid>
              <PhotoCard card="Asia" onClick={onCardSelect}>
                Asia
              </PhotoCard>
              <PhotoCard card="Canada" onClick={onCardSelect}>
                Canada
              </PhotoCard>
              <PhotoCard card="Oceania" onClick={onCardSelect}>
                Oceania
              </PhotoCard>
              <PhotoCard card="Europe" onClick={onCardSelect}>
                Europe
              </PhotoCard>
            </PhotoGrid>
          }
        />
        <Route
          path="/photography/Client"
          element={
            <PhotoGrid>
              <PhotoCard card="Cat-Motors" onClick={onCardSelect}>
                Cat Motors
              </PhotoCard>
              <PhotoCard card="Sprout" onClick={onCardSelect}>
                Sprout Plant Based Eatery
              </PhotoCard>
              <PhotoCard card="Luna" onClick={onCardSelect}>
                Luna & The Moon
              </PhotoCard>
              <PhotoCard card="Climate" onClick={onCardSelect}>
                Strike For Climate 2019
              </PhotoCard>
              <PhotoCard card="Gemma" onClick={onCardSelect}>
                Gemma: Aerial
              </PhotoCard>
            </PhotoGrid>
          }
        />
        <Route
          path="/photography"
          element={
            <PhotoGrid>
              <PhotoCard card="Travel" onClick={onCardSelect}>
                Travel
              </PhotoCard>
              <PhotoCard card="Animal" onClick={onCardSelect}>
                Animal
              </PhotoCard>
              <PhotoCard card="Portrait" onClick={onCardSelect}>
                Portrait
              </PhotoCard>
              <PhotoCard card="Client" onClick={onCardSelect}>
                Client
              </PhotoCard>
            </PhotoGrid>
          }
        />
      </Routes>
    </div>
  );
};
