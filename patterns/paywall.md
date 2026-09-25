# 付费墙 / Paywall

> 交互模式 · `id: paywall`

在内容或功能达到门槛后阻止继续访问，要求付费或订阅才能解锁。可硬性截断、按次数计量，或用预览加升级提示软性引导。它把价值展示与付费决策接在一起，关键是先让用户看清能获得什么，再谈付费。

**别名:** 付费墙 · 收费墙 · 会员墙 · 订阅墙 · 看一半要钱 · paywall · upgrade wall · subscription gate

**分类:** Commerce / Content

## 适用场景

- 内容或功能有明确付费价值，且免费部分足以体验
- 订阅制产品需要在关键节点推动升级
- 用量可计量（篇数、次数、席位）适合按量设门槛

## 不适用场景

- 免费区太少，用户无法判断价值就先被拦住
- 一次性买断工具用订阅墙，预期错位
- 支持文档、法律条款等本该公开的内容

## 常见形式

- **硬性截断** (Hard wall) — 到点即停，不付费完全看不到后续
- **计量限制** (Metered limit) — 免费若干篇/次，用完才拦，配用量提示
- **升级提示** (Upgrade teaser) — 内容虚化预览 + 升级按钮，软性引导

## 实现要点

**CSS:** `mask-image` `backdrop-filter` `gradient` `position`

预览区正常渲染前 N 段，门槛处用渐变遮罩或 mask-image 淡出，CTA 覆盖其上。计量状态存 localStorage 或服务端，靠近上限时提前提示。服务端仍需拦截未付费请求，前端遮罩只是体验层。 入场过渡时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现付费墙。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 免费预览足以体验价值，门槛处清晰说明能获得什么
- 升级 CTA 主操作唯一，价格与条款可发现
- 服务端仍需拦截未付费请求，前端遮罩只是体验层
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个付费墙（Paywall）演示：文章读到一半提示订阅才能继续。

**Design:** 创建付费墙演示。要求：文章前两段可读，第三段起渐变虚化遮罩；遮罩上放升级标题、价格与订阅按钮；顶部显示本月免费额度用量；支持深浅色主题。

**Implementation:** 用 React + CSS mask/gradient 实现 Paywall：正文数组截取 previewCount 段；门槛区绝对定位 渐变遮罩 + CTA；计量用 useState 模拟额度递减。遮罩不挡键盘阅读顺序，提供"了解更多"链接。 动画时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 相关概念

- [progressive-disclosure](/patterns/progressive-disclosure) — 搭配使用
- [pricing](/patterns/pricing) — 搭配使用
- [signup](/patterns/signup) — 搭配使用
- [empty-state](/patterns/empty-state) — 相似概念

## Sources

- [Apple HIG — In-App Purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase)
- [Nielsen Norman Group — Paywalls](https://www.nngroup.com/articles/paywalls/)
- [Material Design — Buttons](https://m3.material.io/components/buttons/overview)

---

JSON: `/api/concept/patterns/paywall.json` · 站点: /patterns/paywall
