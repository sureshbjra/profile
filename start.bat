@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or not on PATH. Install it from https://nodejs.org and run this file again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing packages, this takes a minute or two...
  call npm install
  if errorlevel 1 (
    echo npm install failed. Copy the error above and send it to Claude.
    pause
    exit /b 1
  )
)
echo Starting the site. Keep this window open.
start "" http://localhost:3000
call npm run dev
pause
