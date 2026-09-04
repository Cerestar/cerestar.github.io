const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const portfolioDirectory = path.join(__dirname, '..');
const npmCli = path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js');

execFileSync(process.execPath, [npmCli, 'run', 'build'], { cwd: portfolioDirectory, stdio: 'inherit' });

execFileSync(process.execPath, [path.join(__dirname, 'verify-build.js')], {
  cwd: portfolioDirectory,
  stdio: 'inherit',
});

const ghPagesScript = path.join(portfolioDirectory, 'node_modules', 'gh-pages', 'bin', 'gh-pages.js');
execFileSync(process.execPath, [ghPagesScript, '--branch', 'master', '--dist', 'build'], {
  cwd: portfolioDirectory,
  stdio: 'inherit',
});