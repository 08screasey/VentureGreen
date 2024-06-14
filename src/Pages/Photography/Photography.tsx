import { Route, Routes } from 'react-router-dom';

import { GalleryLayout } from '../../Component/Photography/GalleryLayout/GalleryLayout';
import { PhotoCard } from '../../Component/Photography/PhotoCard/PhotoCard';
import { PhotoGrid } from '../../Component/Photography/PhotoGrid/PhotoGrid';

import './Photography.css';
import { PHOTOGRAPHY_COLLECTIONS } from './albums';

const PhotoCollection = ({ albums }: { albums: typeof PHOTOGRAPHY_COLLECTIONS }) => (
    <Routes>
        {albums.map((collection) => {
            const path = collection.header.toLowerCase();

            if ('albums' in collection) {
                return <Route key={path} path={path + '*'} element={<PhotoCollection albums={collection.albums} />} />;
            } else {
                return <Route key={path} path={path} element={<GalleryLayout album={collection} />} />;
            }
        })}
        <Route
            index
            element={
                <PhotoGrid>
                    {albums.map((album) => {
                        const path = album.header.toLowerCase();

                        return (
                            <PhotoCard key={path} coverArt={album.coverArt} link={path}>
                                {album.header}
                            </PhotoCard>
                        );
                    })}
                </PhotoGrid>
            }
        />
    </Routes>
);

export const Photography = () => (
    <div className="Photography">
        <PhotoCollection albums={PHOTOGRAPHY_COLLECTIONS} />
    </div>
);
