const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/treatments.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Regex to match keys at the start of the object
// Matches: "key-name": {
const regex = /^\s+"[\w-]+":\s+\{/gm;
const matches = content.match(regex);

if (matches) {
    console.log(`Total Treatment Pages: ${matches.length}`);
    console.log('Sample keys:', matches.slice(0, 5));
} else {
    console.log('No treatments found');
}
