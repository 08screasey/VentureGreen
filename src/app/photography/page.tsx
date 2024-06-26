import { PhotoCard } from '../../Feature/Photography/PhotoCard/PhotoCard';
import { PhotoCollection } from '../../Feature/Photography/PhotoCollection/PhotoCollection';
import { PhotoGrid } from '../../Feature/Photography/PhotoGrid/PhotoGrid';
import { PHOTOGRAPHY_COLLECTIONS } from '../../Routes/Photography/albums';

export default function PhotoPage() {
    return <PhotoCollection albums={PHOTOGRAPHY_COLLECTIONS} parentSlug="/photography" />;
}
