import get from 'lodash-es/get';

import { GalleryLayout } from '../../../Feature/Photography/GalleryLayout/GalleryLayout';
import { PhotoCollection } from '../../../Feature/Photography/PhotoCollection/PhotoCollection';
import { Album, Collection, PHOTOGRAPHY_COLLECTIONS } from '../../../data/albums';

export const generateStaticParams = () => {
    const items: { slug: string[] }[] = [];

    const addToItems = (albumOrCollection: Collection | Album, slugParts: string[]) => {
        if ('albums' in albumOrCollection) {
            const collection = albumOrCollection;
            items.push({ slug: slugParts });

            Object.entries(collection.albums).forEach(([albumSlugPart, album]) =>
                addToItems(album, [...slugParts, albumSlugPart]),
            );
        } else {
            items.push({ slug: slugParts });
        }
    };

    Object.entries(PHOTOGRAPHY_COLLECTIONS).forEach(([collectionSlug, collection]) =>
        addToItems(collection, [collectionSlug]),
    );

    return items;
};

export default function PhotographyPage({ params }: { params: { slug: string[] } }) {
    const slugParts = params.slug;

    let item = get(PHOTOGRAPHY_COLLECTIONS, slugParts.join('.albums.'));

    if ('albums' in item) {
        return <PhotoCollection albums={item.albums} parentSlug={`/photography/${slugParts.join('/')}`} />;
    }
    return <GalleryLayout album={item} />;
}
