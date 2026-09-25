# 日历页 / Calendar Page

> 页面 · `id: calendar`

用时间网格承载事件与日程的页面：以月、周、日三种尺度切换视图，事件块按起止时间定位并支持拖拽改期， 顶部有今天、前后翻页与视图切换，侧栏列出待办与冲突。 它是排期、预约与团队协调的主界面。

**别名:** 日历页 · 日程页 · 日历界面 · 排期页面 · 日程表 · 月历 · 看日期的页面 · 安排时间的页面

**分类:** Page / Productivity

## 适用场景

- 事件有明确的起止时间与日期
- 用户需要跨天、跨周比较安排
- 多人共享同一时间资源（会议室、班表）

## 不适用场景

- 只有截止日期、没有具体时段（用列表或看板）
- 纯按时间正序的日志流（用时间线）
- 单次预约、无需浏览时间网格（用日期选择器）

## 常见形式

- **月视图** (Month View) — 六周网格，先看整体疏密
- **周视图** (Week View) — 逐时排布，会议与班表常用
- **议程列表** (Agenda List) — 按天罗列事件，移动端友好

## 页面结构

1. **工具栏** — 今天、前后翻页、视图切换与新建事件入口。
2. **日期网格** — 月/周/日不同粒度的行列表头与时间轴。
3. **事件块** — 按起止定位、颜色分类，可点击编辑、拖拽改期。
4. **今日标记** — 当前日期高亮，有事件时显示圆点。
5. **侧栏议程** — 选中日期的待办与时间冲突提醒。

## 实现要点

**CSS:** `grid` `grid-template-columns: repeat(7, 1fr)` `overflow: auto` `position: sticky`

月视图用 7 列 grid，日期单元格纵横比为 1 / 1 并让事件块超出时省略号截断； 周视图用时间轴 grid-rows 配合绝对定位事件块（top/height 由起止换算）。工具栏吸顶， 网格横向可滚动；拖拽改期用 HTML5 DnD 或指针事件，落点高亮 200ms 反馈。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现日历页。

先检查现有日期工具函数、事件数据与弹层组件，优先复用。
要求：
- 工具栏 + 月/周/议程三种视图 + 侧栏议程
- 今天高亮，事件块按起止定位并分类配色
- 点击事件可查看详情，拖拽可改期
- 键盘方向键在日期网格中导航
- 响应式，窄屏降级为议程列表
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个日历页，包含月视图网格、事件块和今日标记。

**Design:** 创建团队日历页：顶部工具栏含今天、上一页/下一页、月/周/议程切换与新建事件按钮； 主体月视图七列网格，今天高亮，事件块按分类配色且时间冲突时并排；右侧栏列出选中日期的 议程与冲突提示。响应式，窄屏默认切到议程列表；深浅色一致，键盘可导航单元格。

**Implementation:** 用 React + Tailwind 实现日历页：日期矩阵由当前年月计算生成，选中日与视图为受控状态； 事件按日期分组渲染，冲突事件横向分列；单元格方向键导航用 roving tabindex； 拖拽改期用指针事件并更新本地事件状态；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [date-picker](/pages/date-picker) — 包含组件
- [segmented-control](/pages/segmented-control) — 包含组件
- [timeline](/pages/timeline) — 包含组件
- [drag-and-drop](/pages/drag-and-drop) — 使用模式
- [empty-state](/pages/empty-state) — 使用模式

## Sources

- [Material Design 3 — Date pickers](https://m3.material.io/components/date-pickers/overview)
- [W3C WAI-ARIA Authoring Practices — Grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)

---

JSON: `/api/concept/pages/calendar.json` · 站点: /pages/calendar
