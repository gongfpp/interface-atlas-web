# 复选框 / Checkbox

> 组件 · `id: checkbox`

用方形勾选框表示一组可多选的独立开关项，点击在选中与未选中间切换。 父级项可呈现半选态（部分子项选中），常用于批量选择、筛选与同意条款。

**别名:** 复选框 · 勾选框 · 多选框 · 打勾框 · 勾选项 · 勾选框选择

**分类:** Form / Input

## 适用场景

- 多个选项可以同时选中、互不影响
- 批量操作前勾选列表项
- 「同意条款」等单条独立确认

## 不适用场景

- 选项互斥只能选一个，用 radio
- 即时生效的开关型设置，用 switch 更直观
- 选项超过约 15 个且需检索，改用可搜索的多选下拉

## 常见形式

- **单项** (Single) — 一条独立确认项
- **分组** (Group) — 多项并列可全选
- **半选** (Indeterminate) — 父级横线态表示部分选中

## Platform API

- `<input type="checkbox">`
- `role="checkbox"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [<input type="checkbox">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) |
| shadcn/ui | [Checkbox](https://ui.shadcn.com/docs/components/checkbox) |
| MUI | [Checkbox](https://mui.com/material-ui/react-checkbox/) |
| AntD | [Checkbox](https://ant.design/components/checkbox) |

## 实现要点

**CSS:** `appearance` `accent-color` `border-radius: 4px` `transition`

自定义样式时隐藏原生 appearance，用伪元素或内联 SVG 绘制对勾， 选中态用 accent 底 + 白色勾，过渡 scale 弹入；半选态画横线。 原生快速方案直接用 accent-color。整行 label 可点击，热区不小于 24px。 半选由 JS 控制父级 ref 的 indeterminate 属性。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现复选框组件。

先检查现有表单组件与颜色变量，保持一致。
要求：
- 受控 checked，支持单项 / 分组 / 半选
- 对勾选中动画尊重 prefers-reduced-motion
- 键盘可达（空格切换，label 关联）
- 深浅色主题一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个复选框组件，支持单项、分组全选与半选状态。

**Design:** 创建复选框组件。要求：圆角方框，选中 accent 底 + 白色对勾弹入动画； 父级「全选」在子项部分选中时显示半选横线；整行可点击；深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Checkbox：受控 checked 与 onChange；自定义框用 peer + 伪元素或内联 SVG 对勾（scale 过渡，时长乘 --demo-speed）；父级 ref 上 通过 effect 设置 indeterminate；键盘空格可切换，label 用 htmlFor 关联。 分组数据驱动（{label, children}）。

## 相关概念

- [radio](/components/radio) — 相似概念
- [switch](/components/switch) — 相似概念
- [filter-panel](/components/filter-panel) — 相似概念
- [form-validation](/components/form-validation) — 搭配使用

## 可搭配的风格

`minimalism` `flat-design`

## Sources

- [W3C APG — Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [Material Design — Checkbox](https://m3.material.io/components/checkbox/overview)

---

JSON: `/api/concept/components/checkbox.json` · 站点: /components/checkbox
