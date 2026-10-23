const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

const logosDir = path.join(process.cwd(), 'src', 'assets', 'logos');
const p = path.join(logosDir, 'wie.jpg');
const raw = fs.readFileSync(p);
const img = jpeg.decode(raw, { useTolerant: true });

console.log('wie.jpg width:', img.width, 'height:', img.height);

let minX = img.width, maxX = 0, minY = img.height, maxY = 0;

for (let y = 0; y < img.height; y++) {
  for (let x = 0; x < img.width; x++) {
    const idx = (y * img.width + x) * 4;
    const r = img.data[idx];
    const g = img.data[idx+1];
    const b = img.data[idx+2];
    
    if (r < 245 || g < 245 || b < 245) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log('Non-white content bounding box:', { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 });

// Create clean PNG where pure white outer background is transparent
const png = new PNG({ width: img.width, height: img.height });

// Find background color from corner pixels
const bgR = img.data[0];
const bgG = img.data[1];
const bgB = img.data[2];

console.log('Corner background color:', { bgR, bgG, bgB });

for (let y = 0; y < img.height; y++) {
  for (let x = 0; x < img.width; x++) {
    const idx = (y * img.width + x) * 4;
    const r = img.data[idx];
    const g = img.data[idx + 1];
    const b = img.data[idx + 2];
    
    png.data[idx] = r;
    png.data[idx + 1] = g;
    png.data[idx + 2] = b;
    
    // Check if pixel is close to white corner background
    const distToBg = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));
    if (distToBg < 20 && (r > 230 && g > 230 && b > 230)) {
      png.data[idx + 3] = 0; // transparent
    } else {
      png.data[idx + 3] = 255;
    }
  }
}

const outputPath = path.join(logosDir, 'wie.png');
fs.writeFileSync(outputPath, PNG.sync.write(png));
console.log('Saved transparent wie.png at', outputPath);
