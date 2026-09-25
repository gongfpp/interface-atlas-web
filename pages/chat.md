# 聊天消息页 / Chat / Messaging

> 页面 · `id: chat`

以对话为单位组织消息的页面：左侧会话列表按最新消息排序，右侧线程区按时间正序铺气泡， 底部输入框承担发送与附件，顶部显示对方状态与操作。 它把异步沟通的上下文留在同一条线程里，适合客服、社区与团队协作场景。

**别名:** 聊天页 · 聊天消息页 · 私信页 · 对话页 · 消息窗口 · 聊天界面 · 发消息的页面 · 会话列表

**分类:** Page / Messaging

## 适用场景

- 需要一对一会话或小组实时沟通
- 消息要保留上下文并能回看历史
- 客服、社区或团队协作的持续对话

## 不适用场景

- 只是单向广播或公告（用通知中心或横幅）
- 内容需要结构化比对（用表格或看板）
- 少于三条消息的临时确认（用内联提示即可）

## 常见形式

- **分栏会话** (Split View) — 会话列表 + 线程，桌面主形态
- **单线程** (Focused Thread) — 只显示当前对话，移动端常用
- **气泡流** (Bubble Stream) — 群聊式连续气泡，强调发言者

## 页面结构

1. **会话列表** — 头像、名称、最后一条摘要与未读徽标，按最新消息排序。
2. **会话头** — 对方名称、在线状态与更多操作，移动端可返回列表。
3. **消息气泡** — 左右区分己方对方，尾部带时间与已读状态。
4. **日期分隔** — 按天插入分隔，避免长线程失去时间感。
5. **输入区** — 多行输入 + 附件 + 发送按钮，回车发送可配置。

## 实现要点

**CSS:** `flex` `grid` `overflow-y: auto` `overflow-anchor: auto`

左右两列用 grid-cols-[280px_1fr]，移动端折叠为单列并让线程占满。线程区正向排列、 发送后滚动到底（scrollIntoView），历史加载保持滚动位置锚定。气泡最大宽度约 72%， 输入框用 textarea 自动增高；乐观发送先插入本地气泡，失败再标记重发。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现聊天消息页。

先检查现有的消息接口、头像与输入组件，保持一致。
要求：
- 会话列表 + 线程区 + 输入区结构
- 发送消息乐观更新并滚动到底部
- 己方/对方气泡样式区分，按天插入日期分隔
- 未读徽标在打开会话后清零
- 响应式折叠为单列，键盘可操作
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个聊天消息页，包含会话列表、消息线程和输入框。

**Design:** 创建团队聊天页：左侧会话列表（头像、名称、最后一条摘要、未读徽标）；右侧会话头显示 对方在线状态；线程按时间正序排列，己方气泡靠右用强调色，对方靠左用中性色，按天插入日期分隔； 底部输入框带附件按钮与发送，回车发送；新消息滚动到底部。响应式，深浅色一致。

**Implementation:** 用 React + Tailwind 实现聊天页：会话与消息用受控状态，发送时乐观插入本地消息并滚动到底； 输入框用 textarea 随内容增高；会话列表未读徽标随切换清零； 历史加载保持滚动锚点；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [input](/pages/input) — 包含组件
- [avatar](/pages/avatar) — 包含组件
- [badge](/pages/badge) — 包含组件
- [infinite-scroll](/pages/infinite-scroll) — 使用模式
- [optimistic-ui](/pages/optimistic-ui) — 使用模式

## Sources

- [Nielsen Norman Group — Chatbots and conversational UI](https://www.nngroup.com/articles/chatbots/)
- [W3C WAI-ARIA Authoring Practices — Feed pattern](https://www.w3.org/WAI/ARIA/apg/patterns/feed/)

---

JSON: `/api/concept/pages/chat.json` · 站点: /pages/chat
