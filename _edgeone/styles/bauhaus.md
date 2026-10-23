# 包豪斯 / Bauhaus

> 风格 · `id: bauhaus`

用基础几何与三原色做构成游戏的视觉语言：圆 三角 方三种形状，红 黄 蓝 三原色加黑，不对称但平衡的构图，装饰服从功能。每一块色面与线条都参与 结构，海报像一场几何关系的研究。

**别名:** 包豪斯 · 包豪斯风格 · 几何构成主义 · 红黄蓝几何风 · 原色几何设计 · 圆三角方构成 · Bauhaus Design · Geometric Abstraction

**分类:** Style / Visual Language

## 适用场景

- 品牌 海报 活动页，需要强烈的图形识别与艺术气质
- 教育 创意工具类产品，传达"创造与构成"的气质
- 大面积视觉主视觉区，元素少而冲击力要求高

## 不适用场景

- 信息密集的界面，几何装饰会干扰数据可读性
- 需要长时间阅读的产品场景
- 品牌色板已被锁定，无法让位于三原色

## 常见形式

- **魏玛时期** (Weimar) — 表现主义余温，Itten 色彩理论影响
- **德绍时期** (Dessau) — 最经典阶段——理性几何与红黄蓝
- **当代包豪斯** (Contemporary Bauhaus) — 网页化的构成主义，更大胆的留白与动效

## 开发规格

- **typography:** 包豪斯几何无衬线，大写
- **color:** 米底 × 红 #E23B2E 蓝 #21409A 黄 #F2B705
- **border:** 0 圆角，细黑边框
- **shadow:** 无阴影
- **spacing:** 几何构图留白
- **motion:** 100ms 内完成的原色切换，无缓动位移
- **states:** hover 切换到另一原色；focus 用 2px 黑色可见外框；active 反色块；disabled 降为灰阶；error 用红 #E23B2E

## 实现要点

**CSS:** `background: #D93025` `clip-path` `border-radius: 50%` `grid` `mix-blend-mode`

用三原色建立固定角色：红为主视觉面，黄做暖点缀，蓝做冷点缀，黑承担 文字与结构线。构图用非对称平衡：一大几何形 + 一两条结构线 + 一个小 实体，元素之间保持接触或穿插而非悬空。形状可用 border-radius 50% 与 clip-path 三角形实现，避免图片素材。留白同样是构图材料。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 BAUHAUS 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 BAUHAUS 米色首屏、红色主操作及红/蓝/黄三卡；右侧圆/三角/方形面板与原有轻投影继续使用，标题仍为原大写无衬线，不额外强制图文负 margin 穿插。构图工坊使用 #eee5d7 画布、2px 黑边以及 #e23b2e 圆/#21409a 方/#f2b705 三角，形状由 CSS 生成。

复用当前 preview.tokens：背景 #F4EFE6；前景 #141414；强调 #E23B2E / #fff；卡面 #FFFFFF；边框 #141414；圆角 0px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
进入工坊后选择红圆、蓝方或黄角并放置到画布，最多 12 个图形，可清空重做；形式、色彩、工坊导航各有对应内容。

静态封面、详情演示与 /style-scenes/bauhaus/（英文 /en/style-scenes/bauhaus/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用包豪斯风格（Bauhaus）设计界面：圆 三角 方几何构成，红 黄 蓝 三原色加黑， 不对称但平衡的构图，装饰服从功能。

**Design:** 包豪斯设计规范：底色米白 #F4EFE6 或黑；主视觉用大几何形（红圆 黄三角 蓝方至少出现两种）并与文字穿插接触；文字黑色无衬线 大写或粗几何体； 禁用渐变 投影 与纹理；构图不对称但重心平衡；深色模式底色近黑，三原色 提亮一档保持冲击。

**Implementation:** 用当前风格完成 BAUHAUS 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 BAUHAUS 米色首屏、红色主操作及红/蓝/黄三卡；右侧圆/三角/方形面板与原有轻投影继续使用，标题仍为原大写无衬线，不额外强制图文负 margin 穿插。构图工坊使用 #eee5d7 画布、2px 黑边以及 #e23b2e 圆/#21409a 方/#f2b705 三角，形状由 CSS 生成。

复用当前 preview.tokens：背景 #F4EFE6；前景 #141414；强调 #E23B2E / #fff；卡面 #FFFFFF；边框 #141414；圆角 0px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

进入工坊后选择红圆、蓝方或黄角并放置到画布，最多 12 个图形，可清空重做；形式、色彩、工坊导航各有对应内容。

静态封面、详情演示与 /style-scenes/bauhaus/（英文 /en/style-scenes/bauhaus/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [swiss-style](/styles/swiss-style) — 相似概念
- [memphis](/styles/memphis) — 相似概念
- [flat-design](/styles/flat-design) — 相似概念
- [button](/components/button) — 影响组件
- [card](/components/card) — 影响组件

## Sources

- [Bauhaus Dessau Foundation](https://www.bauhaus-dessau.de/en/)
- [Wikipedia — Bauhaus](https://en.wikipedia.org/wiki/Bauhaus)

---

JSON: `/api/concept/styles/bauhaus.json` · 站点: /styles/bauhaus
