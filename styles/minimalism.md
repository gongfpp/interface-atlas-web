# 极简主义 / Minimalism

> 风格 · `id: minimalism`

以"少即是多"为准则的视觉语言：用大量留白、克制的黑白灰配色与有限字体层级 来凸显内容本身，删除一切装饰性元素，层级完全依靠空间、字重与疏密建立。 安静、克制、内容至上是它的气质。

**别名:** 极简风 · 简约风格 · 性冷淡风 · 大量留白那种设计 · 性冷淡设计 · Minimal · Minimalist Design · Less is more

**分类:** Style / Visual Language

## 适用场景

- 内容为王的产品——阅读、写作、摄影、作品集
- 想传达专业、克制、高端的品牌气质
- 元素少而结构清晰的页面（官网首屏、详情页）

## 不适用场景

- 信息密度高的后台与数据界面，过度留白牺牲效率
- 需要情绪浓度与热闹感的营销、娱乐、节庆场景
- 可用元素很少时容易显得"空而廉价"，需极强排版功底兜底

## 常见形式

- **黑白极简** (Monochrome Minimal) — 纯黑 白 灰三色，最锋利的版本
- **扁平极简** (Flat Minimal) — 无阴影无渐变，靠留白与字重分层
- **暖调极简** (Warm Minimal) — 米白与暖灰底色，日式 北欧的生活感

## 开发规格

- **typography:** 衬线大标题 + 无衬线灰阶正文
- **color:** 米白 #FAFAF8 × 近黑 #161513，单一强调色
- **border:** 无边框，或 1px #EDEDE9 细分隔线
- **shadow:** 几乎无阴影，层次靠灰度
- **spacing:** 极大留白，宽松的 8pt 网格

## 实现要点

**CSS:** `whitespace` `font-weight` `letter-spacing` `border: 1px solid` `grid`

核心是排版与留白：建立 3 档以内的字号层级与克制的行高；配色收敛到黑 白 灰 外加至多一个强调色；边框只用 1px 发丝线或干脆用留白分隔；按钮以实心黑或 描边两种形态为主，禁用投影与渐变。先删到不能再删，再谈精致。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用极简主义风格（Minimalism）实现一个内容卡片区块。

先检查现有 Design Token 与组件体系，复用既有的字号与间距变量。
要求：
- 大量留白，层级只靠字号 字重 空间建立
- 配色收敛为黑 白 灰 + 至多一个强调色
- 无投影 无渐变 无纹理，分隔用 1px 发丝线或留白
- 支持深色模式
- 若加入任何过渡动画，尊重 prefers-reduced-motion，时长 150ms 内
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用极简主义风格（Minimalism）设计界面：大量留白、黑白灰配色、无装饰，层级靠字号字重与空间建立。

**Design:** 极简主义风格设计规范：底色纯白，文字近黑（#111）；字号层级 3 档以内，标题 用大字号加收紧字距；配色只有黑 白 灰 + 一个强调色；分隔用 1px 发丝线或留白， 禁止投影 渐变 纹理；按钮为实心黑或 1px 描边两种；整体留白至少是内容高度的 一半。支持深色模式（近黑底 反白字）。

**Implementation:** 用 CSS 实现极简风格：定义 --space 留白阶梯（8 的倍数）与 3 档字号 token； 按钮 .btn-solid（黑底白字）与 .btn-outline（1px 描边），无圆角或 2px 微圆角； 卡片用 1px 边框或无边框 + 留白分区，box-shadow 一律为 none；输入框只保留下 边框线，focus 时变强调色。过渡只做颜色，150ms 内完成。

## 相关概念

- [flat-design](/styles/flat-design) — 相似概念
- [swiss-style](/styles/swiss-style) — 相似概念
- [editorial](/styles/editorial) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件

## Sources

- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)
- [Dieter Rams — 10 Principles of Good Design](https://www.vitsoe.com/us/about/good-design)

---

JSON: `/api/concept/styles/minimalism.json` · 站点: /styles/minimalism
