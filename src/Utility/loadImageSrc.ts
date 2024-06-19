export const loadImageSrc = (src: string) =>
    new Promise<void>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => reject();
        image.src = src;
        if (image.complete) {
            resolve();
        }
    });
