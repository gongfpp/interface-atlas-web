# 粗野主义 / Brutalism

> 风格 · `id: brutalism`

用裸露的结构、超大字号和原始对比色强调「反精致」的网页视觉语言。黑白硬切、可见网格、 直角硬边，保留默认 HTML 的诚实感；信息直接砸向读者，拒绝圆角、渐变与装饰性打磨。

**别名:** 粗野主义 · 野兽派网页 · 那种很糙的黑白网页 · 超大字不修边幅 · 原始网页风 · brutalism · web brutalism · brutalist web design

**分类:** Style / Visual Language

## 适用场景

- 设计师作品集、独立出版、艺术机构官网，态度本身就是内容
- 想在同质化的精致界面里用「不修边幅」制造强烈记忆点
- 低密度宣言页、活动页，超大字当海报使

## 不适用场景

- 金融、医疗、政务等需要稳重可信的操作型产品
- 长表单与高密度数据后台，硬切对比会加剧阅读疲劳
- 需要传达精细、高端、呵护感的品牌叙事

## 常见形式

- **经典粗野** (Classic brutalism) — 黑白灰硬切加单一刺眼强调色，保留默认浏览器气质
- **软粗野** (Soft brutalism) — 保留原始对比与超大字，但放宽圆角与留白
- **排印粗野** (Typographic brutalism) — 字号、字重、行距承担全部表现力，几乎不用图形

## 开发规格

- **typography:** 超粗无衬线或等宽体，字号断崖式对比
- **color:** 纸白 × 纯黑 × 单一刺眼橙红 #FF3B00
- **border:** 2px 实线直角硬边，圆角一律 0
- **shadow:** 不用投影，需要层级时用反色块或粗描边
- **spacing:** 紧贴网格线的硬切排布，留白大开大合

## 实现要点

**CSS:** `font-size: clamp(2.5rem, 8vw, 6rem)` `border-radius: 0` `border: 2px solid currentColor` `background-image: repeating-linear-gradient()` `font-family: system-ui, monospace`

命门是「不修边幅」：圆角一律 0，阴影不用或只用硬边框替代，字体走系统栈或等宽体。 背景网格用 repeating-linear-gradient 画出来即可，不必真开 CSS Grid。强调色只留一个 （常见刺眼橙红 #FF3B00），其余全黑白。深色模式反转明度关系但保持同样的硬切。 不要为了「像」粗野而降低文字对比度或打乱阅读顺序。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Brutalism 粗野主义视觉风格。

先检查现有组件体系和 Design Token，优先复用当前组件，只替换视觉层。
要求：
- 全部圆角 0，无渐变无柔和阴影，层级用粗描边或反色块表达
- 标题超大字号（clamp），系统无衬线或等宽字体
- 背景可见网格线，单一刺眼强调色（如 #FF3B00），其余黑白
- 按钮 hover 反色，不做弹跳位移
- 深色模式反转明度但保持硬切语汇
- 文字对比度不低于 4.5:1，阅读顺序不被装饰打乱
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用粗野主义风格（Brutalism）设计界面：黑白硬切、超大字号、可见网格、直角硬边，单一刺眼强调色，反精致。

**Design:** 粗野主义设计规范：底色纸白 #F5F5F0 或近黑；正文纯黑 #0A0A0A；强调色只用一个刺眼橙红 #FF3B00； 全部圆角 0；标题字号 clamp(2.5rem, 8vw, 6rem)，超粗无衬线或等宽；网格线 1px 实线可见； 按钮用 2px 实线框或纯色块反白，hover 反色即可不做位移；深色模式用近黑底配纸白字，强调色不变。

**Implementation:** 用 CSS 实现粗野主义：全局 border-radius: 0；标题用 font-size clamp 与 font-weight 800+； 背景网格 background-image: repeating-linear-gradient(to right, #0A0A0A14 0 1px, transparent 1px 48px), repeating-linear-gradient(to bottom, ...); 按钮 border: 2px solid #0A0A0A，hover 时 background/color 对调； 不用 box-shadow，需要层级时用粗描边或反色块；字体栈 system-ui 或 ui-monospace。

## 相关概念

- [neobrutalism](/styles/neobrutalism) — 相似概念
- [minimalism](/styles/minimalism) — 替代方案
- [swiss-style](/styles/swiss-style) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件
- [navbar](/styles/navbar) — 影响组件

## 容易混淆

- [neobrutalism](/styles/neobrutalism) — 粗野主义是原始未修饰的网页，黑白为主；新粗野主义是糖果贴纸加粗黑边与硬阴影，色彩喧闹。

## Sources

- [Wikipedia — Brutalist architecture](https://en.wikipedia.org/wiki/Brutalist_architecture)
- [NN/g — Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign)

---

JSON: `/api/concept/styles/brutalism.json` · 站点: /styles/brutalism
