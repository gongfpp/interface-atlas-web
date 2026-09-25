# 模态框 / Modal

> 组件 · `id: modal`

覆盖在页面之上、带半透明遮罩的对话框，打断用户当前流程，要求先完成弹窗内的任务或决策。 遮罩阻断与底层页面的交互，焦点被暂时困在弹窗内，是容器类浮层中打断程度最高的一种。

**别名:** 弹窗 · 对话框 · 模态弹窗 · 确认弹窗 · 弹出对话框 · 遮罩弹窗 · 网页中间弹出来的窗口

**分类:** Overlay / Feedback

## 名词辨析

Modal 居中打断当前任务、要求处理；Drawer 从侧边滑出保留上下文；Popover 锚定触发元素、非打断；Sheet 只罩住当前窗口（macOS）。

## 适用场景

- 需要明确决策的破坏性操作（删除、支付）
- 任务必须完成后流程才能继续（向导、登录）
- 需要专注处理的临时内容（详情、快速编辑）

## 不适用场景

- 内容是辅助性的、可随时关闭（改用 popover 或 tooltip）
- 用户需要对照底层页面操作（改用 drawer）
- 移动端长内容滚动（改为全屏页面更稳）

## 常见形式

- **居中对话框** (Centered) — 最经典形态，标题 + 正文 + 操作区
- **紧凑确认框** (Confirm) — 小尺寸，只放一句文案和两个按钮
- **底部面板** (Sheet) — 移动端常见，从底部升起承接长内容

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA | [role="dialog"](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) |
| shadcn/ui | [Dialog](https://ui.shadcn.com/docs/components/dialog) |
| MUI | [Modal / Dialog](https://mui.com/material-ui/react-modal/) |
| AntD | [Modal](https://ant.design/components/modal) |

## 实现要点

**CSS:** `position: fixed` `inset: 0` `z-index` `transform` `background-color`

遮罩用 fixed inset-0 + 半透明黑，面板用 flex 居中或 inset-0 m-auto。 打开时锁定 body 滚动，焦点移入面板，Esc 与点击遮罩均可关闭。 入场动画 scale 0.96→1 加淡入，200ms 左右；尊重 prefers-reduced-motion。

## 横向对比维度 (`overlay-container`)

- **打断程度:** 高，遮罩阻断底层操作
- **内容容量:** 中，适合短内容与小型表单
- **移动端友好:** 中，长内容需转全屏

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现模态框（Modal）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色、圆角与阴影变量。
用途：删除确认与快速编辑。
要求：
- 遮罩 + 居中面板，Esc 与点击遮罩关闭
- 打开时锁定滚动、焦点移入面板
- 入场动画轻微，尊重 prefers-reduced-motion
- 深浅色主题一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个模态框（Modal）组件：点击按钮弹出居中对话框，带遮罩层，包含标题、正文和操作按钮。

**Design:** 创建模态框组件。要求：半透明遮罩 + 居中白色面板（圆角、阴影）；标题区、正文区、底部右对齐操作区（次要按钮 + 主要按钮）； 打开时面板轻微放大淡入；支持 Esc 与点击遮罩关闭；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Modal：open 受控；fixed inset-0 遮罩 + flex 居中面板； 打开时锁定 body overflow，焦点移入并做简单 focus trap，Esc 关闭； 入场用 keyframes（scale + opacity），时长乘 var(--demo-speed, 1)； aria-role="dialog" aria-modal="true"，尊重 prefers-reduced-motion。

## 相关概念

- [drawer](/components/drawer) — 替代方案
- [popover](/components/popover) — 替代方案
- [toast](/components/toast) — 相似概念
- [alert](/components/alert) — 相似概念

## 容易混淆

- [drawer](/components/drawer) — Drawer 从边缘滑出、空间更大，Modal 居中且更强调打断。
- [popover](/components/popover) — Popover 非模态、锚定触发器，Modal 遮罩整页并阻断操作。
- [alert](/components/alert) — Alert 是页内消息条，不打断；Modal 是必须处理的浮层。
- [lightbox](/components/lightbox) — Lightbox 专管图片/视频放大，Modal 承载通用任务。

## Sources

- [WAI-ARIA Authoring Practices — Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Material Design — Dialogs](https://m3.material.io/components/dialogs/overview)

---

JSON: `/api/concept/components/modal.json` · 站点: /components/modal
