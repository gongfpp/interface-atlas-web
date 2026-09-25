# 瑞士风格 / Swiss Style

> 风格 · `id: swiss-style`

以客观网格与排版传达信息的视觉语言：严密的数学网格、无衬线字体、左对齐、 黑白加一个强调色（经典为红），用留白与字号对比建立秩序。装饰被视为噪音， 设计的目标是让信息以最短的路径被读懂。

**别名:** 瑞士风格 · 瑞士平面设计 · 国际主义排版风格 · 网格排版风格 · 黑白红海报风 · Helvetica风格 · International Typographic Style · Swiss Design

**分类:** Style / Visual Language

## 适用场景

- 设计系统 博物馆 文化机构，需要客观严谨的秩序感
- 数据 技术文档 目录类内容，结构化信息为主
- 海报 期刊封面等需要强烈排版张力的场景

## 不适用场景

- 品牌需要亲和 温暖或娱乐化的情绪
- 内容零散无结构，网格反而放大凌乱感
- 中文与衬线混排为主的阅读场景，风格语言不匹配

## 常见形式

- **苏黎世学派** (Zurich School) — Josef Müller-Brockmann 的严格模数网格
- **巴塞尔学派** (Basel School) — Emil Ruder 与 Armin Hofmann，更重字体排印节奏
- **新瑞士** (New Swiss) — 当代网页化的瑞士风，等宽字与细线引入

## 开发规格

- **typography:** Helvetica 式无衬线，全大写粗黑标题
- **color:** 纸灰底 × 纯黑 × 正红 #E63312
- **border:** 1px 黑色实线分割栏
- **shadow:** 无阴影，扁平到极致
- **spacing:** 严格网格，栏距一致

## 实现要点

**CSS:** `grid` `font-family: Helvetica` `text-align: left` `letter-spacing` `border-top: 2px solid`

先立网格：12 列或简单 3×3，所有元素吸附网格线，禁止任意间距。字体只用 一套无衬线（Helvetica/Inter/Neue Haas），层级靠字号跳跃（如 12/48px） 而非加粗渐变；正文左对齐，禁用居中排版。色彩为黑 白 灰 + 单一强调红， 红只出现在标题标号与关键线上。分隔用粗细两种横线（2px/1px）。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用瑞士风格（Swiss Style）实现一个排版主导的信息区块。

先检查现有 Design Token 与字体栈，网格间距映射到现有间距变量。
要求：
- 建立 12 列网格，所有元素吸附网格线，间距成模数
- 单一无衬线字体，层级靠字号跳跃不靠加粗渐变
- 黑白灰 + 单一强调红，红只用于标号与关键线
- 正文左对齐，分隔用 2px/1px 两种横线
- 支持深色模式
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用瑞士风格（Swiss Style）设计界面：严格网格排版、无衬线字体、左对齐、 黑白加单色强调红，层级靠字号对比与留白建立。

**Design:** 瑞士风格设计规范：白色底 黑色 Helvetica（或 Inter）；建立 12 列网格并 让所有元素对齐；标题字号与正文形成 4 倍以上跳跃；强调色仅用一个红色 #E30613，用于标号与粗横线；留白宽松且成模数（8 的倍数）；无阴影 无 渐变 无圆角（或极小圆角）；深色模式为近黑底 反白字 红色保留。

**Implementation:** 用 CSS 实现瑞士风格：外层 .swiss-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }；标题 font-family: "Helvetica Neue", Arial; font-size: 44px; line-height: 1.05; letter-spacing: -0.02em；分隔线 .rule { border-top: 2px solid #000 } 与 .rule-thin { border-top: 1px solid #ccc }；编号用红色等宽小字。

## 相关概念

- [minimalism](/styles/minimalism) — 相似概念
- [editorial](/styles/editorial) — 相似概念
- [bauhaus](/styles/bauhaus) — 相似概念
- [card](/styles/card) — 影响组件
- [table](/styles/table) — 影响组件

## Sources

- [Wikipedia — International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- [Design reviewed — Swiss Style Principles](https://www.designreviewed.com/swiss-style/)

---

JSON: `/api/concept/styles/swiss-style.json` · 站点: /styles/swiss-style
