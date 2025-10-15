#!/usr/bin/env node
/**
 * Batch resize source images into responsive variants using sharp.
 *
 * Usage:
 *   node scripts/generate-responsive-images.mjs --input images/hero --output images/hero/resized --widths 640,960,1280
 *
 * The script preserves WebP output by default while allowing fallbacks via the --format flag.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_WIDTHS = [640, 960, 1280];
const DEFAULT_FORMAT = 'webp';

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    input: null,
    output: null,
    widths: DEFAULT_WIDTHS,
    format: DEFAULT_FORMAT,
    quality: 80,
  };

  for (let i = 0; i < args.length; i += 1) {
    const [key, value] = args[i].split('=');
    switch (key) {
      case '--input':
        options.input = value || args[++i];
        break;
      case '--output':
        options.output = value || args[++i];
        break;
      case '--widths':
        options.widths = (value || args[++i]).split(',').map((w) => parseInt(w.trim(), 10)).filter(Boolean);
        break;
      case '--format':
        options.format = (value || args[++i]).toLowerCase();
        break;
      case '--quality':
        options.quality = parseInt(value || args[++i], 10);
        break;
      default:
        break;
    }
  }

  if (!options.input || !options.output) {
    console.error('Missing required --input and --output arguments.');
    process.exit(1);
  }

  return options;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function getImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(dir, entry.name))
    .filter((file) => /(jpe?g|png|webp)$/i.test(file));
}

async function resizeImage(inputFile, outputDir, widths, format, quality) {
  const basename = path.parse(inputFile).name;
  const image = sharp(inputFile);

  await Promise.all(widths.map(async (width) => {
    const outputFile = path.join(outputDir, `${basename}-${width}.${format}`);
    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      [format]({ quality })
      .toFile(outputFile);
  }));
}

async function main() {
  const { input, output, widths, format, quality } = parseArgs();
  const sourceDir = path.resolve(__dirname, '..', input);
  const targetDir = path.resolve(__dirname, '..', output);

  await ensureDir(targetDir);
  const files = await getImageFiles(sourceDir);

  if (!files.length) {
    console.warn(`No images found in ${sourceDir}`);
    return;
  }

  await Promise.all(files.map((file) => resizeImage(file, targetDir, widths, format, quality)));
  console.log(`Generated responsive variants for ${files.length} file(s) in ${targetDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
