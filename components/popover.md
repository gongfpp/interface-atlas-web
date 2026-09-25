# 气泡卡片 / Popover

> 组件 · `id: popover`

点击触发元素后在其旁边弹出的非模态浮层，可承载文字说明、小型表单、日期选择等中等复杂内容。 无遮罩、不阻断页面其余部分，点击外部区域或 Esc 即关闭。

**别名:** 气泡卡片 · 弹出卡片 · 浮层 · 气泡框 · 弹出面板 · 点击弹出的小卡片 · 帮助气泡

**分类:** Overlay

## 名词辨析

Popover 是锚定触发元素的非打断浮层，内容任意；Tooltip 只读、悬停即出；Dropdown 列表只放命令。

## 适用场景

- 点击后需要承载可交互内容（小表单、过滤、颜色选择）
- 补充说明的信息量超过一行 tooltip
- 需要保持底层页面可见且可用

## 不适用场景

- 只有一句话说明（改用 tooltip）
- 强制确认或长流程（改用 modal）
- 内容需要大量滚动（改用 drawer）

## 常见形式

- **纯文本** (Plain) — 帮助说明文字，最轻量
- **交互式** (Interactive) — 内含输入框、按钮等可操作元素
- **富内容** (Rich) — 带图片或结构化信息卡

## Platform API

- `popover`
- `[popover]`
- `role="dialog"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [popover attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) |
| shadcn/ui | [Popover](https://ui.shadcn.com/docs/components/popover) |
| MUI | [Popover](https://mui.com/material-ui/react-popover/) |
| AntD | [Popover](https://ant.design/components/popover) |

## 实现要点

**CSS:** `position: absolute` `z-index` `box-shadow` `transform-origin`

以触发元素为锚 absolute 定位（或用 floating-ui 思路测量并翻转防溢出）。 点击外部关闭：在 document 上监听 pointerdown 判断 target 是否在浮层内；Esc 同样关闭，焦点移入浮层。 入场 scale 0.95→1 加淡入，150~200ms；尊重 prefers-reduced-motion。

## 横向对比维度 (`overlay-container`)

- **打断程度:** 低，无遮罩不阻断页面
- **内容容量:** 中，小型交互内容
- **移动端友好:** 差，锚定位置易溢出屏幕

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现气泡卡片（Popover）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色、圆角与阴影变量。
用途：帮助说明与小型操作面板。
要求：
- 锚定触发元素，贴近屏幕边缘时自动翻转
- 点击外部与 Esc 关闭，焦点管理正确
- 入场动画轻微，尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个气泡卡片（Popover）组件：点击按钮在按钮旁弹出小卡片，点击外部区域关闭。

**Design:** 创建 Popover 组件。要求：浮层卡片出现在触发元素下方（带小箭头），圆角、边框、大阴影； 标题 + 正文 + 可选操作区；入场轻微放大淡入；点击外部与 Esc 关闭；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Popover：触发元素 relative 包裹，浮层 absolute top-full； open 受控，useEffect 在 document 监听 pointerdown，target 不在容器内则关闭， 监听 keydown Esc 关闭；入场 keyframes（scale + opacity，时长乘 var(--demo-speed, 1)）； 尊重 prefers-reduced-motion。

## 相关概念

- [tooltip](/components/tooltip) — 相似概念
- [modal](/components/modal) — 替代方案
- [drawer](/components/drawer) — 替代方案
- [dropdown](/components/dropdown) — 相似概念

## 容易混淆

- [tooltip](/components/tooltip) — Tooltip 只读、短暂、悬停触发；Popover 可交互、点击触发。
- [dropdown](/components/dropdown) — Dropdown 列表是命令项，Popover 内容任意。
- [modal](/components/modal) — Modal 遮罩整页，Popover 不遮罩、可点外部关闭。

## Sources

- [MDN — Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Apple HIG — Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)

---

JSON: `/api/concept/components/popover.json` · 站点: /components/popover
