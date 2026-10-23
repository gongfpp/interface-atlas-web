# 液态玻璃 / Liquid Glass

> 风格 · `id: liquid-glass`

用厚折射玻璃层、镜面高光与液体形变表示「功能浮层」的视觉语言。玻璃像一块厚透镜， 折射底下的内容并反射环境光，边缘带 lensing 变形；强调材质的体积与流动性。

**别名:** 液态玻璃 · 苹果新玻璃 · 厚玻璃折射 · 玻璃透镜效果 · Liquid Glass · refractive glass UI

**分类:** Style / Visual Language

## 适用场景

- 需要与系统级导航 控制条 浮层保持同一材质语言
- 底下是彩色照片或丰富内容，折射透出层次才有意义
- 想要「厚玻璃片」的体积感，而不是一层薄雾

## 不适用场景

- 长文本密集区，折射与高光会持续干扰阅读
- 低端设备与性能敏感场景，实时折射开销大
- 只需要轻量磨砂分层，那用玻璃拟态更省

## 常见形式

- **片状透镜** (Sheet lens) — 大面积厚玻璃板，边缘 lensing 明显
- **胶囊按钮** (Button capsule) — 小尺寸胶囊控制件，镜面高光集中
- **全幅面板** (Full panel) — 侧栏 系统条级别大块玻璃，吸收环境色

## 开发规格

- **typography:** 系统无衬线，玻璃上的字重略轻
- **color:** 由底层内容决定玻璃色相，高光近白
- **border:** 1px 半透明白描边，暗示折射边缘
- **shadow:** 顶部镜面内高光 + 大范围柔和外投影
- **spacing:** 20px+ 圆角或胶囊，控制件独立浮层
- **motion:** 250–400ms ease-out 的折射位移与高光滑动，尊重 prefers-reduced-motion
- **states:** hover 高光沿边缘滑动并轻微放大；focus 用白色可见亮环；active 压低折射；disabled 降透明去高光；error 用红调折射且仅淡入颜色

## 实现要点

**CSS:** `backdrop-filter: blur() saturate()` `box-shadow: inset 高光 + 外投影` `border: 1px solid rgba(255,255,255,0.5)` `background: rgba(255,255,255,0.12)` `border-radius: 999px`

厚度感来自三层：低透明填充 + backdrop-filter blur(20px) saturate(180%) + 顶部 1px 镜面高光内阴影 与底部暗边内阴影。边缘 lensing 近似用较厚的半透明白描边 + 外圈极浅放大后的底色。 真折射需要 SVG filter 或 canvas，Web 里通常用高光与饱和度补偿暗示。玻璃必须浮在彩色内容上。 深色模式用深色填充，高光保持。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Lumen 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Lumen 桃/紫/蓝渐变、CSS 山景、22px 玻璃卡、blur(20px) saturate(180%) 与顶部高光/底部暗边。材质台使用 36px 圆角试样、网格/条纹/圆环光学背景与双层高光边缘。Clear 按厚度的 0.22 倍轻微模糊，Frost 按厚度加 12px 柔化，Prism 按厚度的 0.5 倍模糊并增强彩色反射；厚度同步改变浮起距离和阴影，环境光角度同时改变底色与镜面光带，不新增 SVG 位移折射或悬浮导航。厚度、高光与折射为当前 CSS 近似，文字仍可读。

复用当前 preview.tokens：背景 linear-gradient(145deg,#FF9A8B 0%,#A18CD1 45%,#6DD5FA 100%)；前景 #FFFFFF；强调 rgba(255,255,255,.92) / #1A1030；卡面 rgba(255,255,255,.14)；边框 rgba(255,255,255,.5)；圆角 22px；字体 SF Pro Display, Helvetica Neue, PingFang SC, sans-serif；卡影 inset 0 1px 0 rgba(255,255,255,.7), inset 0 -1px 0 rgba(0,0,0,.15), 0 8px 24px rgba(0,0,0,.18)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
体验折射进入材质试样，调整材质、厚度、角度实时查看变化并保存配方；光学、材质、价格各有内容，明确高光折射只是网页近似，并非真实光学模拟。

静态封面、详情演示与 /style-scenes/liquid-glass/（英文 /en/style-scenes/liquid-glass/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用液态玻璃风格（Liquid Glass）设计界面：厚折射玻璃浮层、镜面高光、边缘 lensing 变形，浮在彩色内容之上。

**Design:** 液态玻璃设计规范：底层放彩色照片或渐变；玻璃填充 rgba(255,255,255,0.12) 深色模式 rgba(20,20,30,0.35)； backdrop-filter blur(20px) saturate(180%)；顶部 inset 0 1px 0 rgba(255,255,255,0.7) 镜面高光， 底部 inset 0 -1px 0 rgba(0,0,0,0.15)；1px 半透明白描边；圆角 20px 或胶囊 999px； 控制件浮在独立功能层，内容区保持通透。

**Implementation:** 用当前风格完成 Lumen 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Lumen 桃/紫/蓝渐变、CSS 山景、22px 玻璃卡、blur(20px) saturate(180%) 与顶部高光/底部暗边。材质台使用 36px 圆角试样、网格/条纹/圆环光学背景与双层高光边缘。Clear 按厚度的 0.22 倍轻微模糊，Frost 按厚度加 12px 柔化，Prism 按厚度的 0.5 倍模糊并增强彩色反射；厚度同步改变浮起距离和阴影，环境光角度同时改变底色与镜面光带，不新增 SVG 位移折射或悬浮导航。厚度、高光与折射为当前 CSS 近似，文字仍可读。

复用当前 preview.tokens：背景 linear-gradient(145deg,#FF9A8B 0%,#A18CD1 45%,#6DD5FA 100%)；前景 #FFFFFF；强调 rgba(255,255,255,.92) / #1A1030；卡面 rgba(255,255,255,.14)；边框 rgba(255,255,255,.5)；圆角 22px；字体 SF Pro Display, Helvetica Neue, PingFang SC, sans-serif；卡影 inset 0 1px 0 rgba(255,255,255,.7), inset 0 -1px 0 rgba(0,0,0,.15), 0 8px 24px rgba(0,0,0,.18)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

体验折射进入材质试样，调整材质、厚度、角度实时查看变化并保存配方；光学、材质、价格各有内容，明确高光折射只是网页近似，并非真实光学模拟。

静态封面、详情演示与 /style-scenes/liquid-glass/（英文 /en/style-scenes/liquid-glass/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [glassmorphism](/styles/glassmorphism) — 相似概念
- [skeuomorphism](/styles/skeuomorphism) — 相似概念
- [aurora](/styles/aurora) — 搭配使用
- [navbar](/components/navbar) — 影响组件
- [modal](/components/modal) — 影响组件
- [button](/components/button) — 影响组件

## 容易混淆

- [glassmorphism](/styles/glassmorphism) — 玻璃拟态是薄磨砂模糊（backdrop blur 一片雾）；液态玻璃是厚折射透镜，边缘变形并带镜面高光。

## Sources

- [Apple — Liquid Glass technology overview](https://developer.apple.com/documentation/technologyoverviews/liquid-glass)
- [WWDC25 — Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)

---

JSON: `/api/concept/styles/liquid-glass.json` · 站点: /styles/liquid-glass
