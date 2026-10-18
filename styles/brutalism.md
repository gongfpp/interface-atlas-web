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
- **motion:** 近似瞬时，无过渡
- **states:** hover 直接反色；focus 用 2px 黑色实线粗框；active 换成刺眼橙红 #FF3B00；disabled 降为 50% 灰；error 用 #FF3B00 实色块

## 实现要点

**CSS:** `font-size: clamp(2.5rem, 8vw, 6rem)` `border-radius: 0` `border: 2px solid currentColor` `background-image: repeating-linear-gradient()` `font-family: system-ui, monospace`

命门是「不修边幅」：圆角一律 0，阴影不用或只用硬边框替代，字体走系统栈或等宽体。 背景网格用 repeating-linear-gradient 画出来即可，不必真开 CSS Grid。强调色只留一个 （常见刺眼橙红 #FF3B00），其余全黑白。深色模式反转明度关系但保持同样的硬切。 不要为了「像」粗野而降低文字对比度或打乱阅读顺序。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 STUDIO VOID 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

延续 STUDIO VOID 的 40% / 28% / 29% 三栏（1.5% 间隙）：Atlas Heavy（Anton）压缩大字、工作室说明、黑白混凝土照片；主标题使用原 8.9cqw/.95，导航保留 2px 黑色底线。默认画面是近白与黑的直接对比、直角黑 CTA，而不是橙红背景网格模板。作品案例使用现有黑底白字与粗显示字；600px 以下三栏改单列，照片与白字叠层保持。variants 可用现有 #c52f1b 标题色，dark 不反色照片。

完整页面操作：
查看作品进入项目目录，打开项目内容并返回；WORK / ABOUT / NEWS / CONTACT 均有对应内容；联系表单校验后显示本地整理结果，不发送邮件。

静态封面、详情演示与 /style-scenes/brutalism/（英文 /en/style-scenes/brutalism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用粗野主义风格（Brutalism）设计界面：黑白硬切、超大字号、可见网格、直角硬边，单一刺眼强调色，反精致。

**Design:** 粗野主义设计规范：底色纸白 #F5F5F0 或近黑；正文纯黑 #0A0A0A；强调色只用一个刺眼橙红 #FF3B00； 全部圆角 0；标题字号 clamp(2.5rem, 8vw, 6rem)，超粗无衬线或等宽；网格线 1px 实线可见； 按钮用 2px 实线框或纯色块反白，hover 反色即可不做位移；深色模式用近黑底配纸白字，强调色不变。

**Implementation:** 用当前风格完成 STUDIO VOID 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

延续 STUDIO VOID 的 40% / 28% / 29% 三栏（1.5% 间隙）：Atlas Heavy（Anton）压缩大字、工作室说明、黑白混凝土照片；主标题使用原 8.9cqw/.95，导航保留 2px 黑色底线。默认画面是近白与黑的直接对比、直角黑 CTA，而不是橙红背景网格模板。作品案例使用现有黑底白字与粗显示字；600px 以下三栏改单列，照片与白字叠层保持。variants 可用现有 #c52f1b 标题色，dark 不反色照片。

查看作品进入项目目录，打开项目内容并返回；WORK / ABOUT / NEWS / CONTACT 均有对应内容；联系表单校验后显示本地整理结果，不发送邮件。

静态封面、详情演示与 /style-scenes/brutalism/（英文 /en/style-scenes/brutalism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [neobrutalism](/interface-atlas-web/styles/neobrutalism) — 相似概念
- [minimalism](/interface-atlas-web/styles/minimalism) — 替代方案
- [swiss-style](/interface-atlas-web/styles/swiss-style) — 相似概念
- [button](/interface-atlas-web/components/button) — 影响组件
- [card](/interface-atlas-web/components/card) — 影响组件
- [navbar](/interface-atlas-web/components/navbar) — 影响组件

## 容易混淆

- [neobrutalism](/interface-atlas-web/styles/neobrutalism) — 粗野主义是原始未修饰的网页，黑白为主；新粗野主义是糖果贴纸加粗黑边与硬阴影，色彩喧闹。

## Sources

- [Wikipedia — Brutalist architecture](https://en.wikipedia.org/wiki/Brutalist_architecture)
- [NN/g — Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign)

---

JSON: `/interface-atlas-web/api/concept/styles/brutalism.json` · 站点: /interface-atlas-web/styles/brutalism
