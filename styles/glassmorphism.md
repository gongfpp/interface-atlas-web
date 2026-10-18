# 玻璃拟态 / Glassmorphism

> 风格 · `id: glassmorphism`

用半透明磨砂玻璃质感表示悬浮层级的视觉语言：backdrop-filter 背景模糊 + 低透明度 填充 + 一圈细窄的白色高光描边，让面板像磨砂玻璃片一样透出底下的色彩与图形。 它强调"层"——玻璃之下必须有可透出的丰富背景，否则质感无从谈起。

**别名:** 毛玻璃 · 苹果那种透明玻璃效果 · 玻璃拟态 · 磨砂玻璃 · 玻璃效果 · 半透明模糊背景 · Frosted Glass · Glassmorphism UI

**分类:** Style / Visual Language

## 适用场景

- 背景是渐变 照片或彩色内容，需要透出层次
- 弹层 播放器 系统级悬浮面板，要轻盈不要沉闷
- 想延续 macOS iOS 的材质语言获得熟悉感

## 不适用场景

- 背景纯净单调，玻璃无内容可透 出来只剩灰雾
- 长文本密集区域，模糊底会持续削弱文字对比度
- 低端设备兼容与性能敏感场景，backdrop-filter 开销大

## 常见形式

- **磨砂** (Frost) — 高模糊低透明，最经典的奶白玻璃
- **透明玻璃** (Clear Glass) — 低模糊高透明，更依赖高光描边
- **有色玻璃** (Tinted Glass) — 带色调的玻璃，iOS 振动感传统

## 开发规格

- **typography:** 无衬线，白色大标题
- **color:** 蓝紫粉渐变底 × 白色玻璃 rgba(255,255,255,.45)
- **border:** 1px 半透明白边框
- **shadow:** 大范围柔和彩色投影
- **spacing:** 圆角 16px+，卡片内边距充足
- **motion:** 200–300ms ease-out 的位移与模糊过渡，尊重 prefers-reduced-motion
- **states:** hover 提升透明度与模糊并轻微上浮；focus 用白色可见亮环；active 压低光晕；disabled 降不透明并去模糊；error 用红调玻璃且仅淡入颜色

## 实现要点

**CSS:** `backdrop-filter: blur()` `background: rgba(255,255,255,0.1~0.4)` `border: 1px solid rgba(255,255,255,0.4)` `box-shadow: inset 0 1px 0 rgba(255,255,255,0.5)` `@supports`

玻璃三要素：半透明填充（白色 10%～40% 透明度）、backdrop-filter blur(8~24px)、 顶部 1px 半透明白描边制造玻璃厚度。深色底上玻璃效果最典型，可再叠一层顶部 内发光。务必用 @supports 为不支持 backdrop-filter 的环境准备降级（提高填充 不透明度）。文字对比度要按模糊后的实际背景校验。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Aurora 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 Aurora 的雪山暮色背景照片、半透明蓝紫叠光及 38% / 30% / 26% 三栏（3% 间隙），不是另换通用渐变背景。功能列表使用现有半透明白渐变、1px 白边与 blur(9px)，独立图表面板用 blur(8px)、内高光和粉色柔光；白色 CTA 与无衬线白标题保持原位置。创作延续区使用现有浅蓝紫底与 blur(14px) 分区；600px 以下按内容单列重排。dark/variants 只按已有 CSS 调整表面和叠光，不反色原照片。

完整页面操作：
免费开始与立即体验进入创作区，输入想法生成可编辑的本地草稿；灵感助手、演示同步和原「多格式导出」入口解释对应功能，实际支持将当前草稿导出为 .txt；可保存/恢复本页快照并返回编辑。明确 AI 与云同步只是本地模拟。

静态封面、详情演示与 /style-scenes/glassmorphism/（英文 /en/style-scenes/glassmorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用玻璃拟态风格（Glassmorphism）设计界面：半透明磨砂玻璃面板，背景模糊透出底下的渐变或照片，配细白色高光描边。

**Design:** 玻璃拟态设计规范：页面背景为鲜艳渐变或照片（深色背景效果最佳）；玻璃面板 填充 rgba(255,255,255,0.15) 左右，backdrop-filter blur(16px)；描边用 1px rgba(255,255,255,0.35)，顶部可加内发光高光；圆角 16px+；玻璃上的文字保证 4.5:1 对比度。深色模式用更深的渐变底，玻璃透明度略升。

**Implementation:** 用当前风格完成 Aurora 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 Aurora 的雪山暮色背景照片、半透明蓝紫叠光及 38% / 30% / 26% 三栏（3% 间隙），不是另换通用渐变背景。功能列表使用现有半透明白渐变、1px 白边与 blur(9px)，独立图表面板用 blur(8px)、内高光和粉色柔光；白色 CTA 与无衬线白标题保持原位置。创作延续区使用现有浅蓝紫底与 blur(14px) 分区；600px 以下按内容单列重排。dark/variants 只按已有 CSS 调整表面和叠光，不反色原照片。

免费开始与立即体验进入创作区，输入想法生成可编辑的本地草稿；灵感助手、演示同步和原「多格式导出」入口解释对应功能，实际支持将当前草稿导出为 .txt；可保存/恢复本页快照并返回编辑。明确 AI 与云同步只是本地模拟。

静态封面、详情演示与 /style-scenes/glassmorphism/（英文 /en/style-scenes/glassmorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [skeuomorphism](/interface-atlas-web/styles/skeuomorphism) — 相似概念
- [aurora](/interface-atlas-web/styles/aurora) — 相似概念
- [minimalism](/interface-atlas-web/styles/minimalism) — 相似概念
- [card](/interface-atlas-web/components/card) — 影响组件
- [modal](/interface-atlas-web/components/modal) — 影响组件

## Sources

- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

---

JSON: `/interface-atlas-web/api/concept/styles/glassmorphism.json` · 站点: /interface-atlas-web/styles/glassmorphism
