# 🚀 yangxiaoyu 仓库部署指南

## 📍 当前状态
- ✅ GitHub 仓库已创建：`yangxiaoyu`
- ✅ 项目文件已准备
- ⏳ 待推送代码到 GitHub
- ⏳ 待部署到 Vercel

---

## 🎯 快速部署（3步完成）

### 步骤 1：推送代码到 GitHub

#### 方法A：使用自动化脚本（推荐）

直接双击运行：
```
push_to_github.bat
```

然后按提示输入你的 GitHub 仓库地址。

#### 方法B：手动执行命令

打开终端（PowerShell 或 CMD），执行：

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 创建初始提交
git commit -m "feat: 无期迷途主题互动解谜游戏 - 初始版本"

# 4. 设置主分支
git branch -M main

# 5. 添加远程仓库（替换为你的仓库地址）
# HTTPS 方式（推荐）：
git remote add origin https://github.com/你的用户名/yangxiaoyu.git

# 或 SSH 方式：
# git remote add origin git@github.com:你的用户名/yangxiaoyu.git

# 6. 推送到 GitHub
git push -u origin main
```

**注意**：如果是第一次使用 Git，可能需要先配置：
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

### 步骤 2：在 Vercel 部署

#### ✨ 超简单！只需 3 次点击：

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project" 或 "Add New..."
   - 在项目列表中找到 `yangxiaoyu`
   - 点击 "Import"

3. **部署项目**
   - **Framework Preset**: 选择 "Other"
   - **Root Directory**: 保持默认 `./`
   - **Build Command**: 留空（静态网站无需构建）
   - **Output Directory**: 留空
   - 点击 **"Deploy"** 按钮

🎉 **完成！** 等待 1-2 分钟，你的游戏就上线了！

---

### 步骤 3：获取网站链接

部署完成后，Vercel 会显示：
- ✅ 部署成功页面
- 🌐 你的网站地址：`https://yangxiaoyu.vercel.app`
- 📊 访问统计（可选）

点击链接访问你的游戏！

---

## 🔧 可能遇到的问题

### Q1: Git 推送时要求输入用户名密码
**A**: 建议使用 Personal Access Token

1. 访问 GitHub → Settings → Developer settings
2. Personal access tokens → Generate new token
3. 勾选 `repo` 权限
4. 复制生成的 token
5. 推送时，密码处输入这个 token

### Q2: 推送失败：`remote: Repository not found`
**A**: 检查仓库地址是否正确

```bash
# 查看当前远程仓库
git remote -v

# 如果地址错误，删除并重新添加
git remote remove origin
git remote add origin <正确的地址>
git push -u origin main
```

### Q3: Vercel 部署后 404
**A**: 检查：
- `vercel.json` 文件是否存在
- `index.html` 文件是否在根目录
- 在 Vercel 控制台查看部署日志

### Q4: 图片或音频无法加载
**A**: 确认：
- 文件名大小写与代码中一致
- 使用相对路径（而非绝对路径 `/`）
- 文件已经推送到 GitHub

---

## 📊 部署后检查清单

访问你的网站后，测试以下功能：

### 页面加载
- [ ] 主页正常显示
- [ ] 桌面图标可见
- [ ] 右上角便签显示
- [ ] 底部任务栏和时钟

### 基础交互
- [ ] 点击 WeChat 图标能跳转
- [ ] 点击钉钉能跳转
- [ ] 点击 OA 能跳转
- [ ] 点击此电脑能跳转

### 关键功能
- [ ] 微信搜索"医院"能跳转
- [ ] 医院小程序病历显示正常
- [ ] OA 系统密码输入功能正常
- [ ] 电脑文件管理器能打开文件

### 结局触发
- [ ] 能找到并输入密码打开「个人备份」
- [ ] 阅读完所有日记后弹出选择
- [ ] 点击选项能跳转到结局页面
- [ ] 结局页面音频彩蛋可以播放

### 移动端
- [ ] 手机浏览器访问正常
- [ ] 触摸交互可用
- [ ] 布局适配合理

---

## 🎨 后续优化（可选）

### 1. 自定义域名
在 Vercel 项目设置中：
- Settings → Domains
- 添加你的域名（如 `game.example.com`）
- 按提示配置 DNS

### 2. 性能优化
- 压缩图片文件（使用 TinyPNG）
- 压缩音频文件（如果太大）
- 启用浏览器缓存（已在 `vercel.json` 配置）

### 3. 添加分析
在 Vercel 项目中启用：
- Analytics（访问统计）
- Speed Insights（性能监控）

### 4. 持续更新
每次修改代码后：
```bash
git add .
git commit -m "描述你的修改"
git push
```
Vercel 会自动重新部署！

---

## 📱 分享你的游戏

部署成功后，你可以：
- 📤 分享链接给朋友试玩
- 🎮 在社交媒体发布
- 📝 写一篇开发日志
- 🌟 在 GitHub README 中添加预览链接

---

## 💡 下一步建议

1. **添加 favicon**
   - 创建一个 16x16 或 32x32 的图标
   - 保存为 `favicon.ico`
   - 在 `index.html` 中添加：
     ```html
     <link rel="icon" href="favicon.ico">
     ```

2. **SEO 优化**
   在主要页面添加 meta 标签：
   ```html
   <meta name="description" content="无期迷途主题互动解谜游戏">
   <meta name="keywords" content="无期迷途,互动游戏,解谜">
   ```

3. **添加加载动画**
   在页面加载时显示 loading 效果

4. **收集反馈**
   - 观察玩家游玩流程
   - 收集改进建议
   - 迭代优化体验

---

## 🎉 恭喜！

你的游戏马上就要上线了！

**预计网站地址**：`https://yangxiaoyu.vercel.app`

现在就执行 `push_to_github.bat`，开始部署吧！🚀

---

*有问题随时查看 DEPLOY.md 或寻求帮助*
