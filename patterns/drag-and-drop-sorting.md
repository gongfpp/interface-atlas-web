# 拖拽排序 / Drag & Drop Sorting

> 交互模式 · `id: drag-and-drop-sorting`

用直接拖动的方式调整列表项的先后顺序：按住条目（或把手）拖到目标位置，其余条目实时让位并给出落点提示。 它把"排序"从抽象的上下移按钮变成所见即所得的空间操作，同时保留按钮作为可达性兜底。

**别名:** 拖拽排序 · 拖动调整顺序 · 拖动排序 · 上下移动排序 · 拖拽换位置 · 拖放排列

**分类:** Manipulation / Lists

## 适用场景

- 用户需要自由决定条目顺序（播放列表、任务清单、栏目配置）
- 列表项数量适中，一屏内能看清全局
- 顺序调整频繁，按钮逐级移动太低效

## 不适用场景

- 顺序由规则决定（按时间、按字母），无需手动调
- 列表很长且跨屏拖动容易迷失落点
- 主要用户在触屏上且行高太小，拖拽误触率高

## 常见形式

- **整行拖动** (Whole item) — 按条目任意位置拖，最直接
- **把手拖动** (Handle) — 六点把手限定拖拽区，避免与滚动冲突
- **按钮排序** (Buttons) — 上移/下移按钮，键盘与读屏友好

## 实现要点

**CSS:** `draggable` `transform` `transition` `cursor-grab`

HTML5 拖拽：条目设 draggable，dragstart 记录来源索引，dragover 阻止默认并计算落点，drop 时 重排数组。触屏不支持 HTML5 DnD，需按钮或指针事件兜底。拖动中给原位置留半透明占位， 目标行高亮。尊重 prefers-reduced-motion，交换动画退化为直接落位。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现列表拖拽排序（Drag & Drop Sorting）。

先检查现有列表组件与排序交互，保持风格一致。
用途：设置页的栏目顺序配置。
要求：
- HTML5 draggable 实现整行拖动，drop 后重排数据
- 每行提供上移/下移按钮，支持键盘操作
- 拖动中显示占位与目标高亮
- 不引入 dnd 等新依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个拖拽排序（Drag & Drop Sorting）演示，列表条目可以拖动换位，也提供上移/下移按钮。

**Design:** 创建拖拽排序演示。要求：任务列表条目可整行拖动换位，拖动中原位留半透明占位、目标行高亮； 每行附上移/下移按钮兜底；把手用六点图标暗示可拖；顺序变化有轻微过渡动画。

**Implementation:** 用 React + HTML5 DnD 实现排序：useState 保存数组，dragstart/dragover/drop 处理索引交换， dragging 状态控制 ghost 样式。另提供 moveUp/moveDown 按钮函数。拖动样式用 cursor-grab 与 opacity，交换动画尊重 prefers-reduced-motion。不引入 dnd 库。

## 相关概念

- [kanban-board](/patterns/kanban-board) — 相似概念
- [inline-editing](/patterns/inline-editing) — 相似概念
- [optimistic-ui](/patterns/optimistic-ui) — 相似概念
- [button](/patterns/button) — 搭配使用
- [accordion](/patterns/accordion) — 搭配使用

## 可搭配的风格

`minimalism` `bento-grid`

## Sources

- [Apple HIG — Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop)
- [MDN — HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---

JSON: `/api/concept/patterns/drag-and-drop-sorting.json` · 站点: /patterns/drag-and-drop-sorting
