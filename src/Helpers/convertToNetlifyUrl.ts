export const convertUrlToNetlifyUrl = (url: string, width?: number) => {
    if (process.env.NODE_ENV === 'production') {
        let netlifyUrl = `/.netlify/images?url=${encodeURIComponent(url)}&fm=webp`;

        if (width) {
            netlifyUrl += `&width=${width}`;
        }

        return netlifyUrl;
    } else {
        return url;
    }
};
