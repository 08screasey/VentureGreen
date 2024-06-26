import { type Metadata } from 'next';

import { PhotoCollection } from '../../Feature/Photography/PhotoCollection/PhotoCollection';
import { PHOTOGRAPHY_COLLECTIONS } from '../../data/albums';

export const metadata: Metadata = {
    title: "Sam Creasey's Photography Portfolio",
};

export default function PhotoPage() {
    return <PhotoCollection albums={PHOTOGRAPHY_COLLECTIONS} parentSlug="/photography" />;
}
