# 抽屉 / Drawer

> 组件 · `id: drawer`

从屏幕边缘（多为右侧或左侧）滑入、通常带遮罩的面板。比模态框轻：能承载较长内容又不离开当前页面， 关闭后原样回到上下文；移动端常以左滑导航或底部抽屉的形式出现。

**别名:** 抽屉 · 侧滑面板 · 滑出面板 · 侧边抽屉 · 侧拉页面 · 汉堡菜单点开的面板 · 手机上滑出来的面板

**分类:** Overlay / Navigation

## 适用场景

- 查看详情但不想离开列表（邮件、订单）
- 移动端承载侧边导航
- 快速编辑或筛选，且需要保留底层上下文

## 不适用场景

- 需要用户强制决策（改用模态框）
- 内容只有一两行（改用 popover 或 tooltip）
- 桌面端常驻导航（改用 sidebar）

## 常见形式

- **右侧滑入** (Right edge) — 详情面板最常见方向
- **左侧滑入** (Left edge) — 移动端导航抽屉常用
- **底部抽屉** (Bottom sheet) — 移动端操作与筛选面板

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## 实现要点

**CSS:** `position: fixed` `transform: translateX(100%)` `transition` `z-index` `overflow-y: auto`

面板 fixed 定位在边缘，用 transform translateX 收起与展开（GPU 友好，避免动 width）； 遮罩同步淡入淡出。内部 overflow-y-auto 承载长内容，底部操作区吸底。 焦点管理与滚动锁定同模态框；Esc 关闭，移动端可加边缘滑动手势。

## 横向对比维度 (`overlay-container`)

- **打断程度:** 高，打开时遮罩挡住页面
- **内容容量:** 高，可承载长列表与表单
- **移动端友好:** 好，边缘滑动符合直觉

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现抽屉（Drawer）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色、层级与阴影变量。
用途：列表详情查看与移动端导航。
要求：
- 右侧滑入 + 遮罩，Esc 与点击遮罩关闭
- 打开时锁定滚动、焦点移入面板
- 滑动动画用 transform，尊重 prefers-reduced-motion
- 支持左侧滑入与底部抽屉两种变体
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个抽屉（Drawer）组件：点击按钮从右侧滑出面板，带遮罩，包含标题、内容和关闭按钮。

**Design:** 创建抽屉组件。要求：面板从右侧滑入（宽约 360px），遮罩半透明；头部标题 + 关闭按钮，内容区可滚动， 底部吸底操作区；滑入动画 240ms 缓出；Esc 与点击遮罩关闭；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Drawer：open 受控；面板 fixed inset-y-0 right-0， 用 transform translate-x-full ↔ translate-x-0 过渡（时长乘 var(--demo-speed, 1)）； 遮罩 opacity 过渡；打开时锁定 body 滚动、焦点移入；Esc 关闭； role="dialog" aria-modal="true"，尊重 prefers-reduced-motion。

## 相关概念

- [modal](/components/modal) — 替代方案
- [sidebar](/components/sidebar) — 相似概念
- [popover](/components/popover) — 替代方案
- [drawer-slide](/components/drawer-slide) — 搭配使用

## Sources

- [Material Design — Navigation drawer](https://m3.material.io/components/navigation-drawer/overview)
- [Apple HIG — Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)

---

JSON: `/api/concept/components/drawer.json` · 站点: /components/drawer
