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
- **motion:** 150ms 内只做颜色与透明度过渡，无位移
- **states:** hover 只变颜色；focus 用黑色发丝可见外框；active 轻微加深；disabled 降到 40% 不透明；error 用单一红

## 实现要点

**CSS:** `whitespace` `font-weight` `letter-spacing` `border: 1px solid` `grid`

核心是排版与留白：建立 3 档以内的字号层级与克制的行高；配色收敛到黑 白 灰 外加至多一个强调色；边框只用 1px 发丝线或干脆用留白分隔；按钮以实心黑或 描边两种形态为主，禁用投影与渐变。先删到不能再删，再谈精致。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 LUMO 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

按 ReferenceStyleScene 与 reference-scenes.css 延续 LUMO：#fdfdfc 页底，主视觉保留白到浅灰的横向渐变、白色设备/石材照片及其桌面遮罩裁切。Georgia 衬线主标题使用现有 6.45cqw / .94 行高与紧字距，正文为灰阶无衬线；黑色胶囊 CTA 保留细微内高光。窄屏将照片改为文案下方的正常内容流，不删照片、不把所有区域强改为无渐变直角卡片。

完整页面操作：
立即体验进入专注设备系列，立即购买查看设备规格和款式；切换三条生活灵感，选择设备并查看本地购物结果，不创建订单。

静态封面、详情演示与 /style-scenes/minimalism/（英文 /en/style-scenes/minimalism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用极简主义风格（Minimalism）设计界面：大量留白、黑白灰配色、无装饰，层级靠字号字重与空间建立。

**Design:** 极简主义风格设计规范：底色纯白，文字近黑（#111）；字号层级 3 档以内，标题 用大字号加收紧字距；配色只有黑 白 灰 + 一个强调色；分隔用 1px 发丝线或留白， 禁止投影 渐变 纹理；按钮为实心黑或 1px 描边两种；整体留白至少是内容高度的 一半。支持深色模式（近黑底 反白字）。

**Implementation:** 用当前风格完成 LUMO 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

按 ReferenceStyleScene 与 reference-scenes.css 延续 LUMO：#fdfdfc 页底，主视觉保留白到浅灰的横向渐变、白色设备/石材照片及其桌面遮罩裁切。Georgia 衬线主标题使用现有 6.45cqw / .94 行高与紧字距，正文为灰阶无衬线；黑色胶囊 CTA 保留细微内高光。窄屏将照片改为文案下方的正常内容流，不删照片、不把所有区域强改为无渐变直角卡片。

立即体验进入专注设备系列，立即购买查看设备规格和款式；切换三条生活灵感，选择设备并查看本地购物结果，不创建订单。

静态封面、详情演示与 /style-scenes/minimalism/（英文 /en/style-scenes/minimalism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [flat-design](/styles/flat-design) — 相似概念
- [swiss-style](/styles/swiss-style) — 相似概念
- [editorial](/styles/editorial) — 相似概念
- [button](/components/button) — 影响组件
- [card](/components/card) — 影响组件

## Sources

- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)
- [Dieter Rams — 10 Principles of Good Design](https://www.vitsoe.com/us/about/good-design)

---

JSON: `/api/concept/styles/minimalism.json` · 站点: /styles/minimalism
