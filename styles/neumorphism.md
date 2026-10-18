# 新拟态 / Neumorphism

> 风格 · `id: neumorphism`

通过同色背景上的明暗双阴影表现凸起和凹陷的界面风格。元素像从同一块柔软材质中压出，适合少量控件的展示场景。它的视觉边界较弱，因此不能只靠阴影表达可点击、选中或禁用状态；需要明确文字、焦点轮廓与足够对比，并为深色主题重新计算阴影。

**别名:** 软浮雕风格 · 凹凸按钮 · 柔和双阴影 · soft UI

**分类:** Style / Visual Language

## 适用场景

- 音乐控制、轻量工具或概念性产品展示。
- 控件较少且需要柔软材质感的页面。

## 不适用场景

- 密集表格和强对比需求的复杂业务界面。
- 不可把明暗阴影当作唯一的状态信号。

## 常见形式

- **凸起表面** (Raised) — 外部双阴影表现悬浮按钮。
- **凹陷表面** (Inset) — 内阴影用于按下状态或轨道。

## 开发规格

- **typography:** 清晰无衬线字体，避免过细字重。
- **color:** 浅灰蓝同色底，深色文字和蓝色强调。
- **border:** 中大圆角；焦点保留可见外轮廓。
- **shadow:** 双向外阴影表现凸起，内阴影表现按下。
- **spacing:** 控件间距充足，避免阴影彼此挤压。
- **motion:** 150–200ms 的凸起与内陷阴影过渡
- **states:** hover 阴影加深并抬升；focus 必须保留 2px 可见外轮廓；active 切换为 inset 内陷；disabled 降低对比；error 用红色 inset 内陷

## 实现要点

**CSS:** `box-shadow` `inset` `border-radius` `:focus-visible`

阴影颜色从统一背景派生，凸起使用正负偏移的两层阴影，按下切换 inset。焦点与选中状态同时使用文字或图标反馈。不要在每次交互中大范围动画阴影，保留 reduced-motion 支持。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Mellow 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 Mellow 的浅灰同色材质：页面 #f4f5f6→#eeeff0，Georgia 衬线品牌与主标题、灰色无衬线说明；左文案、天气卡、倾斜软形时钟、右侧工具列仍是原构图。时钟外侧双向阴影与内部圆形 inset 凹面分开，深灰渐变 CTA 和浮起登录按钮沿用原样，不能替换成蓝色无衬线通用卡。600px 以下将绝对定位元素放回单列内容流，工具改两列；dark 与高对比度设置复用现有样式，不用阴影作为唯一状态信号。

完整页面操作：
立即体验与开始使用进入专注工具；计时器可开始/暂停/重置，专注、任务、统计、设置分别展示对应工具；分页切换提示，登录只说明本地体验身份。

静态封面、详情演示与 /style-scenes/neumorphism/（英文 /en/style-scenes/neumorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 使用新拟态风格设计品牌展示页面。通过同色背景上的明暗双阴影表现凸起和凹陷的界面风格。元素像从同一块柔软材质中压出，适合少量控件的展示场景。它的视觉边界较弱，因此不能只靠阴影表达可点击、选中或禁用状态；需要明确文字、焦点轮廓与足够对比，并为深色主题重新计算阴影。

**Design:** 清晰无衬线字体，避免过细字重。浅灰蓝同色底，深色文字和蓝色强调。中大圆角；焦点保留可见外轮廓。双向外阴影表现凸起，内阴影表现按下。控件间距充足，避免阴影彼此挤压。

**Implementation:** 用当前风格完成 Mellow 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 Mellow 的浅灰同色材质：页面 #f4f5f6→#eeeff0，Georgia 衬线品牌与主标题、灰色无衬线说明；左文案、天气卡、倾斜软形时钟、右侧工具列仍是原构图。时钟外侧双向阴影与内部圆形 inset 凹面分开，深灰渐变 CTA 和浮起登录按钮沿用原样，不能替换成蓝色无衬线通用卡。600px 以下将绝对定位元素放回单列内容流，工具改两列；dark 与高对比度设置复用现有样式，不用阴影作为唯一状态信号。

立即体验与开始使用进入专注工具；计时器可开始/暂停/重置，专注、任务、统计、设置分别展示对应工具；分页切换提示，登录只说明本地体验身份。

静态封面、详情演示与 /style-scenes/neumorphism/（英文 /en/style-scenes/neumorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [skeuomorphism](/interface-atlas-web/styles/skeuomorphism) — 相似概念
- [claymorphism](/interface-atlas-web/styles/claymorphism) — 相似概念
- [minimalism](/interface-atlas-web/styles/minimalism) — 相似概念
- [button](/interface-atlas-web/components/button) — 影响组件

## Sources

- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/interface-atlas-web/api/concept/styles/neumorphism.json` · 站点: /interface-atlas-web/styles/neumorphism
