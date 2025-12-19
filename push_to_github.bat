@echo off
chcp 65001 >nul
echo ========================================
echo   准备推送到 GitHub 仓库: yangxiaoyu
echo ========================================
echo.

REM 检查是否已经初始化 Git
if not exist .git (
    echo [1/5] 初始化 Git 仓库...
    git init
    echo ✓ Git 仓库初始化完成
) else (
    echo [1/5] Git 仓库已存在，跳过初始化
)

echo.
echo [2/5] 添加所有文件到暂存区...
git add .
echo ✓ 文件添加完成

echo.
echo [3/5] 创建提交...
git commit -m "feat: 无期迷途主题互动解谜游戏 - 初始版本"
echo ✓ 提交创建完成

echo.
echo [4/5] 设置主分支为 main...
git branch -M main

echo.
echo ========================================
echo   请输入你的 GitHub 仓库地址
echo ========================================
echo.
echo 格式示例：
echo   - HTTPS: https://github.com/你的用户名/yangxiaoyu.git
echo   - SSH:   git@github.com:你的用户名/yangxiaoyu.git
echo.
set /p REPO_URL="请粘贴仓库地址: "

echo.
echo [5/5] 添加远程仓库并推送...
git remote add origin %REPO_URL%
git push -u origin main

echo.
echo ========================================
echo   ✓ 代码已成功推送到 GitHub!
echo ========================================
echo.
echo 下一步：
echo 1. 访问 https://vercel.com
echo 2. 点击 "New Project"
echo 3. 导入 yangxiaoyu 仓库
echo 4. 点击 "Deploy"
echo.
pause
