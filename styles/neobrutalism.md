# 新粗野主义 / Neobrutalism

> 风格 · `id: neobrutalism`

用粗黑描边、高饱和撞色与生硬的偏移实心阴影构成的高对比视觉语言：元素像彩色 贴纸一样直接砸在页面上，配合夸张的圆角与醒目标签。它刻意拒绝精致与圆滑， 以"丑得理直气壮"的态度换取强烈的记忆点与年轻个性。

**别名:** 新粗野主义 · 粗野风 · 大黑边风格 · 硬阴影风格 · 新残酷主义 · Neo-brutalism · Brutalist Web Design

**分类:** Style / Visual Language

## 适用场景

- 面向年轻群体的品牌 活动 开发者工具官网
- 想在千篇一律的精致界面里制造强烈记忆点
- 营销页 作品集 创意社区等低密度高表现力场景

## 不适用场景

- 金融 医疗 企业级产品等需要稳重可信的场景
- 长时间使用的生产力工具，高对比装饰易造成视觉疲劳
- 内容密集 数据密集的界面，粗边与大色块挤占信息空间

## 常见形式

- **经典硬阴影** (Classic Hard Shadow) — 奶油底色 + 黑边 + 偏移实心阴影
- **糖果色** (Candy) — 粉 紫 黄等高饱和糖果色块互相碰撞
- **粗粝噪点** (Grunge) — 加入噪点纹理 倾斜元素与手绘涂鸦

## 开发规格

- **typography:** 超粗无衬线，全大写
- **color:** 奶油底 × 纯黑 × 橙 #FF6B00
- **border:** 3px 黑色实线粗边
- **shadow:** 5px 5px 0 硬投影（不模糊）
- **spacing:** 0 圆角，紧凑堆叠

## 实现要点

**CSS:** `border: 2-4px solid #000` `box-shadow: 4px 4px 0 #000` `border-radius: 8-16px` `background: saturate()` `transition`

三件套是风格命门：粗黑边（2～4px）、偏移实心阴影（如 4px 4px 0 #000，绝不用 模糊）、明快圆角。配色选高饱和糖果色并大胆撞色。交互反馈很出效果：hover 时 元素位移，active 时把位移吃掉、阴影归零，像真的被按进纸面。噪点可用 SVG feTurbulence 或重复渐变模拟。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用新粗野主义风格（Neobrutalism）实现一个卡片 + 按钮区块。

先检查现有组件与 Design Token，确定是否已有可复用的边框/阴影变量。
要求：
- 粗黑描边（2～3px）+ 偏移实心阴影（无模糊）
- 高饱和撞色，底色用奶油色系
- 按钮 hover 上浮、active 阴影归零的物理按压感
- 支持深色模式（近黑底，彩色保持高亮）
- 过渡动画尊重 prefers-reduced-motion，时长 120ms 内
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用新粗野主义风格（Neobrutalism）设计界面：粗黑描边、高饱和撞色、偏移实心硬阴影，元素像贴纸一样直接有力。

**Design:** 新粗野主义设计规范：底色奶油黄（#FDF2D8）；所有元素 2～3px 纯黑描边； 阴影只用实心偏移（4px 4px 0 #000），禁止模糊投影；圆角 10px 左右；主色 高饱和（红 #FF5D5D、黄 #FFC900、蓝 #4D9FFF 任选撞色）；标题粗黑体可全大写； 按钮按下时位移吃掉阴影。深色模式用近黑底色但保持彩色元素亮度。

**Implementation:** 用 CSS 实现新粗野主义：封装 .nb 基类（border: 3px solid #000; box-shadow: 4px 4px 0 #000; border-radius: 10px），色板用 CSS 变量管理糖果色；hover 用 transform translate(-2px,-2px) 并把阴影加深到 6px，active 归零阴影模拟按压； 徽章用纯色块 + 黑边 + 全大写小字号；所有过渡 120ms 内完成并乘以速度变量。

## 相关概念

- [bauhaus](/styles/bauhaus) — 相似概念
- [memphis](/styles/memphis) — 相似概念
- [y2k](/styles/y2k) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件

## Sources

- [Gumroad — Neobrutalism 代表案例](https://gumroad.com/)
- [Wikipedia — Brutalist Architecture（风格词源）](https://en.wikipedia.org/wiki/Brutalist_architecture)

---

JSON: `/api/concept/styles/neobrutalism.json` · 站点: /styles/neobrutalism
