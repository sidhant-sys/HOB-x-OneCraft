const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory containing your images
const imagesDir = './src/assets/images/story'; // Change this to your actual directory

function convertImages(dir) {
  fs.readdir(
    dir,
    { withFileTypes: true },
    (err, files) => {
      if (err) {
        console.error(
          'Error reading directory:',
          err
        );
        return;
      }

      files.forEach((file) => {
        const filePath = path.join(
          dir,
          file.name
        );

        if (file.isDirectory()) {
          // Recursively convert images in subdirectories
          convertImages(filePath);
        } else if (
          file.isFile() &&
          path
            .extname(file.name)
            .toLowerCase() === '.png'
        ) {
          const outputFilePath = path.join(
            dir,
            `${path.basename(
              file.name,
              '.png'
            )}.webp`
          );

          sharp(filePath)
            .webp({
              quality: 60,
              effort: 6,
              withMetadata: false,
              alphaQuality: 40
            })
            .toFile(
              outputFilePath,
              (err, info) => {
                if (err) {
                  console.error(
                    'Error converting file:',
                    err
                  );
                } else {
                  console.log(
                    `Converted ${filePath} to ${outputFilePath}`
                  );
                }
              }
            );
        }
      });
    }
  );
}

// Start the conversion process
convertImages(imagesDir);
