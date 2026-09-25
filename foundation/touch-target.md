# 触控目标 / Touch Target

> 基础 · `id: touch-target`

触控目标是手指能点中的可交互范围，不等于图标看起来多大。苹果 HIG 建议至少 44×44 CSS 像素，Material 建议 48dp；相邻目标之间还要留约 8px 间距，避免误触。视觉小图标可以用透明内边距或伪元素把热区撑大，而不用改变外观。

**别名:** 触控目标 · 点击热区 · 可点区域 · 按钮太小点不到 · 手指点得中的范围 · 点按热区 · touch target · tap target

**分类:** Accessibility / Interaction / Foundation

## 适用场景

- 任何需要手指或鼠标点击、拖动的可交互控件
- 图标按钮、关闭按钮、列表行等视觉尺寸偏小的元素
- 边缘或角落里的操作，容易和相邻目标一起点到

## 不适用场景

- 纯展示、不可点击的图标与装饰元素
- 桌面端密集数据表格内的单元格选择
- 把热区无节制扩大导致相邻目标重叠

## 常见形式

- **舒适大热区** (Comfortable) — 热区 44×44 起，主操作最稳妥
- **图标加内边距** (Padded icon) — 视觉 24px，靠透明 padding 撑到 44px
- **行内文字链** (Inline text link) — 用行高与内边距扩热区，不改视觉

## Platform API

- `min-height`
- `min-width`
- `padding`
- `touch-action`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| Apple HIG | [44×44 pt](https://developer.apple.com/design/human-interface-guidelines/accessibility) — 苹果建议的最小可点尺寸 |
| Material Design | [48×48 dp](https://m3.material.io/foundations/accessible-design/overview) — Material 建议的最小触控目标 |
| WCAG 2.2 | [Target Size (Minimum) — 24×24](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — WCAG 的合规底线，产品应做得更大 |

## 实现要点

**CSS:** `min-height: 44px` `min-width: 44px` `padding: 10px` `touch-action: manipulation` `aspect-ratio: 1`

给可交互元素设 min-width / min-height: 44px（或 48px），并在容器上用 gap 保证目标间距，而不是靠 margin 互相挤。图标视觉保持 24px，用 padding: 10px 把热区补到 44px；不方便加 padding 时用 ::before { content: ''; position: absolute; inset: -10px; } 扩展热区。onmouseover 出现的内容不算触控目标。触摸端加 touch-action: manipulation 去掉 300ms 双击缩放延迟。

## 交给 Agent 的任务 Prompt

```text
在当前项目中落实触控目标尺寸。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 所有可交互元素热区至少 44×44 CSS 像素，间距不少于 8px
- 小图标用内边距或伪元素扩展热区，不改变视觉尺寸
- 提供可见的按下与聚焦反馈，不依赖 hover
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 统一可交互控件的触控目标尺寸，让手指在手机上都能轻松点中。

**Design:** 触控目标规范：可点区域至少 44×44 CSS 像素（Material 48dp）；相邻目标之间留 8px 以上间距；视觉小于 44px 的图标用透明内边距或伪元素补足热区；默认图标 24px 配 10px 内边距达到 44px；列表行高不低于 44px；任何操作都不应只能 hover 触发。

**Implementation:** 用 min-height: 44px; min-width: 44px 给按钮、图标按钮和列表行兜底，容器用 display: flex; gap: 8px 控制间距。图标热区不足时用 padding 或 ::before 的负 inset 扩展，不要放大图标本身。用 :active / :focus-visible 给出命中反馈。检查所有触控目标在 320px 宽屏下不重叠。

## 相关概念

- [breakpoints](/foundation/breakpoints) — 相似概念
- [button](/foundation/button) — 搭配使用
- [fab](/foundation/fab) — 搭配使用
- [focus-ring](/foundation/focus-ring) — 搭配使用

## Sources

- [Apple HIG — Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Material Design — Accessible design](https://m3.material.io/foundations/accessible-design/overview)
- [W3C WAI — WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

---

JSON: `/api/concept/foundation/touch-target.json` · 站点: /foundation/touch-target
