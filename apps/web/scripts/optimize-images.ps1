Add-Type -AssemblyName System.Drawing

function Optimize-ImgFile([string]$filePath, [int]$maxWidth, [int]$maxHeight) {
    if (-not (Test-Path $filePath)) { return }
    $orig = [System.Drawing.Image]::FromFile($filePath)
    $w = $orig.Width
    $h = $orig.Height

    $ratioW = [double]$maxWidth / [double]$w
    $ratioH = [double]$maxHeight / [double]$h
    $ratio = [Math]::Min(1.0, [Math]::Min($ratioW, $ratioH))

    $newW = [int]($w * $ratio)
    $newH = [int]($h * $ratio)

    if ($ratio -ge 1.0) {
        $orig.Dispose()
        Write-Host "Skipped (already within bounds): $filePath"
        return
    }

    $bmp = New-Object System.Drawing.Bitmap $newW, $newH
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    $gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gfx.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gfx.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $gfx.DrawImage($orig, 0, 0, $newW, $newH)
    $orig.Dispose()
    $gfx.Dispose()

    $tempPath = $filePath + '.tmp.png'
    $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()

    Remove-Item $filePath -Force
    Rename-Item $tempPath $filePath
    $newSize = (Get-Item $filePath).Length
    $kb = [Math]::Round($newSize / 1024, 1)
    Write-Host "Optimized: $filePath -> $kb KB ($w x $h to $newW x $newH)"
}

Optimize-ImgFile "d:\codes\resume-portfolio\apps\web\public\profile\cover.png" 1920 1080
Optimize-ImgFile "d:\codes\resume-portfolio\apps\web\public\profile\profile.png" 800 800
Optimize-ImgFile "d:\codes\resume-portfolio\apps\web\public\education\divine.png" 400 400
Optimize-ImgFile "d:\codes\resume-portfolio\apps\web\public\work\cb.png" 400 400
Optimize-ImgFile "d:\codes\resume-portfolio\apps\web\public\education\gcek.png" 400 400
Optimize-ImgFile "d:\codes\resume-portfolio\apps\web\public\logo.png" 256 256
