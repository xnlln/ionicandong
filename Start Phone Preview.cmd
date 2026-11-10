@echo off
cd /d "%~dp0lab-app"
curl.exe --silent --fail http://localhost:8100 >nul 2>&1
if errorlevel 1 start "Ionic App Server" /min cmd /c "npx ionic serve --port 8100 --no-open"
start "" "http://localhost:8200"
call npx ionic-lab http://localhost:8100 --project-type=angular --app-name="NEUST Gabaldon Campus"
pause
