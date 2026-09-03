$ErrorActionPreference = 'Stop'

$portfolioDirectory = Join-Path $PSScriptRoot 'portfolio-app'
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

if (-not (Test-Path (Join-Path $portfolioDirectory 'package.json'))) {
    throw "Portfolio app was not found at $portfolioDirectory"
}

Write-Host 'Building and deploying portfolio and showcase apps...' -ForegroundColor Cyan
& $npmPath --prefix $portfolioDirectory run deploy
exit $LASTEXITCODE
