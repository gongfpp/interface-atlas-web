# 新手引导 / Onboarding

> 页面 · `id: onboarding`

用分步流程把新用户从首次进入带到完成第一个关键动作的页面：通过简短说明、样例与进度提示降低陌生感，并在合适时机引导用户开始操作，而不是一次塞入全部功能。它决定用户对产品的第一印象与留存意愿。

**别名:** 新手引导 · 引导流程 · 新手教程 · 第一次用怎么玩 · 上手引导 · 首次使用引导 · onboarding

**分类:** Page / Onboarding

## 适用场景

- 产品首次上手，需要教会核心操作
- 新功能上线，需要引导老用户迁移
- 多步骤设置流程需要降低放弃率

## 不适用场景

- 高频复访的老用户日常操作
- 有清晰导航、功能自解释的简单工具
- 每次启动都强制弹出的打断式引导

## 常见形式

- **分步导览** (Step Tour) — 遮罩高亮加逐步气泡，聚焦当下要操作的位置
- **任务清单** (Checklist) — 列出上手任务，完成一项勾一项，可随时回来
- **实操引导** (Interactive Walkthrough) — 让用户直接完成一次真实操作来学习

## 页面结构

1. **欢迎页** — 一句话价值主张加开始按钮，说明马上能获得什么。
2. **步骤导览** — 每次只讲一个动作，遮罩聚焦目标并给出可跳过的说明。
3. **任务清单** — 三到五个上手任务，勾选进度可见，离开后能继续。
4. **完成反馈** — 完成后跳到第一个真实任务或给示例，避免停在空白页。

## 实现要点

**CSS:** `flex` `grid` `position: fixed` `backdrop-filter: blur(6px)` `transition: opacity 200ms ease`

引导层用 position fixed 覆盖全屏，遮罩靠 box-shadow 或 SVG 挖洞高亮目标；进度条与步骤点用 flex 居中， 动画时长写成 calc 乘 var(--demo-speed, 1)。步骤状态集中在单一 state（当前步加是否完成），跳过与返回走同一状态机， 不要为每一步各存一个布尔值。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现新手引导。

先检查现有路由、弹层组件与设计 Token，优先复用。
要求：
- 分步导览与任务清单两种形态可选
- 进度与当前步骤由单一状态驱动
- 跳过、返回、完成路径完整
- 动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个新手引导页面，包含欢迎语、分步说明和开始按钮。

**Design:** 设计一个三步新手引导：居中卡片，顶部进度点，中部插画与一句说明，底部主按钮与跳过链接。深色模式一致， 步进动画尊重 prefers-reduced-motion，完成后给出示例任务而不是空白页。

**Implementation:** 用 React 加 Tailwind 实现 Onboarding：单一 step 状态驱动卡片内容与进度；遮罩层固定定位并用 CSS 变量控制动画速度； 跳过直接落到主界面；不新增依赖。

## 相关概念

- [onboarding-tour](/pages/onboarding-tour) — 使用模式
- [wizard](/pages/wizard) — 使用模式
- [stepper](/pages/stepper) — 包含组件
- [progress-bar](/pages/progress-bar) — 包含组件
- [button](/pages/button) — 包含组件

## Sources

- [Apple Human Interface Guidelines — Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding)
- [Nielsen Norman Group — Mobile App Onboarding](https://www.nngroup.com/articles/mobile-app-onboarding/)

---

JSON: `/api/concept/pages/onboarding.json` · 站点: /pages/onboarding
