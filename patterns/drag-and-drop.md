# 拖放 / Drag and Drop

> 交互模式 · `id: drag-and-drop`

用按住—拖动—松手的直接操作，把对象移动到新位置或新容器。所见即所得，比菜单命令更贴近空间直觉；拖动中要有清晰落点指示，目标容器需给出接受反馈。范围比拖拽排序更广：移动、归位、跨列表投递都算。

**别名:** 拖放 · 拖拽移动 · 拖过去 · 拖到那边 · 拖来拖去 · drag and drop · dnd · drag to move

**分类:** Interaction / Direct manipulation

## 适用场景

- 对象需要在不同容器或位置之间移动（文件归档、素材入库）
- 空间位置本身就有语义（看板列、画布、网格布局）
- 用户群体以鼠标/触控板为主，拖拽是自然手势

## 不适用场景

- 仅需调整顺序，用拖拽排序或上移下移按钮更精准
- 目标位置不可见或需跨屏，落点极易投错
- 键盘与读屏是主要通道，却没有等价按钮兜底

## 常见形式

- **拖动移动** (Drag to move) — 把对象拖到新位置或新容器，最通用
- **拖动排序** (Drag to reorder) — 同一列表内换位，邻项实时让位
- **跨列表拖放** (Drag between lists) — 从源列表拖入目标列表，源端可留占位

## Platform API

- `draggable`
- `drop`
- `Pointer Events`

## 实现要点

**CSS:** `cursor-grab` `transform: translate` `opacity` `transition` `pointer-events`

HTML5 拖拽用 draggable + dragstart / dragover / drop；触屏不支持，需 Pointer Events 或按钮兜底。拖动中给原位置留半透明占位，目标容器高亮并显示落点线。drop 后更新数据源， 必要时乐观回滚。尊重 prefers-reduced-motion，位移过渡退化为直接落位。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现拖放（Drag and Drop）交互。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 按住—拖动—松手完成移动，拖动中有占位与落点指示
- 目标容器给出接受高亮
- 提供按钮或菜单等键盘可达兜底
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个拖放（Drag and Drop）演示，对象可以按住拖到目标容器完成移动。

**Design:** 创建拖放演示。要求：左侧待办卡片可拖入右侧两个分类箱；拖动中原位留半透明占位、目标箱高亮并出现落点线；松手后卡片落入目标箱并计数；支持深浅色主题。

**Implementation:** 用 React + HTML5 DnD 或 Pointer Events 实现：dragstart 记录来源，dragover preventDefault 并高亮目标，drop 时迁移数据。拖动样式用 cursor-grab 与 opacity，落点线用边框或伪元素。 提供键盘可达的"移动到"按钮兜底。动画时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 相关概念

- [drag-and-drop-sorting](/patterns/drag-and-drop-sorting) — 相似概念
- [inline-editing](/patterns/inline-editing) — 搭配使用
- [kanban-board](/patterns/kanban-board) — 搭配使用

## Sources

- [MDN — HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [MDN — Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [Apple HIG — Drag and drop](https://developer.apple.com/design/human-interface-guidelines/drag-and-drop)

---

JSON: `/api/concept/patterns/drag-and-drop.json` · 站点: /patterns/drag-and-drop
