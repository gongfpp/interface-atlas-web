# 帮助中心 / Help Center

> 页面 · `id: help-center`

把产品文档、常见问题与联系入口收拢到一处的自助支持页面：顶部搜索先猜意图， 主体按主题分组文章并按热度排序，底部保留联系客服与提交工单的兜底路径。 目标是让用户在打扰人工之前先自己解决问题。

**别名:** 帮助中心 · 帮助页 · 帮助文档 · 客服帮助页 · 常见问题页 · FAQ 页 · 说明书页面 · 怎么用的页面

**分类:** Page / Support

## 适用场景

- 用户遇到问题先自行查找答案
- 支持量需要靠文档分流
- 内容需按产品模块长期维护

## 不适用场景

- 需要实时人工介入的紧急事故（用在线客服或热线）
- 只有几条零散说明（用页面内提示或工具提示）
- 面向公众的营销介绍（用落地页）

## 常见形式

- **门户型** (Help Portal) — 搜索 + 分类卡片，覆盖最完整
- **常见问题** (FAQ) — 折叠问答列表，轻量直接
- **文档型** (Docs Hub) — 侧栏目录 + 正文，适合长文档

## 页面结构

1. **搜索区** — 一句话说明 + 大搜索框，输入即联想文章标题。
2. **主题分类** — 按产品模块分组的入口卡片，配图标与文章数。
3. **文章列表** — 分类下按热度与更新时间排列的条目。
4. **热门内容** — 高频问题的快捷链接，缩短查找路径。
5. **联系支持** — 兜底入口，转在线客服或提交工单。
6. **页脚** — 服务状态、社区与法律链接，收束整页。

## 实现要点

**CSS:** `grid` `flex` `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` `position: sticky`

搜索区置顶并保持吸顶，输入即过滤文章标题（debounce 250ms）；主题分类用 auto-fit 卡片网格， 窄屏降为单列。文章列表与热门区用两列布局；联系支持做成整行强调块收口。 搜索无结果时给热门词建议与联系入口，而不是空白。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现帮助中心页面。

先检查现有文档数据源、搜索组件与折叠组件，优先复用。
要求：
- 顶部搜索区 + 主题分类网格 + 文章列表 + 联系支持
- 搜索实时过滤文章并高亮命中词
- 常见问题用可折叠列表
- 无结果时给热门词与联系入口
- 响应式，键盘可访问，深浅色一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个帮助中心页面，包含搜索框、主题分类和常见问题列表。

**Design:** 创建产品帮助中心：顶部居中大搜索框与一句说明；下方按模块的主题卡片网格（图标 + 标题 + 文章数）； 再往下是文章列表与「热门文章」侧栏；常见问题用可折叠问答；底部整行「联系客服 / 提交工单」块。 搜索实时过滤并高亮命中词；无结果时给热门词与联系入口。响应式，深浅色一致。

**Implementation:** 用 React + Tailwind 实现帮助中心：搜索词受控并 debounce 过滤文章；命中词分段高亮； 分类卡片用 grid auto-fit；FAQ 折叠维护展开集合；主题与搜索状态同步到 URL query； 空结果展示热门词；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [accordion](/pages/accordion) — 包含组件
- [card](/pages/card) — 包含组件
- [search-filtering](/pages/search-filtering) — 使用模式
- [progressive-disclosure](/pages/progressive-disclosure) — 使用模式
- [empty-state](/pages/empty-state) — 使用模式

## Sources

- [Nielsen Norman Group — Help and documentation](https://www.nngroup.com/articles/help-and-documentation/)
- [Apple Human Interface Guidelines — Searching](https://developer.apple.com/design/human-interface-guidelines/searching)

---

JSON: `/api/concept/pages/help-center.json` · 站点: /pages/help-center
