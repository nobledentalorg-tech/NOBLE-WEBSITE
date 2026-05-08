const sharp = require('sharp');
const fs = require('fs');

async function generateIcons() {
  try {
    // Read the logo
    const img = sharp('public/logo.png');
    const metadata = await img.metadata();
    
    const maxDim = Math.max(metadata.width, metadata.height);
    
    const squareImg = img.resize({
      width: maxDim,
      height: maxDim,
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 } // transparent
    });
    
    await squareImg.clone().resize(512, 512).png().toFile('app/icon.png');
    await squareImg.clone().resize(180, 180).png().toFile('app/apple-icon.png');
    
    // Delete the empty favicon.ico
    if (fs.existsSync('public/favicon.ico')) {
      fs.unlinkSync('public/favicon.ico');
    }
    
    console.log('Icons generated successfully.');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
