# 单选框 / Radio

> 组件 · `id: radio`

用一组圆形按钮表示互斥选项，同组内只能选中一个且不可取消。 与复选框的核心区别是多选与单选；选中圆点用填充动画反馈， 选项少（2～5 个）时平铺展示比下拉选择效率更高。

**别名:** 单选框 · 单选按钮 · radio 按钮 · 圆形单选 · 单选项 · 单选选择器

**分类:** Form / Input

## 适用场景

- 选项 2～5 个且互斥，需要一眼看全
- 默认选中项明确、无需取消选择
- 支付方式、配送方式等并列方案选择

## 不适用场景

- 需要多选，用复选框
- 选项多于 5 个，用下拉选择节省空间
- 开 / 关二元即时切换，用 switch

## 常见形式

- **默认** (Default) — 圆点 + 文字的经典排布
- **卡片式** (Card) — 整卡可点，带描述信息
- **行内分段** (Inline segmented) — 横向排布，适合密集表单

## Platform API

- `<input type="radio">`
- `role="radio"`
- `role="radiogroup"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [<input type="radio">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) |
| shadcn/ui | [RadioGroup](https://ui.shadcn.com/docs/components/radio-group) |
| MUI | [Radio / RadioGroup](https://mui.com/material-ui/react-radio-button/) |
| AntD | [Radio](https://ant.design/components/radio) |

## 实现要点

**CSS:** `appearance` `accent-color` `border-radius: 50%` `transition`

自定义圆圈用 border 圆形 + 内部小圆点 scale 弹出动画；选中态整组 name 一致保证原生互斥。React 中受控 value 对比实现选中。 整行 label 可点击扩大热区；键盘上下键在组内移动（原生自带）。 卡片式用外框高亮代替圆点强调，但保留 radio 语义。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现单选框组件。

先检查现有表单组件与 Design Token，保持风格一致。
要求：
- 受控单选，组内互斥、始终有选中项
- 支持默认 / 卡片式两种样式
- 键盘可达（原生 radio 行为 + label 关联）
- 深浅色主题一致，动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个单选框组件，支持默认、卡片式与行内分段三种样式。

**Design:** 创建单选框组件。要求：圆形框内选中圆点 scale 弹入；卡片式整卡可点、 选中时 accent 描边高亮并展示描述文案；组内互斥且始终有一项选中； 深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 RadioGroup：受控 value + onChange，选项数据驱动 （{value, label, description}）；原生 input[type=radio] 隐藏 + 自定义外观， 保留键盘行为；圆点动画 scale 0 → 1，时长乘 --demo-speed；卡片式 aria-checked + 描边切换。

## 相关概念

- [checkbox](/components/checkbox) — 相似概念
- [switch](/components/switch) — 相似概念
- [select](/components/select) — 相似概念
- [form-validation](/components/form-validation) — 搭配使用

## 可搭配的风格

`minimalism` `flat-design`

## Sources

- [W3C APG — Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [Material Design — Radio button](https://m3.material.io/components/radio-button/overview)

---

JSON: `/api/concept/components/radio.json` · 站点: /components/radio
