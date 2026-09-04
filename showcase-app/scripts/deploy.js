const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFileSync } = require('child_process');

const appDirectory = path.join(__dirname, '..');
const repositoryDirectory = path.join(appDirectory, '..');
const npmCli = path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js');

execFileSync(process.execPath, [npmCli, 'run', 'build'], {
  cwd: appDirectory,
  stdio: 'inherit',
});

const repositoryUrl = execFileSync('git', ['remote', 'get-url', 'origin'], {
  cwd: repositoryDirectory,
  encoding: 'utf8',
}).trim();
const publishDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'showcase-gh-pages-'));

try {
  execFileSync('git', [
    'clone',
    '--branch',
    'master',
    '--single-branch',
    '--depth',
    '1',
    repositoryUrl,
    publishDirectory,
  ], { stdio: 'inherit' });

  const showcaseDirectory = path.join(publishDirectory, 'showcase');
  fs.rmSync(showcaseDirectory, { recursive: true, force: true });
  fs.cpSync(path.join(appDirectory, 'build'), showcaseDirectory, { recursive: true });

  execFileSync('git', ['add', '--all'], { cwd: publishDirectory, stdio: 'inherit' });
  let hasChanges = true;
  try {
    execFileSync('git', ['diff', '--cached', '--quiet'], { cwd: publishDirectory });
    hasChanges = false;
  } catch (error) {
    if (error.status !== 1) {
      throw error;
    }
  }

  if (!hasChanges) {
    console.log('Showcase build is already deployed.');
  } else {
    execFileSync('git', ['commit', '-m', 'Deploy showcase app'], {
      cwd: publishDirectory,
      stdio: 'inherit',
    });
    execFileSync('git', ['push', 'origin', 'master'], {
      cwd: publishDirectory,
      stdio: 'inherit',
    });
  }
} finally {
  fs.rmSync(publishDirectory, { recursive: true, force: true });
}