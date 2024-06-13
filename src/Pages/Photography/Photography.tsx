import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { PhotoCard } from '../../Components/Photography/PhotoCard/PhotoCard';
import { PhotoGrid } from '../../Components/Photography/PhotoGrid/PhotoGrid';

import './Photography.css';
import {
    ANIMAL_ALBUM,
    ASIA_ALBUM,
    CANADA_ALBUM,
    CAT_MOTORS_ALBUM,
    CLIMATE_GALLERY,
    EUROPE_ALBUM,
    GEMMA_ALBUM,
    LUNA_GALLERY,
    OCEANIA_ALBUM,
    PORTRAIT_ALBUM,
    SPROUT_ALBUM,
} from './albums';
import { GalleryLayout } from '../../Components/Photography/GalleryLayout/GalleryLayout';

export type ImageGalleryProps = {
    onImageClick: (index: number, collection: string[]) => void;
};

export const Photography = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onCardSelect = (card: string) => {
        navigate(pathname + '/' + card);
    };

    return (
        <div className="Photography">
            <Routes>
                <Route path="Travel/Asia" element={<GalleryLayout album={ASIA_ALBUM} />} />
                <Route path="Travel/Canada" element={<GalleryLayout album={CANADA_ALBUM} />} />
                <Route path="Travel/Oceania" element={<GalleryLayout album={OCEANIA_ALBUM} />} />
                <Route path="Travel/Europe" element={<GalleryLayout album={EUROPE_ALBUM} />} />
                <Route path="Client/Cat-Motors" element={<GalleryLayout album={CAT_MOTORS_ALBUM} />} />
                <Route path="Client/Sprout" element={<GalleryLayout album={SPROUT_ALBUM} />} />
                <Route path="Client/Luna" element={<GalleryLayout album={LUNA_GALLERY} />} />
                <Route path="Client/Climate" element={<GalleryLayout album={CLIMATE_GALLERY} />} />
                <Route path="Client/Gemma" element={<GalleryLayout album={GEMMA_ALBUM} />} />
                <Route path="Animal" element={<GalleryLayout album={ANIMAL_ALBUM} />} />
                <Route path="Portrait" element={<GalleryLayout album={PORTRAIT_ALBUM} />} />
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
