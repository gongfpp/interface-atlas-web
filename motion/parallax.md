# 视差滚动 / Parallax

> 动效 · `id: parallax`

滚动时不同图层以不同速度移动——背景慢、前景快—— 用速度差制造纵深。 是"2D 里伪造 3D"最便宜的手段， 常见于首屏大图与滚动叙事页面。

**别名:** 视差滚动 · 背景慢速滚动 · 分层滚动 · 视差效果

**分类:** Motion / Depth

## 适用场景

- 首屏大图或插画需要纵深与电影感
- 滚动叙事页面，图层分段讲述
- 装饰性背景纹理缓慢移动

## 不适用场景

- 长文阅读页面（滚动与文字错位致晕）
- 移动端大规模视差（性能差且眩晕）
- 视差影响可读性或遮挡操作目标

## 常见形式

- **背景减速** (Slow background) — 背景以 0.3～0.5 倍速滚动，最常用
- **多层深度** (Multi-layer) — 三层以上不同速率，纵深更强
- **滚动驱动动画** (Scroll-driven) — animation-timeline: scroll() 绑定滚动进度

## 实现要点

**CSS:** `transform: translateY(scrollY * factor)` `rAF throttle` `animation-timeline: scroll()` `will-change: transform`

传统法监听 scroll，在 rAF 里对每层执行 translateY(scrollTop * factor)， factor 小于 1 为慢层（背景 0.3、前景 1.2）； 现代法用 CSS scroll-driven animations（animation-timeline: scroll()）。 只动 transform 走合成层； 移动端与 prefers-reduced-motion 默认关闭。

## 交给 Agent 的任务 Prompt

```text
为项目首屏添加视差滚动效果。

先检查首屏结构与滚动容器，确认性能预算。
要求：
- 分层不同速率，只动 transform（合成层）
- rAF 节流或 CSS scroll-timeline 实现
- 不影响可读性与滚动性能（避免 scroll 监听重排）
- 移动端与 reduced-motion 默认关闭
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给首屏添加视差滚动：背景图比前景慢速移动。

**Design:** 首屏分三层：远景 0.3 倍速、中景 0.6 倍速、前景 1 倍速，滚动时速度差制造纵深；装饰层不影响可读性。

**Implementation:** 监听 scroll 容器，rAF 内对每层 style.transform = translateY(scrollTop * factor)；背景层加 will-change: transform。或用 CSS：animation-timeline: scroll() + keyframes 位移。reduced-motion 与触屏默认静态。

## 相关概念

- [scroll-reveal](/motion/scroll-reveal) — 相似概念
- [landing-page](/motion/landing-page) — 搭配使用
- [editorial](/motion/editorial) — 搭配使用
- [aurora](/motion/aurora) — 搭配使用

## Sources

- [MDN — scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)

---

JSON: `/api/concept/motion/parallax.json` · 站点: /motion/parallax
