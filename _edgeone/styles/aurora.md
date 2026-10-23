# 极光渐变 / Aurora Gradient

> 风格 · `id: aurora`

用大面积流动渐变光斑营造氛围的视觉语言：青绿 紫 蓝 多色模糊色块在背景 中缓慢漂移融合，前景内容保持极简克制。色彩是主角——像极光一样柔和 跨 色相 渐次过渡，界面因此获得呼吸感与情绪温度。

**别名:** 极光渐变 · 极光风格 · 渐变光斑背景 · 流动光晕设计 · 那种绿紫渐变的模糊背景 · 大面积渐变光效 · Aurora Background · Mesh Gradient

**分类:** Style / Visual Language

## 适用场景

- 落地页 首屏 品牌页，需要第一眼氛围与情绪
- AI 创意工具类产品，渐变已成为其品类视觉符号
- 极简前景 + 需要一点温度的深浅色界面

## 不适用场景

- 数据密集工具界面，大面积渐变干扰信息读取
- 可访问性敏感场景，光斑上的文字对比度难保证
- 大量使用动画光斑时低端设备性能敏感

## 常见形式

- **静态网格渐变** (Static Mesh) — 一次成型的多点网格渐变，无动画
- **流动光斑** (Flowing Blobs) — 大 blur 色块缓慢漂移，动效极光
- **暗夜极光** (Dark Aurora) — 深空底色上更浓的光带，对比更强

## 开发规格

- **typography:** 无衬线白标题
- **color:** 暗夜底 #0D0B1E × 绿紫粉光斑
- **border:** 1px 半透明紫边框
- **shadow:** 深色大投影 + 光晕
- **spacing:** 悬浮卡层叠，间距宽松
- **motion:** 300–500ms ease-in-out 的光斑漂移与淡入，尊重 prefers-reduced-motion
- **states:** hover 增强光斑亮度；focus 用紫粉色可见亮环；active 压低光晕；disabled 降透明去光；error 用红调光斑且仅淡入颜色

## 实现要点

**CSS:** `background: radial-gradient` `filter: blur()` `@keyframes drift` `mix-blend-mode` `background-clip: text`

光斑三要素：2～4 个大型 radial-gradient 色块（直径为画布的 40%～80%）， blur(60px) 级别的重模糊，色相跨越 2～3 段（如青绿→紫→蓝）且彼此部分 重叠。前景内容置于光斑之上，用纯色文字或半透明白面板保证对比。动画 光斑只做位移与缩放的慢速漂移（20s+），时长乘 var(--demo-speed, 1)， 并在 prefers-reduced-motion 下静止。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Borealis 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Borealis 的绿/紫/粉三重径向光场与 #0D0B1E 暗夜底，右侧仍是 CSS 山景剪影、半透明卡与浅紫操作，不额外强制 60px blur 或 24s 自动漂移。光场台使用 --light-hue 与 --light-intensity 实时改色和强度，默认 Emerald / 65%；保存结果显示配方而非改变原首屏构图。

复用当前 preview.tokens：背景 radial-gradient(60% 80% at 20% 10%, rgba(52,211,153,.35), transparent), radial-gradient(55% 70% at 80% 25%, rgba(129,140,248,.4), transparent), radial-gradient(60% 60% at 50% 95%, rgba(236,72,153,.3), transparent), #0D0B1E；前景 #F4F3FF；强调 #A5B4FC / #1E1B4B；卡面 rgba(255,255,255,.08)；边框 rgba(165,180,252,.3)；圆角 14px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
点亮进入光场调配，选择光谱、调整强度实时预览并保存配方，可继续修改保存；光、色、场、v2.0 各有对应内容。

静态封面、详情演示与 /style-scenes/aurora/（英文 /en/style-scenes/aurora/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用极光渐变（Aurora Gradient）风格设计界面：背景由青绿 紫蓝多色模糊光斑 漂移融合，前景内容极简克制，氛围柔和有呼吸感。

**Design:** 极光渐变设计规范：浅色模式底 #F6F7FB，深色模式底 #0B0E1A；光斑 2～4 个 radial-gradient 色块（#5EEAD4 #818CF8 #C084FC 等），blur 60px 级别， 彼此重叠约 20%；前景文字纯色（深底用白 浅底用近黑），按钮可用同款 渐变填充；光斑动画只做 20s 以上的慢速位移缩放，尊重 prefers-reduced-motion。

**Implementation:** 用当前风格完成 Borealis 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Borealis 的绿/紫/粉三重径向光场与 #0D0B1E 暗夜底，右侧仍是 CSS 山景剪影、半透明卡与浅紫操作，不额外强制 60px blur 或 24s 自动漂移。光场台使用 --light-hue 与 --light-intensity 实时改色和强度，默认 Emerald / 65%；保存结果显示配方而非改变原首屏构图。

复用当前 preview.tokens：背景 radial-gradient(60% 80% at 20% 10%, rgba(52,211,153,.35), transparent), radial-gradient(55% 70% at 80% 25%, rgba(129,140,248,.4), transparent), radial-gradient(60% 60% at 50% 95%, rgba(236,72,153,.3), transparent), #0D0B1E；前景 #F4F3FF；强调 #A5B4FC / #1E1B4B；卡面 rgba(255,255,255,.08)；边框 rgba(165,180,252,.3)；圆角 14px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

点亮进入光场调配，选择光谱、调整强度实时预览并保存配方，可继续修改保存；光、色、场、v2.0 各有对应内容。

静态封面、详情演示与 /style-scenes/aurora/（英文 /en/style-scenes/aurora/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [glassmorphism](/styles/glassmorphism) — 相似概念
- [bento-grid](/styles/bento-grid) — 相似概念
- [minimalism](/styles/minimalism) — 相似概念
- [card](/components/card) — 影响组件
- [landing-page](/pages/landing-page) — 搭配使用

## Sources

- [MDN — radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [Stripe — brand gradient practice](https://stripe.com/blog)

---

JSON: `/api/concept/styles/aurora.json` · 站点: /styles/aurora
