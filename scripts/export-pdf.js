const puppeteer = require('puppeteer');

async function exportBrochure() {
  console.log('Initiating Purvi Aero Brochure PDF Export...');
  let browser;
  try {
    // Launch headless Chromium
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set A4 Landscape aspect ratio viewport for screen rendering checks
    await page.setViewport({
      width: 1123, // ~297mm in pixels at 96 DPI
      height: 794,  // ~210mm in pixels at 96 DPI
      deviceScaleFactor: 2 // High resolution rendering
    });

    console.log('Navigating to http://localhost:3000/brochure...');
    
    // Navigate to the local brochure page
    // We wait until there are no more than 2 network connections for at least 500ms
    await page.goto('http://localhost:3000/brochure', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    console.log('Waiting for layout elements to render...');
    await page.waitForSelector('main', { timeout: 10000 });

    // Allow an extra 2.5 seconds for font families (Outfit, Rajdhani) and SVGs to fully paint
    await new Promise(resolve => setTimeout(resolve, 2500));

    console.log('Generating A4 Landscape PDF with exact color mapping...');
    const pdfPath = 'public/purviaero-brochure.pdf';
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true, // Crucial for background colors and SVG rendering
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    console.log(`Brochure PDF successfully generated at: ${pdfPath}`);
  } catch (error) {
    console.error('Failed to export brochure PDF:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

exportBrochure();
