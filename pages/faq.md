# 常见问题页 / FAQ Page

> 页面 · `id: faq`

把用户反复提出的问题按主题归组、可逐条展开的页面：用问题式标题降低查找成本，配合锚点、搜索或分类让答案自解释，并把仍未解决的人引向人工支持。它用内容替代重复的客服沟通。

**别名:** 常见问题 · 常见问题页 · 问答页 · 帮助问答 · 疑难解答 · 帮助中心问答 · 你问我答

**分类:** Page / Support

## 适用场景

- 用户咨询集中在少数常见问题
- 需要减少重复的客服工单
- 售前选型、计费与账号政策需要自助解答

## 不适用场景

- 每个问题都需要个性化排查
- 内容随版本频繁变更（用文档站更合适）
- 已有完整知识库或社区问答

## 常见形式

- **折叠问答** (Accordion) — 问题作标题，答案点击展开，一屏容纳更多
- **分类问答** (Categorized) — 先按主题分组或分段切换，再逐条展开
- **可搜索问答** (Searchable) — 顶部搜索即时过滤问题，适合条目很多时

## 页面结构

1. **标题与引导** — 一句说明这里能解决什么，并提示找不到时去哪。
2. **搜索** — 即时过滤问题标题，空结果给出人工入口。
3. **分类导航** — 按账号、计费、功能等主题分段或切换。
4. **问题列表** — 问题式标题，可逐条展开，展开状态可分享锚点。
5. **答案内容** — 先给结论，再给步骤，控制段落长度并链接相关条目。
6. **人工入口** — 页尾提供联系支持或提交工单，承接未解决的问题。

## 实现要点

**CSS:** `flex` `grid` `scroll-margin-top` `content-visibility: auto` `max-width: 72ch`

问题列表用 max-width 72ch 控制阅读行宽，分类用 grid 自适应排列。展开项给 scroll-margin-top，锚点跳转不被吸顶导航遮挡； 长列表可加 content-visibility auto 省渲染。手风琴用 button 加 aria-expanded 与 aria-controls，不要用纯 div 点击。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现常见问题页。

先检查现有内容组件、手风琴与设计 Token，优先复用。
要求：
- 搜索即时过滤问题标题，分类可切换
- 手风琴使用 aria-expanded 与 aria-controls
- 空结果给出人工支持入口
- 长列表滚动性能与锚点可用
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个常见问题页，包含标题、问题列表和可展开的答案。

**Design:** 设计一个常见问题页：顶部标题与搜索框，下方分类切换，问题列表可逐条展开，展开只保留一个或多个的规则要明确； 页尾提供联系支持入口，深浅色一致，移动端优先。

**Implementation:** 用 React 加 Tailwind 实现 FAQ：搜索框受控并即时过滤，分类切换驱动列表，手风琴用 aria-expanded 与 aria-controls； 空结果展示支持入口；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [accordion](/pages/accordion) — 包含组件
- [input](/pages/input) — 包含组件
- [filter-panel](/pages/filter-panel) — 包含组件
- [progressive-disclosure](/pages/progressive-disclosure) — 使用模式
- [documentation](/pages/documentation) — 相似概念

## Sources

- [Nielsen Norman Group — Accordions on Complex Content](https://www.nngroup.com/articles/accordions-complex-content/)
- [Nielsen Norman Group — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)

---

JSON: `/api/concept/pages/faq.json` · 站点: /pages/faq
