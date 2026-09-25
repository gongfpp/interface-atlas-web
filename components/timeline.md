# 时间线 / Timeline

> 组件 · `id: timeline`

沿时间顺序组织事件的展示组件，通过时间、节点和内容说明事件之间的先后关系。它适合展示活动日志、项目进展或订单状态。时间线呈现已经发生或计划发生的事件，而步骤条强调需要用户完成的任务阶段；当事件可展开时，应保留事件标题和时间，避免用户失去位置。

**别名:** 按时间排的记录 · 活动时间轴 · 事件进展记录 · activity timeline

**分类:** Data Display

## 适用场景

- 项目事件、订单流转和操作记录。
- 需要理解先后关系的叙事内容。

## 不适用场景

- 只需显示一个当前状态时使用徽标。
- 需要精确比较数值时使用表格或图表。

## 常见形式

- **连线时间轴** (Connected) — 节点与连线强调事件顺序。
- **事件卡片** (Event cards) — 独立卡片容纳较长事件描述。

## 实现要点

**CSS:** `border-inline-start` `position: relative` `display: grid`

用有序列表表达顺序，真实业务时间用 time 与 datetime。展开入口用按钮和 aria-expanded，排序改变时保留当前展开事件的稳定 ID。节点与连线只是装饰，不替代文字状态。

## 交给 Agent 的任务 Prompt

```text
先检查当前项目的组件与样式体系，复用已有能力实现时间线。
要求：
- 用有序列表表达顺序，真实业务时间用 time 与 datetime。展开入口用按钮和 aria-expanded，排序改变时保留当前展开事件的稳定 ID。节点与连线只是装饰，不替代文字状态。
- 切换顺序不改变事件与详情的对应关系。
- 折叠后仍保留时间和标题，按钮可被键盘操作。
- 窄屏可用，深浅色一致，尊重 reduced-motion。
- 不新增依赖。
运行项目现有检查，并列出修改文件及验证结果。
```

### 其余层级 Prompt

**Basic:** 创建时间线组件。项目事件、订单流转和操作记录。

**Design:** 设计时间线，以清楚的层级、可见的状态和明确的反馈为优先。节点与连线强调事件顺序。独立卡片容纳较长事件描述。切换顺序不改变事件与详情的对应关系。折叠后仍保留时间和标题，按钮可被键盘操作。

**Implementation:** 用有序列表表达顺序，真实业务时间用 time 与 datetime。展开入口用按钮和 aria-expanded，排序改变时保留当前展开事件的稳定 ID。节点与连线只是装饰，不替代文字状态。

## 相关概念

- [accordion](/components/accordion) — 相似概念
- [card](/components/card) — 相似概念
- [badge](/components/badge) — 相似概念

## Sources

- [MDN — HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)

---

JSON: `/api/concept/components/timeline.json` · 站点: /components/timeline
