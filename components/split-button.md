# 分体按钮 / Split Button

> 组件 · `id: split-button`

由主操作区与附属箭头组成的复合按钮：主区直接执行默认动作，箭头展开同组的备选菜单。比「按钮加独立下拉」少一次定位，比整键打开菜单的下拉按钮更快命中高频操作，常用于保存、发送、新建等带变体的动作。

**别名:** 分裂按钮 · 组合按钮 · 带下拉的按钮 · 主副按钮 · split button

**分类:** Action

## 名词辨析

与 Dropdown 的差别是主区可直接执行默认动作；与「按钮加独立菜单」的差别是箭头在视觉与焦点上都附着于主按钮。

## 适用场景

- 存在一个高频默认动作，外加若干同组变体
- 希望默认动作一次点击即可执行
- 工具栏或表单操作区空间紧凑

## 不适用场景

- 没有明确默认动作，所有选项同等重要，用 dropdown
- 备选动作与主动作无关，拆成 button 加 menu 更清晰
- 只有一个动作，普通 button 足够

## 常见形式

- **水平分体** (Horizontal) — 主区与箭头左右并排，最常见形态
- **垂直分体** (Vertical) — 箭头堆叠在主区下方，窄工具栏更稳
- **带图标** (With icon) — 主区含图标加文案，识别更快

## Platform API

- `<button>`
- `aria-haspopup="menu"`
- `aria-expanded`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) |
| MUI | [ButtonGroup](https://mui.com/material-ui/react-button-group/) |
| Bootstrap | [Split button](https://getbootstrap.com/docs/5.3/components/buttons/#split-buttons) |

## 实现要点

**CSS:** `display: inline-flex` `border-radius: 0` `position: relative`

两个按钮并排放在 inline-flex 中，接缝处去掉圆角与左边框形成一体外观；箭头用窄热区和 chevron 区分。菜单相对容器绝对定位。主区与箭头各自可聚焦，菜单打开后方向键在菜单项间移动，Esc 归位到箭头。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现分体按钮（Split Button）组件。
先检查现有按钮与菜单组件，优先复用配色、高度与浮层实现。
用途：保存、发送、新建等带变体的高频动作。
要求：
- 主区直接执行默认动作，箭头展开同组备选菜单
- 两个热区独立可聚焦，菜单打开态有可见反馈
- Esc 关闭菜单并把焦点还给箭头
- 尊重 prefers-reduced-motion，深浅色一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个分体按钮：主区执行默认保存动作，附属箭头展开保存并发布等备选菜单。

**Design:** 设计分体按钮。要求：主区与箭头视觉上连为一体，仅以细分隔线区分；主区文案明确动作名称；箭头用 chevron 并在菜单打开时旋转或高亮；菜单项与主区动作同组；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现分体按钮：主区为普通 button，箭头为 aria-haspopup="menu" 的 button，共用一套高度与配色；接缝用负 margin 或 border-l-0 拼接；菜单绝对定位在箭头下方，打开时 aria-expanded="true"；支持 Enter 触发主动作、方向键浏览菜单。

## 相关概念

- [button](/components/button) — 相似概念
- [dropdown](/components/dropdown) — 搭配使用
- [menu](/components/menu) — 搭配使用

## 容易混淆

- [dropdown](/components/dropdown) — dropdown 整键打开菜单；split-button 主区执行动作、只有箭头开菜单
- [button](/components/button) — 普通 button 只有一个动作；split-button 把同组变体收进附属菜单

## Sources

- [WAI-ARIA Authoring Practices — Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [Bootstrap — Split buttons](https://getbootstrap.com/docs/5.3/components/buttons/#split-buttons)
- [Material Design — Buttons](https://m3.material.io/components/buttons/overview)

---

JSON: `/api/concept/components/split-button.json` · 站点: /components/split-button
