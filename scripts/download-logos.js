const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadDir = path.join(__dirname, '../public/images/brands');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const logos = [
    { name: 'star-health.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Star_Health_and_Allied_Insurance_Logo.jpg' },
    { name: 'hdfc-ergo.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/HDFC_ERGO_Logo.jpg' },
    { name: 'icici-lombard.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/ICICI_Lombard_Logo.svg' },
    { name: 'tata-aig.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tata_AIG_Logo.png/800px-Tata_AIG_Logo.png' },
    { name: 'bajaj-allianz.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bajaj_Allianz_General_Insurance_Logo.jpg/800px-Bajaj_Allianz_General_Insurance_Logo.jpg' },
    { name: 'sbi-general.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/SBI_General_Insurance_Logo.png/640px-SBI_General_Insurance_Logo.png' },
    { name: 'medi-assist.jpg', url: 'https://upload.wikimedia.org/wikipedia/en/2/23/Medi_Assist_Logo.jpg' },
    { name: 'care-health.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Care_Health_Insurance_Logo.jpg' },
    { name: 'niiva-bupa.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Niva_Bupa_Logo.jpg/800px-Niva_Bupa_Logo.jpg' },
    { name: 'aditya-birla.png', url: 'https://1000logos.net/wp-content/uploads/2021/05/Aditya-Birla-Capital-Logo.png' },
];

const downloadFile = (url, filename) => {
    const file = fs.createWriteStream(path.join(downloadDir, filename));
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(path.join(downloadDir, filename));
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

console.log('Starting logo downloads...');
logos.forEach(logo => downloadFile(logo.url, logo.name));
