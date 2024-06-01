const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../e4kkepek');
const outputPath = path.join(__dirname, '../e4kkepek.html');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

    const galleryHtml = images.map(image => `<img src="e4kkepek/${image}" alt="${image}">`).join('\n');

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f2f2f2;
            margin: 0;
            padding: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>My Photo Gallery</h1>
    <div id="gallery">
        ${galleryHtml}
    </div>
</body>
</html>`;

    fs.writeFile(outputPath, htmlContent, (err) => {
        if (err) {
            return console.log('Error writing file: ' + err);
        }
        console.log('Gallery page created successfully!');
    });
});
