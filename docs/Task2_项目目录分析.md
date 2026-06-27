                    # Task2 项目目录分析
## 一、项目整体目录浏览
### 顶层一级目录
src、docs、scripts、public

### src内部分层结构
src
├─ api
├─ components
├─ router
├─ stores
├─ views
├─ App.vue
└─ main.ts

## 二、思考问题解答
### 1. 为什么采用这种目录结构？
该目录是Vue3+TS前端工程行业通用分层模块化规范：
1. 按代码职责拆分文件夹，实现业务解耦，降低后期维护、迭代成本；
2. 分层边界清晰，适配实训教学，每个任务对应独立目录，方便AI生成代码、Git版本管理；
3. 适配IDEA编辑器代码索引、快速跳转功能，提升开发效率；
4. 可扩展性强，新增功能仅需在对应目录拓展，不会破坏项目整体架构。

### 2. 每个目录负责什么？
| 目录/文件 | 核心职责 |
| ---- | ---- |
| src | 项目源代码根目录，存放全部业务逻辑代码 |
| src/api | 接口层，统一封装Axios请求，对接JSON Server Mock接口 |
| src/components | 公共复用组件层，存放多页面通用UI（卡片、筛选框、表单、弹窗） |
| src/router | 路由层，管理页面跳转、路由规则、动态详情路由 |
| src/stores | 状态层，Pinia全局仓库，管理跨页面共享数据（用户、收藏、消息） |
| src/views | 页面层，存放完整业务页面Vue文件 |
| src/App.vue | 项目根组件，提供`<router-view>`路由渲染出口，承载全局布局导航、公共弹窗 |
| src/main.ts | Vue项目启动入口，创建Vue实例、全局注册Pinia/Router/UI插件 |
| docs | 实训文档根目录，存放目录分析、AI协作记录、每日过程证据、项目规划 |
| scripts | 自动化脚本目录，存放JSON Server启动、数据初始化脚本 |
| public | 静态资源目录，存放不参与编译打包的图片、图标等素材 |

### 3. 哪些目录需要自己开发？
`src/api`、`src/components`、`src/router`、`src/stores`、`src/views`、`docs`、`scripts` 均需要自主编写代码与实训文档；`public` 可按需新增图片素材。

### 4. 哪些目录属于课程基础设施？
项目脚手架整体骨架、`main.ts`基础启动模板、`router`初始路由实例、`package.json`基础依赖配置、`.idea`/`.vscode`配置文件夹、`public`默认静态资源，均为课程提前搭建好的基础设施，仅需增量修改，无需从零搭建。