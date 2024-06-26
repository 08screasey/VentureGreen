import { PhotoCollection } from '../../Feature/Photography/PhotoCollection/PhotoCollection';
import { PHOTOGRAPHY_COLLECTIONS } from '../../data/albums';

export default function PhotoPage() {
    return <PhotoCollection albums={PHOTOGRAPHY_COLLECTIONS} parentSlug="/photography" />;
}
