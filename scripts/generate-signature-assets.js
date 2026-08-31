const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateSignatureAssets() {
  console.log('Starting signature image assets generation...');
  
  // Ensure public and public/assets directories exist
  const publicDir = path.join(__dirname, '..', 'public');
  const assetsDir = path.join(publicDir, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Read SVG files
  const iconSvgContent = fs.readFileSync(path.join(publicDir, 'iCON.svg'), 'utf8');
  const iconLightSvgContent = fs.readFileSync(path.join(publicDir, 'icon-light.svg'), 'utf8');
  
  // Full logo with slogan - remove white background path for transparency
  let fullLogoSvgContent = fs.readFileSync(path.join(publicDir, 'Purvi International with Slogan.svg'), 'utf8');
  fullLogoSvgContent = fullLogoSvgContent.replace(/<path d="M0 0 C660 0 1320 0 2000 0 C2000 439\.56 2000 879\.12 2000 1332 C1340 1332 680 1332 0 1332 C0 892\.44 0 452\.88 0 0 Z " fill="#FEFEFE" transform="translate\(0,0\)"\/>/gi, '');
  fullLogoSvgContent = fullLogoSvgContent.replace(/<path[^>]*fill="#FEFEFE"[^>]*transform="translate\(0,\s*0\)"\/>/gi, '');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Render helper
    const renderSvgToPng = async (svgHtml, width, height, scale, outputPaths) => {
      await page.setViewport({
        width: width,
        height: height,
        deviceScaleFactor: scale
      });

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body {
              width: 100%;
              height: 100%;
              background: transparent !important;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
            }
            svg {
              width: 100%;
              height: 100%;
              display: block;
            }
          </style>
        </head>
        <body>
          ${svgHtml}
        </body>
        </html>
      `;

      await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 10000 });
      await new Promise(r => setTimeout(r, 200));

      const buffer = await page.screenshot({
        type: 'png',
        omitBackground: true
      });

      for (const outPath of outputPaths) {
        fs.writeFileSync(outPath, buffer);
        const stats = fs.statSync(outPath);
        console.log(`Generated: ${path.relative(path.join(__dirname, '..'), outPath)} (${(stats.size / 1024).toFixed(2)} KB, ${width * scale}x${height * scale}px)`);
      }
    };

    console.log('\n--- 1. Primary Signature Icon (250x250 @ 2x = 500x500 retina) ---');
    await renderSvgToPng(
      iconSvgContent,
      250,
      250,
      2,
      [
        path.join(assetsDir, 'logo-signature.png'),
        path.join(publicDir, 'logo-signature.png'),
        path.join(assetsDir, 'purvi-aero-icon.png'),
        path.join(publicDir, 'purvi-aero-icon.png')
      ]
    );

    console.log('\n--- 2. Exact 200x200px Signature Icon ---');
    await renderSvgToPng(
      iconSvgContent,
      200,
      200,
      1,
      [
        path.join(assetsDir, 'logo-signature-200.png'),
        path.join(publicDir, 'logo-signature-200.png')
      ]
    );

    console.log('\n--- 3. White / Light Icon (for dark email templates) ---');
    await renderSvgToPng(
      iconLightSvgContent,
      250,
      250,
      2,
      [
        path.join(assetsDir, 'logo-signature-white.png'),
        path.join(publicDir, 'logo-signature-white.png')
      ]
    );

    console.log('\n--- 4. Full Horizontal Logo with Slogan ---');
    await renderSvgToPng(
      fullLogoSvgContent,
      600,
      400,
      2,
      [
        path.join(assetsDir, 'logo-full-signature.png'),
        path.join(publicDir, 'logo-full-signature.png'),
        path.join(assetsDir, 'purvi-aero-logo.png'),
        path.join(publicDir, 'purvi-aero-logo.png')
      ]
    );

    console.log('\nAll signature assets generated successfully!');
  } finally {
    await browser.close();
  }
}

generateSignatureAssets().catch(err => {
  console.error('Error generating signature assets:', err);
  process.exit(1);
});
