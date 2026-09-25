# 动效时长与缓动 / Motion Duration & Easing

> 基础 · `id: motion-duration`

动效时长是动画从开始到结束的时间，按交互类型分档：微反馈 100–150ms、标准过渡 200–300ms、强调入场 300–500ms。缓动决定加速减速的节奏，入场用 ease-out、退场用 ease-in。始终尊重 prefers-reduced-motion，把位移降级为淡入。

**别名:** 动效时长 · 动画时长 · 缓动曲线 · 动画快慢 · 动效快慢 · 弹跳顺不顺 · easing · duration and easing

**分类:** Motion / Foundation

## 适用场景

- 按钮、开关、卡片等元素的悬停、按下、状态切换
- 弹层、抽屉、面板的入场与退场
- 需要统一全站动效节奏、避免每个组件各写一个时长

## 不适用场景

- 用户开启 prefers-reduced-motion（应降级为短淡入或无动画）
- 关键操作等待反馈，动画拖慢到让人觉得卡顿
- 超过 500ms 的装饰性动画反复播放、抢占注意力

## 常见形式

- **微反馈** (Micro feedback) — 100–150ms，点按、悬停要立刻可感知
- **标准过渡** (Standard) — 200–300ms，展开、切换、淡入淡出
- **强调入场** (Emphasised) — 300–500ms，页面与全屏浮层入场

## Platform API

- `transition-duration`
- `transition-timing-function`
- `animation-duration`
- `cubic-bezier()`
- `prefers-reduced-motion`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| Material Design | [Duration & easing tokens](https://m3.material.io/styles/motion/overview) — 分档时长与标准缓动令牌 |
| Apple HIG | [Motion](https://developer.apple.com/design/human-interface-guidelines/motion) — 用动效表达层级与空间关系 |
| CSS | [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) — 直接控制过渡时长的属性 |

## 实现要点

**CSS:** `transition-duration: 200ms` `transition-timing-function: cubic-bezier(0.2, 0, 0, 1)` `animation-duration: 300ms` `@media (prefers-reduced-motion: reduce)` `transition-property: transform, opacity`

时长按交互类型分档并用变量统一（--motion-fast: 120ms; --motion-base: 240ms; --motion-slow: 400ms）。入场用 ease-out 或 cubic-bezier(0.2, 0, 0, 1)，退场用 ease-in，并让退场比入场略快。只动 transform 与 opacity，避免触发 layout。媒体查询 prefers-reduced-motion: reduce 下把位移改成 opacity 淡入并压到 150ms 内，或直接 transition: none。

## 交给 Agent 的任务 Prompt

```text
在当前项目中统一动效时长与缓动。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 定义快 / 标准 / 慢三档时长令牌与标准缓动曲线
- 只动 transform 与 opacity，退场比入场略快
- 在 prefers-reduced-motion 下把位移降级为短淡入或取消动画
保持现有项目视觉风格。不要新增不必要依赖。
沿用项目现有时长体系，避免逐组件各写一套。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 为项目定义统一的动效时长与缓动档位，让所有交互节奏一致。

**Design:** 动效规范：微反馈 100–150ms，标准过渡 200–300ms，强调入场 300–500ms，退场比入场快约 20%；缓动入场 ease-out、退场 ease-in、标准用 cubic-bezier(0.2, 0, 0, 1)；同一元素只动 transform 与 opacity；用户开启 prefers-reduced-motion 时去掉位移，只保留 ≤150ms 的淡入。

**Implementation:** 用 CSS 变量分档：--motion-fast: 120ms; --motion-base: 240ms; --motion-slow: 400ms，缓动 --ease-standard: cubic-bezier(0.2, 0, 0, 1)。元素写 transition: transform var(--motion-base) var(--ease-standard), opacity var(--motion-base) var(--ease-standard)。用 @media (prefers-reduced-motion: reduce) 覆盖为短淡入或 transition: none。不要给所有属性加 transition: all。

## 相关概念

- [reduced-motion](/foundation/reduced-motion) — 搭配使用
- [hover-lift](/foundation/hover-lift) — 搭配使用
- [page-transition](/foundation/page-transition) — 搭配使用
- [press-feedback](/foundation/press-feedback) — 搭配使用

## Sources

- [Material Design — Motion](https://m3.material.io/styles/motion/overview)
- [Apple HIG — Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [web.dev — Learn CSS Animations](https://web.dev/learn/css/animations)
- [MDN — easing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)

---

JSON: `/api/concept/foundation/motion-duration.json` · 站点: /foundation/motion-duration
