# 搜索页 / Search Page

> 页面 · `id: search`

承接查询意图并返回结果的内容发现页面：顶部常驻搜索框（保留查询词、可修改重搜）， 一侧是类型与筛选器，主体按相关度排列结果条目（标题 + 摘要 + 高亮命中词）， 底部用分页或无限滚动续接。空结果和无结果关键词是必须设计好的两个状态。

**别名:** 搜索结果页 · 搜索页面 · 搜东西的页面 · 全站搜索 · 查询结果页 · 搜索列表页 · 搜一搜

**分类:** Page / Discovery

## 适用场景

- 内容量大、用户靠关键词定位信息
- 结果需要按类型、时间、标签过滤
- 查询词与结果的匹配过程需要透明（高亮、计数）

## 不适用场景

- 内容量极小、浏览即可覆盖
- 结构化数据的精确查询（用筛选器或表格更直接）
- 命令式快捷操作（用命令面板更轻）

## 常见形式

- **列表结果** (Results List) — 标题 + 摘要纵排，搜索引擎经典
- **网格结果** (Grid Results) — 卡片网格，适合图片或商品
- **即时搜索** (Instant Search) — 边输入边出结果，无需回车
- **多面筛选** (Faceted Search) — 左侧筛选器 + 右侧结果，电商与文档常用

## 页面结构

1. **搜索框** — 页面主入口，保留上次查询并支持即时联想。
2. **筛选面板** — 分类、范围、排序等，可折叠或常驻侧边。
3. **结果列表** — 命中数与耗时反馈；无结果时给引导而非空白。
4. **单条结果** — 标题可点、摘要高亮命中词、来源与时间。
5. **分页** — 翻页或无限滚动，保持筛选条件与滚动位置。

## 实现要点

**CSS:** `grid` `flex` `scroll-behavior: smooth` `text-wrap: balance`

搜索框常驻顶部并保留查询词（受控 input）；即时搜索用 debounce（250～400ms）+ AbortController 取消过期请求。命中词高亮用 <mark> 样式区分。筛选器变化写入 URL query（可分享、可回退）。空关键词给引导态，无结果给换词建议与热门内容。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现搜索结果页。

先检查现有搜索接口与筛选组件，保持一致。
要求：
- 常驻搜索框（保留词、可清除）
- 筛选器与结果联动，状态同步到 URL
- 命中词高亮 + 结果计数
- 无结果空态设计
- 深浅色一致，键盘可访问
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个搜索结果页，包含搜索框、筛选器和结果列表。

**Design:** 创建文档站搜索页：顶部大搜索框（保留关键词、清除按钮、回车搜索）；左侧筛选器（类型复选、时间范围）；结果列表每条含标题（命中词高亮）、摘要两行、路径面包屑；顶部"约 128 条结果"计数；无结果时显示换词建议。响应式，移动端筛选器收进下拉。

**Implementation:** 用 React + Tailwind 实现搜索页：query 受控 + debounce 触发模拟过滤；结果数据驱动， 命中词分段高亮；筛选状态与 URL searchParams 同步；键盘上下键选择结果； 尊重 prefers-reduced-motion。不新增依赖。

## 相关概念

- [command-palette](/pages/command-palette) — 包含组件
- [filter-panel](/pages/filter-panel) — 包含组件
- [search-filtering](/pages/search-filtering) — 使用模式
- [pagination](/pages/pagination) — 包含组件
- [empty-state](/pages/empty-state) — 使用模式

## Sources

- [Nielsen Norman Group — Search Results](https://www.nngroup.com/articles/search-results-pages/)
- [W3C WAI — Search accessibility](https://www.w3.org/WAI/)

---

JSON: `/api/concept/pages/search.json` · 站点: /pages/search
