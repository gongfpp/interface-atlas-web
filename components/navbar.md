# 顶部导航栏 / Navbar

> 组件 · `id: navbar`

固定在页面顶部的水平导航条：左侧品牌标识，中间主导航链接，右侧搜索、 入口按钮与用户头像。它是网站的"门面导航"，把最重要的三到七个入口压进 一条横向空间，移动端折叠为汉堡菜单。常配合 position: sticky 在滚动时保持可见。

**别名:** 导航栏 · 顶部菜单 · 页面最上面那一条 · header 导航 · 页头导航 · 汉堡菜单那条栏 · top bar

**分类:** Navigation

## 适用场景

- 入口少而扁平的官网、产品站、文档站
- 品牌与全局动作需要常驻首屏
- 页面结构上下流动、适合顶部横向空间

## 不适用场景

- 层级深、模块多的后台（侧边栏更合适）
- 需要同时扫视大量导航项
- 沉浸式阅读、编辑器等全屏场景

## 常见形式

- **标准** (Standard) — 品牌左、链接中、动作右
- **居中** (Centered) — 链接绝对居中，Apple 官网风格
- **透明悬浮** (Transparent overlay) — 压在首屏大图上，滚动后加底色

## Platform API

- `<nav>`
- `role="navigation"`

## 实现要点

**CSS:** `position: sticky` `z-index` `flex` `justify-content: space-between`

用 sticky 置顶，内部 flex 三段式（品牌 / 链接 / 动作）。当前项用 accent 色或下划线标识（aria-current="page"）。移动端断点下隐藏链接、显示汉堡 按钮，展开为下拉面板或抽屉；透明悬浮变体在滚动超过首屏高度后切换 background 与 backdrop-filter。

## 横向对比维度 (`primary-navigation`)

- **空间占用:** 低，仅顶部一横条
- **层级容量:** 低，扁平一级为主
- **移动端友好:** 中，需折叠为汉堡菜单

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现顶部导航栏。

先检查现有路由结构与导航数据来源，复用现有品牌资源与 Design Token。
要求：
- sticky 置顶，含品牌区、导航链接、搜索入口、用户区
- 当前路由高亮（aria-current="page"）
- 移动端折叠为汉堡菜单，展开动画平滑
- 深浅色主题一致
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个顶部导航栏组件，包含品牌标识、若干主导航链接、搜索入口和用户头像区。

**Design:** 创建顶部导航栏：高 56px、sticky 置顶；左侧 Logo + 产品名，中间 4 个导航链接 （当前项用强调色下划线标识），右侧搜索框 + 主按钮 + 头像。移动端折叠为汉堡 按钮并展开为下拉菜单。深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Navbar：header + sticky top-0 + z-index；链接数据驱动， activeId 受控，当前项加 aria-current="page"；sm 断点以下切换汉堡按钮与折叠面板 （max-height 过渡）。提供 gap、theme 变体参数。不引入依赖。

## 相关概念

- [sidebar](/components/sidebar) — 替代方案
- [menu](/components/menu) — 替代方案
- [breadcrumb](/components/breadcrumb) — 相似概念
- [tabs](/components/tabs) — 相似概念
- [landing-page](/components/landing-page) — 搭配使用

## 可搭配的风格

`minimalism` `glassmorphism` `editorial`

## Sources

- [Apple HIG — Navigation bars](https://developer.apple.com/design/human-interface-guidelines/navigation-bars)
- [NN/g — Navigation design](https://www.nngroup.com/articles/navigation-design/)

---

JSON: `/api/concept/components/navbar.json` · 站点: /components/navbar
