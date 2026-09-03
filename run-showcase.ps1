$ErrorActionPreference = 'Stop'

$appDirectory = Join-Path $PSScriptRoot 'showcase-app'
$npmCommand = Get-Command npm.cmd -ErrorAction SilentlyContinue

if ($null -eq $npmCommand) {
    $fallbackNpm = 'C:\Program Files\nodejs\npm.cmd'
    if (Test-Path $fallbackNpm) {
        $npmPath = $fallbackNpm
    } else {
        throw 'Node.js/npm was not found. Install Node.js or add it to PATH.'
    }
} else {
    $npmPath = $npmCommand.Source
}

if (-not (Test-Path (Join-Path $appDirectory 'package.json'))) {
    throw "Showcase app was not found at $appDirectory"
}

$env:PORT = '3001'
Write-Host 'Starting showcase app at http://localhost:3001/' -ForegroundColor Cyan
& $npmPath --prefix $appDirectory start
exit $LASTEXITCODE
