# 面包屑 / Breadcrumb

> 组件 · `id: breadcrumb`

用"首页 / 分类 / 子类 / 当前页"的层级路径表示用户在信息架构中所处的位置： 每个上级都可点击跳回，末项为当前页不可点。这是防止用户迷路成本最低的手段， 命名源自童话中沿途撒下用来标记归路的面包屑。常置于页面标题上方。

**别名:** 面包屑导航 · 路径导航 · 层级路径 · 位置导航 · 首页大于分类那种路径 · 网站路径条 · trail

**分类:** Navigation

## 适用场景

- 层级深于两层的内容型站点（文档、电商类目）
- 用户可能从搜索或外链直达深层页面
- 需要低成本的逐级回退路径

## 不适用场景

- 扁平单层的应用，面包屑只是噪音
- 无稳定层级的个性化信息流
- 移动端空间极紧且层级浅（可省略）

## 常见形式

- **文字型** (Text) — 纯文本链接 + 分隔符，最常见
- **带图标** (With icons) — 根节点用房子图标、项前加小图标
- **截断型** (Truncated) — 中间层级折叠为省略号，可展开

## Platform API

- `<nav aria-label="Breadcrumb">`
- `<ol>`
- `<li>`

## 实现要点

**CSS:** `flex` `white-space: nowrap` `overflow: hidden` `text-overflow: ellipsis`

用 nav[aria-label="面包屑"] + 有序列表实现，层级用 ol/li 表达；分隔符用 CSS ::before 或独立 span，勿放进链接的可点击区域。当前页加 aria-current="page" 且渲染为纯文本。过长时中间层级折叠为可展开的省略号， 容器单行省略。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现面包屑导航。

先检查现有路由结构，确认能否从路由元数据推导层级。
要求：
- nav + ol 语义结构，aria-label="面包屑"
- 上级可点击返回，当前页 aria-current="page" 且不可点
- 层级超过 5 层时中间折叠为可展开省略号
- 尊重 prefers-reduced-motion（展开无动画突变即可）
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个面包屑导航组件：显示"首页 / 分类 / 当前页"层级路径，上级可点击返回，末项为当前页。

**Design:** 创建面包屑：小号文字（12～13px），层级间用 "/" 或 ">" 分隔符；根节点带小房子 图标；上级为次级色链接、hover 变强调色；当前页为纯文本主色并加 aria-current。 层级很多时中间折叠为省略号。深浅色主题一致。

**Implementation:** 用 React 实现 Breadcrumb：nav + ol/li 语义结构；items 数据驱动，末项自动渲染 为纯文本并加 aria-current="page"；分隔符独立于链接；提供 maxItems 属性实现 中间省略折叠（点击展开）。单行溢出省略。无新增依赖。

## 相关概念

- [navbar](/components/navbar) — 相似概念
- [sidebar](/components/sidebar) — 相似概念
- [tabs](/components/tabs) — 相似概念
- [pagination](/components/pagination) — 相似概念
- [menu](/components/menu) — 相似概念

## 可搭配的风格

`minimalism` `editorial`

## Sources

- [WAI-ARIA Authoring Practices — Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [NN/g — Breadcrumbs](https://www.nngroup.com/articles/breadcrumbs/)

---

JSON: `/api/concept/components/breadcrumb.json` · 站点: /components/breadcrumb
