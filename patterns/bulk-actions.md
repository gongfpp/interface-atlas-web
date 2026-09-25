# 批量操作 / Bulk Actions

> 交互模式 · `id: bulk-actions`

先用复选框勾选多行数据，再对整个选择集一次性执行同一操作。选择时操作栏浮现，给出已选计数与撤销入口。它把重复的单条点击合并为一次批量决策，适合清理、归档、打标、导出等列表维护场景。

**别名:** 批量操作 · 批量处理 · 勾选后操作 · 多选了一起弄 · 全选后删除 · bulk actions · batch actions · mass actions

**分类:** Data / Actions

## 适用场景

- 同一操作要施加在大量行上（删除、归档、改状态）
- 列表是数据维护主界面（后台、收件箱、素材库）
- 误操作成本可控，且能提供撤销

## 不适用场景

- 一行只有零星操作，逐条点并不费力
- 操作不可逆且无审计/撤销，批量放大风险
- 移动端窄屏塞不下操作栏，勾选易误触

## 常见形式

- **复选框 + 操作栏** (Checkbox + action bar) — 有选中时底部或顶部浮现操作栏，最常见
- **全选 + 反选** (Select-all + inverse) — 表头全选三态，支持反选缩小选择集
- **粘性底栏** (Sticky footer bar) — 操作栏固定在视口底部，滚动时始终可见

## 实现要点

**CSS:** `position` `transform` `transition` `opacity`

选择集存于 Set 或 id 数组；表头复选框用 indeterminate 表达半选。操作栏在计数大于 0 时 入场（translateY + opacity，时长乘 var(--demo-speed, 1)）。执行后用 toast 提示并提供撤销， 尊重 prefers-reduced-motion。批量接口需服务端幂等，避免重复提交。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现表格批量操作。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 复选框列 + 表头全选三态
- 有选中时浮现操作栏，显示已选计数
- 批量执行后提供撤销入口
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个批量操作（Bulk Actions）演示：勾选多行后一次性删除或归档。

**Design:** 创建批量操作演示。要求：数据表首列复选框、表头全选三态；有选中时底部浮现操作栏显示"N 项已选"；提供归档、删除与清空选择；执行后 toast 提示并可撤销；支持深浅色主题。

**Implementation:** 用 React + useState 维护 Set<string> 选中集；表头 checkbox 设 indeterminate；操作栏 条件渲染并做入场过渡（时长乘 var(--demo-speed, 1)）。删除先乐观移除、toast 提供撤销回滚。 role="row" / aria-selected 表达行选择状态。尊重 prefers-reduced-motion。

## 相关概念

- [table](/patterns/table) — 搭配使用
- [checkbox](/patterns/checkbox) — 搭配使用
- [undo-action](/patterns/undo-action) — 搭配使用
- [filter-panel](/patterns/filter-panel) — 搭配使用

## Sources

- [W3C ARIA APG — Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [Material Design — Data tables](https://m3.material.io/components/data-tables/overview)
- [MDN — input checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

---

JSON: `/api/concept/patterns/bulk-actions.json` · 站点: /patterns/bulk-actions
