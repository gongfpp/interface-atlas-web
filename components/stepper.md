# 步骤条 / Stepper

> 组件 · `id: stepper`

用有序节点展示任务的阶段、当前位置和已完成步骤的进度组件。它通常与分步表单配合，把较长任务拆成易理解的阶段。步骤条负责说明进度，下一步和上一步负责推进流程；进入下一步前应校验当前输入，返回时应保留已经填写的信息。

**别名:** 分步表单 · 第几步那个进度 · 步骤指示器 · wizard steps

**分类:** Feedback

## 名词辨析

Stepper 一名两义：既指数值加减输入框（Input Stepper / Number Input），也指多步流程指示（Progress Stepper）。看场景选词：改数字用前者，看进度用后者。

## 适用场景

- 注册、配置、结账等有明确顺序的任务。
- 用户需要了解剩余工作量的多步操作。

## 不适用场景

- 步骤只有一项，或可以同时完成所有字段。
- 流程会频繁分叉且无法预测总步骤数。

## 常见形式

- **水平步骤** (Horizontal) — 桌面空间充足时横向显示进度。
- **垂直步骤** (Vertical) — 窄屏或较长步骤标题使用纵向结构。

## 实现要点

**CSS:** `display: flex` `aria-current="step"` `gap`

用 ol 表示有序阶段，用 aria-current="step" 标记当前位置。表单值由流程持有，不能在回退时丢失。校验失败留在原步骤并解释原因；完成状态应有明确文字。

## 交给 Agent 的任务 Prompt

```text
先检查当前项目的组件与样式体系，复用已有能力实现步骤条。
要求：
- 用 ol 表示有序阶段，用 aria-current="step" 标记当前位置。表单值由流程持有，不能在回退时丢失。校验失败留在原步骤并解释原因；完成状态应有明确文字。
- 错误输入阻止前进，同时给出可修正的提示。
- 回退保留数据，最后一步显示完整确认信息。
- 窄屏可用，深浅色一致，尊重 reduced-motion。
- 不新增依赖。
运行项目现有检查，并列出修改文件及验证结果。
```

### 其余层级 Prompt

**Basic:** 创建步骤条组件。注册、配置、结账等有明确顺序的任务。

**Design:** 设计步骤条，以清楚的层级、可见的状态和明确的反馈为优先。桌面空间充足时横向显示进度。窄屏或较长步骤标题使用纵向结构。错误输入阻止前进，同时给出可修正的提示。回退保留数据，最后一步显示完整确认信息。

**Implementation:** 用 ol 表示有序阶段，用 aria-current="step" 标记当前位置。表单值由流程持有，不能在回退时丢失。校验失败留在原步骤并解释原因；完成状态应有明确文字。

## 相关概念

- [progress-bar](/components/progress-bar) — 相似概念
- [input](/components/input) — 相似概念
- [button](/components/button) — 相似概念

## 容易混淆

- [wizard](/components/wizard) — Wizard 是分步表单流程本身；Stepper（进度义）只是它的指示器。
- [slider](/components/slider) — Slider 在连续区间取值，Input Stepper 按固定步长加减。
- [pagination](/components/pagination) — Pagination 切换数据页，Stepper 推进任务步骤。

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/tutorials/forms/multi-page/)

---

JSON: `/api/concept/components/stepper.json` · 站点: /components/stepper
