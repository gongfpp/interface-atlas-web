# Y2K 千禧美学 / Y2K Aesthetic

> 风格 · `id: y2k`

复刻千禧年前后数码乐观主义的视觉语言：镀铬液态金属、iMac 糖果半透明塑料、 气泡字与闪光星形、粉紫蓝渐变配银白高光。它混合了对未来的天真想象与低分辨率 3D 的笨拙质感，甜腻、闪亮、毫不克制。

**别名:** 千禧风 · Y2K风格 · 千禧年美学 · 镀铬金属质感 · iMac糖果色那种 · 闪亮科技感 · 千禧辣妹风 · Cyber Y2K

**分类:** Style / Visual Language

## 适用场景

- 音乐 潮流 时尚品牌，瞄准怀旧千禧的年轻受众
- 派对 社交 娱乐类产品，需要甜腻高饱和情绪
- 复古主题营销活动与限定包装

## 不适用场景

- 金融 医疗 生产力工具，需要可信与克制
- 长内容阅读场景，高饱和与闪光持续消耗注意力
- 无障碍要求高的场景，银底浅字对比度普遍不足

## 常见形式

- **糖果塑料** (Candy Plastic) — iMac G3 半透明糖果壳，蓝绿橙粉
- **镀铬金属** (Liquid Chrome) — 液态金属字与镜面渐变，Cyber Y2K
- **珠光幻彩** (Iridescent) — 珍珠光泽幻彩渐变 CD 盘面

## 开发规格

- **typography:** 圆体字 + 金属渐变标题
- **color:** 银紫粉渐变 × 电紫 #7B61FF
- **border:** 1px 淡紫描边，大圆角
- **shadow:** 柔和紫色光晕投影
- **spacing:** 气泡式 20px 圆角，松弛排布
- **motion:** 150–250ms 带轻微回弹的过渡与光晕变化，尊重 prefers-reduced-motion
- **states:** hover 增强金属渐变与光晕；focus 用紫色可见亮环；active 缩小并加深；disabled 降透明去光；error 用红粉渐变

## 实现要点

**CSS:** `background: linear-gradient(#e0e0e0, #8f9096, #f5f5f5)` `background-clip: text` `text-shadow` `border-radius: 999px` `box-shadow: inset`

镀铬感的公式是窄幅多段灰阶渐变：#f8f8f8 → #9a9ba2 → #ffffff → #7c7d84， 配 1px 白高光内阴影与深色投影；文字镀铬用 background-clip: text 加同款 渐变。糖果塑料用高饱和色 + 顶部 40% 白色内阴影模拟透光。星形闪光与 泡泡字是点睛元素，克制在 2～3 处。深色模式改用紫黑底让银色更突出。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 ☆ CyberDream ☆ 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 CyberDream 银紫粉浅渐变、圆体字、紫色 CTA、右侧数据图表与三张浅色功能卡，不把原文字替换成强制 background-clip 镀铬字或新增闪星组件。会员卡沿用浅粉蓝渐变、白色 2px 边、28px 圆角与 -2deg 轻倾斜；昵称和装扮属于卡片内容。

复用当前 preview.tokens：背景 linear-gradient(160deg,#DDE7F5 0%,#EFD3E8 55%,#C9C8F4 100%)；前景 #3A3A55；强调 #7B61FF / #fff；卡面 rgba(255,255,255,.78)；边框 #B8B8E0；圆角 20px；字体 ui-rounded, 'Arial Rounded MT Bold', 'PingFang SC', sans-serif；卡影 0 8px 18px rgba(123,97,255,.18)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
立即进入后输入昵称、选择装扮生成对应会员卡，可修改后重做；音乐、装扮、星球、会员卡入口均有可查看内容，仅在本地生成身份。

静态封面、详情演示与 /style-scenes/y2k/（英文 /en/style-scenes/y2k/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用 Y2K 千禧美学设计界面：镀铬液态金属、iMac 糖果半透明塑料、粉紫蓝渐变 与闪光星形元素，甜腻闪亮的千禧年质感。

**Design:** Y2K 设计规范：底色粉紫渐变（#FFC8F0 → #C8B8FF → #A8D8FF）或银白；主按钮 用胶囊形 + 铬渐变（灰白四段）+ 白高光内阴影；卡片为半透明糖果色圆角块， 顶部白色内发光；标题用气泡粗字或镀铬字（background-clip: text）；点缀 四角星闪光；深色模式用紫黑底 + 银铬高亮。

**Implementation:** 用当前风格完成 ☆ CyberDream ☆ 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 CyberDream 银紫粉浅渐变、圆体字、紫色 CTA、右侧数据图表与三张浅色功能卡，不把原文字替换成强制 background-clip 镀铬字或新增闪星组件。会员卡沿用浅粉蓝渐变、白色 2px 边、28px 圆角与 -2deg 轻倾斜；昵称和装扮属于卡片内容。

复用当前 preview.tokens：背景 linear-gradient(160deg,#DDE7F5 0%,#EFD3E8 55%,#C9C8F4 100%)；前景 #3A3A55；强调 #7B61FF / #fff；卡面 rgba(255,255,255,.78)；边框 #B8B8E0；圆角 20px；字体 ui-rounded, 'Arial Rounded MT Bold', 'PingFang SC', sans-serif；卡影 0 8px 18px rgba(123,97,255,.18)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

立即进入后输入昵称、选择装扮生成对应会员卡，可修改后重做；音乐、装扮、星球、会员卡入口均有可查看内容，仅在本地生成身份。

静态封面、详情演示与 /style-scenes/y2k/（英文 /en/style-scenes/y2k/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [cyberpunk](/interface-atlas-web/styles/cyberpunk) — 相似概念
- [aurora](/interface-atlas-web/styles/aurora) — 相似概念
- [glassmorphism](/interface-atlas-web/styles/glassmorphism) — 相似概念
- [retro-futurism](/interface-atlas-web/styles/retro-futurism) — 相似概念
- [card](/interface-atlas-web/components/card) — 影响组件

## Sources

- [Wikipedia — Y2K aesthetic](https://en.wikipedia.org/wiki/Y2K_aesthetic)
- [MDN — linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

---

JSON: `/interface-atlas-web/api/concept/styles/y2k.json` · 站点: /interface-atlas-web/styles/y2k
