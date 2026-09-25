# 通知中心 / Notification Center

> 页面 · `id: notification-center`

把系统产生的提醒按来源与时间聚合成可浏览列表的页面，顶部用标签区分全部、未读、提及等视图， 每条通知展示图标、标题、正文摘要与时间，支持一键已读、批量处理与跳转原文。 它替代零散的弹窗提醒，让用户主动回看而不是被动打断。

**别名:** 通知中心 · 消息中心 · 站内信 · 消息盒子 · 通知列表页 · 消息提醒页 · 铃铛点开的页面 · 未读消息在哪看

**分类:** Page / Notifications

## 适用场景

- 系统会持续产生类型多样的提醒
- 用户需要回看、分类处理而不是被打断
- 通知要跨设备、跨渠道集中管理

## 不适用场景

- 只有一次性、必须立刻处理的紧急警报（用模态或顶部横幅）
- 提醒极少且可并入时间线或活动流
- 面向访客的营销推送（用落地页或邮件）

## 常见形式

- **通知列表** (Notification List) — 按时间倒序的单列流，最通用
- **收件箱分栏** (Split Inbox) — 左侧列表 + 右侧详情，桌面处理高效
- **分组通知** (Grouped Notifications) — 按来源或对象聚合，减少重复噪音

## 页面结构

1. **顶栏** — 标题、全部已读与通知设置入口，固定在滚动区之上。
2. **视图标签** — 全部、未读、提及、系统等分组，未读数量用徽标提示。
3. **通知列表** — 按时间倒序排列，未读项加背景强调，滚动到底自动加载。
4. **单条通知** — 来源图标 + 标题 + 一句摘要 + 相对时间 + 行内已读与归档。
5. **批量操作** — 进入多选后浮现，支持已读、归档与删除。
6. **详情面板** — 分栏变体下展示完整正文与跳转原文按钮。

## 实现要点

**CSS:** `flex` `grid` `overflow-y: auto` `position: sticky`

外层 flex 分「顶栏 + 标签 + 列表」三段，分栏变体再包一层 grid 分成列表与详情两列。 未读计数用徽标组件，列表项用 :has(未读) 或条件类切换背景。滚动加载用 IntersectionObserver 触发， 批量操作条吸附在列表顶部；空状态给「已全部读完」的正向反馈而非空白。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现通知中心页面。

先检查现有的通知数据接口、徽标与列表组件，优先复用。
要求：
- 顶栏 + 视图标签（未读计数）+ 通知列表三段结构
- 单条通知可标记已读，支持多选批量操作
- 未读与已读样式区分，时间用相对格式
- 无通知时给出正向空状态
- 滚动加载更多，尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个通知中心页面，包含视图标签、通知列表与全部已读操作。

**Design:** 创建 SaaS 通知中心：顶部标题与「全部已读」按钮；标签栏区分全部/未读/提及并带未读计数； 列表每条含来源图标、标题、两行摘要与相对时间，未读加左侧强调条；支持多选批量已读； 无通知时显示「已全部读完」。响应式，深浅色一致，键盘可逐条操作。

**Implementation:** 用 React + Tailwind 实现通知中心：通知数据驱动，受控维护已读集合与当前过滤标签； 列表滚动用 IntersectionObserver 分页加载；分栏变体在宽屏用 grid-cols-[320px_1fr]； 未读样式用条件类；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [tabs](/pages/tabs) — 包含组件
- [badge](/pages/badge) — 包含组件
- [avatar](/pages/avatar) — 包含组件
- [infinite-scroll](/pages/infinite-scroll) — 使用模式
- [empty-state](/pages/empty-state) — 使用模式

## Sources

- [Apple Human Interface Guidelines — Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications)
- [Material Design 3 — Badges](https://m3.material.io/components/badges/overview)

---

JSON: `/api/concept/pages/notification-center.json` · 站点: /pages/notification-center
