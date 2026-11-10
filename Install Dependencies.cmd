@echo off
title Installing Dependencies - Ionic Lab App
cd /d "%~dp0lab-app"
echo ===================================================
echo  Installing Dependencies in lab-app...
echo ===================================================
echo.
echo Attempting clean install (npm ci)...
call npm ci
if %errorlevel% neq 0 (
    echo.
    echo npm ci encountered an issue. Falling back to: npm install --legacy-peer-deps
    echo.
    call npm install --legacy-peer-deps
)
echo.
if %errorlevel% equ 0 (
    echo ===================================================
    echo  Setup completed successfully!
    echo  You can now run "Start Phone Preview.cmd"
    echo ===================================================
) else (
    echo ===================================================
    echo  Installation failed. Please verify Node.js is installed.
    echo ===================================================
)
pause

