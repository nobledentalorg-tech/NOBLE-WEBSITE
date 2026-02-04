
try {
    const pdfParse = require('pdf-parse/node');
    console.log('Successfully loaded pdf-parse/node');
    console.log('Keys:', Object.keys(pdfParse));
    // Test if it has the PDFParse class or a parse function
    if (typeof pdfParse.PDFParse === 'function') {
        const parser = new pdfParse.PDFParse();
        console.log('Parser created via PDFParse class');
    } else if (typeof pdfParse.pdf === 'function') {
        console.log('pdfParse.pdf is a function');
    }
} catch (e) {
    console.error('Failed to load pdf-parse/node:', e.message);
}
