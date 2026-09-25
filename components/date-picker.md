# 日期选择器 / Date Picker

> 组件 · `id: date-picker`

用日历网格选择日期的复合控件，通常由输入框触发弹出，也常内嵌展示。 头部提供年月切换，网格按周排列日期并高亮今天与选中日； 范围形态用两个日期夹出区间。避免手输日期的格式错误。

**别名:** 日期选择器 · 日历选择 · 选日期控件 · 日历弹层 · 日期输入框 · 时间选择

**分类:** Form / Input

## 适用场景

- 表单需要选择日期且格式易错（预订、报表）
- 需要直观查看日期所在星期与月份结构
- 选择区间（入住退房、活动起止）

## 不适用场景

- 只选年份或月份，用更轻的年月选择器
- 移动端简单日期，原生日期输入体验更好
- 高频输入日期的录入场景，快捷键 + 手输更快

## 常见形式

- **内嵌日历** (Inline) — 常驻展示，适合面板侧栏
- **触发弹出** (Trigger) — 输入框 + 弹层，表单标准形态
- **范围选择** (Range) — 两次点击夹出区间

## Platform API

- `<input type="date">`
- `aria-haspopup`
- `role="dialog"`

## 实现要点

**CSS:** `grid` `position: absolute` `z-index: 10` `transition`

网格用 grid-cols-7，首日偏移由当月 1 号的星期决定；日期计算交给 Intl / Date API 处理时区与月末。弹出形态面板绝对定位在触发框下， 点击外部与 Escape 关闭。今日用描边、选中日用 accent 填充； 范围态记录起点终点，中间日期铺浅 accent 背景。键盘方向键移动焦点。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现日期选择器组件。

先检查现有表单与弹出层组件，保持风格与 z-index 层级一致。
要求：
- 触发输入框 + 弹出日历，受控 value
- 高亮今日与选中日，支持前后翻月
- 范围选择形态（可选）
- 点击外部 / Escape 关闭，键盘可达
- 深浅色主题一致，不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个日期选择器组件，点击输入框弹出日历面板选择日期。

**Design:** 创建日期选择器组件。要求：触发输入框显示所选日期（占位「请选择日期」）， 弹出日历面板：头部年月 + 前后切换按钮，7 列网格高亮今天（描边）与选中日 （accent 填充）；点击外部关闭；提供内嵌日历与范围选择两种变体；深浅色一致。

**Implementation:** 用 React + Tailwind 实现 DatePicker：受控 value；由 Date 计算当月天数与首日 偏移，Intl 获取星期标题；面板绝对定位 + 点击外部关闭（document 监听）； prev/next 切换年月；范围态维护 [start, end] 与 picking 阶段，中间日着色。 键盘方向键移动日期焦点，aria-label 标注每个日期。

## 相关概念

- [input](/components/input) — 相似概念
- [popover](/components/popover) — 相似概念
- [dropdown](/components/dropdown) — 相似概念
- [form-validation](/components/form-validation) — 搭配使用

## 可搭配的风格

`minimalism` `flat-design`

## Sources

- [W3C APG — Dialog (Modal) Date Picker](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Apple HIG — Date pickers](https://developer.apple.com/design/human-interface-guidelines/date-pickers)

---

JSON: `/api/concept/components/date-picker.json` · 站点: /components/date-picker
