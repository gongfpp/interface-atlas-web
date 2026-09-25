# 杂志编辑风 / Editorial

> 风格 · `id: editorial`

把页面当作杂志版面经营的视觉语言：衬线大标题、首字下沉、细分栏、章节 编号与发丝分隔线，图文穿插而节奏如翻页。黑白灰为底、衬线与无衬线搭配， 用版式语言讲故事，而非用装饰堆砌氛围。

**别名:** 杂志编辑风 · 杂志风 · 编辑排版风 · 报刊风格 · 首字下沉那种排版 · 衬线大标题风 · Magazine Layout · Editorial Design

**分类:** Style / Visual Language

## 适用场景

- 内容型产品：长文 数字杂志 作品集 品牌刊物
- 品牌想传达文化质感与文字的尊严
- 图片与文字有明确主次关系的叙事页面

## 不适用场景

- 任务型工具界面，效率优先于阅读体验
- 需要快速扫读的仪表盘与列表
- 团队缺乏排版功底，劣质衬线会暴露无遗

## 常见形式

- **大报风** (Broadsheet) — 报纸多栏密排，黑白摄影与细栏线
- **光面杂志** (Glossy Magazine) — 大图大字留白多，时尚刊物气质
- **数字编辑风** (Digital Editorial) — 网页化改良，衬线标题配现代正文排版

## 开发规格

- **typography:** 斜体衬线大标题 + 衬线正文
- **color:** 暖纸底 #FBF9F4 × 墨色 × 棕色强调
- **border:** 细分割线代替卡片框
- **shadow:** 仅照片卡带轻微投影
- **spacing:** 分栏排版，行距宽松

## 实现要点

**CSS:** `font-family: Georgia` `font-variant-numeric: oldstyle-nums` `column-count` `border-top: 1px solid` `text-indent`

字体是主角：标题用高对比衬线（Playfair/Georgia），正文衬线或人文无衬线， 行长控制在 60～75 字符；首字下沉用 float 加 3～4 行高度；分隔只用发丝线 （1px）与留白，配小型大写字母的眉题（letter-spacing 0.15em）；编号用 老式数字。黑白摄影或单色调图片优先，深色模式用暖黑底保持纸感。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用杂志编辑风（Editorial）实现一个长文阅读区块。

先检查现有字体栈与排版变量，衬线字体通过现有字体系统引入。
要求：
- 衬线大标题 + 眉题 + 正文三级结构，行长 60～75 字符
- 首字下沉与章节编号用 CSS 实现
- 分隔只用发丝线与留白，无重投影无重渐变
- 移动端字号行距同步适配，标题不换行断裂尴尬
- 支持深色模式（暖黑底保纸感）
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用杂志编辑风（Editorial）设计界面：衬线大标题、首字下沉、发丝分隔线与 章节编号，像经营杂志版面一样排版内容。

**Design:** 编辑风设计规范：底色纸白 #FAF8F4，文字近黑 #1A1816；标题用高对比衬线 36px+，眉题用小型大写加宽字距；正文衬线 17px/1.75，行长 60～75 字符； 首字下沉 3 行；分隔用 1px 发丝线与章节编号（罗马数字或老式数字）；图片 黑白或单色调；深色模式暖黑底 #17150F 配米白文字。

**Implementation:** 用 CSS 实现编辑风排版：.article { font-family: Georgia, serif; font-size: 17px; line-height: 1.75; max-width: 65ch; } 首字下沉 .article > p:first-of-type::first-letter { float: left; font-size: 3.4em; line-height: 0.85; padding-right: 8px; } 眉题 .eyebrow { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; } 分隔线 1px solid #D8D2C6。

## 相关概念

- [swiss-style](/styles/swiss-style) — 相似概念
- [minimalism](/styles/minimalism) — 相似概念
- [documentation](/styles/documentation) — 搭配使用
- [card](/styles/card) — 影响组件
- [navbar](/styles/navbar) — 影响组件

## Sources

- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Wikipedia — Editorial design](https://en.wikipedia.org/wiki/Editorial_design)

---

JSON: `/api/concept/styles/editorial.json` · 站点: /styles/editorial
