$ErrorActionPreference = 'Stop'

$showcaseDirectory = Join-Path $PSScriptRoot 'showcase-app'
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

if (-not (Test-Path (Join-Path $showcaseDirectory 'package.json'))) {
    throw "Showcase app was not found at $showcaseDirectory"
}

Write-Host 'Building and deploying showcase...' -ForegroundColor Cyan
& $npmPath --prefix $showcaseDirectory run deploy
exit $LASTEXITCODE
