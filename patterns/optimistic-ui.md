# 乐观界面 / Optimistic UI

> 交互模式 · `id: optimistic-ui`

用户操作后立即按"预计成功"更新界面，真实请求在后台进行，成功则落定， 失败则回滚到原状态并提示。它解决的是"每个操作都要转圈等服务器"的问题—— 用短暂的不确定换取零等待的流畅感，特别适合点赞、收藏这类高频轻操作。

**别名:** Optimistic UI · 乐观更新 · 乐观界面 · 先改后等 · 即时假成功 · 先显示后确认

**分类:** Feedback / Interaction

## 适用场景

- 点赞、收藏、关注等高频轻操作
- 弱网环境下仍想保持操作流畅
- 失败可回滚且业务后果轻微

## 不适用场景

- 支付、下单等不可逆或高价值操作
- 结果决定后续流程的分支走向
- 回滚成本高，或回滚本身会造成困惑

## 常见形式

- **等待确认** (Pending) — 乐观数值带 pending 态，请求返回后落定
- **失败回滚** (Rollback) — 请求失败撤回更改并给出提示
- **排队确认** (Queued) — 连续操作依次排队，逐个确认或回滚

## 实现要点

**CSS:** `opacity transition` `transform scale` `animation` `keyframes`

点击瞬间同步更新本地状态并进入 pending 态（降透明度或轻脉冲），请求返回后落定； 失败时恢复原值并弹出回滚提示。连续操作需要请求序列号防止乱序覆盖； 回滚提示可配合撤销操作。pending 动画尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现乐观界面（Optimistic UI）。

先检查现有请求层与提示组件，优先复用现有的 toast 与按钮状态样式。
用途：内容卡片上的点赞 / 收藏操作。
要求：
- 点击立即更新界面并进入 pending 态，禁止重复提交
- 请求成功落定，失败回滚原值并给出提示
- 连续操作用请求序号防止乱序覆盖
- 回滚提示可配合撤销操作
- 尊重 prefers-reduced-motion
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个乐观界面（Optimistic UI）点赞按钮：点击立即 +1 并进入 pending 态， 请求成功后确认，失败自动回滚并提示。

**Design:** 设计一个乐观更新的点赞交互。要求：点击后数值与图标立即变化并带 pending 弱化态； 成功落定为强调色；失败回滚并显示"操作失败已恢复"提示；提供"模拟失败"开关便于演示； 支持深浅色主题。

**Implementation:** 用 React + Tailwind 实现 Optimistic UI。useState 维护 liked / count / status(idle|pending|confirmed)； 点击立即翻转状态并调整数值，setTimeout 1.2 秒模拟请求：失败开关打开则回滚并设 toast， 否则落定为 confirmed；toast 2 秒后自动消失。pending 时禁止重复点击， 动画时长乘 var(--demo-speed, 1)。

## 相关概念

- [toast](/patterns/toast) — 搭配使用
- [undo-action](/patterns/undo-action) — 相似概念
- [skeleton-loading](/patterns/skeleton-loading) — 相似概念
- [loading-spinner](/patterns/loading-spinner) — 搭配使用
- [button](/patterns/button) — 搭配使用

## Sources

- [Smashing Magazine — Optimistic UI](https://www.smashingmagazine.com/)
- [web.dev — Latency and perceived performance](https://web.dev/articles/perceived-performance)

---

JSON: `/api/concept/patterns/optimistic-ui.json` · 站点: /patterns/optimistic-ui
