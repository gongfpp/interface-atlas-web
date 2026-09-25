# 悬停发光 / Hover Glow

> 动效 · `id: hover-glow`

鼠标悬停时元素边缘泛出柔和光晕，用外发光阴影或径向渐变沿边框晕开， 颜色多为品牌强调色。相比投影的"物理抬升"，光晕暗示的是"能量"与"可交互"， 常用于深色界面、游戏感产品与霓虹风格按钮。

**别名:** 悬浮发光 · hover 发光 · 按钮发光 · 鼠标放上去发光 · 边缘光晕 · glow effect

**分类:** Motion / Hover

## 适用场景

- 深色界面上突出主操作按钮或图标
- 霓虹 / 游戏 / 科技感的产品调性
- 与 hover-lift 二选一，避免同时叠加

## 不适用场景

- 浅色背景上低对比光晕（几乎不可见）
- 大面积元素整块发光（刺眼且廉价）
- 信息密集的工具界面（光晕分散注意力）

## 常见形式

- **柔和外发光** (Soft outer glow) — box-shadow 大模糊 + 强调色，最常用
- **边框流光** (Border gradient) — 径向渐变沿边框晕开，霓虹感更强
- **内发光** (Inner glow) — inset 阴影向内晕光，适合深色卡片

## 实现要点

**CSS:** `box-shadow` `radial-gradient` `transition` `:hover`

基础写法是 transition: box-shadow 200ms 后在 :hover 加 0 0 0 1px + 0 0 24px 两层强调色阴影；更高级的边框流光用伪元素 + 径向渐变 配合 mask 或 background 定位动画。光晕颜色取品牌强调色并保持 40%～60% 透明度， 避免纯白发光。触屏设备用 @media (hover:hover) 门控。

## 横向对比维度 (`hover-feedback`)

- **强度:** 中～强，视觉存在感高
- **适合元素:** 按钮 / 图标 / 深色卡片
- **移动端友好:** 差，无 hover

## 交给 Agent 的任务 Prompt

```text
为当前项目的主操作按钮添加 hover 发光反馈。

先检查现有按钮层级与强调色令牌，保持一致。
要求：
- hover 时 1px 描边 + 24px 强调色外发光，200ms 过渡
- 仅主按钮发光，次要按钮降级为描边着色
- 仅在支持 hover 的设备启用（@media hover:hover）
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给按钮添加 hover 发光效果：鼠标悬停时边缘泛出柔和光晕。

**Design:** 按钮 hover 时边缘泛出品牌强调色光晕：1px 同色描边 + 24px 模糊外发光， 200ms 过渡；只用于主操作，普通按钮仅描边着色不发光。

**Implementation:** 纯 CSS：transition: box-shadow .2s；hover 时 box-shadow: 0 0 0 1px var(--accent), 0 0 24px color-mix(in srgb, var(--accent) 50%, transparent)。 用 @media (hover:hover) 门控触屏；尊重 prefers-reduced-motion（降级为仅描边变色）。

## 相关概念

- [hover-lift](/motion/hover-lift) — 替代方案
- [press-feedback](/motion/press-feedback) — 相似概念
- [button](/motion/button) — 应用于
- [glassmorphism](/motion/glassmorphism) — 搭配使用

## Sources

- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/motion/hover-glow.json` · 站点: /motion/hover-glow
