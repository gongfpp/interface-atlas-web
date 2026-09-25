# 撤销操作 / Undo Action

> 交互模式 · `id: undo-action`

用"先执行、给反悔窗口"的方式处理高风险操作：删除等动作立即生效并展示结果，同时在底部弹出 带倒计时的撤销条，窗口期内一键恢复，倒计时结束才真正提交。相比弹窗确认，它不打断操作流， 又比"确认一次就完"的弹窗多了一层真正可用的后悔药。

**别名:** 撤销 · 防误操作 · 撤销删除 · 撤回操作 · 后悔药 · 删除可恢复

**分类:** Feedback / Safety

## 适用场景

- 删除、归档、清空等破坏性但可恢复的操作
- 操作频繁，弹窗确认会严重拖慢节奏
- 操作结果立即可见，用户需要看到效果后再决定

## 不适用场景

- 操作不可逆（永久删除、对外发送），撤销条会给出错误安全感
- 操作影响重大且低频，正式确认对话框更合适
- 操作在后台静默完成，用户感知不到结果

## 常见形式

- **撤销条** (Snackbar) — 底部条 + 倒计时，Gmail 删除邮件的经典样式
- **轻提示撤销** (Toast undo) — 顶部或角落 toast 内嵌撤销按钮，自动消失
- **延迟提交** (Delayed commit) — 界面即时更新，请求在倒计时后才真正发出

## 实现要点

**CSS:** `linear-gradient` `position: fixed` `animation` `transform`

删除先更新本地状态并渲染撤销条，倒计时用 setTimeout 或 CSS 线性动画驱动；点击撤销清除定时器 并恢复数据，倒计时归零后发出真正的删除请求。撤销条固定在容器底部，倒计时可用渐缩进度条可视化。 撤销按钮要足够大，撤销条存活期内不要堆叠多条同类提示。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现撤销操作（Undo Action）。

先检查现有 toast/snackbar 组件，优先在其内部扩展撤销能力。
用途：任务列表的删除操作。
要求：
- 删除立即生效，底部撤销条提供 5 秒撤销窗口与倒计时进度
- 撤销恢复原位置，倒计时结束才真正提交删除
- 不与确认弹窗叠加使用，避免双重打断
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个撤销操作（Undo Action）演示，删除列表项后底部出现带倒计时的撤销条，点撤销可恢复。

**Design:** 创建撤销操作演示。要求：任务列表可删除条目，删除后条目立即消失并在底部弹出撤销条， 内含"已删除"文案、撤销按钮与 5 秒倒计时进度条；倒计时结束撤销条自动收起； 撤销后条目回到原位置。

**Implementation:** 用 React 实现 Undo Action：useState 管理列表与 pending 删除项，删除时立即从列表移除并记录， setTimeout 5 秒后提交；撤销按钮清除 timeout 并把条目插回原索引。倒计时进度条用 CSS width 线性动画，时长乘 var(--demo-speed, 1)。清理时清除所有未决定时器。

## 相关概念

- [toast](/patterns/toast) — 搭配使用
- [optimistic-ui](/patterns/optimistic-ui) — 相似概念
- [modal](/patterns/modal) — 搭配使用
- [empty-state](/patterns/empty-state) — 相似概念
- [progressive-disclosure](/patterns/progressive-disclosure) — 相似概念

## 可搭配的风格

`minimalism`

## Sources

- [Material Design — Snackbars](https://m3.material.io/components/snackbars/overview)
- [Nielsen Norman Group — Undo](https://www.nngroup.com/articles/undo/)

---

JSON: `/api/concept/patterns/undo-action.json` · 站点: /patterns/undo-action
