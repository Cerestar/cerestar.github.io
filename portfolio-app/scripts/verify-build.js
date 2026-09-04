const fs = require('fs');
const path = require('path');

const buildDirectory = path.join(__dirname, '..', 'build');
const requiredFiles = ['index.html', 'portfolio.html'];
const missingFiles = requiredFiles.filter(
  (file) => !fs.existsSync(path.join(buildDirectory, file))
);

if (missingFiles.length > 0) {
  console.error(`Build is missing: ${missingFiles.join(', ')}`);
  process.exit(1);
}

console.log('Build contains the portfolio entry points.');