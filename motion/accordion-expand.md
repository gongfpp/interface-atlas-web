# 手风琴展开 / Accordion Expand

> 动效 · `id: accordion-expand`

点击标题后内容区在高度方向展开或收起，像手风琴风箱。 关键是用 grid-template-rows 从 0fr 到 1fr 的高度动画， 让内容"推开来"而不是瞬间出现， 同时箭头旋转呼应状态。

**别名:** 手风琴展开 · 折叠展开 · 展开收起动画 · 下拉展开 · 折叠面板

**分类:** Motion / Disclosure

## 适用场景

- FAQ、设置分组、详情页补充信息
- 长页面需要折叠低优先级内容
- 同组内容一次只看一个（互斥手风琴）

## 不适用场景

- 用户需要对比多个展开项（互斥会烦）
- 内容超过两屏（滚动比折叠更自然）
- 关键操作路径上的步骤（隐藏即摩擦）

## 常见形式

- **互斥展开** (Single open) — 同时只开一项，经典手风琴
- **多开** (Multi-open) — 各项独立开合，适合并列内容
- **grid 动画** (Grid rows) — grid-template-rows 0fr→1fr，免测高度

## 实现要点

**CSS:** `display: grid` `grid-template-rows 0fr → 1fr` `min-height: 0` `transition grid/height`

现代纯 CSS 法：外层 display:grid，grid-template-rows 在 0fr 与 1fr 间过渡（300ms）， 内层 min-height:0 + overflow:hidden。 免去 JS 测量高度。 展开/收起方向一致；箭头 rotate 90/180 同步过渡； 尊重 prefers-reduced-motion 改为瞬时切换。

## 交给 Agent 的任务 Prompt

```text
为项目 FAQ 区添加手风琴展开动效。

先检查现有 accordion/折叠组件，避免重复实现。
要求：
- grid-template-rows 0fr→1fr 高度动画，300ms
- 同组互斥（可配置多开），箭头同步旋转
- aria-expanded 正确、键盘可操作
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给 FAQ 列表添加手风琴展开效果：点击标题展开答案，再点收起。

**Design:** FAQ 项点击后答案在 300ms 内由 0fr 展开到 1fr，箭头同步旋转 180°；同组互斥，一次只开一项；展开不跳页。

**Implementation:** 外层 grid + grid-template-rows: 0fr/1fr 过渡 300ms，内层 overflow:hidden + min-height:0。React 里用 useState 存展开 id，互斥取单值。加 aria-expanded 与按钮语义；reduced-motion 直接切换。

## 相关概念

- [accordion](/motion/accordion) — 应用于
- [progressive-disclosure](/motion/progressive-disclosure) — 搭配使用
- [filter-panel](/motion/filter-panel) — 应用于
- [settings](/motion/settings) — 搭配使用

## Sources

- [MDN — grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

---

JSON: `/api/concept/motion/accordion-expand.json` · 站点: /motion/accordion-expand
