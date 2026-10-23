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
- **motion:** 150–200ms 的淡入与下划线过渡，克制不弹跳
- **states:** hover 显示下划线并转棕；focus 用墨色点线可见外框；active 下沉一像素；disabled 降为浅灰；error 用棕色强调并加斜体提示

## 实现要点

**CSS:** `font-family: Georgia` `font-variant-numeric: oldstyle-nums` `column-count` `border-top: 1px solid` `text-indent`

字体是主角：标题用高对比衬线（Playfair/Georgia），正文衬线或人文无衬线， 行长控制在 60～75 字符；首字下沉用 float 加 3～4 行高度；分隔只用发丝线 （1px）与留白，配小型大写字母的眉题（letter-spacing 0.15em）；编号用 老式数字。黑白摄影或单色调图片优先，深色模式用暖黑底保持纸感。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 The Paper Room 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

延续 .paper-body 的 34% / 36% / 26% 三栏与 2% 间隙：Georgia 斜体大标题、晨光生活照片、三个侧栏故事。保留 #fdfdf9 暖纸底、细分隔线和照片原色/既有局部滤镜，不能强制把所有照片改成黑白。阅读弹层沿用 Georgia 18px/1.9 与斜体导语，分类目录使用现有四篇数据；600px 以下按文案、照片、故事堆叠。现有照片延续到带日期的文章列表与阅读页，使用克制的首字下沉、细线收藏状态与 380ms 阅读页入场；保留四篇文章及操作。

完整页面操作：
阅读更多进入文章目录；打开「群山间的清晨」「城市漫游指南」「慢下来的周末」「与陶艺师的一次午后谈话」全文，收藏/取消收藏并返回。关键词搜索过滤四篇文章并显示数量，清空无匹配关键词恢复目录；专栏、生活、旅行、人物、关于各有内容。

静态封面、详情演示与 /style-scenes/editorial/（英文 /en/style-scenes/editorial/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用杂志编辑风（Editorial）设计界面：衬线大标题、首字下沉、发丝分隔线与 章节编号，像经营杂志版面一样排版内容。

**Design:** 编辑风设计规范：底色纸白 #FAF8F4，文字近黑 #1A1816；标题用高对比衬线 36px+，眉题用小型大写加宽字距；正文衬线 17px/1.75，行长 60～75 字符； 首字下沉 3 行；分隔用 1px 发丝线与章节编号（罗马数字或老式数字）；图片 黑白或单色调；深色模式暖黑底 #17150F 配米白文字。

**Implementation:** 用当前风格完成 The Paper Room 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

延续 .paper-body 的 34% / 36% / 26% 三栏与 2% 间隙：Georgia 斜体大标题、晨光生活照片、三个侧栏故事。保留 #fdfdf9 暖纸底、细分隔线和照片原色/既有局部滤镜，不能强制把所有照片改成黑白。阅读弹层沿用 Georgia 18px/1.9 与斜体导语，分类目录使用现有四篇数据；600px 以下按文案、照片、故事堆叠。现有照片延续到带日期的文章列表与阅读页，使用克制的首字下沉、细线收藏状态与 380ms 阅读页入场；保留四篇文章及操作。

阅读更多进入文章目录；打开「群山间的清晨」「城市漫游指南」「慢下来的周末」「与陶艺师的一次午后谈话」全文，收藏/取消收藏并返回。关键词搜索过滤四篇文章并显示数量，清空无匹配关键词恢复目录；专栏、生活、旅行、人物、关于各有内容。

静态封面、详情演示与 /style-scenes/editorial/（英文 /en/style-scenes/editorial/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [swiss-style](/interface-atlas-web/styles/swiss-style) — 相似概念
- [minimalism](/interface-atlas-web/styles/minimalism) — 相似概念
- [documentation](/interface-atlas-web/pages/documentation) — 搭配使用
- [card](/interface-atlas-web/components/card) — 影响组件
- [navbar](/interface-atlas-web/components/navbar) — 影响组件

## Sources

- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Wikipedia — Editorial design](https://en.wikipedia.org/wiki/Editorial_design)

---

JSON: `/interface-atlas-web/api/concept/styles/editorial.json` · 站点: /interface-atlas-web/styles/editorial
