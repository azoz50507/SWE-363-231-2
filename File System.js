const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

function filterAndCopyFiles(sourceDir, targetDir, fileExtensions) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(async (file) => {
      const ext = path.extname(file);
      if (fileExtensions.includes(ext)) {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);
        try {
          await copyFile(sourcePath, targetPath);
          console.log(`Copied: ${file}`);
        } catch (copyErr) {
          console.error(`Error copying ${file}:`, copyErr);
        }
      }
    });
  });
}

// Example usage
const sourceDirectory = '/path/to/source';
const targetDirectory = '/path/to/target';
const allowedExtensions = ['.txt', '.jpg'];

filterAndCopyFiles(sourceDirectory, targetDirectory, allowedExtensions);
