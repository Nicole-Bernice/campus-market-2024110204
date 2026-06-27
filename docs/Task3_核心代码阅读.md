# Task3 阅读核心代码
## 一、阅读 src/main.ts
### 思考题解答
1. Vue应用如何创建？
   通过`createApp(App)`初始化Vue应用实例，调用`.mount('#app')`挂载到index.html的DOM节点，启动项目。
2. Pinia如何注册？
   使用`createPinia()`生成Pinia实例，通过`app.use(pinia)`全局注册，全项目组件可直接使用状态仓库。
3. Router如何注册？
   导入配置完成的router路由实例，执行`app.use(router)`完成全局注册，启用页面跳转能力。
4. 项目入口在哪里？
   浏览器访问入口：根目录`index.html`；Vue代码逻辑入口：`src/main.ts`。

## 二、阅读 src/router/index.ts
### 思考题解答
1. Router的作用是什么？
   实现SPA单页应用无刷新页面切换；建立URL路径与views页面组件的映射；支持动态路由（如商品详情`/item/:id`）、路由守卫；通过`<router-view>`渲染匹配到的页面。
2. 为什么首页能够显示？
   路由配置中设置根路径`/`重定向至首页路由，应用启动时自动匹配首页路由，渲染绑定的首页页面组件。

## 三、阅读 src/App.vue
### 思考题解答
App.vue在整个项目中的作用：
项目全局根容器，内置`<router-view>`作为所有业务页面的统一渲染出口；承载全局导航栏、公共弹窗、全局通用样式；所有页面都会嵌套在该组件内部渲染。