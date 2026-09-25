# 数字滚动 / Number Counter

> 动效 · `id: number-counter`

数字从 0（或旧值）滚动增长到目标值，让计数过程本身表达"数据在增长"。 常用于数据看板大数字、统计区与里程碑（"10 万用户"）。 数字成为动效的主角，比静态数值更有说服力。

**别名:** 数字滚动增长 · 数字从小到大 · 计数动画 · 数字跳到目标值 · 数据滚动

**分类:** Motion / Data

## 适用场景

- 首屏或统计区的大数字（KPI、用户数、下载量）
- 数字进入视口时触发一次，强调里程碑
- 数值更新时从旧值过渡到新值，保持连续感

## 不适用场景

- 高频刷新的实时数值（一直在滚，读不了）
- 需要精确抄录的数字（金额、账号、验证码）
- 表格内的密集小数字（噪音大于价值）

## 常见形式

- **缓动计数** (Eased count) — 起步快后段减速，最自然的落定
- **等宽数字** (Tabular digits) — font-variant-numeric: tabular-nums 防宽度抖动
- **带格式计数** (Formatted count) — 千分位、单位、小数同步插值

## 实现要点

**CSS:** `requestAnimationFrame` `ease-out interpolation` `font-variant-numeric: tabular-nums` `@property counter (CSS-only)`

CSS 无法直接给文本计数，实用做法是 requestAnimationFrame 插值 + ease-out 曲线， 时长 1～2s。必须加 font-variant-numeric: tabular-nums 防止数字宽度抖动； 千分位与单位在每帧一起格式化。尊重 prefers-reduced-motion——直接显示终值。

## 交给 Agent 的任务 Prompt

```text
为项目统计区的大数字添加计数动画。

先检查现有数字展示组件，避免与实时刷新逻辑冲突。
要求：
- rAF + ease-out 插值，1～2s，进入视口触发一次
- tabular-nums 防宽度抖动，千分位格式化
- reduced-motion 或 JS 失效时直接显示终值
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给统计区的大数字添加从 0 滚动到目标值的计数动画。

**Design:** 统计数字进入视口后 1.6s 内从 0 计数到目标值，ease-out 减速落定，等宽数字防抖动，千分位同步格式化；仅触发一次。

**Implementation:** 用 requestAnimationFrame 插值，progress 经 easeOutCubic(t) 变换，值为 Math.round(target * p)，toLocaleString 格式化。容器加 tabular-nums。IntersectionObserver 触发一次；prefers-reduced-motion 直接渲染终值。

## 相关概念

- [dashboard](/motion/dashboard) — 搭配使用
- [scroll-reveal](/motion/scroll-reveal) — 相似概念
- [progress-bar](/motion/progress-bar) — 应用于
- [text-reveal](/motion/text-reveal) — 相似概念

## Sources

- [MDN — requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)

---

JSON: `/api/concept/motion/number-counter.json` · 站点: /motion/number-counter
