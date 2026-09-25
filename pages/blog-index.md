# 博客列表页 / Blog Index

> 页面 · `id: blog-index`

按时间或主题聚合文章的内容索引页：顶部先给一条编辑推荐的头条，再用卡片流或列表铺开全部文章，每项含题图、标题、摘要、分类与日期；分类导航与搜索负责收窄范围，分页或无限滚动负责继续加载。

**别名:** 博客列表页 · 文章列表 · 博客首页 · 资讯列表页 · 文章列表页 · 博客目录 · blog 首页

**分类:** Page / Content

## 适用场景

- 站点有持续更新的文章或资讯
- 用户需要按主题、标签或时间浏览
- 希望突出少数重点文章

## 不适用场景

- 只有零星几条静态内容
- 内容需要强检索而非浏览（用搜索结果页更合适）
- 单篇文章本身就是完整产品页

## 常见形式

- **卡片网格** (Card Grid) — 图文卡片等高排列，题图统一比例，适合视觉型内容
- **紧凑列表** (Compact List) — 只留标题、摘要与日期，一屏信息量最大
- **头条英雄区** (Featured Hero) — 顶部大图推荐一篇，下方退回常规列表

## 页面结构

1. **顶栏** — 站点导航、搜索入口与订阅按钮，保持全站一致。
2. **头条推荐** — 一条大图或加大标题的置顶文章，占首屏最强视觉权重。
3. **分类导航** — 横向标签或分类链接，切换后列表即时过滤。
4. **文章列表** — 卡片或列表项重复排列，每项包含题图、标题、摘要与元信息。
5. **分页** — 页码或「加载更多」，也可换用无限滚动。
6. **订阅区** — 页尾邮箱收集，把一次性访客转成回访读者。

## 实现要点

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))` `gap` `aspect-ratio: 16 / 9`

列表容器用 grid 自适应列数，卡片内部用 flex 纵向排布题图与文本；题图统一 aspect-ratio 防止高度跳动。头条在 DOM 中排在列表之前，保证键盘与读屏顺序正确；分页保留真实链接，加载更多用按钮并给 aria-live 反馈。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现博客列表页。

先检查现有路由、卡片与分页组件，优先复用。
要求：
- 头条推荐 + 分类导航 + 文章列表 + 分页
- 分类切换即时过滤，状态可深链
- 题图固定比例并懒加载
- 键盘可达，尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个博客列表页，包含头条推荐、分类导航和文章卡片列表。

**Design:** 设计内容博客列表页：吸顶顶栏含搜索与订阅按钮；顶部一条大图头条；分类标签横向排列，选中态用强调色；下方三列卡片网格，每张含 16:9 题图、标题、两行摘要、分类与日期；底部分页。深浅色一致，悬停轻微抬升。

**Implementation:** 用 React + Tailwind 实现博客列表：卡片用 grid auto-fill 响应式排列；分类切换用受控状态过滤列表；题图统一 aspect-ratio 并懒加载；分页链接可深链；加载更多保留焦点并给 aria-live 反馈；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [card](/pages/card) — 包含组件
- [pagination](/pages/pagination) — 包含组件
- [infinite-scroll](/pages/infinite-scroll) — 使用模式
- [search-filtering](/pages/search-filtering) — 使用模式
- [blog-post](/pages/blog-post) — 相似概念

## Sources

- [MDN — CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [web.dev — Learn CSS: Grid](https://web.dev/learn/css/grid)
- [Nielsen Norman Group — F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

---

JSON: `/api/concept/pages/blog-index.json` · 站点: /pages/blog-index
