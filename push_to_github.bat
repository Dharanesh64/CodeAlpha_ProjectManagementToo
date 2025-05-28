@echo off
REM Change the repo URL below with your actual GitHub repo URL
set REPO=https://github.com/Dharanesh64/CodeAlpha_ProjectManagementToo.git

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin %REPO%
git push -u origin main

pause
