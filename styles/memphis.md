# 孟菲斯风格 / Memphis Design

> 风格 · `id: memphis`

反功能主义的后现代视觉语言：波浪线 圆点 锯齿 斑点等天真涂鸦元素，与高饱和 撞色、黑色粗描边一起铺满画面，故意打破网格与秩序。它拥抱廉价与热闹，用 "丑得快乐"对抗优雅的现代主义。

**别名:** 孟菲斯风格 · 孟菲斯设计 · 八十年代波普风 · 波点波浪线装饰风 · 彩色几何涂鸦风 · 水磨石撞色风 · Memphis Milano · Postmodern Pop

**分类:** Style / Visual Language

## 适用场景

- 潮流 玩具 派对 音乐节等需要欢乐能量的场景
- 儿童与创意教育产品，热闹无攻击性
- 短期营销活动，需要一眼难忘的视觉记忆点

## 不适用场景

- 需要长时间专注使用的工具与阅读产品
- 品牌调性高级 克制 或面向严肃决策者
- 信息密集界面，装饰密度会淹没功能

## 常见形式

- **经典孟菲斯** (Classic Memphis) — Ettore Sottsass 式黑白底 大色块 波浪
- **水磨石** (Terrazzo) — 碎片斑点铺满底面，密度取胜
- **新孟菲斯** (Neo-Memphis) — 网页化改良，留白增多 描边变细

## 开发规格

- **typography:** 无衬线粗标题，随性排版
- **color:** 奶油底 × 粉 #FF5C8A 黄 #FFD23F 青 #3EC6A8
- **border:** 2px 黑边
- **shadow:** 4px 4px 0 位移硬投影
- **spacing:** 故意歪斜、错位排布

## 实现要点

**CSS:** `background-image: radial-gradient` `border: 3px solid #000` `box-shadow: 5px 5px 0` `border-radius: 50%` `clip-path`

经典配方：黑白几何底纹（波点用 radial-gradient 平铺，条纹用 repeating- linear-gradient）垫底；主体元素用高饱和撞色（柠檬黄 珊瑚红 湖蓝 紫罗兰） + 2～3px 黑描边 + 偏移实心阴影；波浪线与锯齿用 SVG 或 clip-path，数量 控制在 3～5 个防止失控。深色模式把黑底反转成墨蓝，保持撞色饱和度。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用孟菲斯风格（Memphis Design）实现一组撞色卡片与按钮区块。

先检查现有 Design Token 与色彩变量，孟菲斯色板与底纹做独立作用域。
要求：
- 黑白几何底纹（波点/条纹）+ 高饱和撞色块 + 黑描边 + 偏移实心阴影
- 涂鸦点缀元素（波浪 锯齿 形状）控制在 3～5 个
- 文字对比度达标，装饰不承载关键信息
- 支持深色模式（墨蓝底，撞色保持饱和）
- 若有 hover 动效，尊重 prefers-reduced-motion
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用孟菲斯风格（Memphis Design）设计界面：波浪线 圆点 锯齿涂鸦元素与高饱和 撞色，黑色描边与偏移阴影，热闹反秩序的后现代气质。

**Design:** 孟菲斯设计规范：底面用黑白波点或条纹几何纹样；主体色块用柠檬黄 #FFD53D 珊瑚红 #FF6B6B 湖蓝 #4D96FF 紫罗兰 #B388FF，全部 3px 黑描边加 5px 偏移 实心阴影；点缀波浪线 锯齿与三角 圆 小方等涂鸦元素 3～5 个；文字粗壮 无衬线可略倾斜；深色模式底改墨蓝 #14143C，撞色保持饱和。

**Implementation:** 用 CSS 实现孟菲斯底纹：.memphis-dots { background-image: radial-gradient(#000 2.5px, transparent 2.5px); background-size: 18px 18px; } 撞色卡片 .memphis-card { border: 3px solid #000; box-shadow: 6px 6px 0 #000; border-radius: 10px; } 波浪线用内联 SVG path，锯齿用 clip-path polygon。

## 相关概念

- [bauhaus](/styles/bauhaus) — 相似概念
- [neobrutalism](/styles/neobrutalism) — 相似概念
- [y2k](/styles/y2k) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件

## Sources

- [Memphis Milano](https://memphis-milano.com/)
- [Wikipedia — Memphis Group](https://en.wikipedia.org/wiki/Memphis_Group)

---

JSON: `/api/concept/styles/memphis.json` · 站点: /styles/memphis
