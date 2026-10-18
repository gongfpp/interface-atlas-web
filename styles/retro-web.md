# 复古互联网 / Retro Web

> 风格 · `id: retro-web`

借用早期个人网站与桌面浏览器的视觉语言：灰色凹凸边框、衬线文字、蓝色下划线链接、侧栏目录和访客计数器。它表达的是手工制作网页的亲切感；不等同于像素艺术，也不需要牺牲今天的键盘操作、响应式布局和阅读体验。

**别名:** 老网页 · 早期互联网 · 个人主页风格 · Web 1.0 · old-school web · retro website

**分类:** Style / Visual Language

## 适用场景

- 个人主页、爱好者站点、互联网历史展览或怀旧创意项目。
- 希望强调手工整理、慢慢发现和个人表达的内容。

## 不适用场景

- 高密度工作系统或依赖可信支付与身份验证的关键流程。
- 不要复制闪烁文字、弹窗广告、固定宽度和过小触控目标等旧网页缺陷。

## 常见形式

- **个人主页** (Personal homepage) — 目录侧栏、短文和精选链接组成的手工小站。
- **旧浏览器窗口** (Vintage browser window) — 用标题栏、菜单和凹凸边框营造桌面窗口层次。

## 开发规格

- **typography:** 衬线正文、系统字体菜单、可读的蓝色下划线链接。
- **color:** 浅灰窗口、白色内容、深蓝标题栏与链接。
- **border:** 方角与 2px 凹凸边框，无模糊投影。
- **shadow:** 使用边框明暗方向表达凹凸，不加模糊阴影。
- **spacing:** 紧凑但保持足够触控面积，窄屏目录换行。
- **motion:** 即时切换，避免闪烁和自动滚动。
- **states:** 当前页加粗、焦点有清晰轮廓，表单反馈使用实时区域。

## 实现要点

**CSS:** `border-style` `text-decoration` `font-family` `:focus-visible` `flex-wrap`

用 inset/outset 或多层阴影表达灰色面板层次；正文使用可读字号，链接保留下划线。视觉样张可以还原固定构图，真实交互区必须换行并支持键盘。留言只用组件状态，明确不持久保存。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 GoodOldNet 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

复用 GoodOldNet 的 #c4c4c4 灰窗口、#164479→#387ebd 蓝色标题栏、inset/outset 凹凸边、Times New Roman 正文与 Arial 菜单。默认内容保持 21% / 54% / 25% 目录/正文/小图三栏与蓝色下划线站内入口，真实阅读区沿用白底深蓝字。窄屏通过现有 toolbar/menu 换行与单列内容重排，不能仅缩小固定旧浏览器；窗口、地址和目录仍由 DOM 组成，焦点、当前页与状态反馈保留语义。

完整页面操作：
目录与 Back / Forward / Home 在 Home / About / Projects / Links / Guestbook 间往返，本地地址随导航更新，Go 打开原生地址对话框，可输入 home/about/projects/links/guestbook（支持 goodoldnet/ 前缀）并计入站内历史；未知或外部地址提示未找到且不外跳；菜单、Search、Favorites、窗口控制都有可返回的本地行为。留言校验空白输入并展示正常提交结果，明确刷新清空、不发送服务、不写浏览器存储。

静态封面、详情演示与 /style-scenes/retro-web/（英文 /en/style-scenes/retro-web/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 使用复古互联网风格设计个人主页。保留灰色凹凸窗口、衬线正文、蓝色下划线链接和目录侧栏；保留现代可访问性，不使用闪烁文字和侵入弹窗。

**Design:** 以白色内容区和浅灰窗口形成层次，深蓝标题栏配系统字体。紧凑边距、方角和凹凸边框传达旧浏览器质感；链接必须可辨，触控目标不能随缩景变小。

**Implementation:** 用当前风格完成 GoodOldNet 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

复用 GoodOldNet 的 #c4c4c4 灰窗口、#164479→#387ebd 蓝色标题栏、inset/outset 凹凸边、Times New Roman 正文与 Arial 菜单。默认内容保持 21% / 54% / 25% 目录/正文/小图三栏与蓝色下划线站内入口，真实阅读区沿用白底深蓝字。窄屏通过现有 toolbar/menu 换行与单列内容重排，不能仅缩小固定旧浏览器；窗口、地址和目录仍由 DOM 组成，焦点、当前页与状态反馈保留语义。

目录与 Back / Forward / Home 在 Home / About / Projects / Links / Guestbook 间往返，本地地址随导航更新，Go 打开原生地址对话框，可输入 home/about/projects/links/guestbook（支持 goodoldnet/ 前缀）并计入站内历史；未知或外部地址提示未找到且不外跳；菜单、Search、Favorites、窗口控制都有可返回的本地行为。留言校验空白输入并展示正常提交结果，明确刷新清空、不发送服务、不写浏览器存储。

静态封面、详情演示与 /style-scenes/retro-web/（英文 /en/style-scenes/retro-web/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [pixel-art](/interface-atlas-web/styles/pixel-art) — 相似概念
- [skeuomorphism](/interface-atlas-web/styles/skeuomorphism) — 相似概念
- [y2k](/interface-atlas-web/styles/y2k) — 相似概念
- [tabs](/interface-atlas-web/components/tabs) — 搭配使用

## 容易混淆

- [pixel-art](/interface-atlas-web/styles/pixel-art) — 像素艺术由点阵与有限色板定义；复古互联网由页面结构、超链接和旧浏览器视觉语汇定义，可包含照片与常规文字。

## Sources

- [MDN — border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
- [MDN — The anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)

---

JSON: `/interface-atlas-web/api/concept/styles/retro-web.json` · 站点: /interface-atlas-web/styles/retro-web
