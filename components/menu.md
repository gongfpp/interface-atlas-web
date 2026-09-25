# 菜单 / Menu

> 组件 · `id: menu`

点击或右键触发的临时操作列表浮层：平铺或分组的命令项，选中即执行并关闭。 用于收纳非高频操作（更多、设置、删除），通常以「⋯」按钮或右键唤起。

**别名:** 菜单 · 下拉菜单 · 右键菜单 · 上下文菜单 · 操作菜单 · 更多操作 · 三个点点出来的菜单

**分类:** Navigation / Overlay

## 名词辨析

菜单（Menu）是命令列表，点选即执行；导航（Navbar/Sidebar）是页面目的地；下拉（Dropdown）是「按钮 + 菜单」的组合控件。

## 适用场景

- 收纳低频操作，避免界面堆满按钮
- 右键唤起的上下文操作（文件、画布元素）
- 顶部导航的站点栏目入口

## 不适用场景

- 高频主操作（直接露出按钮）
- 层级很深的树（改用侧边栏或命令面板）
- 破坏性操作需二次确认，不能一触即发

## 常见形式

- **下拉** (Dropdown) — 点击按钮在下方弹出
- **上下文** (Context) — 右键在指针位置弹出
- **分组** (Grouped) — 带分组标题与分隔线

## Platform API

- `role="menu"`
- `role="menuitem"`

## 实现要点

**CSS:** `position: absolute` `z-index` `box-shadow` `min-width`

以触发器为锚 absolute 定位，默认下方展开，贴近屏幕边缘时翻转。菜单项用 button （role="menuitem"），↑↓ 循环、Enter 执行、Esc 关闭；危险项用红色文字并与常规项分隔。 点击外部关闭：document 监听 pointerdown 判断 target。

## 横向对比维度 (`primary-navigation`)

- **空间占用:** 低，隐藏直至唤起
- **层级容量:** 中，两级以内为宜
- **移动端友好:** 中，需加大触达面积

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现菜单（Menu）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色与阴影变量。
用途：列表行的「更多」操作与右键上下文。
要求：
- 锚定触发器弹出，贴近边缘自动翻转
- 键盘可用：↑↓ 循环、Enter 执行、Esc 关闭
- 危险项红色 + 分隔线，触发二次确认的钩子
- 点击外部关闭，深浅色主题一致
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个菜单（Menu）组件：点击「⋯」按钮弹出操作列表（重命名、复制链接、删除）， 点击项执行并关闭菜单。

**Design:** 创建 Menu 组件。要求：浮层 min-w 160px、圆角、边框、大阴影；菜单项行高一致、hover 浅色高亮； 分组标题小写灰字；危险项红色文字并用分隔线隔开；展开时触发器保持强调态； 深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Menu：open 受控；容器 relative，面板 absolute top-full mt-1； document pointerdown 监听外部关闭，Esc 关闭；焦点移入面板， ArrowUp/ArrowDown 在 item 间循环（role="menuitem"），Enter 执行并回调 onSelect； 项目数据驱动 {label, danger?, separator?}；入场 scale + fade（时长乘 var(--demo-speed, 1)）。

## 相关概念

- [dropdown](/components/dropdown) — 相似概念
- [navbar](/components/navbar) — 替代方案
- [command-palette](/components/command-palette) — 相似概念
- [popover](/components/popover) — 相似概念

## 容易混淆

- [dropdown](/components/dropdown) — Dropdown 是按钮+菜单的完整控件，Menu 只是弹出的命令列表部分。
- [navbar](/components/navbar) — Navbar 跳转页面目的地，Menu 执行即时命令。
- [select](/components/select) — Select 选中一个值回填表单，Menu 触发一个动作。

## Sources

- [WAI-ARIA Authoring Practices — Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [Apple HIG — Menus](https://developer.apple.com/design/human-interface-guidelines/menus)

---

JSON: `/api/concept/components/menu.json` · 站点: /components/menu
