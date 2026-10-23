# 扁平化设计 / Flat Design

> 风格 · `id: flat-design`

拒绝一切拟真修饰的视觉语言：纯色块、几何形状、无渐变无投影无纹理，靠颜色、 形状与排版建立层级。它是拟物化的反面——界面不再模仿实物，而是承认自己 是一块发光的平面，用清晰与直接换取效率与一致性。

**别名:** 扁平化 · 扁平风格 · 扁平化设计 · 没有阴影那种平面设计 · 色块图标风格 · 扁平UI · Flat UI · Flat Design

**分类:** Style / Visual Language

## 适用场景

- 系统级产品需要跨平台一致与极低成本维护
- 图标 信息图 后台界面，要求一眼识别 快速扫读
- 移动端小屏幕，装饰会挤占内容空间

## 不适用场景

- 层级复杂且用户需要空间线索区分可点与不可点
- 品牌需要温度 情绪与精致感
- 大面积灰底上加细线按钮，可点性暗示不足（ Flat 2.0 随之出现）

## 常见形式

- **Metro 磁贴** (Metro Tiles) — 微软 Metro，大色块磁贴与矩形至上
- **Flat UI 撞色** (Flat UI Colors) — 高饱和撞色 加浅底 圆角与细描边
- **扁平 2.0** (Flat 2.0) — 补回轻微阴影与层次，Material 前奏

## 开发规格

- **typography:** 几何无衬线，中等字重
- **color:** 纯色平涂：蓝 #1FA2FF × 黄 #FFD54F
- **border:** 无描边，色块分区
- **shadow:** 完全无阴影
- **spacing:** 小圆角 6px，均匀网格
- **motion:** 100–150ms 颜色与透明度的线性过渡，无位移
- **states:** hover 用更亮的平涂色；focus 用 2px 深色可见实线外框；active 换用更深色块；disabled 降到 50% 不透明；error 用红色平涂且不加阴影

## 实现要点

**CSS:** `solid-color` `border: 0` `box-shadow: none` `transition: background-color`

纪律比技巧重要：只允许纯色填充与 1px 描边，box-shadow 一律 none，渐变与 纹理一律不出现；层级交给色块面积与明度差。可交互元素用高饱和强调色或 描边保证可点性；hover 只改 background-color，150ms 内完成。深浅色模式 各维护一套色板而非简单反色。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Flatly 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Flatly 的蓝色首屏、黄色操作与黄/白/青三张功能卡；仍是左侧 2/5 文案、右侧 3/5 几何面板、下方三卡，不另建六色卡片实验。沿用 renderer 的圆/三角/方形及其局部投影，不用全局无渐变/无阴影规则抹掉现有图形层次。工作区按现有表单与结果列表延续。

复用当前 preview.tokens：背景 #1FA2FF；前景 #FFFFFF；强调 #FFD54F / #333333；卡面 rgba(255,255,255,.16)；边框 rgba(255,255,255,.35)；圆角 8px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
开始使用创建具名工作区并选择 plan，结果显示对应名称与方案；功能、价格、博客、登录各到达具体内容或演示身份说明。

静态封面、详情演示与 /style-scenes/flat-design/（英文 /en/style-scenes/flat-design/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用扁平化设计（Flat Design）风格设计界面：纯色块、无渐变无投影无纹理， 层级靠颜色与排版建立，交互元素用高饱和强调色标识。

**Design:** 扁平化设计规范：背景纯白或纯灰，内容用 5～6 个高饱和色块（参考 Flat UI Colors：#3498DB #E74C3C #2ECC71 等）；无边框无投影，圆角 0～4px；文字 反白或近黑，字号层级清晰；按钮 hover 仅加深背景色 8%；深色模式单独 调整色板明度，不做简单反色。

**Implementation:** 用当前风格完成 Flatly 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Flatly 的蓝色首屏、黄色操作与黄/白/青三张功能卡；仍是左侧 2/5 文案、右侧 3/5 几何面板、下方三卡，不另建六色卡片实验。沿用 renderer 的圆/三角/方形及其局部投影，不用全局无渐变/无阴影规则抹掉现有图形层次。工作区按现有表单与结果列表延续。

复用当前 preview.tokens：背景 #1FA2FF；前景 #FFFFFF；强调 #FFD54F / #333333；卡面 rgba(255,255,255,.16)；边框 rgba(255,255,255,.35)；圆角 8px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

开始使用创建具名工作区并选择 plan，结果显示对应名称与方案；功能、价格、博客、登录各到达具体内容或演示身份说明。

静态封面、详情演示与 /style-scenes/flat-design/（英文 /en/style-scenes/flat-design/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [minimalism](/styles/minimalism) — 相似概念
- [skeuomorphism](/styles/skeuomorphism) — 相似概念
- [swiss-style](/styles/swiss-style) — 相似概念
- [button](/components/button) — 影响组件
- [card](/components/card) — 影响组件

## Sources

- [Nielsen Norman Group — Flat Design](https://www.nngroup.com/articles/flat-design/)
- [Apple HIG — Visual Design](https://developer.apple.com/design/human-interface-guidelines/visual-design)

---

JSON: `/api/concept/styles/flat-design.json` · 站点: /styles/flat-design
