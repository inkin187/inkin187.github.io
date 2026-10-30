# AI 产品工程师 / AI Agent 工程师个人作品集

这是一个 React + Vite + Tailwind CSS 的静态个人作品集骨架。当前仅包含需求指定的五个模块和占位内容，未加入博客、弹窗、登录、主题切换或其他页面。

## 文件结构

```text
.
├─ index.html                 # HTML 入口与基础 SEO 信息
├─ package.json               # 依赖与启动、构建命令
├─ vite.config.js             # Vite、React、Tailwind 插件配置
├─ public/                    # 后续可放无需打包处理的本地图片、视频
└─ src/
   ├─ App.jsx                 # 严格按需求排列五个页面模块
   ├─ main.jsx                # React 应用入口
   ├─ components/
   │  ├─ Header.jsx           # 固定顶部导航与联系 CTA
   │  ├─ Hero.jsx             # 全屏 Hero、视频播放与失败兜底逻辑
   │  ├─ Projects.jsx         # 精选项目网格卡片
   │  ├─ Experience.jsx       # 个人经历、头像、成果数据、联系方式
   │  ├─ Strengths.jsx        # 能力优势卡片
   │  ├─ ContactFooter.jsx    # 全屏底部联系模块
   │  └─ SectionHeading.jsx   # 模块标题复用组件
   ├─ data/
   │  └─ siteContent.js       # 所有【待我替换】文案、图片、视频、链接的唯一入口
   └─ styles/
      └─ index.css            # Tailwind 入口、全局样式及静态背景细节
```

## 后续替换内容的位置

优先编辑 `src/data/siteContent.js`：

- `hero.videoUrl`：Hero 视频链接；留空或不可用时自动显示深色静态渐变背景。
- `projects`：项目标题、描述、标签和封面图片。
- `experience`：头像、个人简介、成果数据和基本联系信息。
- `strengths`：能力标签和说明。
- `contact`：邮箱、社交链接和底部联系文案。

所有默认资源均为占位链接，并在代码中以 `【待我替换】` 或 `[待我替换]` 标注。

## 启动

请先安装 Node.js LTS 版本。然后在本项目根目录执行：

```bash
npm install
npm run dev
```

终端会输出本地预览地址，通常为 `http://localhost:5173`。

## 构建生产版本

```bash
npm run build
npm run preview
```

构建结果会输出到 `dist/` 目录，可部署到任意静态网站托管平台。
