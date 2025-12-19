# 📦 Vercel 部署指南

## 方法一：通过 Vercel 网站部署（推荐）

### 步骤 1: 准备 Git 仓库
```bash
# 在项目目录初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 无期迷途主题互动游戏"

# 推送到 GitHub/GitLab（需要先创建远程仓库）
git remote add origin <你的仓库地址>
git push -u origin main
```

### 步骤 2: 在 Vercel 部署
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub/GitLab 账号登录
3. 点击 "New Project"
4. 导入你的 Git 仓库
5. 配置项目：
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: 留空（静态网站无需构建）
   - **Output Directory**: `./`（或留空）
6. 点击 "Deploy"

### 步骤 3: 等待部署完成
- 部署通常在 1-2 分钟内完成
- Vercel 会自动分配一个域名，如：`your-project.vercel.app`

---

## 方法二：通过 Vercel CLI 部署

### 步骤 1: 安装 Vercel CLI
```bash
npm install -g vercel
```

### 步骤 2: 登录
```bash
vercel login
```

### 步骤 3: 部署
```bash
# 在项目目录执行
vercel

# 首次部署会询问一些问题：
# Set up and deploy? Y
# Which scope? 选择你的账号
# Link to existing project? N
# What's your project's name? 输入项目名
# In which directory is your code located? ./
```

### 步骤 4: 生产环境部署
```bash
vercel --prod
```

---

## 🔍 部署检查清单

### ✅ 文件检查
- [x] `vercel.json` - Vercel 配置文件
- [x] `.vercelignore` - 排除不需要的文件
- [x] `.gitignore` - Git 忽略文件
- [x] 所有 HTML 文件使用相对路径

### ✅ 资源检查
- [x] 图片文件：`Image_hezhao.jpeg`, `按钮图.png`, `枷锁图.jpg`
- [x] 音频文件：`彩蛋音频.mp3`
- [x] CSS 文件：`style.css`
- [x] JS 文件：`script.js`

### ✅ 页面检查
确保以下页面都能正常访问：
- [ ] `index.html` - 主页
- [ ] `wechat.html` - 微信界面
- [ ] `hospital.html` - 医院小程序
- [ ] `dingtalk.html` - 钉钉界面
- [ ] `oa.html` - OA 系统
- [ ] `computer.html` - 电脑文件管理器
- [ ] `browser.html` - 浏览器
- [ ] `qq_mail.html` - QQ 邮箱
- [ ] `forum.html` - 论坛
- [ ] `wiki.html` - 百科
- [ ] `article.html` - 文章
- [ ] `taobao_login.html` - 淘宝登录
- [ ] `taobao_order.html` - 淘宝订单
- [ ] `taobao_chat.html` - 淘宝客服
- [ ] `ending1.html` - 结局1
- [ ] `ending2.html` - 结局2

---

## 🎯 部署后测试

### 1. 基础功能测试
- [ ] 点击桌面图标能正常跳转
- [ ] 所有图片正常加载
- [ ] 音频能正常播放
- [ ] localStorage 功能正常（解锁隐藏文件夹）

### 2. 互动测试
- [ ] 阅读日记后能触发结局选择
- [ ] 结局选择能正常跳转
- [ ] 长按按钮交互正常
- [ ] 密码输入功能正常

### 3. 性能测试
- [ ] 页面加载速度 < 3秒
- [ ] 图片/音频资源加载正常
- [ ] 移动端适配正常

---

## 🔧 常见问题

### Q: 音频文件无法播放？
A: 检查浏览器自动播放政策，某些浏览器需要用户交互后才能播放音频。

### Q: localStorage 不工作？
A: 确保使用 HTTPS 访问（Vercel 默认提供），本地测试时也要用 `localhost` 或 `127.0.0.1`。

### Q: 页面 404？
A: 检查 `vercel.json` 的 rewrites 配置是否正确。

### Q: 图片显示不出来？
A: 确保文件名大小写与代码中引用一致（Linux 区分大小写）。

---

## 🌐 自定义域名（可选）

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录
4. 等待 DNS 生效（通常几分钟到几小时）

---

## 📝 更新部署

### 自动部署（推荐）
每次 push 到 Git 仓库，Vercel 会自动重新部署。

### 手动部署
```bash
vercel --prod
```

---

## 💡 优化建议

1. **图片优化**：压缩 `Image_hezhao.jpeg` 和 `按钮图.png` 以加快加载速度
2. **音频优化**：可以考虑压缩 `彩蛋音频.mp3` 文件大小
3. **CDN 加速**：Vercel 自动提供全球 CDN，无需额外配置
4. **缓存优化**：已在 `vercel.json` 中配置

---

## 🎮 项目信息

- **项目类型**: 纯静态网站（HTML/CSS/JS）
- **主题**: 无期迷途主题互动游戏
- **技术栈**: 原生 HTML5 + CSS3 + JavaScript
- **特色功能**: localStorage 存档、长按交互、多结局选择

---

祝部署顺利！🚀
