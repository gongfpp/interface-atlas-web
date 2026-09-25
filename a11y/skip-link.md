# 跳过链接 / Skip Link

> 无障碍 · `id: skip-link`

页面第一个可聚焦元素，通常是视觉上隐藏的链接；键盘用户按下第一个 Tab 就能看见它，激活后直接跳到主内容区，不必逐个穿过顶部导航链接。长导航站点的必备逃生口，WCAG 称之为「跳过区块」。

**别名:** 跳过导航 · 跳到主内容 · 跳过链接 · 一键跳正文 · skip nav · skip navigation

**分类:** Accessibility / Navigation

## 名词辨析

跳过链接不是「返回顶部」——跳过链接在文档流最前、服务键盘用户跳过导航；返回顶部出现在长页底部，服务滚动浏览者。

## 适用场景

- 顶部导航链接超过 5 个，且每页重复出现
- 单页应用路由切换后焦点需要有处可去
- 页头含搜索、登录、语言切换等大量可聚焦项

## 不适用场景

- 导航只有两三个链接，跳过收益小于复杂度
- 把「跳过」做成页头第一个常驻菜单项而不是隐藏链接
- 跳过目标没有 tabindex="-1"，锚点落点不可聚焦

## 常见形式

- **左上角芯片** (Corner chip) — 聚焦时浮现在左上角，最常见
- **全宽横条** (Full-width bar) — 聚焦时横贯页头，更难错过
- **行内常驻** (Persistent inline) — 始终可见的小字链接，代价是占一条视觉行

## Platform API

- `<a href="#main">`
- `tabindex`
- `landmark roles`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| WCAG | [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks) |
| WebAIM | [Skip Navigation](https://webaim.org/techniques/skipnav/) |

## 实现要点

**CSS:** `clip-path` `:focus` `position: absolute` `scroll-margin-top`

隐藏用 position:absolute + clip-path:inset(50%)（或 left:-9999px），:focus 时恢复到视口内并给足对比度；目标区 main 加 tabindex="-1" 并 scroll-margin-top 抵消吸顶页头。放在 <body> 最前、页头之前。SPA 可在路由切换后用它归还焦点。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现跳过链接。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 链接位于文档流最前，视觉隐藏、聚焦可见
- 激活后焦点与滚动位置落到主内容地标
- 与现有页头/导航结构集成，不改变视觉稿
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 给站点加一个跳过链接：第一个 Tab 就能跳过顶部导航直达主内容。

**Design:** 页头之前放一个默认隐藏的链接「跳到主内容」，聚焦时出现在左上角、强调色底、对比度达标；激活后焦点落到主内容区，页面不再逐个经过导航项。

**Implementation:** <a href="#main" class="skip-link">跳到主内容</a> 置于 body 首位；CSS 隐藏 clip-path:inset(50%)，:focus 时 clip-path:none + position:fixed 左上角。<main id="main" tabindex="-1">。激活后可选 main.focus() 让读屏继续朗读。

## 相关概念

- [keyboard-navigation](/a11y/keyboard-navigation) — 搭配使用
- [navbar](/a11y/navbar) — 搭配使用
- [focus-ring](/a11y/focus-ring) — 搭配使用

## 容易混淆

- [navbar](/a11y/navbar) — navbar 是被跳过的长导航本身，不是跳过机制；把「跳过导航」塞成 navbar 第一项就失去了意义。

## Sources

- [WCAG 2.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks)
- [WebAIM — Skip Navigation](https://webaim.org/techniques/skipnav/)

---

JSON: `/api/concept/a11y/skip-link.json` · 站点: /a11y/skip-link
