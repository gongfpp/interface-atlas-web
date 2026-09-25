# 提示滑入 / Toast Slide-in

> 动效 · `id: toast-slide-in`

操作结果以一条短提示从屏幕边缘滑入（常为底部或右上角）， 停留数秒后自动滑出。 动效分三段：滑入—停留—滑出， 方向与来源一致——从边缘来，回边缘去。

**别名:** 消息提示滑入 · 弹出提示 · toast 动画 · 通知滑入 · 底部提示浮现

**分类:** Motion / Feedback

## 适用场景

- 操作成功、失败、已撤销等轻量结果反馈
- 不打断当前任务的异步完成通知
- 配合撤销操作的短时窗口提示

## 不适用场景

- 必须处理的信息（改用 alert 或 modal）
- 同屏堆叠多条长文本（读不完即消失）
- 关键错误（toast 易被错过，需可恢复方案）

## 常见形式

- **底部浮现** (Bottom-up) — 移动端标准，translateY 滑入
- **右上角滑入** (Top-right) — 桌面端通知常见，translateX 滑入
- **自动消失** (Auto-dismiss) — 停留 3～5s 后反向滑出

## 实现要点

**CSS:** `transform: translateY/X` `ease-out enter` `auto-dismiss timer` `aria-live: polite`

入场 transform 从 translateY(16px)（或 X 24px）+ opacity 0 到可见，200～250ms ease-out； 停留 3～5s 后反向滑出 150～200ms。 容器加 aria-live="polite" 播报内容； 悬停时暂停倒计时；尊重 prefers-reduced-motion 改为纯淡入淡出。

## 交给 Agent 的任务 Prompt

```text
为项目操作结果添加 toast 滑入反馈。

先检查现有 toast/通知组件，复用其队列与计时逻辑。
要求：
- 入场 200～250ms ease-out，出场反向 150～200ms
- 停留 3～5s 自动消失，hover 暂停倒计时
- aria-live 播报，reduced-motion 降级为淡入淡出
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给保存操作添加 toast 提示：操作成功后从底部滑入，3 秒后自动消失。

**Design:** 保存成功提示从底部上滑入场 220ms ease-out，停留 3s 后下滑退出；单行文案 + 可选撤销按钮；同时最多一条。

**Implementation:** 入场 transition transform+opacity 220ms ease-out（translateY(16px)→0），用 setTimeout 3s 触发出场（反向 180ms）。容器 position:fixed + aria-live="polite"；hover 时清除计时器，离开时重启；reduced-motion 改 opacity 过渡。

## 相关概念

- [toast](/motion/toast) — 应用于
- [alert](/motion/alert) — 应用于
- [undo-action](/motion/undo-action) — 搭配使用
- [optimistic-ui](/motion/optimistic-ui) — 搭配使用

## Sources

- [Material Design — Snackbars](https://m3.material.io/components/snackbars/overview)

---

JSON: `/api/concept/motion/toast-slide-in.json` · 站点: /motion/toast-slide-in
