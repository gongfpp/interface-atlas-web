# 徽标 / Badge

> 组件 · `id: badge`

附着在元素角落或行内的小型状态标记：圆点、数字计数或短文字标签。用于表达未读数量、 状态（新、已废弃）或分类；不参与交互，视觉上从属于宿主元素。

**别名:** 徽章 · 小红点 · 角标 · 状态标签 · 计数气泡 · 数字角标 · 图标右上角的小圆点

**分类:** Display / Status

## 适用场景

- 未读消息数、购物车数量
- 行内状态标注（成功、过期、Beta）
- 图标右上角的小红点提醒

## 不适用场景

- 需要点击响应（那是按钮或标签 chip）
- 数值超过上限要截断（99+）并避免频繁跳动
- 大段文字说明（改用 alert 或正文）

## 常见形式

- **计数** (Count) — 数字气泡，可 99+ 截断
- **圆点** (Dot) — 无文字纯提醒
- **标签** (Label) — 有底色的短文字状态

## Platform API

- `<span>`

## 实现要点

**CSS:** `position: absolute` `border-radius: 9999px` `box-shadow` `font-variant-numeric: tabular-nums`

宿主 relative，徽标 absolute 定位在 -top/-right 并加与底色一致的描边（ring 或 shadow） 避免融入背景图。数字用 tabular-nums 防宽度抖动，超过 99 显示 99+。 状态色语义固定：红 = 错误或紧急、绿 = 成功、灰 = 中性；颜色之外给 aria-label 说明含义。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现徽标（Badge）组件。

先检查现有组件体系与 Design Token，优先复用现有的状态色变量。
用途：未读计数与状态标注。
要求：
- 计数 / 圆点 / 文字标签三种形态
- 计数 99+ 截断，数字不抖动
- 描边与宿主底色衔接自然，深浅色主题一致
- 不只靠颜色传达（aria-label 或文字）
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个徽标（Badge）组件：支持数字计数、小红点和文字标签三种形态，可附着在图标或按钮角上。

**Design:** 创建 Badge 组件。要求：计数形态为强调色圆形气泡（白描边、tabular-nums、99+ 截断）； 圆点形态 8px；标签形态低饱和底色 + 同色系文字（success/warning/error/info）； 附着在宿主右上角并与底面留出 2px 描边间隙；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Badge：宿主 relative，徽标 absolute -top-1 -right-1  rounded-full min-w 配 px 撑开两位数，shadow 或 ring-2 ring-[surface] 做描边； 计数 value > 99 显示 "99+"；标签形态用配色映射对象；宿主加 aria-label 描述计数含义； 数值动画用 scale 过渡（时长乘 var(--demo-speed, 1)）。

## 相关概念

- [avatar](/components/avatar) — 相似概念
- [button](/components/button) — 相似概念
- [card](/components/card) — 相似概念

## Sources

- [Material Design — Badges](https://m3.material.io/components/badges/overview)
- [Carbon Design System — Tag](https://carbondesignsystem.com/components/tag/usage/)

---

JSON: `/api/concept/components/badge.json` · 站点: /components/badge
