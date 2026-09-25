# 轻提示 / Toast

> 组件 · `id: toast`

在视口角落短暂出现、自动消失的小消息条，用来告知操作结果（已保存、已复制、上传完成）。 不打断当前流程，通常附一个操作入口（撤销、查看），停留约 3~5 秒后淡出。

**别名:** 消息提示条 · 吐司 · 轻提示 · 通知条 · snackbar · 自动消失提示 · 右下角弹出的小提示

**分类:** Feedback / Overlay

## 名词辨析

Toast（Snackbar）是短暂的非打断反馈，自动消失；Alert 常驻；Modal 打断。Toast 不应放关键信息或要求必读。

## 适用场景

- 操作成功、状态更新等轻量反馈
- 配合撤销动作（删除后可撤销）
- 后台任务完成通知（上传、导出）

## 不适用场景

- 必须被看到并处理的错误（改用 alert 或表单内联错误）
- 长消息或多条排队（改用通知中心）
- 需要用户做出决策（改用模态框）

## 常见形式

- **成功** (Success) — 状态色圆点或对勾图标
- **错误** (Error) — 危险色，停留更久或需手动关闭
- **带操作** (Action) — 附撤销或查看按钮（snackbar 风格）

## Platform API

- `role="status"`
- `aria-live="polite"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA | role="status" |
| shadcn/ui | [Sonner / Toast](https://ui.shadcn.com/docs/components/toast) — Sonner 是 shadcn 生态最常用的 toast 库 |
| MUI | [Snackbar](https://mui.com/material-ui/react-snackbar/) |
| AntD | [message / notification](https://ant.design/components/message) |

## 实现要点

**CSS:** `position: fixed` `z-index` `transform: translateY` `animation`

固定在视口右下角或底部居中，入场 slide + fade、出场同理，全部用 transform 避免重排； 多条消息栈式叠放（新的在下面顶上来）。hover 时暂停自动关闭计时。 错误类可延长停留或要求手动关闭；尊重 prefers-reduced-motion。

## 横向对比维度 (`form-feedback`)

- **打断程度:** 低，短暂出现不打断操作
- **持续性:** 低，几秒后自动消失
- **错误定位能力:** 差，无法定位到具体字段

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现轻提示（Toast）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色与状态色变量。
用途：操作结果反馈（保存成功、复制成功、删除后撤销）。
要求：
- 固定视口角落，自动消失，hover 暂停计时
- 支持成功/错误两种状态与一个可选操作按钮
- 多条栈式叠放，动画用 transform，尊重 prefers-reduced-motion
- 提供命令式 API（toast.show）或 Provider 用法
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个轻提示（Toast）组件：点击按钮后在右下角弹出消息条，3 秒后自动消失，支持手动关闭。

**Design:** 创建 Toast 组件。要求：消息条固定在视口右下角，圆角深色底（成功/错误两种状态色点缀）； 入场从下方滑入淡入、出场淡出；文本右侧可带「撤销」操作与关闭按钮；多条时栈式叠放；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Toast：消息数组 state（含 id/type/text/action）， 容器 fixed bottom-4 right-4 z-50 flex-col-reverse；每条入场 keyframes（translateY + opacity， 时长乘 var(--demo-speed, 1)）；setTimeout 3 秒移除，hover 清除计时器、leave 重置； 提供 remove(id)；尊重 prefers-reduced-motion（可只保留 opacity）。

## 相关概念

- [alert](/components/alert) — 替代方案
- [modal](/components/modal) — 相似概念
- [toast-slide-in](/components/toast-slide-in) — 搭配使用
- [undo-action](/components/undo-action) — 搭配使用

## 容易混淆

- [alert](/components/alert) — Alert 常驻可含操作按钮；Toast 短暂、角落出现。
- [tooltip](/components/tooltip) — Tooltip 解释控件，Toast 反馈系统事件。

## Sources

- [Material Design — Snackbar](https://m3.material.io/components/snackbar/overview)
- [Nielsen Norman Group — Toasts or Snackbars](https://www.nngroup.com/articles/toasts-or-snackbars/)

---

JSON: `/api/concept/components/toast.json` · 站点: /components/toast
