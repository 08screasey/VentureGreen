import { Route, Routes } from 'react-router-dom';

import { GalleryLayout } from '../../Feature/Photography/GalleryLayout/GalleryLayout';
import { PhotoCard } from '../../Feature/Photography/PhotoCard/PhotoCard';
import { PhotoGrid } from '../../Feature/Photography/PhotoGrid/PhotoGrid';
import { useDocumentTitle } from '../../Utility/useDocumentTitle';

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

export const Photography = () => {
    useDocumentTitle("Sam Creasey's Photography Portfolio");

    return (
        <div className="tw-w-full tw-bg-[url('/backgrounds/berg.jpg')] tw-bg-cover tw-bg-fixed tw-bg-bottom tw-bg-no-repeat">
            <PhotoCollection albums={PHOTOGRAPHY_COLLECTIONS} />
        </div>
    );
};
