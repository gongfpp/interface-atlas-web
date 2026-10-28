# 手绘涂鸦 / Hand-drawn UI

> 风格 · `id: hand-drawn`

用抖动线条、歪斜描边、纸张纹理和马克笔高亮表示「人手画的」的界面视觉语言。 圆故意画不圆，边框带手感抖动，图标像随手勾的。以人的温度对抗机器级完美。

**别名:** 手绘风 · 涂鸦风格 · 手绘描边 · 歪歪扭扭的线 · 纸感手写界面 · hand-drawn UI · doodle UI · sketchy UI

**分类:** Style / Visual Language

## 适用场景

- 独立创作者、手作品牌、教育类产品，需要亲和与在场感
- 空状态、引导气泡、彩蛋等轻量场景，涂鸦当调味
- 想打破 AI 生成界面的过度光滑与同质

## 不适用场景

- 金融、法务、医疗等需要精确与权威的界面
- 高密度数据表格与仪表盘，抖动线条干扰数字对齐
- 长文阅读区，纸纹与高亮叠多了伤阅读

## 常见形式

- **马克笔草图** (Marker sketch) — 粗头马克笔线，高亮笔刷色块压在字下
- **笔记本涂鸦** (Notebook doodle) — 横线纸底 + 圆珠笔细线 + 边角小图标
- **贴纸乱贴** (Sticker chaos) — 手绘贴纸元素随机倾斜叠放，像活页本封面

## 开发规格

- **typography:** 手写感无衬线或圆体，标题略歪
- **color:** 纸白 #FAF6EE × 墨色 #2B2B2B × 高亮黄 #FFE566
- **border:** 2px 抖动描边，非对称圆角
- **shadow:** 极浅纸质投影，几乎贴地
- **spacing:** 随手贴的错位与轻微倾斜
- **motion:** 150–250ms 的轻微抖动式位移，带一点回弹，尊重 prefers-reduced-motion
- **states:** hover 歪斜并加深抖动描边；focus 用 2px 手绘感可见外框；active 压平抖动；disabled 去色保留描边；error 用红笔涂改感

## 实现要点

**CSS:** `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px` `border: 2px solid #2B2B2B` `background: linear-gradient() #FFE566 高亮` `transform: rotate(-1deg)` `box-shadow: 2px 2px 0 rgba(0,0,0,0.08)`

抖动边框用非对称 border-radius 四角不同值即可，不必上 SVG filter；要更抖可用 SVG feTurbulence 位移， 但要包进 @media (prefers-reduced-motion: no-preference) 或默认静止。马克笔高亮是一条半透明黄色 background 线性渐变压在文字下 60% 高度。纸纹用低透明度噪点或 repeating-linear-gradient 横线，透明度低于 0.12。 每页倾斜元素 2～4 个即可，多了像没做完。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 scribble& 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 scribble& 的纸白底、原文案与手写字体回退；首屏文字 CTA 使用深赭色 #A24A26，确保纸白底上的对比度。用原创 SVG 手绘花枝、横线便签、纸胶带和铅笔替换通用 CSS 风景；桌面以 1.1 / 1.5 / .65 三栏扩大插画，手机依内容顺序叠放，三条素材说明纵向排列。日记本沿用 32px 横线，加入双线书脊与胶带，编辑控件保持规则命中区。

复用当前 preview.tokens：背景 #FAF6EE；前景 #2B2B2B；强调 #FF8A65 / #2B2B2B；卡面 #FFFDF7；边框 #2B2B2B；圆角 14px 6px 18px 8px；字体 Comic Sans MS, Chalkboard SE, Marker Felt, PingFang SC, sans-serif；卡影 2px 3px 0 rgba(43,43,43,0.08)。

dark 与 variants 复用已有工作区 token；主视觉与页面共用 StyleSignatureArt 和 style-signatures.css，保留各自纸张、几何或电台材质。窄屏按内容重排。

完整页面操作：
随手记一笔打开编辑，保存笔记到列表，按关键词过滤并可删除；日记、素材、关于、搜索均有对应内容，显示空白校验、无匹配、删除结果。

静态封面、详情演示与 /style-scenes/hand-drawn/（英文 /en/style-scenes/hand-drawn/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用手绘涂鸦风格（Hand-drawn UI）设计界面：抖动描边、歪斜圆角、纸张纹理、马克笔高亮，图标像随手勾的。

**Design:** 手绘涂鸦设计规范：底色纸白 #FAF6EE，墨色 #2B2B2B，高亮黄 #FFE566，点缀珊瑚 #FF8A65； 所有容器非对称圆角（四角不同值）模拟手画；按钮 2px 抖动描边 + 轻微 rotate(-1deg)； 高亮条压在关键词下；图标用手绘路径或粗描边简笔； 深色模式用牛皮纸深棕底，墨色反成米白，高亮保持。

**Implementation:** 用当前风格完成 scribble& 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 scribble& 的纸白底、原文案与手写字体回退；首屏文字 CTA 使用深赭色 #A24A26，确保纸白底上的对比度。用原创 SVG 手绘花枝、横线便签、纸胶带和铅笔替换通用 CSS 风景；桌面以 1.1 / 1.5 / .65 三栏扩大插画，手机依内容顺序叠放，三条素材说明纵向排列。日记本沿用 32px 横线，加入双线书脊与胶带，编辑控件保持规则命中区。

复用当前 preview.tokens：背景 #FAF6EE；前景 #2B2B2B；强调 #FF8A65 / #2B2B2B；卡面 #FFFDF7；边框 #2B2B2B；圆角 14px 6px 18px 8px；字体 Comic Sans MS, Chalkboard SE, Marker Felt, PingFang SC, sans-serif；卡影 2px 3px 0 rgba(43,43,43,0.08)。

dark 与 variants 复用已有工作区 token；主视觉与页面共用 StyleSignatureArt 和 style-signatures.css，保留各自纸张、几何或电台材质。窄屏按内容重排。

随手记一笔打开编辑，保存笔记到列表，按关键词过滤并可删除；日记、素材、关于、搜索均有对应内容，显示空白校验、无匹配、删除结果。

静态封面、详情演示与 /style-scenes/hand-drawn/（英文 /en/style-scenes/hand-drawn/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [organic](/styles/organic) — 相似概念
- [neobrutalism](/styles/neobrutalism) — 相似概念
- [minimalism](/styles/minimalism) — 替代方案
- [empty-state](/patterns/empty-state) — 搭配使用
- [button](/components/button) — 影响组件
- [card](/components/card) — 影响组件

## Sources

- [Wikipedia — Doodle](https://en.wikipedia.org/wiki/Doodle)
- [Wikipedia — Sketch (drawing)](https://en.wikipedia.org/wiki/Sketch_(drawing))

---

JSON: `/api/concept/styles/hand-drawn.json` · 站点: /styles/hand-drawn
