import fs from 'fs';
import path from 'path';

// Function to check if a file is an image
const isImage = (file) => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(ext);
};

// Function to convert a string with hyphens to camelCase
const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

// Function to recursively get image files from a directory
const getImages = (dir, folderName, images = []) => {
    const files = fs.readdirSync(dir);
    let counter = 1;

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            getImages(filePath, toCamelCase(path.basename(filePath)), images);
        } else if (isImage(file)) {
            images.push({
                importName: `${folderName}${counter}`,
                relativePath: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
            });
            counter++;
        }
    });

    return images;
};

// Main function to write import statements to a JavaScript file
const generateImportStatements = (targetDir) => {
    const images = getImages(targetDir, toCamelCase(path.basename(targetDir)));

    let importStatements = images.map((img) => `import ${img.importName} from '${img.relativePath}';`).join('\n');

    fs.writeFileSync('output.js', importStatements, 'utf8');
};

// Get the directory from the command line arguments
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node script.js <path>');
    process.exit(1);
}

const targetDir = args[0];
generateImportStatements(targetDir);
console.log('Import statements written to output.js');
