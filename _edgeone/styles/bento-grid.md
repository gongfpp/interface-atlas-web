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
- **motion:** 160–200ms ease-out 的卡片抬升与阴影过渡
- **states:** hover 轻微上浮并加深投影；focus 用紫色可见外框；active 回落到平面；disabled 降不透明；error 用红色描边

## 实现要点

**CSS:** `display: grid` `grid-template-columns: repeat(4, 1fr)` `grid-auto-rows` `grid-column: span 2` `border-radius: 16px` `gap`

先定网格再装内容：常用 4 列（移动端 2 列）× 若干等高行，行高用 grid-auto-rows 固定；主格 span 2×2，次格 2×1 或 1×1；gap 收窄到 8～16px 保证"一整盒"的整体感；所有格子统一圆角（14～20px）与内边距（16～24px）。 每格只放一个主题：大格做主视觉，小格做指标；格子数量 5～9 个为宜， 少于 4 个失去拼贴感，多于 10 个变成仪表盘噪音。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 ◉ Tasko 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

按 Tasko 原拼格保留 .tasko-body 的 32% / 14.5% / 14.5% / 35% 列宽、13.6cqw / 11.8cqw 两行和 1.15cqw 间隙；主介绍跨两行，日历跨中间两列，右侧为绿色统计与雪山拼图，下方任务/笔记是独立入口。使用浅蓝/淡紫/浅绿不同卡底与现有 1.65cqw 圆角，不重画为等宽四列、96px 等高行或统一紫色卡片。实际月份需要六周时使用已有增高规则；600px 以下主块跨全宽、任务和笔记保留两列配对。

完整页面操作：
开始使用与免费注册进入本地工作区；切换日历月份和日期，新增/完成任务，编辑保存笔记；登录说明演示身份，不伪装真实注册或云同步。

静态封面、详情演示与 /style-scenes/bento-grid/（英文 /en/style-scenes/bento-grid/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用便当盒网格（Bento Grid）布局设计界面：圆角格子按不同跨度拼合在一套 网格上，大格承载主内容，小格陈列指标与点缀，窄缝对齐。

**Design:** 便当盒布局设计规范：4 列网格（移动端 2 列），grid-auto-rows 固定行高； 主格 2×2，辅助格 2×1 或 1×1；gap 12px，圆角统一 16px，内边距统一 20px； 格内一题一格，层级靠面积不靠边框；格子底色可用纯色 浅灰或深色卡面， 主格可承载图片或渐变；总格数控制在 5～9 个。

**Implementation:** 用当前风格完成 ◉ Tasko 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

按 Tasko 原拼格保留 .tasko-body 的 32% / 14.5% / 14.5% / 35% 列宽、13.6cqw / 11.8cqw 两行和 1.15cqw 间隙；主介绍跨两行，日历跨中间两列，右侧为绿色统计与雪山拼图，下方任务/笔记是独立入口。使用浅蓝/淡紫/浅绿不同卡底与现有 1.65cqw 圆角，不重画为等宽四列、96px 等高行或统一紫色卡片。实际月份需要六周时使用已有增高规则；600px 以下主块跨全宽、任务和笔记保留两列配对。

开始使用与免费注册进入本地工作区；切换日历月份和日期，新增/完成任务，编辑保存笔记；登录说明演示身份，不伪装真实注册或云同步。

静态封面、详情演示与 /style-scenes/bento-grid/（英文 /en/style-scenes/bento-grid/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [card](/components/card) — 影响组件
- [minimalism](/styles/minimalism) — 相似概念
- [glassmorphism](/styles/glassmorphism) — 相似概念
- [dashboard](/pages/dashboard) — 搭配使用
- [aurora](/styles/aurora) — 相似概念

## Sources

- [Bento Grids — gallery of bento layouts](https://bentogrids.com/)
- [Apple Newsroom](https://www.apple.com/newsroom/)

---

JSON: `/api/concept/styles/bento-grid.json` · 站点: /styles/bento-grid
