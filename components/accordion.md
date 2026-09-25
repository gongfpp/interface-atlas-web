# 手风琴 / Accordion

> 组件 · `id: accordion`

由多个可折叠区块组成的垂直列表：点击标题展开内容、再点收起，可互斥（同时只开一项） 也可多开。用于在有限空间里收纳成组内容，让用户按需展开。

**别名:** 手风琴 · 折叠面板 · 折叠菜单 · 展开收起 · 可折叠区块 · FAQ 折叠列表 · 点标题展开的那种列表

**分类:** Disclosure / Layout

## 适用场景

- FAQ、帮助中心的分组问题
- 设置页分组长表单（高级选项默认收起）
- 移动端长内容分期呈现

## 不适用场景

- 用户需要同时对照多块内容
- 核心内容应默认可见（收起会藏关键信息）
- 打印或 SEO 需要全量文本（需处理展开态）

## 常见形式

- **单开** (Single) — 同时只展开一项，最常见
- **多开** (Multiple) — 各项独立展开收起
- **分隔卡** (Bordered) — 每项带边框或分隔线，区块感更强

## Platform API

- `<details>`
- `<summary>`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) |
| shadcn/ui | [Accordion](https://ui.shadcn.com/docs/components/accordion) |
| MUI | [Accordion](https://mui.com/material-ui/react-accordion/) |
| AntD | [Collapse](https://ant.design/components/collapse) |

## 实现要点

**CSS:** `grid-template-rows` `transition` `overflow: hidden` `transform: rotate`

展开动画：grid-template-rows 0fr→1fr 过渡（或测量 scrollHeight 设 max-height）， 箭头 rotate 180° 同步旋转。标题用 button，Enter/Space 触发；aria-expanded + aria-controls 关联面板。互斥逻辑放在受控 state 里处理；尊重 prefers-reduced-motion 时可去掉高度动画。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现手风琴（Accordion）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色与圆角变量。
用途：FAQ 与设置页分组。
要求：
- 支持单开（互斥）与多开两种模式
- 高度展开动画，尊重 prefers-reduced-motion
- 键盘可用：button 标题 + aria-expanded/aria-controls
- 深浅色主题一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个手风琴（Accordion）组件：多个折叠区块，点击标题展开收起，支持单开与多开两种模式。

**Design:** 创建 Accordion 组件。要求：每项标题行左侧标题、右侧箭头（展开时旋转 180°）； 展开收起用高度过渡动画（200ms 左右）；分隔线或卡片式两种外观； 当前项标题可加强调色；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Accordion：items + openIds 受控 state，单开模式 setOpenId(id)； 面板用 grid grid-rows-[0fr]/[1fr] + transition-[grid-template-rows] 实现高度动画 （时长乘 var(--demo-speed, 1)），内层 overflow-hidden；箭头 -rotate-90/rotate-0 过渡； 标题 button + aria-expanded + aria-controls；尊重 prefers-reduced-motion。

## 相关概念

- [accordion-expand](/components/accordion-expand) — 搭配使用
- [progressive-disclosure](/components/progressive-disclosure) — 搭配使用
- [tabs](/components/tabs) — 相似概念
- [dropdown](/components/dropdown) — 相似概念

## Sources

- [WAI-ARIA Authoring Practices — Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [MDN — details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

---

JSON: `/api/concept/components/accordion.json` · 站点: /components/accordion
