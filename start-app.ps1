$backendDir = Join-Path $PSScriptRoot 'backend'
$frontendDir = Join-Path $PSScriptRoot 'frontend'

$backendVenv = Join-Path $backendDir 'venv'
$backendActivate = Join-Path $backendVenv 'Scripts\Activate.ps1'

if (-not (Test-Path $backendVenv)) {
    Write-Host 'Creating backend virtual environment...'
    python -m venv $backendVenv
}

& $backendActivate
Set-Location $backendDir
Start-Process powershell -ArgumentList '-NoExit','-Command',"Set-Location '$backendDir'; . '$backendActivate'; uvicorn main:app --host 127.0.0.1 --port 8000" | Out-Null

Set-Location $frontendDir
Start-Process powershell -ArgumentList '-NoExit','-Command',"Set-Location '$frontendDir'; npm run dev -- --host 127.0.0.1 --port 5173" | Out-Null

Write-Host 'Backend and frontend started.'
Write-Host 'Frontend: http://127.0.0.1:5173'
Write-Host 'Backend: http://127.0.0.1:8000'
