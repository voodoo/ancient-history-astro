import https from 'https';
import fs from 'fs';
import path from 'path';

const images = {
  'egypt.jpg': 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg',
  'greece.jpg': 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg',
  'rome.jpg': 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg',
  'mesopotamia.jpg': 'https://images.pexels.com/photos/5746242/pexels-photo-5746242.jpeg'
};

const downloadImage = (url, filename) => {
  const imagePath = path.join('public', 'images', filename);
  
  if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
  }

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

Object.entries(images).forEach(([filename, url]) => {
  downloadImage(url, filename);
});