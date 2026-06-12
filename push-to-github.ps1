# Script para conectar ao repositório remoto e publicar
# Execute com: PowerShell -ExecutionPolicy Bypass .\push-to-github.ps1

$remoteUrl = "https://github.com/humberlandiob-maker/RaspAutoma-o2.git"

Write-Host "Conectando ao repositório remoto..." -ForegroundColor Cyan
git remote add origin $remoteUrl 2>$null

Write-Host "Sincronizando com o GitHub..." -ForegroundColor Cyan
git pull origin main --allow-unrelated-histories -X theirs

Write-Host "Enviando código para o GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "Publicação concluída!" -ForegroundColor Green
