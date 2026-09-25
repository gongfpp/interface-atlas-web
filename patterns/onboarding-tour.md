# 新手引导 / Onboarding Tour

> 交互模式 · `id: onboarding-tour`

用"蒙层 + 聚光高亮 + 分步气泡"的方式带用户认识界面：每一步只露出一个关键区域并就地解释， 上一步/下一步与步骤指示器控制节奏，可随时跳过。它把功能说明放在功能发生的位置， 而不是让用户去文档里自己找。

**别名:** 新手引导 · 功能引导 · 引导蒙层 · 步骤引导 · 高亮引导 · 首次使用引导

**分类:** Navigation / Guidance

## 适用场景

- 界面有 3～5 个核心功能值得主动介绍
- 新版本上线，重要入口的位置或含义变了
- 目标用户多为首次访问，且功能不易自行发现

## 不适用场景

- 界面足够简单，用户自己探索更快
- 步骤太多太长，用户会连点跳过等于白做
- 每次进入都强制播放，应只在首次出现且可重看

## 常见形式

- **聚光引导** (Spotlight) — 蒙层挖洞高亮目标区域，注意力最聚焦
- **气泡序列** (Tooltip sequence) — 依次弹出说明气泡，不打断整页
- **任务清单** (Checklist) — 侧边清单列出待办引导，用户自选节奏

## 实现要点

**CSS:** `position: absolute` `box-shadow` `z-index` `transition`

蒙层常用巨大 box-shadow（目标元素套 ring/box-shadow 实现挖洞感）或四块遮罩拼出洞口； 气泡按目标元素 getBoundingClientRect 定位到上下左右。步骤状态用 useState 索引驱动， 支持 Esc 关闭与点击蒙层跳过。过渡尊重 prefers-reduced-motion，直接切换无动画。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现新手引导（Onboarding Tour）。

先检查现有 tooltip/popover 组件，气泡样式优先复用。
用途：工作台首次访问的功能介绍。
要求：
- 3～5 步，每步聚光一个关键区域并就地解释
- 支持上一步/下一步、步骤指示、随时跳过
- 只在首次访问自动出现，提供重播入口
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个新手引导（Onboarding Tour）演示，分步高亮界面关键区域并配说明气泡。

**Design:** 创建新手引导演示。要求：模拟界面含 3 个关键区域，蒙层聚光当前步骤目标，气泡就近解释功能； 提供上一步/下一步、步骤圆点与"跳过引导"按钮；结束后可点"重播引导"再次演示。

**Implementation:** 用 React 实现 Onboarding Tour：步骤数组保存目标选择器与文案，useState 记录当前步； 目标元素加高亮 ring 与放大 box-shadow 模拟挖洞，气泡绝对定位在目标旁。支持 Esc 跳过， 结束后提供重播按钮。动画尊重 prefers-reduced-motion。

## 相关概念

- [tooltip](/patterns/tooltip) — 搭配使用
- [popover](/patterns/popover) — 搭配使用
- [modal](/patterns/modal) — 搭配使用
- [progressive-disclosure](/patterns/progressive-disclosure) — 相似概念
- [empty-state](/patterns/empty-state) — 相似概念

## 可搭配的风格

`minimalism` `bento-grid`

## Sources

- [Nielsen Norman Group — Onboarding](https://www.nngroup.com/articles/first-two-days-onboarding/)
- [Material Design — Feature discovery](https://m3.material.io/foundations/interactive-patterns/feature-discovery/overview)

---

JSON: `/api/concept/patterns/onboarding-tour.json` · 站点: /patterns/onboarding-tour
