# 标签页 / Tabs

> 组件 · `id: tabs`

用一排可切换的标签把同一区域的内容分成互斥视图：标签头常驻可点击，仅当前 标签对应的面板可见，其余隐藏。适合把高度相关的几类内容压缩在同一区域内 就地切换，避免整页跳转。键盘上用左右方向键在标签间移动，是可访问性的经典范例。

**别名:** 选项卡 · tab 切换 · 页签 · 切换标签 · 浏览器那种标签 · 分栏切换

**分类:** Navigation / Layout

## 名词辨析

Tabs 在同级内容面板间切换（内容同级并列）；Segmented Control 是紧凑的模式/筛选切换；Breadcrumb 显示层级位置。

## 适用场景

- 同一对象的几个平行视图（概览 / 动态 / 设置）
- 想就地切换、避免整页跳转
- 内容高度相关且标签数 ≤ 7

## 不适用场景

- 各标签内容不相关，应拆成独立页面或路由
- 需要同时对照两个标签的内容
- 有先后顺序的多步流程（用分步指示器）

## 常见形式

- **下划线式** (Underline) — 激活项底部横线，Material 风格
- **胶囊分段式** (Pill / Segmented) — 圆角分段控件，iOS Segmented 风格
- **卡片式** (Card) — 标签即页签卡片，与面板连成一体

## Platform API

- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) |
| shadcn/ui | [Tabs](https://ui.shadcn.com/docs/components/tabs) |
| MUI | [Tabs](https://mui.com/material-ui/react-tabs/) |
| AntD | [Tabs](https://ant.design/components/tabs) |

## 实现要点

**CSS:** `flex` `border-bottom: 2px solid` `transform` `transition`

语义结构 role="tablist" > role="tab"（aria-selected）+ role="tabpanel" （aria-labelledby，hidden 隐藏非当前面板）。激活指示器用绝对定位小横条， transform: translateX 滑动过渡；面板切换可加轻微 fade。键盘需实现左右 方向键移动焦点（roving tabindex）。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现标签页组件。

先检查现有组件体系是否已有 Tabs 或分段控件，优先扩展而非重写。
要求：
- 完整 ARIA 语义（tablist / tab / tabpanel / aria-selected）
- 左右方向键切换（roving tabindex）
- 激活指示器滑动动画，尊重 prefers-reduced-motion
- 面板切换时保持各自的滚动或表单状态（keep-mounted 或缓存策略）
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个标签页组件：一排标签头加内容面板，点击或方向键切换，仅显示当前标签的面板。

**Design:** 创建标签页：标签头等宽横排，激活项文字用主色并带 2px 底部强调色横线（横线 滑动过渡）；面板留白 16px；未激活标签为次级色。切换有轻微 fade。深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Tabs：role="tablist"/"tab"/"tabpanel" 完整语义； activeId 受控；指示器用绝对定位 + translateX 过渡（时长乘 var(--demo-speed, 1) 类变量便于调试）；面板切换 key 触发 fade 动画，尊重 prefers-reduced-motion；roving tabindex 左右方向键。无新增依赖。

## 相关概念

- [accordion](/components/accordion) — 相似概念
- [breadcrumb](/components/breadcrumb) — 相似概念
- [pagination](/components/pagination) — 相似概念
- [dropdown](/components/dropdown) — 相似概念
- [sidebar](/components/sidebar) — 相似概念

## 容易混淆

- [segmented-control](/components/segmented-control) — Segmented Control 更紧凑、用于模式/筛选，Tabs 用于内容分区。
- [breadcrumb](/components/breadcrumb) — Breadcrumb 表达层级路径，Tabs 表达同级切换。
- [sidebar](/components/sidebar) — Sidebar 是常驻导航面，Tabs 是内容区内的切换条。

## 可搭配的风格

`minimalism` `bento-grid`

## Sources

- [WAI-ARIA Authoring Practices — Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [Material Design 3 — Tabs](https://m3.material.io/components/tabs/overview)

---

JSON: `/api/concept/components/tabs.json` · 站点: /components/tabs
