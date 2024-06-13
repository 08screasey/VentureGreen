import { useState, useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Animals } from '../../Components/Photography/Gallery/Animals/Animals';
import { Asia } from '../../Components/Photography/Gallery/Asia/Asia';
import { Canada } from '../../Components/Photography/Gallery/Canada/Canada';
import { CatMotors } from '../../Components/Photography/Gallery/CatMotors/CatMotors';
import { Climate } from '../../Components/Photography/Gallery/Climate/Climate';
import { Europe } from '../../Components/Photography/Gallery/Europe/Europe';
import { Gemma } from '../../Components/Photography/Gallery/Gemma/Gemma';
import { Luna } from '../../Components/Photography/Gallery/Luna/Luna';
import { Oceania } from '../../Components/Photography/Gallery/Oceania/Oceania';
import { Portrait } from '../../Components/Photography/Gallery/Portrait/Portrait';
import { Sprout } from '../../Components/Photography/Gallery/Sprout/Sprout';
import { GalleryView } from '../../Components/Photography/GalleryView/GalleryView';
import { PhotoCard } from '../../Components/Photography/PhotoCard/PhotoCard';
import { PhotoGrid } from '../../Components/Photography/PhotoGrid/PhotoGrid';

import './Photography.css';

export type ImageGalleryProps = {
    onImageClick: (index: number, collection: string[]) => void;
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
        navigate(pathname + '/' + card);
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
                    path="Travel/Asia"
                    element={
                        <LazyLoadComponent>
                            <Asia onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Travel/Canada"
                    element={
                        <LazyLoadComponent>
                            <Canada onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Travel/Oceania"
                    element={
                        <LazyLoadComponent>
                            <Oceania onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Travel/Europe"
                    element={
                        <LazyLoadComponent>
                            <Europe onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Client/Cat-Motors"
                    element={
                        <LazyLoadComponent>
                            <CatMotors onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Client/Sprout"
                    element={
                        <LazyLoadComponent>
                            <Sprout onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Client/Luna"
                    element={
                        <LazyLoadComponent>
                            <Luna onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Client/Climate"
                    element={
                        <LazyLoadComponent>
                            <Climate onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Client/Gemma"
                    element={
                        <LazyLoadComponent>
                            <Gemma onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Animal"
                    element={
                        <LazyLoadComponent>
                            <Animals onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Portrait"
                    element={
                        <LazyLoadComponent>
                            <Portrait onImageClick={(image, collection) => openGallery(image, collection)} />
                        </LazyLoadComponent>
                    }
                />
                <Route
                    path="Travel"
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
                    path="Client"
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
                    path="*"
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
