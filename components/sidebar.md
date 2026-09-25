# 侧边栏 / Sidebar

> 组件 · `id: sidebar`

固定在页面一侧（通常左侧）的垂直导航区，承载产品的主要层级入口。 后台管理系统的事实标准：顶部放品牌与全局搜索，侧边栏放模块树，内容区专注任务。

**别名:** 左侧菜单 · 侧栏 · 左边菜单 · 导航侧栏 · 固定菜单 · 网页左边固定菜单 · 侧边导航

**分类:** Navigation

## 适用场景

- 层级较多的后台、文档站、管理面板
- 导航项需要常驻可见、随时切换
- 桌面端为主的宽屏布局

## 不适用场景

- 移动端（改为抽屉或底部导航）
- 层级极少的简单官网（顶部导航更轻）
- 内容需要最大化宽度（如阅读、编辑器写作模式）

## 常见形式

- **固定宽** (Fixed) — 常驻 240px 左右，最经典
- **可折叠** (Collapsible) — 收成图标条，兼顾密度与空间
- **浮动** (Floating) — 与内容区脱开，卡片式悬浮（Linear 风格）

## Platform API

- `<aside>`
- `<nav>`

## 实现要点

**CSS:** `position: sticky` `flex` `width` `overflow-y: auto`

布局用 flex：侧栏固定宽 + 内容区 flex-1；侧栏内部 overflow-y-auto，sticky 顶部。 折叠态用 width 过渡（240px ↔ 64px），图标居中，文字 opacity 隐藏。 移动端断点下转为 fixed 抽屉 + 遮罩。当前项用 accent 色块或左侧竖条标识。

## 横向对比维度 (`primary-navigation`)

- **空间占用:** 高，常驻占宽
- **层级容量:** 高，树状多级
- **移动端友好:** 差，需转抽屉

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现后台侧边栏。

先检查现有路由结构与导航数据来源，保持一致。
要求：
- 固定 240px，可折叠为 64px 图标栏（记忆折叠状态）
- 分组导航数据驱动，当前路由项高亮（aria-current）
- 移动端转为抽屉 + 遮罩
- 深浅色主题一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个后台侧边栏组件，包含品牌区、分组导航和底部用户区。

**Design:** 创建固定侧边栏（240px）：顶部 Logo，中部两级分组导航（分组标题小写灰字 + 菜单项），当前项用强调色左侧竖条 + 浅色背景标识；底部头像 + 设置。支持折叠为 64px 图标栏，折叠动画平滑。深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Sidebar：aside 固定宽 + 内部 overflow-y-auto；分组数据驱动（{label, items}）；activeId 受控；折叠态通过 width transition 与图标 tooltip；移动端 lg 断点以下转 fixed 抽屉 + 遮罩，受 open 受控。键盘可访问：nav landmark + aria-current。

## 相关概念

- [navbar](/components/navbar) — 替代方案
- [drawer](/components/drawer) — 相似概念
- [command-palette](/components/command-palette) — 相似概念
- [breadcrumb](/components/breadcrumb) — 相似概念

## 可搭配的风格

`minimalism` `swiss-style`

## Sources

- [Apple HIG — Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars)
- [Atlassian Design System — Navigation](https://atlassian.design/)

---

JSON: `/api/concept/components/sidebar.json` · 站点: /components/sidebar
