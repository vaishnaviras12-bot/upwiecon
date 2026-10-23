const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

const logosDir = path.join(process.cwd(), 'src', 'assets', 'logos');

function processJpgToPng(filename, outFilename) {
  const p = path.join(logosDir, filename);
  if (!fs.existsSync(p)) return;
  const raw = fs.readFileSync(p);
  const img = jpeg.decode(raw, { useTolerant: true });
  const png = new PNG({ width: img.width, height: img.height });

  const bgR = img.data[0];
  const bgG = img.data[1];
  const bgB = img.data[2];

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const idx = (y * img.width + x) * 4;
      const r = img.data[idx];
      const g = img.data[idx + 1];
      const b = img.data[idx + 2];

      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;

      const distToBg = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));
      // Make background white transparent
      if (distToBg < 30 && r > 225 && g > 225 && b > 225) {
        png.data[idx + 3] = 0;
      } else {
        png.data[idx + 3] = 255;
      }
    }
  }

  const outputPath = path.join(logosDir, outFilename);
  fs.writeFileSync(outputPath, PNG.sync.write(png));
  console.log(`Saved transparent ${outFilename} (${img.width}x${img.height})`);
}

processJpgToPng('wie.jpg', 'wie.png');
processJpgToPng('ieee.jpg', 'ieee.png');
processJpgToPng('wit.jpg', 'wit.png');
