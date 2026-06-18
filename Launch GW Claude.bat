@echo off
title GW Claude
rem Double-click launcher: opens Claude Code inside this coursework folder.
rem %~dp0 = the folder this .bat lives in, so it works wherever the repo is.
cd /d "%~dp0"
echo Starting Claude Code in your coursework folder...
echo.
claude --chrome
if errorlevel 1 (
  echo.
  echo Could not start Claude Code automatically.
  echo Make sure Claude Code is installed, then open a terminal in this folder and run:
  echo     claude --chrome
  echo.
  pause
)
