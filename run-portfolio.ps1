$ErrorActionPreference = 'Stop'

$appDirectory = Join-Path $PSScriptRoot 'portfolio-app'
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
    throw "Portfolio app was not found at $appDirectory"
}

Write-Host 'Starting portfolio app at http://localhost:3000/' -ForegroundColor Cyan
& $npmPath --prefix $appDirectory start
exit $LASTEXITCODE
