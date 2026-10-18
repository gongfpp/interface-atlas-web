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
- **motion:** 近似瞬时，颜色切换在 100ms 内，无缓动位移
- **states:** hover 改用正红或反白；focus 用 2px 黑色可见实线框；active 反色块；disabled 降为灰；error 用正红并加粗

## 实现要点

**CSS:** `grid` `font-family: Helvetica` `text-align: left` `letter-spacing` `border-top: 2px solid`

先立网格：12 列或简单 3×3，所有元素吸附网格线，禁止任意间距。字体只用 一套无衬线（Helvetica/Inter/Neue Haas），层级靠字号跳跃（如 12/48px） 而非加粗渐变；正文左对齐，禁用居中排版。色彩为黑 白 灰 + 单一强调红， 红只出现在标题标号与关键线上。分隔用粗细两种横线（2px/1px）。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 VERTEX 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

直接复用 .vertex-body 的 grid-template-columns: 49% 27% 24%，保留左侧 IDEAS / BUILD / TOMORROW 大字、中间说明与右侧 #ff3511 整块海报。展示字用现有 Atlas Heavy（Anton）/ Atlas Display / Impact 压缩字体栈；左字 8.1cqw、line-height .95，海报字 3.65cqw，正文沿用 Arial 无衬线与 1px 栏线。保留现有字面横向拉伸，不缩放整页。项目延续区用三列案例与红/黑/纸灰案例图，600px 以下首屏与项目改为单列。不要另建 12 列 44px Helvetica 区块，也不要把红色限制为编号/细线；dark/variants 使用现有文档模式选择器。

完整页面操作：
探索项目进入精选作品；打开 NORTH / OPEN / FORM 案例并返回；菜单到达 WORK / STUDIO / APPROACH / CONTACT。联系表单校验姓名、邮箱、简介并显示可继续修改的整理结果，不发送邮件；语言入口切换中英文同款页。

静态封面、详情演示与 /style-scenes/swiss-style/（英文 /en/style-scenes/swiss-style/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用瑞士风格（Swiss Style）设计界面：严格网格排版、无衬线字体、左对齐、 黑白加单色强调红，层级靠字号对比与留白建立。

**Design:** 瑞士风格设计规范：白色底 黑色 Helvetica（或 Inter）；建立 12 列网格并 让所有元素对齐；标题字号与正文形成 4 倍以上跳跃；强调色仅用一个红色 #E30613，用于标号与粗横线；留白宽松且成模数（8 的倍数）；无阴影 无 渐变 无圆角（或极小圆角）；深色模式为近黑底 反白字 红色保留。

**Implementation:** 用当前风格完成 VERTEX 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

直接复用 .vertex-body 的 grid-template-columns: 49% 27% 24%，保留左侧 IDEAS / BUILD / TOMORROW 大字、中间说明与右侧 #ff3511 整块海报。展示字用现有 Atlas Heavy（Anton）/ Atlas Display / Impact 压缩字体栈；左字 8.1cqw、line-height .95，海报字 3.65cqw，正文沿用 Arial 无衬线与 1px 栏线。保留现有字面横向拉伸，不缩放整页。项目延续区用三列案例与红/黑/纸灰案例图，600px 以下首屏与项目改为单列。不要另建 12 列 44px Helvetica 区块，也不要把红色限制为编号/细线；dark/variants 使用现有文档模式选择器。

探索项目进入精选作品；打开 NORTH / OPEN / FORM 案例并返回；菜单到达 WORK / STUDIO / APPROACH / CONTACT。联系表单校验姓名、邮箱、简介并显示可继续修改的整理结果，不发送邮件；语言入口切换中英文同款页。

静态封面、详情演示与 /style-scenes/swiss-style/（英文 /en/style-scenes/swiss-style/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [minimalism](/interface-atlas-web/styles/minimalism) — 相似概念
- [editorial](/interface-atlas-web/styles/editorial) — 相似概念
- [bauhaus](/interface-atlas-web/styles/bauhaus) — 相似概念
- [card](/interface-atlas-web/components/card) — 影响组件
- [table](/interface-atlas-web/components/table) — 影响组件

## Sources

- [Wikipedia — International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- [Design reviewed — Swiss Style Principles](https://www.designreviewed.com/swiss-style/)

---

JSON: `/interface-atlas-web/api/concept/styles/swiss-style.json` · 站点: /interface-atlas-web/styles/swiss-style
