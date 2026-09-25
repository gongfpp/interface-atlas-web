# 骨架屏 / Skeleton Loading

> 交互模式 · `id: skeleton-loading`

用与真实内容结构一致的灰色占位块表示加载状态，通常带轻微的微光扫过或呼吸动画。 它告诉用户"内容马上就位，结构长这样"，而不是让用户盯着空白或转圈等待。

**别名:** Skeleton · 骨架加载 · 内容占位 · 灰色占位 · 加载占位图 · shimmer 占位

**分类:** Feedback / Loading

## 适用场景

- 内容结构相对稳定、可预知
- 预计加载时间在 1～3 秒之间
- 列表、卡片流等重复结构的内容页

## 不适用场景

- 加载极快（< 300ms），骨架屏会闪一下反而干扰
- 内容结构完全不可预测，占位与结果差异过大
- 后台操作但页面结构不变，用进度或按钮状态更合适

## 常见形式

- **静态占位** (Static) — 纯灰色块，最克制
- **呼吸** (Pulse) — 透明度缓慢起伏
- **微光扫过** (Shimmer) — 一道高光斜向扫过，iOS 风格

## 实现要点

**CSS:** `background` `animation` `background-clip: text` `linear-gradient`

占位块用 border-radius 模拟头像/文字形状；shimmer 用 linear-gradient 高光叠层， 通过 background-position 动画扫过，或对伪元素做 translateX。 pulse 直接动画 opacity。占位尺寸应尽量接近真实内容，避免加载完成后布局跳动。

## 横向对比维度 (`loading-indicator`)

- **打断程度:** 低，页面结构不变
- **信息量:** 低，只表达结构
- **适用时长:** 1～3 秒
- **与结果一致性:** 高

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现骨架屏（Skeleton Loading）。

先检查现有组件体系和 Design Token，优先复用现有的表面色与圆角变量。
用途：文章列表加载状态。
要求：
- 灰色占位块表示内容结构（头像、标题、正文）
- 轻微 shimmer 动画，尊重 prefers-reduced-motion
- 占位尺寸与真实内容基本一致，避免布局跳动
- 支持 Dark Mode
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个骨架屏（Skeleton Loading）组件，用于内容加载时展示与真实结构一致的灰色占位块。

**Design:** 创建骨架屏组件。要求：灰色占位块（头像圆形 + 标题行 + 两行正文），带轻微 shimmer 微光扫过动画；支持深浅色主题；占位尺寸与最终内容一致。

**Implementation:** 用 React + Tailwind 实现 Skeleton Loading。结构：容器内若干占位 div，用 animate-pulse 或自写 shimmer keyframes（linear-gradient 高光 + background-position 动画）。提供 Skeleton、SkeletonCircle、SkeletonText 子组件，支持 className 定制尺寸。尊重 prefers-reduced-motion（降级为静态灰色块）。

## 相关概念

- [loading-spinner](/patterns/loading-spinner) — 替代方案
- [progress-bar](/patterns/progress-bar) — 替代方案
- [optimistic-ui](/patterns/optimistic-ui) — 相似概念
- [lazy-loading](/patterns/lazy-loading) — 相似概念
- [empty-state](/patterns/empty-state) — 相似概念

## 可搭配的风格

`minimalism` `bento-grid`

## Sources

- [Material Design — Text fields & placeholders](https://m3.material.io/)
- [Apple HIG — Loading](https://developer.apple.com/design/human-interface-guidelines/loading)

---

JSON: `/api/concept/patterns/skeleton-loading.json` · 站点: /patterns/skeleton-loading
