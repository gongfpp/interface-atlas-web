# 文字显现 / Text Reveal

> 动效 · `id: text-reveal`

把标题或段落按行、按词逐个显现，而不是整块淡入。文字"被说出来"的节奏感让信息有先后与分量， 常用于落地页首屏大标题、章节开场与滚动叙事， 通常进入视口时触发一次。

**别名:** 文字一段一段出现 · 文字逐行出现 · 标题文字渐显 · 一行一行浮现 · 打字机出现

**分类:** Motion / Text

## 适用场景

- 落地页首屏大标题、品牌口号需要登场感
- 滚动到视口时逐段显现，引导阅读顺序
- 编辑排版类页面，文字本身是主角

## 不适用场景

- 正文段落逐词动画（阅读被拖慢，用户会烦）
- 需要快速扫读的界面（后台、表格、文档）
- 一屏多组文字同时做入场动画（互相打架）

## 常见形式

- **行遮罩上滑** (Line mask) — 文字从遮挡条下方向上滑出，电影字幕感
- **按词浮现** (Word stagger) — 单词逐个上浮淡入，节奏更快
- **打字机** (Typewriter) — 逐字出现加闪烁光标，终端与对话感

## 实现要点

**CSS:** `overflow: hidden` `@keyframes translateY 100% → 0` `animation-delay stagger` `clip-path`

行遮罩法：每行外层 overflow:hidden，内层从 translateY(100%) 过渡到 0，animation-delay 逐行递增 80～120ms， 比打字机更快读完。无动画时文字必须直接可见——初始 opacity:0 只能写在 keyframes 里； 尊重 prefers-reduced-motion 直接显示全文。

## 交给 Agent 的任务 Prompt

```text
为当前项目落地页的首屏标题添加逐行文字显现。

先检查现有入场动画与令牌，保持节奏一致。
要求：
- 行遮罩上滑，行间延迟 80～120ms，600ms 内完成
- 只在进入视口后触发一次
- 无 JS 时文字可直接可见（渐进增强）
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给首屏大标题添加文字显现效果：按行依次上浮出现。

**Design:** 首屏标题分三行，每行从遮罩下方向上滑入，600ms ease-out，行间延迟 100ms；动画只触发一次；无动画时文字直接可见。

**Implementation:** 纯 CSS：外层 overflow:hidden，内层 @keyframes 从 translateY(100%) 到 0，animation-delay: calc(index * 100ms)。动画结束保持终态（forwards）。加 @media (prefers-reduced-motion: reduce) 直接显示。

## 相关概念

- [scroll-reveal](/motion/scroll-reveal) — 相似概念
- [stagger-reveal](/motion/stagger-reveal) — 相似概念
- [number-counter](/motion/number-counter) — 相似概念
- [editorial](/motion/editorial) — 搭配使用
- [landing-page](/motion/landing-page) — 搭配使用

## Sources

- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/api/concept/motion/text-reveal.json` · 站点: /motion/text-reveal
