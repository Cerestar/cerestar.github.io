param(
    [string]$SourceDirectory = (Join-Path $PSScriptRoot '..\public\images\showcase_gallery'),
    [string]$OutputDirectory = (Join-Path $PSScriptRoot '..\public\images\showcase_gallery_resized'),
    [int]$MaxLongSide = 3000
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path $SourceDirectory)) {
    throw "Source directory was not found: $SourceDirectory"
}

if ($MaxLongSide -lt 1) {
    throw 'MaxLongSide must be greater than zero.'
}

New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
Add-Type -AssemblyName System.Drawing

Get-ChildItem $SourceDirectory -File | Where-Object { $_.Extension -match '^\.(png|jpg|jpeg)$' } | ForEach-Object {
    $sourceImage = [System.Drawing.Image]::FromFile($_.FullName)
    try {
        $longSide = [Math]::Max($sourceImage.Width, $sourceImage.Height)
        if ($longSide -gt $MaxLongSide) {
            $scale = [double]$MaxLongSide / [double]$longSide
        } else {
            $scale = 1.0
        }
        $width = [int][Math]::Max(1, [Math]::Round($sourceImage.Width * $scale))
        $height = [int][Math]::Max(1, [Math]::Round($sourceImage.Height * $scale))
        $thumbnail = New-Object System.Drawing.Bitmap -ArgumentList $width, $height
        $graphics = [System.Drawing.Graphics]::FromImage($thumbnail)
        try {
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.DrawImage($sourceImage, 0, 0, $width, $height)
            $outputPath = Join-Path $OutputDirectory $_.Name
            $thumbnail.Save($outputPath, $sourceImage.RawFormat)
            Write-Host "$($_.Name): $($sourceImage.Width)x$($sourceImage.Height) -> ${width}x${height}"
        } finally {
            $graphics.Dispose()
            $thumbnail.Dispose()
        }
    } finally {
        $sourceImage.Dispose()
    }
}

Write-Host "Resized images written to $OutputDirectory"