# 搜索筛选 / Search Filtering

> 交互模式 · `id: search-filtering`

用即时过滤把大列表缩到与当前输入相关的一小部分：用户在搜索框敲字，列表随之实时收窄， 并显示命中数量与空结果提示。它把"查找"变成"修剪"，不用提交、不用等跳转，反馈就在眼前。

**别名:** 搜索筛选 · 列表过滤 · 即时搜索 · 输入即搜 · 关键字过滤 · 筛选列表

**分类:** Search / Navigation

## 适用场景

- 列表条目在几十到几百条，一次加载即可全量过滤
- 用户记得目标的部分名称或标签，扫视比翻页快
- 设置、通讯录、组件库等查找型页面

## 不适用场景

- 数据在海量服务端集合上，必须走后端搜索
- 条目本身无明显关键词可匹配
- 需要复杂多维条件组合，应交给筛选面板

## 常见形式

- **即时过滤** (Instant) — 输入即过滤，无提交按钮
- **标签筛选** (Filter chips) — 点标签按类目过滤，可与搜索叠加
- **命中高亮** (Highlight) — 匹配片段标亮，帮助确认为什么命中

## 实现要点

**CSS:** `transition` `mark` `:placeholder-shown` `background-color`

受控输入 + useMemo 过滤（大小写不敏感的 includes 起步），列表项配 transition 或淡入。 显示命中数；零命中展示空状态与清除按钮；命中片段用 mark 或强调色标亮。输入加 type="search" 与 aria-label，防抖仅在触发远端请求时才需要。尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现搜索筛选（Search Filtering）。

先检查现有列表与搜索输入组件，优先复用。
用途：设置页的配置项查找。
要求：
- 输入即时过滤，无提交按钮
- 显示命中数量，空结果给空状态与清除入口
- 命中片段高亮
- 不新增搜索类依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个搜索筛选（Search Filtering）演示，在输入框打字时列表即时过滤并显示命中数量。

**Design:** 创建搜索筛选演示。要求：搜索框实时过滤组件列表，命中片段高亮；显示"共 N 条命中"； 无结果时展示空状态与一键清除；过滤变化有轻微淡入过渡；输入框带清除按钮。

**Implementation:** 用 React 实现 Search Filtering：useState 保存关键词，useMemo 做大小写不敏感过滤， 命中片段用 split + mark 高亮。列表项显示名称与标签，空结果渲染空状态组件。 不引入搜索库，动画尊重 prefers-reduced-motion。

## 相关概念

- [filter-panel](/patterns/filter-panel) — 搭配使用
- [command-palette](/patterns/command-palette) — 搭配使用
- [input](/patterns/input) — 搭配使用
- [empty-state](/patterns/empty-state) — 相似概念
- [infinite-scroll](/patterns/infinite-scroll) — 相似概念

## 可搭配的风格

`minimalism`

## Sources

- [Nielsen Norman Group — Filtering](https://www.nngroup.com/articles/filters-vs-facets/)
- [Material Design — Search](https://m3.material.io/components/search-bar/overview)

---

JSON: `/api/concept/patterns/search-filtering.json` · 站点: /patterns/search-filtering
