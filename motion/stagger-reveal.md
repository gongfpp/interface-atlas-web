# 逐项浮现 / Stagger Reveal

> 动效 · `id: stagger-reveal`

一组元素不一起出现，而是按固定间隔依次淡入或上浮，像点名一样逐个到位。 间隔 40～120ms 即可让列表"有秩序地醒来"， 比整块淡入更有生命感，也比真实逐项加载等待感更低。

**别名:** 逐项浮现 · 列表交错出现 · 依次淡入 · 逐个加载出现 · 瀑布式出现

**分类:** Motion / Entrance

## 适用场景

- 列表、卡片网格、导航项首次进入视口
- 弹层内的成组内容（菜单项、通知列表）
- 强调"一批结果"的整体感与顺序

## 不适用场景

- 项数很多（超过 15 项，最后一项等到不耐烦）
- 高频操作界面（延迟即成本）
- 间隔过大（超过 150ms 显得拖沓做作）

## 常见形式

- **淡入上浮** (Fade-up) — 每项 translateY + opacity，最通用
- **缩放浮现** (Scale-in) — 从 0.96 放大到 1，卡片感更强
- **侧向滑入** (Slide-in) — 从一侧依次滑入，导航菜单常用

## 实现要点

**CSS:** `animation-delay: calc(index * 60ms)` `@keyframes fade-up` `opacity 0 → 1` `animation-fill-mode: both`

所有项共用同一组 keyframes，仅 animation-delay 按 index 递增（index * 40～120ms）， 必须配 animation-fill-mode: both 让首项在延迟期保持隐藏。 延迟与时长都要乘速度系数。 尊重 prefers-reduced-motion 时全部直接显示。

## 交给 Agent 的任务 Prompt

```text
为项目列表页添加逐项浮现入场。

先检查现有入场动画与滚动触发逻辑，保持一致。
要求：
- 统一 keyframes，仅用 animation-delay 交错（40～120ms）
- fill-mode both，避免延迟期闪现
- 进入视口触发一次，尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给卡片列表添加逐项浮现效果：进入视口时依次淡入上浮。

**Design:** 列表进入视口时，卡片依次淡入上浮，单项 400ms，项间延迟 70ms；整组在 1s 内完成；顺序与阅读顺序一致。

**Implementation:** 统一 keyframes（translateY(16px)+opacity 0 → 正常），每项 style={{ animationDelay: `${i * 0.07}s` }}，animation-fill-mode: both。用 IntersectionObserver 触发一次。reduced-motion 直接显示。

## 相关概念

- [scroll-reveal](/motion/scroll-reveal) — 相似概念
- [text-reveal](/motion/text-reveal) — 相似概念
- [card](/motion/card) — 应用于
- [menu](/motion/menu) — 应用于

## Sources

- [Material Design — Motion choreography](https://m2.material.io/design/motion/the-motion-system.html)

---

JSON: `/api/concept/motion/stagger-reveal.json` · 站点: /motion/stagger-reveal
