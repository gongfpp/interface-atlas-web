# 空状态 / Empty State

> 交互模式 · `id: empty-state`

当列表或页面没有数据时，不留一片空白，而是用插图、一句说明和一个明确的下一步操作填充。 它解决的是"用户面对空白不知道发生了什么、也不知道该做什么"的问题—— 把空档变成引导起点：首次使用教用户开始，搜索无结果给出路。

**别名:** Empty State · 空状态页面 · 空白页占位 · 无数据占位 · 空数据提示 · 零数据状态 · 暂无内容

**分类:** Feedback / Content

## 适用场景

- 首次使用，账号尚未产生数据
- 搜索或筛选没有匹配结果
- 操作清空了内容，需要引导恢复

## 不适用场景

- 只是加载的瞬间，应使用骨架屏
- 数据缺失由错误导致，应区分错误态
- 编辑类画布，用户需要空白自由度

## 常见形式

- **首次使用** (First use) — 插图 + 主 CTA 引导创建第一条数据
- **无搜索结果** (No results) — 说明无匹配并提供"清除筛选"出路
- **极简** (Minimal) — 只有一行说明文字，适合次要区域

## 实现要点

**CSS:** `flex centering` `svg stroke` `border-dashed` `min-height`

空态容器保持与有数据时相近的最小高度，避免切换跳动；插图用简单描边 SVG（stroke: currentColor） 随主题变色；文案说明"为什么空"并指向一个动作；主 CTA 一个就够， 次级操作弱化为链接。错误导致的数据缺失不要复用空态，应单独设计错误态。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现空状态（Empty State）。

先检查现有插画资源与按钮组件，优先复用现有的描边插图风格与 CTA 样式。
用途：项目列表首次使用与搜索无结果两种空态。
要求：
- 插图 + 说明文案 + 单个主 CTA 的标准结构
- 无结果空态提供"清除筛选"出路
- 空态与有数据态高度接近，切换不跳动
- 与错误态区分，错误不复用空态
- 支持 Dark Mode
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个空状态（Empty State）页面：插图加一句「还没有项目」的说明， 主按钮「新建项目」引导用户创建第一条数据。

**Design:** 设计一个空状态界面。要求：描边风格插图居中，说明文案解释为何为空并指向动作； 只保留一个主 CTA，次级操作弱化为链接；空态与有数据态高度接近避免跳动； 无结果变体提供"清除筛选"出路；支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Empty State。useState 切换有数据 / 空态； 空态用 flex 垂直居中：内联 SVG 描边插图（currentColor 随主题）、标题、说明与主按钮； 容器设置与列表一致的固定最小高度；"清除筛选"按钮重置筛选状态。 尊重 prefers-reduced-motion（淡入动画可省略）。

## 相关概念

- [skeleton-loading](/patterns/skeleton-loading) — 相似概念
- [onboarding-tour](/patterns/onboarding-tour) — 相似概念
- [button](/patterns/button) — 搭配使用
- [search-filtering](/patterns/search-filtering) — 相似概念
- [card](/patterns/card) — 搭配使用

## Sources

- [Apple HIG — Empty States](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design — Understates / empty states](https://m3.material.io/)

---

JSON: `/api/concept/patterns/empty-state.json` · 站点: /patterns/empty-state
