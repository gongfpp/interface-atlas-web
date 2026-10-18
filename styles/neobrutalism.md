# 新粗野主义 / Neobrutalism

> 风格 · `id: neobrutalism`

用粗黑描边、高饱和撞色与生硬的偏移实心阴影构成的高对比视觉语言：元素像彩色 贴纸一样直接砸在页面上，配合夸张的圆角与醒目标签。它刻意拒绝精致与圆滑， 以"丑得理直气壮"的态度换取强烈的记忆点与年轻个性。

**别名:** 新粗野主义 · 粗野风 · 大黑边风格 · 硬阴影风格 · 新残酷主义 · Neo-brutalism · Brutalist Web Design

**分类:** Style / Visual Language

## 适用场景

- 面向年轻群体的品牌 活动 开发者工具官网
- 想在千篇一律的精致界面里制造强烈记忆点
- 营销页 作品集 创意社区等低密度高表现力场景

## 不适用场景

- 金融 医疗 企业级产品等需要稳重可信的场景
- 长时间使用的生产力工具，高对比装饰易造成视觉疲劳
- 内容密集 数据密集的界面，粗边与大色块挤占信息空间

## 常见形式

- **经典硬阴影** (Classic Hard Shadow) — 奶油底色 + 黑边 + 偏移实心阴影
- **糖果色** (Candy) — 粉 紫 黄等高饱和糖果色块互相碰撞
- **粗粝噪点** (Grunge) — 加入噪点纹理 倾斜元素与手绘涂鸦

## 开发规格

- **typography:** 超粗无衬线，全大写
- **color:** 奶油底 × 纯黑 × 橙 #FF6B00
- **border:** 3px 黑色实线粗边
- **shadow:** 5px 5px 0 硬投影（不模糊）
- **spacing:** 0 圆角，紧凑堆叠
- **motion:** 约 100ms 的硬位移按压，无缓动
- **states:** hover 位移到硬投影位置；focus 用 3px 黑色可见外框；active 继续下压并收起投影；disabled 灰化且不位移；error 用橙红粗边

## 实现要点

**CSS:** `border: 2-4px solid #000` `box-shadow: 4px 4px 0 #000` `border-radius: 8-16px` `background: saturate()` `transition`

三件套是风格命门：粗黑边（2～4px）、偏移实心阴影（如 4px 4px 0 #000，绝不用 模糊）、明快圆角。配色选高饱和糖果色并大胆撞色。交互反馈很出效果：hover 时 元素位移，active 时把位移吃掉、阴影归零，像真的被按进纸面。噪点可用 SVG feTurbulence 或重复渐变模拟。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 PlayLab 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 PlayLab 的 47% / 53% 文案与叠窗构图：#ffff13 标题高亮、#f4a1d1 方角 CTA、黄色导航 CTA、#4e96f9 蓝块与 #3bbc8b 绿块。沿用 2px 黑边、无模糊硬投影、倾斜创意窗、笑脸和可勾选清单，不改成 10px 圆角或橙色 BRUTAL* 模板。延续区用现有粉/蓝/绿案例按钮与粗分隔；600px 以下文案和 360px 高叠窗分别入流，保持清单可操作。

完整页面操作：
一起创造与开始项目打开简报，填写后整理可继续修改的本地需求；Design / Develop / Create 清单可独立勾选/取消；项目、服务、关于到达作品、服务、团队内容。

静态封面、详情演示与 /style-scenes/neobrutalism/（英文 /en/style-scenes/neobrutalism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用新粗野主义风格（Neobrutalism）设计界面：粗黑描边、高饱和撞色、偏移实心硬阴影，元素像贴纸一样直接有力。

**Design:** 新粗野主义设计规范：底色奶油黄（#FDF2D8）；所有元素 2～3px 纯黑描边； 阴影只用实心偏移（4px 4px 0 #000），禁止模糊投影；圆角 10px 左右；主色 高饱和（红 #FF5D5D、黄 #FFC900、蓝 #4D9FFF 任选撞色）；标题粗黑体可全大写； 按钮按下时位移吃掉阴影。深色模式用近黑底色但保持彩色元素亮度。

**Implementation:** 用当前风格完成 PlayLab 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 PlayLab 的 47% / 53% 文案与叠窗构图：#ffff13 标题高亮、#f4a1d1 方角 CTA、黄色导航 CTA、#4e96f9 蓝块与 #3bbc8b 绿块。沿用 2px 黑边、无模糊硬投影、倾斜创意窗、笑脸和可勾选清单，不改成 10px 圆角或橙色 BRUTAL* 模板。延续区用现有粉/蓝/绿案例按钮与粗分隔；600px 以下文案和 360px 高叠窗分别入流，保持清单可操作。

一起创造与开始项目打开简报，填写后整理可继续修改的本地需求；Design / Develop / Create 清单可独立勾选/取消；项目、服务、关于到达作品、服务、团队内容。

静态封面、详情演示与 /style-scenes/neobrutalism/（英文 /en/style-scenes/neobrutalism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [bauhaus](/interface-atlas-web/styles/bauhaus) — 相似概念
- [memphis](/interface-atlas-web/styles/memphis) — 相似概念
- [y2k](/interface-atlas-web/styles/y2k) — 相似概念
- [button](/interface-atlas-web/components/button) — 影响组件
- [card](/interface-atlas-web/components/card) — 影响组件

## Sources

- [Gumroad — Neobrutalism 代表案例](https://gumroad.com/)
- [Wikipedia — Brutalist Architecture（风格词源）](https://en.wikipedia.org/wiki/Brutalist_architecture)

---

JSON: `/interface-atlas-web/api/concept/styles/neobrutalism.json` · 站点: /interface-atlas-web/styles/neobrutalism
