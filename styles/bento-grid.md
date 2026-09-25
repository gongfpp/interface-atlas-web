# 便当盒网格 / Bento Grid

> 风格 · `id: bento-grid`

把界面装进便当盒的布局语言：一组圆角矩形像分格便当一样拼合，各格跨度不同 ——大格承载主内容，小格陈列数据与点缀，格与格之间留窄缝对齐同一套网格。 它是卡片网格的升级：用面积差异直接表达信息优先级。

**别名:** 便当盒布局 · 便当格网格 · Bento网格 · 苹果发布会那种格子布局 · 拼块仪表盘 · 不等宽卡片网格 · Bento Box Layout · Bento Grid

**分类:** Style / Layout

## 适用场景

- 仪表盘 个人主页 产品概览，内容模块多且优先级分明
- 功能特性展示页，一格一卖点整齐陈列
- 想用面积对比引导视觉动线，避免均质卡片海洋

## 不适用场景

- 内容长度不可控时，格子会被撑破或大量留空
- 小屏只放得下一列，便当结构失去意义
- 顺序阅读的长文场景，网格拼接会打断叙事

## 常见形式

- **发布会式** (Keynote) — 苹果发布会风格，大图大字大格子
- **仪表盘式** (Dashboard) — 数据格为主，迷你图表与指标卡拼合
- **个人主页式** (Profile) — 头像 简介 社交链接混搭的个人便当

## 开发规格

- **typography:** 系统无衬线，卡片内大数字
- **color:** 浅灰底 #F5F5F7 × 白卡 × 紫 #5B5BD6
- **border:** 1px #E5E7EB 卡片描边
- **shadow:** 1px 微投影保持层次
- **spacing:** 16px 圆角 + 10px 网格间距

## 实现要点

**CSS:** `display: grid` `grid-template-columns: repeat(4, 1fr)` `grid-auto-rows` `grid-column: span 2` `border-radius: 16px` `gap`

先定网格再装内容：常用 4 列（移动端 2 列）× 若干等高行，行高用 grid-auto-rows 固定；主格 span 2×2，次格 2×1 或 1×1；gap 收窄到 8～16px 保证"一整盒"的整体感；所有格子统一圆角（14～20px）与内边距（16～24px）。 每格只放一个主题：大格做主视觉，小格做指标；格子数量 5～9 个为宜， 少于 4 个失去拼贴感，多于 10 个变成仪表盘噪音。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用便当盒网格（Bento Grid）实现一个概览区块。

先检查现有栅格 断点与卡片组件，复用现有间距与圆角变量。
要求：
- 一套统一网格，格子按 span 拼合，gap 窄缝对齐
- 每格一个主题，层级靠面积表达
- 圆角 内边距全格统一，整体像一个便当盒
- 移动端降级为 2 列或单列不破格
- 支持深色模式
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用便当盒网格（Bento Grid）布局设计界面：圆角格子按不同跨度拼合在一套 网格上，大格承载主内容，小格陈列指标与点缀，窄缝对齐。

**Design:** 便当盒布局设计规范：4 列网格（移动端 2 列），grid-auto-rows 固定行高； 主格 2×2，辅助格 2×1 或 1×1；gap 12px，圆角统一 16px，内边距统一 20px； 格内一题一格，层级靠面积不靠边框；格子底色可用纯色 浅灰或深色卡面， 主格可承载图片或渐变；总格数控制在 5～9 个。

**Implementation:** 用 CSS 实现便当盒网格：.bento { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 96px; gap: 12px; } 主格 .bento-hero { grid-column: span 2; grid-row: span 2; } 次格 .bento-wide { grid-column: span 2; } 所有格子 border-radius: 16px; padding: 20px; 移动端用 @media 收窄为 2 列。

## 相关概念

- [card](/styles/card) — 影响组件
- [minimalism](/styles/minimalism) — 相似概念
- [glassmorphism](/styles/glassmorphism) — 相似概念
- [dashboard](/styles/dashboard) — 搭配使用
- [aurora](/styles/aurora) — 相似概念

## Sources

- [Bento Grids — gallery of bento layouts](https://bentogrids.com/)
- [Apple Newsroom](https://www.apple.com/newsroom/)

---

JSON: `/api/concept/styles/bento-grid.json` · 站点: /styles/bento-grid
