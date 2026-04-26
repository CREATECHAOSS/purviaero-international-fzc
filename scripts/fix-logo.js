const fs = require('fs');

function isDark(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // Calculate relative luminance or simply check threshold
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 80; // Dark colors will have low luma
}

function processSVG(inputPath, outputPath) {
  let content = fs.readFileSync(inputPath, 'utf8');
  
  // Remove the large #FEFEFE background path
  // The background path is typically the first large path with fill="#FEFEFE"
  content = content.replace(/<path d="M0 0 C660 0 1320 0 2000 0 C2000 439\.56 2000 879\.12 2000 1332 C1340 1332 680 1332 0 1332 C0 892\.44 0 452\.88 0 0 Z " fill="#FEFEFE" transform="translate\(0,0\)"\/>/gi, '');
  
  // Also remove it if formatted slightly differently
  content = content.replace(/<path[^>]*fill="#FEFEFE"[^>]*transform="translate\(0,\s*0\)"\/>/gi, '');
  // Specifically for icon
  content = content.replace(/<path[^>]*fill="#F6FEFF"[^>]*\/>/gi, '');

  content = content.replace(/fill="(#[0-9A-Fa-f]{6})"/gi, (match, p1) => {
    if (p1.toUpperCase() === '#FEFEFE' || p1.toUpperCase() === '#FFFFFF') {
      return match;
    }
    if (isDark(p1)) {
      return 'fill="#FFFFFF"';
    }
    return match; // Keeps blues and teals since they have higher luma (> 80)
  });

  fs.writeFileSync(outputPath, content);
  console.log('Processed', outputPath);
}

processSVG('public/new/Purvi International with Slogan.svg', 'public/logo-with-slogan-light.svg');
processSVG('public/new/iCON.svg', 'public/icon-light.svg');
