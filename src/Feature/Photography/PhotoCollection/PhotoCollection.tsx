import { Collection, type Album } from '../../../Routes/Photography/albums';
import { PhotoCard } from '../PhotoCard/PhotoCard';
import { PhotoGrid } from '../PhotoGrid/PhotoGrid';

export const PhotoCollection = ({
    albums,
    parentSlug,
}: {
    albums: Record<string, Album | Collection>;
    parentSlug: string;
}) => (
    <PhotoGrid>
        {Object.entries(albums).map(([albumSlug, collection]) => (
            <PhotoCard key={albumSlug} coverArt={collection.coverArt} link={`${parentSlug}/${albumSlug}`}>
                {collection.header}
            </PhotoCard>
        ))}
    </PhotoGrid>
);
