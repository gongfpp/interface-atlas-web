# 下拉菜单 / Dropdown

> 组件 · `id: dropdown`

由触发按钮就近弹出的一组操作菜单，用于收纳次要操作，保持界面整洁。 典型形态是「···」更多按钮；面板带阴影浮于内容之上，点击菜单项即执行并关闭， 危险操作以红色项与分隔线隔离。

**别名:** 下拉菜单 · 下拉选项 · 更多菜单 · 操作菜单 · 溢出菜单 · 三个点菜单

**分类:** Navigation / Overlay

## 名词辨析

Dropdown 是「触发按钮 + 弹出菜单」的组合；Select 是表单取值控件；Popover 可承载任意内容而非仅命令。

## 适用场景

- 次要操作较多但不值得常驻展示
- 列表行的行内操作收纳进「···」按钮
- 工具栏空间有限，需要折叠操作集

## 不适用场景

- 高频主要操作，直接放按钮更高效
- 需要在多项输入间选择并提交，用下拉选择
- 触屏端深度超过一层的嵌套菜单，改为抽屉或页面

## 常见形式

- **更多按钮** (More button) — 「···」触发的行内操作集
- **悬停展开** (Hover) — 指针悬停即展开，适合桌面导航
- **带图标与分隔** (With icons & divider) — 图标辅助识别，危险项用分隔线隔离

## Platform API

- `role="menu"`
- `role="menuitem"`
- `aria-haspopup`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) |
| shadcn/ui | [DropdownMenu](https://ui.shadcn.com/docs/components/dropdown-menu) |
| MUI | [Menu](https://mui.com/material-ui/react-menu/) |
| AntD | [Dropdown](https://ant.design/components/dropdown) |

## 实现要点

**CSS:** `position: absolute` `z-index: 10` `box-shadow` `transition`

面板绝对定位于触发器下方，展开做轻微 opacity + translateY 过渡（时长乘 --demo-speed）。role="menu" / role="menuitem" 标注，键盘上下移动、 Escape 关闭、点击外部关闭。危险项用红色文字并以分隔线隔离， 防止误点。触发器展开时保持高亮态。

## 横向对比维度 (`navigation-overlay`)

- **打断程度:** 低，小面板就近弹出
- **内容容量:** 低～中，几项到十几项
- **触发成本:** 低，一次点击

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现下拉菜单组件。

先检查现有弹出层组件与 z-index 约定，保持层级一致。
要求：
- 受控 open，触发器就近弹出面板
- 菜单项带图标，危险项红色 + 分隔线隔离
- 点击外部 / Escape 关闭，键盘上下选择
- 深浅色主题一致，动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个下拉菜单组件，点击按钮弹出操作菜单，选择后自动关闭。

**Design:** 创建下拉菜单组件。要求：「···」按钮触发，面板带阴影就近弹出，菜单项带图标， 底部危险项（删除）红色并用分隔线隔离；展开有轻微浮入动画；点击外部与 Escape 关闭；深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Dropdown：受控 open；面板 absolute right-0 top-full + shadow-lg，过渡 opacity + translateY（时长乘 --demo-speed）；菜单项数据驱动 （{label, icon, danger}）；document 点击与 Escape 关闭；role="menu" + role="menuitem"，上下键移动焦点，Enter 执行并关闭。

## 相关概念

- [menu](/components/menu) — 相似概念
- [popover](/components/popover) — 相似概念
- [command-palette](/components/command-palette) — 替代方案
- [select](/components/select) — 相似概念
- [modal](/components/modal) — 相似概念

## 容易混淆

- [menu](/components/menu) — Menu 只是弹出列表，Dropdown 含触发按钮与关闭逻辑。
- [select](/components/select) — Select 用于表单取值，Dropdown 用于执行命令。
- [popover](/components/popover) — Popover 内容任意、可交互，Dropdown 列表为命令项。

## 可搭配的风格

`minimalism` `glassmorphism`

## Sources

- [W3C APG — Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [Material Design — Dropdown menu](https://m3.material.io/components/menus/overview)

---

JSON: `/api/concept/components/dropdown.json` · 站点: /components/dropdown
