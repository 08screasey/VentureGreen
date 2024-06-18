export const isMatchingSlug = (urlSlug: string, pathname: string) => {
    // Ensure both urlSlug and pathname start with a '/'
    if (!urlSlug.startsWith('/')) {
        urlSlug = '/' + urlSlug;
    }
    if (!pathname.startsWith('/')) {
        pathname = '/' + pathname;
    }

    // Special case for the root slug
    if (urlSlug === '/') {
        return pathname === '/';
    }

    // Split the urlSlug and pathname into parts
    const slugParts = urlSlug.split('/');
    const pathParts = pathname.split('/');

    // Check if the first part of the slug matches the corresponding part in the pathname
    if (slugParts[1] !== pathParts[1]) {
        return false;
    }

    return true;
};
