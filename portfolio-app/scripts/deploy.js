const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const portfolioDirectory = path.join(__dirname, '..');
const showcaseDirectory = path.join(portfolioDirectory, '..', 'showcase-app');
const showcaseBuildDirectory = path.join(showcaseDirectory, 'build');
const publishedShowcaseDirectory = path.join(portfolioDirectory, 'build', 'showcase');
const npmCli = path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js');

execFileSync(process.execPath, [npmCli, 'run', 'build'], { cwd: portfolioDirectory, stdio: 'inherit' });
execFileSync(process.execPath, [npmCli, 'run', 'build'], { cwd: showcaseDirectory, stdio: 'inherit' });

fs.rmSync(publishedShowcaseDirectory, { recursive: true, force: true });
fs.cpSync(showcaseBuildDirectory, publishedShowcaseDirectory, { recursive: true });

execFileSync(process.execPath, [path.join(__dirname, 'verify-build.js')], {
  cwd: portfolioDirectory,
  stdio: 'inherit',
});

const ghPagesScript = path.join(portfolioDirectory, 'node_modules', 'gh-pages', 'bin', 'gh-pages.js');
execFileSync(process.execPath, [ghPagesScript, '--branch', 'master', '--dist', 'build'], {
  cwd: portfolioDirectory,
  stdio: 'inherit',
});