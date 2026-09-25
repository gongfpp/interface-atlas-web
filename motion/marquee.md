# 跑马灯 / Marquee

> 动效 · `id: marquee`

一条内容带在水平方向匀速循环滚动，首尾无缝衔接。 用于 logo 墙、合作方名单、公告与促销横幅——用"连续流动"表达数量多与不间断， 而不是引导用户逐条读完。

**别名:** 横向滚动广告位 · 跑马灯 · 无限滚动条带 · 循环滚动横幅 · 滚动字幕

**分类:** Motion / Decoration

## 适用场景

- 合作方/logo 墙，展示"很多谁在用我们"
- 公告条、促销横幅的循环展示
- 内容远超容器宽度且无需逐条阅读

## 不适用场景

- 用户必须读完的关键信息（读不完就焦虑）
- 需要停顿细看、可交互的条目
- 移动端窄屏塞长条带（速度感知更快更晕）

## 常见形式

- **无缝拼接** (Seamless) — 内容复制两份位移 -50% 循环，首尾无接缝
- **悬停暂停** (Hover pause) — hover 时 animation-play-state: paused 方便查看
- **反向双条** (Reverse pair) — 两条反向滚动，制造张力，编辑感首屏常用

## 实现要点

**CSS:** `overflow: hidden` `@keyframes translateX 0 → -50%` `linear infinite` `animation-play-state: paused`

把内容复制两份放进 flex 容器，animation: marquee Xs linear infinite，keyframes 到 translateX(-50%)， 两份内容宽度一致才无缝。时长 15～40s 视内容量而定，匀速不缓动。 hover 暂停用 animation-play-state；尊重 prefers-reduced-motion 改为静态可横向滚动。

## 交给 Agent 的任务 Prompt

```text
为项目落地页添加合作方 logo 跑马灯。

先检查现有 logo 资源与间距令牌。
要求：
- 内容复制两份实现无缝循环，匀速不缓动
- 悬停暂停；聚焦时也暂停（可访问性）
- 装饰属性：aria-hidden，不进入无障碍阅读流
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 添加一个跑马灯：合作方 logo 横向匀速循环滚动。

**Design:** 合作方条带以 30s 匀速循环滚动，内容复制两份无缝衔接，悬停暂停；灰度 logo、间距一致；不作为信息主通道。

**Implementation:** 纯 CSS：外层 overflow:hidden，内层 flex 内放两份相同内容，animation: marquee 30s linear infinite，@keyframes marquee 到 translateX(-50%)。hover 暂停：animation-play-state: paused。加 prefers-reduced-motion 降级为静态滚动。

## 相关概念

- [editorial](/motion/editorial) — 搭配使用
- [landing-page](/motion/landing-page) — 搭配使用
- [scroll-reveal](/motion/scroll-reveal) — 相似概念
- [text-reveal](/motion/text-reveal) — 相似概念

## Sources

- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/api/concept/motion/marquee.json` · 站点: /motion/marquee
