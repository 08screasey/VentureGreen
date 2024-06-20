export const convertUrlToNetlifyUrl = (url: string, width?: number, format: 'webp' | 'blurhash' = 'webp') => {
    if (process.env.NODE_ENV === 'production') {
        let netlifyUrl = `/.netlify/images?url=${encodeURIComponent(url)}&fm=${format}`;

        if (width) {
            netlifyUrl += `&w=${width * Math.ceil(window.devicePixelRatio)}`;
        }

        return netlifyUrl;
    } else {
        return url;
    }
};
