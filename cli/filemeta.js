import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import sharp from 'sharp';

// Function to read directory recursively and gather image metadata
async function readImages(directoryPath) {
    let imageMetadata = [];

    try {
        const files = fs.readdirSync(directoryPath);

        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // If it's a directory, recursively call readImages
                const subdirectoryMetadata = await readImages(filePath);
                imageMetadata = imageMetadata.concat(subdirectoryMetadata);
            } else if (isImageFile(file)) {
                // If it's an image file, read metadata and add to array
                const metadata = await getImageMetadata(filePath);
                if (metadata) imageMetadata.push(metadata);
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }

    return imageMetadata;
}

// Function to check if a file is an image based on extension
function isImageFile(filename) {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'];
    const ext = path.extname(filename).toLowerCase();
    return imageExtensions.includes(ext);
}

// Function to get metadata (filename, width, height) of an image
async function getImageMetadata(filePath) {
    try {
        const { width, height } = await sharp(filePath).metadata();
        return {
            src: filePath.replace('public', ''),
            width,
            height,
            alt: '',
        };
    } catch (err) {
        console.error('Error getting image metadata:', err);
        return null;
    }
}

// Main function to run the script
async function main() {
    const folderPath = process.argv[2]; // Read folder pathname from CLI argument

    if (!folderPath) {
        console.error('Please provide a folder pathname.');
        process.exit(1);
    }

    try {
        const metadata = await readImages(folderPath);

        console.log(JSON.stringify(metadata, null, 2));
    } catch (err) {
        console.error('Error reading images:', err);
        process.exit(1);
    }
}

// Ensure __dirname and __filename work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run the main function
main();
