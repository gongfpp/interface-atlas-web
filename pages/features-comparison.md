# 功能对比页 / Feature Comparison Page

> 页面 · `id: features-comparison`

用并列矩阵把多个方案的功能、价格与限制逐项对齐的页面：首列固定为对比维度，各方案各占一列， 支持只看差异、按维度排序与推荐标记。它服务于「选哪个」的决策，把宣传语替换成可逐格核对的证据。

**别名:** 功能对比页 · 选型对比表 · 功能对照表 · 插件对比页 · 套餐对比 · 买哪个版本对比 · 参数对比表 · 对比矩阵

**分类:** Page / Marketing

## 适用场景

- 用户需要在两个以上方案之间做选择
- 功能、价格、限额等能按行逐项对齐
- 目标是突出差异而不是重复宣传

## 不适用场景

- 只有单一方案（用落地页或定价页更合适）
- 各方案维度差异过大、无法逐项对齐
- 需要长篇解释而非逐格打勾

## 常见形式

- **并列表格** (Side-by-side Table) — 经典行列矩阵，首列固定为对比维度
- **只看差异** (Differences Only) — 隐藏相同项，只留下真正有区别的行
- **卡片对比** (Card Comparison) — 方案纵向堆叠成卡片，移动端友好

## 页面结构

1. **标题与说明** — 一句话说明对比对象与适用场景，避免用户选错表。
2. **方案表头** — 每个方案一列，含名称、价格与推荐徽标，可点选聚焦。
3. **维度列** — 固定在左侧的功能、价格与限制行名，支持分组。
4. **数据单元格** — 用勾、破折或数值表达是否支持，保持统一口径。
5. **差异高亮** — 标出各方案不同之处，并提供只看差异开关。
6. **行动按钮** — 每个方案底部给出试用、购买或咨询入口。

## 实现要点

**CSS:** `grid` `flex` `position: sticky` `overflow-x: auto` `border-collapse: collapse`

真正的表格用 table 语义标签获得原生可访问性；首列与表头用 position: sticky 吸附，横向溢出交给 overflow-x: auto 容器。差异高亮用背景加图标或文字标记，不能只靠颜色。移动端可降级为卡片对比； 排序与只看差异由组件状态驱动，不改动文档结构。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现功能对比页。

先检查现有表格组件、定价数据与设计令牌，优先复用。
要求：
- 语义化 table + sticky 首列与表头，横向溢出可滚动
- 方案表头含价格与推荐徽标，可点选聚焦
- 只看差异开关与按维度排序，由状态驱动
- 差异高亮不止靠颜色，兼顾色觉障碍
- 移动端降级为卡片对比，深浅色一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个功能对比页，用表格并列展示两个以上方案的功能与价格。

**Design:** 创建 SaaS 功能对比页：顶部标题与说明；表格首列固定为功能维度，三列方案表头含价格与推荐徽标； 提供只看差异开关与按维度排序；差异单元格用背景加图标高亮；每个方案列底部一个 CTA。 移动端降级为卡片对比，深浅色一致。

**Implementation:** 用 React + Tailwind 实现功能对比页：使用 table 语义标签与 scope 属性；首列与表头 sticky； 横向溢出交给滚动容器；差异判定抽成纯函数，驱动高亮与只看差异开关；排序受控；不新增依赖。

## 相关概念

- [table](/pages/table) — 包含组件
- [segmented-control](/pages/segmented-control) — 包含组件
- [badge](/pages/badge) — 包含组件
- [progressive-disclosure](/pages/progressive-disclosure) — 使用模式
- [pricing](/pages/pricing) — 相似概念

## Sources

- [Nielsen Norman Group — Comparison Tables](https://www.nngroup.com/articles/comparison-tables/)
- [W3C WAI — Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)
- [MDN — The Table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

---

JSON: `/api/concept/pages/features-comparison.json` · 站点: /pages/features-comparison
