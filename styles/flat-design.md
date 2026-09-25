# 扁平化设计 / Flat Design

> 风格 · `id: flat-design`

拒绝一切拟真修饰的视觉语言：纯色块、几何形状、无渐变无投影无纹理，靠颜色、 形状与排版建立层级。它是拟物化的反面——界面不再模仿实物，而是承认自己 是一块发光的平面，用清晰与直接换取效率与一致性。

**别名:** 扁平化 · 扁平风格 · 扁平化设计 · 没有阴影那种平面设计 · 色块图标风格 · 扁平UI · Flat UI · Flat Design

**分类:** Style / Visual Language

## 适用场景

- 系统级产品需要跨平台一致与极低成本维护
- 图标 信息图 后台界面，要求一眼识别 快速扫读
- 移动端小屏幕，装饰会挤占内容空间

## 不适用场景

- 层级复杂且用户需要空间线索区分可点与不可点
- 品牌需要温度 情绪与精致感
- 大面积灰底上加细线按钮，可点性暗示不足（ Flat 2.0 随之出现）

## 常见形式

- **Metro 磁贴** (Metro Tiles) — 微软 Metro，大色块磁贴与矩形至上
- **Flat UI 撞色** (Flat UI Colors) — 高饱和撞色 加浅底 圆角与细描边
- **扁平 2.0** (Flat 2.0) — 补回轻微阴影与层次，Material 前奏

## 开发规格

- **typography:** 几何无衬线，中等字重
- **color:** 纯色平涂：蓝 #1FA2FF × 黄 #FFD54F
- **border:** 无描边，色块分区
- **shadow:** 完全无阴影
- **spacing:** 小圆角 6px，均匀网格

## 实现要点

**CSS:** `solid-color` `border: 0` `box-shadow: none` `transition: background-color`

纪律比技巧重要：只允许纯色填充与 1px 描边，box-shadow 一律 none，渐变与 纹理一律不出现；层级交给色块面积与明度差。可交互元素用高饱和强调色或 描边保证可点性；hover 只改 background-color，150ms 内完成。深浅色模式 各维护一套色板而非简单反色。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用扁平化设计（Flat Design）实现一组卡片与按钮区块。

先检查现有 Design Token 与色彩变量，把风格色板映射进现有变量体系。
要求：
- 只用纯色填充，无渐变 无投影 无纹理
- 交互元素用高饱和强调色，hover 仅改 background-color
- 层级靠色块面积 明度差与字号字重建立
- 支持深色模式（独立色板，不做简单反色）
- 若有过渡动画，尊重 prefers-reduced-motion，150ms 内完成
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用扁平化设计（Flat Design）风格设计界面：纯色块、无渐变无投影无纹理， 层级靠颜色与排版建立，交互元素用高饱和强调色标识。

**Design:** 扁平化设计规范：背景纯白或纯灰，内容用 5～6 个高饱和色块（参考 Flat UI Colors：#3498DB #E74C3C #2ECC71 等）；无边框无投影，圆角 0～4px；文字 反白或近黑，字号层级清晰；按钮 hover 仅加深背景色 8%；深色模式单独 调整色板明度，不做简单反色。

**Implementation:** 用 CSS 实现扁平风格：建立 6 色设计变量（--c-primary 等），按钮 .btn-flat { background: var(--c-primary); color: #fff; border-radius: 3px; transition: background-color 150ms; } hover 加深 8%；卡片用纯色块或 1px 分隔；确保所有交互元素与非交互元素的颜色差达到可辨识水平。

## 相关概念

- [minimalism](/styles/minimalism) — 相似概念
- [skeuomorphism](/styles/skeuomorphism) — 相似概念
- [swiss-style](/styles/swiss-style) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件

## Sources

- [Nielsen Norman Group — Flat Design](https://www.nngroup.com/articles/flat-design/)
- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)

---

JSON: `/api/concept/styles/flat-design.json` · 站点: /styles/flat-design
