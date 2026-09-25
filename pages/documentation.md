# 文档页 / Documentation Page

> 页面 · `id: documentation`

以阅读为中心的长驻内容页面：一侧是可折叠的文档树导航，正文栏承载标题层级、段落、 代码块与提示框，宽屏下再加页内目录（TOC）标示当前阅读位置。页面靠永久链接与 上一页/下一页串联成站，搜索是第一入口，结构稳定到可以背下来。

**别名:** 文档站 · 帮助文档 · 开发者文档 · 使用手册 · 说明文档 · API 文档 · 帮助中心页面

**分类:** Page / Content

## 适用场景

- 产品文档、API 参考、教程手册
- 内容长期沉淀、需要稳定结构与会深链
- 读者边读边操作、需要代码可复制

## 不适用场景

- 时效性强的营销内容（用落地页或博客更合适）
- 需要频繁协作编辑的内容（用编辑器或知识库工具）
- 纯展示型图文页面

## 常见形式

- **三栏文档** (Three-column Docs) — 文档树 + 正文 + 页内目录，桌面端标配
- **侧栏文档** (Sidebar Docs) — 文档树 + 正文两栏，中屏友好
- **API 参考** (API Reference) — 左描述右代码块的双栏条目式排版
- **单页手册** (Single-page Manual) — 全部章节纵排一页，靠目录跳转

## 页面结构

1. **文档树导航** — 按版本与章节分组的左侧导航，可折叠、可搜索。
2. **正文** — 标题层级清晰、段落短，锚点可分享。
3. **代码块** — 语法高亮 + 一键复制，标明语言与文件名。
4. **页内目录** — 长文右侧目录，滚动高亮当前小节。
5. **上下篇** — 按阅读顺序串联，降低跳转成本。

## 实现要点

**CSS:** `grid` `grid-template-columns: 240px minmax(0, 1fr) 180px` `position: sticky` `overflow-x: auto`

三栏用 grid（240px / 1fr / 180px），中屏隐藏 TOC、移动端文档树转为抽屉。 正文最大宽度限制在 70ch 左右保证可读性；代码块横向滚动 + 一键复制按钮； TOC 用 IntersectionObserver 高亮当前章节；每页固定 slug 作为永久链接， 底部渲染 Prev/Next。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现文档页。

先检查现有路由、Markdown 管线与 sidebar 组件，保持一致。
要求：
- 三栏布局（树 / 正文 / TOC），响应式降级
- 代码块复制按钮、提示框等正文组件
- TOC 滚动联动高亮
- Prev/Next 与 slug 深链
- 深浅色一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个文档页，包含侧栏文档树、正文和页内目录。

**Design:** 创建三栏文档页：左侧文档树（分组 + 当前项高亮）；正文含面包屑、H1、段落、带语言标签与复制按钮的代码块、蓝色提示框；右侧 sticky 页内目录（当前节高亮）；底部上一页/下一页卡。移动端文档树收进抽屉、TOC 隐藏。

**Implementation:** 用 React + Tailwind 实现文档页：文档树数据驱动（{group, items}）+ 受控展开； Markdown 渲染层产出标题锚点；TOC 用 IntersectionObserver 联动高亮； 代码复制用 navigator.clipboard 并给成功反馈；路由按 slug 深链。不新增依赖。

## 相关概念

- [sidebar](/pages/sidebar) — 包含组件
- [breadcrumb](/pages/breadcrumb) — 包含组件
- [command-palette](/pages/command-palette) — 包含组件
- [tabs](/pages/tabs) — 包含组件
- [alert](/pages/alert) — 包含组件

## Sources

- [Diátaxis documentation framework](https://diataxis.fr/)
- [MDN Web Docs — Writing guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines)

---

JSON: `/api/concept/pages/documentation.json` · 站点: /pages/documentation
