Campus Market Seed

《校园轻集市》AI 辅助前端工程实践课程种子仓库

⸻

项目简介

Campus Market Seed 是《校园轻集市》课程的统一种子仓库（Seed Repository）。

本仓库不仅提供 Vue 3 前端项目模板，还包含课程文档、开发规范、AI 协作规范、过程性证据模板以及自动检测框架，为整个实训提供统一的开发基础。

本仓库是所有同学开展项目实践的起点。基于该模板，我完成了为期7天的校园二手集市完整前端开发，实现全部业务功能并留存完整开发过程材料。

⸻

项目目标

通过本课程，你将完成一个基于 Vue 3 的校园轻集市前端项目，并体验真实的软件工程开发流程。

课程重点包括：

Vue 3 工程化开发
Git 版本管理
AI Coding 协作开发
软件工程规范
过程性证据管理
项目验收与自动检测

### 本人完成实现功能
1. 用户模块：注册登录、Pinia+localStorage状态持久化、路由登录权限拦截
2. 商品模块：多分类商品列表、搜索、闲置发布、个人中心我的发布
3. 收藏模块：商品收藏/取消收藏、个人中心我的收藏页面
4. 交互优化：发布防重复提交、路由别名适配、全局Loading/Error兜底组件
5. 数据服务：json-server搭建Mock接口，完成数据增查交互

⸻

快速开始

首次使用本仓库，请按照以下顺序阅读文档：

README.md │ ▼ docs/guide/Environment_Setup.md │ ▼ docs/guide/Getting_Started.md

随后执行：

git clone <课程仓库地址>
cd campus-market-seed
nvm use
pnpm install

# 启动Mock数据服务（新开终端运行）
json-server db.json
# 启动前端项目
pnpm dev

浏览器访问：

http://localhost:5173

如果页面显示：

项目启动成功

说明开发环境已经配置完成。

# 项目打包构建
pnpm run build

⸻

项目结构

campus-market-seed
├── docs
│ ├── ai # AI 协作规范与AI协作记录文档
│ ├── evidence # Day1-Day7 全套每日过程证据卡
│ └── guide # 学生使用指南
├── scripts # 自动检测工具
├── src # 本人完整业务开发源码
├── db.json # Mock模拟后端数据文件
├── CHECK_REPORT.md # 自动检测报告（后续版本启用）

⸻

文档导航

|文档|说明|
| ---- | ---- |
|docs/guide/Environment_Setup.md|配置课程开发环境|
|docs/guide/Getting_Started.md|Day1 快速开始指南|
|docs/ai/AI_Collaboration_Card.md|AI协作全过程记录|
|docs/evidence/|Day1~Day7每日开发过程性证据|

⸻

技术栈

Vue 3
TypeScript
Vite
Vue Router
Pinia
ESLint
Oxlint
拓展：localStorage、json-server
开发辅助工具：豆包AI Coding、GitHub Copilot

⸻

开发规范

在整个实训过程中，请遵循以下要求：

使用 Git 管理项目开发过程；
每完成一个独立功能及时提交 Commit；
合理使用 AI Coding 工具辅助开发；
保留 AI 协作记录；
每天完成对应的 Evidence；
保持项目始终能够正常运行。

### 七日开发过程简述
Day1：项目初始化、梳理页面业务、搭建基础路由骨架
Day2：开发商品发布表单，对接新增商品Mock接口
Day3：商品列表渲染，修复发布数据不展示问题
Day4：Pinia收藏状态仓库，开发收藏、我的发布个人中心
Day5：修复路由跳转bug，完善商品数据展示逻辑
Day6：登录注册、状态持久化、路由拦截，封装全局加载/错误组件
Day7：全项目功能验收、代码检测、完善全套文档、AI复盘、准备答辩材料

### AI协作说明
AI仅用于生成页面、状态、接口基础模板；自动生成的JWT、密码加密等线上冗余代码已人工删除；路由兼容、防重复提交、bug修复等核心优化逻辑均为自主思考修改，所有代码经过人工校验调试。

⸻

后续版本

后续版本将逐步提供：

自动检测工具（Check Engine）
自动评分报告
Git 提交分析
AI 协作分析
教师验收工具

⸻

License

本仓库仅用于《校园轻集市》课程教学与实践。