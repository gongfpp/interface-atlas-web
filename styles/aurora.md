# 极光渐变 / Aurora Gradient

> 风格 · `id: aurora`

用大面积流动渐变光斑营造氛围的视觉语言：青绿 紫 蓝 多色模糊色块在背景 中缓慢漂移融合，前景内容保持极简克制。色彩是主角——像极光一样柔和 跨 色相 渐次过渡，界面因此获得呼吸感与情绪温度。

**别名:** 极光渐变 · 极光风格 · 渐变光斑背景 · 流动光晕设计 · 那种绿紫渐变的模糊背景 · 大面积渐变光效 · Aurora Background · Mesh Gradient

**分类:** Style / Visual Language

## 适用场景

- 落地页 首屏 品牌页，需要第一眼氛围与情绪
- AI 创意工具类产品，渐变已成为其品类视觉符号
- 极简前景 + 需要一点温度的深浅色界面

## 不适用场景

- 数据密集工具界面，大面积渐变干扰信息读取
- 可访问性敏感场景，光斑上的文字对比度难保证
- 大量使用动画光斑时低端设备性能敏感

## 常见形式

- **静态网格渐变** (Static Mesh) — 一次成型的多点网格渐变，无动画
- **流动光斑** (Flowing Blobs) — 大 blur 色块缓慢漂移，动效极光
- **暗夜极光** (Dark Aurora) — 深空底色上更浓的光带，对比更强

## 开发规格

- **typography:** 无衬线白标题
- **color:** 暗夜底 #0D0B1E × 绿紫粉光斑
- **border:** 1px 半透明紫边框
- **shadow:** 深色大投影 + 光晕
- **spacing:** 悬浮卡层叠，间距宽松

## 实现要点

**CSS:** `background: radial-gradient` `filter: blur()` `@keyframes drift` `mix-blend-mode` `background-clip: text`

光斑三要素：2～4 个大型 radial-gradient 色块（直径为画布的 40%～80%）， blur(60px) 级别的重模糊，色相跨越 2～3 段（如青绿→紫→蓝）且彼此部分 重叠。前景内容置于光斑之上，用纯色文字或半透明白面板保证对比。动画 光斑只做位移与缩放的慢速漂移（20s+），时长乘 var(--demo-speed, 1)， 并在 prefers-reduced-motion 下静止。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用极光渐变（Aurora Gradient）实现一个氛围感首屏区块。

先检查现有 Design Token 与主题变量，光斑颜色做成主题可配置变量。
要求：
- 2～4 个 radial-gradient 模糊光斑，色相跨 2～3 段且部分重叠
- 前景极简：纯色文字或半透明面板保证对比度
- 光斑动画只做慢速 transform 漂移，时长乘 var(--demo-speed, 1)，
  并支持 prefers-reduced-motion 静止
- 支持深浅两套极光配色
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用极光渐变（Aurora Gradient）风格设计界面：背景由青绿 紫蓝多色模糊光斑 漂移融合，前景内容极简克制，氛围柔和有呼吸感。

**Design:** 极光渐变设计规范：浅色模式底 #F6F7FB，深色模式底 #0B0E1A；光斑 2～4 个 radial-gradient 色块（#5EEAD4 #818CF8 #C084FC 等），blur 60px 级别， 彼此重叠约 20%；前景文字纯色（深底用白 浅底用近黑），按钮可用同款 渐变填充；光斑动画只做 20s 以上的慢速位移缩放，尊重 prefers-reduced-motion。

**Implementation:** 用 CSS 实现极光背景：.aurora { position: relative; overflow: hidden; background: #0B0E1A; } .aurora::before { content: ''; position: absolute; inset: -20%; background: radial-gradient(40% 40% at 30% 30%, #5EEAD4aa, transparent 70%), radial-gradient(45% 45% at 70% 40%, #818CF8aa, transparent 70%), radial-gradient(40% 40% at 50% 80%, #C084FCaa, transparent 70%); filter: blur(60px); animation: aurora-drift 24s ease-in-out infinite alternate; } 动画只做 transform，时长乘 var(--demo-speed, 1)。

## 相关概念

- [glassmorphism](/styles/glassmorphism) — 相似概念
- [bento-grid](/styles/bento-grid) — 相似概念
- [minimalism](/styles/minimalism) — 相似概念
- [card](/styles/card) — 影响组件
- [landing-page](/styles/landing-page) — 搭配使用

## Sources

- [MDN — radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [Stripe — brand gradient practice](https://stripe.com/blog)

---

JSON: `/api/concept/styles/aurora.json` · 站点: /styles/aurora
