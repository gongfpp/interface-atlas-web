# 包豪斯 / Bauhaus

> 风格 · `id: bauhaus`

用基础几何与三原色做构成游戏的视觉语言：圆 三角 方三种形状，红 黄 蓝 三原色加黑，不对称但平衡的构图，装饰服从功能。每一块色面与线条都参与 结构，海报像一场几何关系的研究。

**别名:** 包豪斯 · 包豪斯风格 · 几何构成主义 · 红黄蓝几何风 · 原色几何设计 · 圆三角方构成 · Bauhaus Design · Geometric Abstraction

**分类:** Style / Visual Language

## 适用场景

- 品牌 海报 活动页，需要强烈的图形识别与艺术气质
- 教育 创意工具类产品，传达"创造与构成"的气质
- 大面积视觉主视觉区，元素少而冲击力要求高

## 不适用场景

- 信息密集的界面，几何装饰会干扰数据可读性
- 需要长时间阅读的产品场景
- 品牌色板已被锁定，无法让位于三原色

## 常见形式

- **魏玛时期** (Weimar) — 表现主义余温，Itten 色彩理论影响
- **德绍时期** (Dessau) — 最经典阶段——理性几何与红黄蓝
- **当代包豪斯** (Contemporary Bauhaus) — 网页化的构成主义，更大胆的留白与动效

## 开发规格

- **typography:** 包豪斯几何无衬线，大写
- **color:** 米底 × 红 #E23B2E 蓝 #21409A 黄 #F2B705
- **border:** 0 圆角，细黑边框
- **shadow:** 无阴影
- **spacing:** 几何构图留白

## 实现要点

**CSS:** `background: #D93025` `clip-path` `border-radius: 50%` `grid` `mix-blend-mode`

用三原色建立固定角色：红为主视觉面，黄做暖点缀，蓝做冷点缀，黑承担 文字与结构线。构图用非对称平衡：一大几何形 + 一两条结构线 + 一个小 实体，元素之间保持接触或穿插而非悬空。形状可用 border-radius 50% 与 clip-path 三角形实现，避免图片素材。留白同样是构图材料。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用包豪斯风格（Bauhaus）实现一个几何构成主视觉区块。

先检查现有 Design Token 与色彩体系，三原色做成独立变量不污染品牌色。
要求：
- 圆 三角 方与红 黄 蓝 黑构成非对称平衡的主视觉
- 几何形用 CSS（border-radius/clip-path）实现，不引入图片素材
- 文字与几何穿插接触，构图重心平衡
- 无渐变 无投影 无纹理
- 支持深色模式
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用包豪斯风格（Bauhaus）设计界面：圆 三角 方几何构成，红 黄 蓝 三原色加黑， 不对称但平衡的构图，装饰服从功能。

**Design:** 包豪斯设计规范：底色米白 #F4EFE6 或黑；主视觉用大几何形（红圆 黄三角 蓝方至少出现两种）并与文字穿插接触；文字黑色无衬线 大写或粗几何体； 禁用渐变 投影 与纹理；构图不对称但重心平衡；深色模式底色近黑，三原色 提亮一档保持冲击。

**Implementation:** 用 CSS 实现包豪斯构成：圆形用 border-radius: 50%；三角形用 clip-path: polygon(50% 0, 0 100%, 100% 100%)；结构线用 2px 黑色实线； 文字与几何形用负 margin 或 grid 重叠穿插；所有色面纯色填充，无阴影。

## 相关概念

- [swiss-style](/styles/swiss-style) — 相似概念
- [memphis](/styles/memphis) — 相似概念
- [flat-design](/styles/flat-design) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件

## Sources

- [Bauhaus Dessau Foundation](https://www.bauhaus-dessau.de/en/)
- [Wikipedia — Bauhaus](https://en.wikipedia.org/wiki/Bauhaus)

---

JSON: `/api/concept/styles/bauhaus.json` · 站点: /styles/bauhaus
