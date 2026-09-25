# 树形控件 / Tree View

> 组件 · `id: tree-view`

以嵌套分支展示层级结构的可展开列表，每层节点可折叠或展开，子节点缩进排布于父节点之下。适合文件目录、组织架构、分类体系等天然成树的数据；节点可单选或多选，展开状态与选中状态相互独立。

**别名:** 树形列表 · 文件树 · 目录树 · 树结构 · tree

**分类:** Data Display / Navigation

## 名词辨析

「树」有时也指思维导图或组织架构图；本词条专指可展开、可选择的列表式树形控件。

## 适用场景

- 数据天然分层，如目录、组织架构、分类树
- 需要折叠分支以管理大量同级节点
- 层级关系本身是信息的一部分

## 不适用场景

- 只有两层且每层几项，用 accordion 或分组列表
- 层级是导航框架而非内容，用 sidebar 或 menu
- 扁平长列表更适合，用 table 或 list

## 常见形式

- **单选树** (Single select) — 同时只有一个节点被选中，常配合详情面板
- **多选树** (Multi select) — 可勾选多个节点，父节点支持半选态
- **文件树** (File tree) — 带类型图标的目录树，最常见的产品形态

## Platform API

- `role="tree"`
- `role="treeitem"`
- `aria-expanded`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Tree View](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) |
| Radix Primitives | [Collapsible](https://www.radix-ui.com/primitives/docs/components/collapsible) |
| MUI | [TreeView](https://mui.com/material-ui/react-tree-view/) |

## 实现要点

**CSS:** `padding-left` `border-left` `transform`

子层级用递归缩进（padding-left 或 margin-left）表达深度，也可用竖向参考线辅助阅读。展开指示是小三角或加减号，旋转或切换图标表达状态；折叠时隐藏子树但保留 DOM 语义。键盘遵循 roving tabindex，方向键在可见节点间移动。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现树形控件（Tree View）组件。
先检查现有列表、折叠与 Design Token，优先复用缩进、图标与高亮样式。
用途：文件目录、组织架构、分类体系。
要求：
- 嵌套节点可展开折叠，展开态与选中态独立
- role=tree / treeitem，aria-expanded 正确标注
- 键盘可在节点间连续移动并选中
- 尊重 prefers-reduced-motion，深浅色一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个树形控件，展示可展开折叠的层级节点，并支持选中某个节点。

**Design:** 设计树形控件。要求：子节点缩进对齐父节点；展开指示清晰且状态可辨；选中行有高亮；层级过深时缩进收敛；空分支有说明；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现树形控件：数据为嵌套节点数组，递归渲染 role="tree" / role="treeitem"；节点带 aria-expanded，容器 aria-multiselectable 视需求而定；roving tabindex + 方向键（上/下/左/右）控制焦点，Enter 或 Space 选中。

## 相关概念

- [accordion](/components/accordion) — 替代方案
- [sidebar](/components/sidebar) — 搭配使用
- [menu](/components/menu) — 相似概念

## 容易混淆

- [accordion](/components/accordion) — accordion 是并列分区的开合，tree-view 表达任意深度的父子层级
- [menu](/components/menu) — menu 用于命令与导航动作，tree-view 用于浏览并选择层级数据

## Sources

- [ARIA APG — Tree View](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)
- [WAI-ARIA — tree role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [Material Design — Lists](https://m3.material.io/components/lists/overview)

---

JSON: `/api/concept/components/tree-view.json` · 站点: /components/tree-view
