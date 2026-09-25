# 博客文章页 / Blog Post

> 页面 · `id: blog-post`

围绕单篇文章组织的阅读页：文章头给出标题、作者、发布时间与预计阅读时长，正文保持一行 45～75 字符的舒适行宽，侧栏或文首提供可跳转的目录，文末用作者卡与相关文章把读者留在站内。

**别名:** 博客文章页 · 文章详情页 · 单篇文章页 · 正文页 · 博客正文 · 文章内容页 · 读文章的页面

**分类:** Page / Content

## 适用场景

- 展示一篇有明确标题与作者的独立长文
- 正文较长，需要目录或进度提示
- 阅读后需要引导到相关文章或订阅

## 不适用场景

- 内容只是简短公告或卡片摘要
- 多篇内容需要并列比较（用列表页更合适）
- 文章以互动工具为主体而非文字

## 常见形式

- **标准文章** (Standard) — 单栏正文 + 页头元信息，最通用的阅读布局
- **长文带目录** (Long-form with TOC) — 侧栏常驻目录，随滚动高亮当前章节
- **教程步骤** (Tutorial) — 正文按步骤编号，配代码块与提示框

## 页面结构

1. **顶栏** — 站点导航与搜索，阅读中保持可达以便随时离开或查找。
2. **文章头** — 标题、作者、日期、预计阅读时长与主题标签，决定是否继续读。
3. **目录** — 长文必备，列出章节并可锚点跳转；窄屏折叠收起。
4. **正文** — 保持 45～75 字符行宽与合适行高，代码、引用、图片各有样式。
5. **作者卡** — 头像、简介与社交链接，为观点提供来源与信任。
6. **相关文章** — 文末推荐三到五篇，延长会话而不是让读者立刻离开。

## 实现要点

**CSS:** `max-width: 65ch` `line-height: 1.7` `position: sticky` `scroll-margin-top: 5rem` `text-wrap: pretty`

正文容器限制 max-width 为 45～75ch 并放大 line-height；目录用 position: sticky 常驻侧栏，锚点跳转前用 scroll-margin-top 预留吸顶顶栏高度。标题、代码与引用通过变量控制节奏；滚动进度可用 scroll-driven animation，并尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现博客文章页。

先检查现有排版样式、Markdown 渲染与目录组件，优先复用。
要求：
- 文章头元信息 + 正文 + 目录 + 作者卡 + 相关文章
- 正文 45～75ch 行宽，标题层级清晰
- 目录锚点可跳转并高亮当前章节
- 代码块可横向滚动，图片有 alt
- 尊重 prefers-reduced-motion，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个博客文章页，包含标题元信息、正文、目录和相关文章。

**Design:** 设计博客文章页：顶部细顶栏含返回与分享；文章头居中标题、作者头像与日期、阅读时长；正文单栏 65ch 行宽，标题层级清晰，代码块有底色；右侧 sticky 目录高亮当前章节；文末作者卡加三张相关文章卡。深浅色一致。

**Implementation:** 用 React + Tailwind 实现文章页：正文用 max-width 65ch、line-height 1.7；目录从标题生成锚点并用 IntersectionObserver 高亮；代码块保留横向滚动；分享按钮可复制链接；滚动进度条用 scroll-driven animation；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [avatar](/pages/avatar) — 包含组件
- [breadcrumb](/pages/breadcrumb) — 包含组件
- [progressive-disclosure](/pages/progressive-disclosure) — 使用模式
- [scroll-reveal](/pages/scroll-reveal) — 搭配使用
- [blog-index](/pages/blog-index) — 相似概念

## Sources

- [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
- [Nielsen Norman Group — Typography Terms](https://www.nngroup.com/articles/typography-terms-ux/)

---

JSON: `/api/concept/pages/blog-post.json` · 站点: /pages/blog-post
