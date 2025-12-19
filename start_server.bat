@echo off
echo ======================================
echo   正在启动 MBCC 操作系统...
echo ======================================
echo.
echo 本地服务器地址: http://localhost:8000
echo 按 Ctrl+C 停止服务器
echo.

REM 使用 Python 启动简单 HTTP 服务器
python -m http.server 8000

pause
