# 企业孟菲斯 / Corporate Memphis

> 风格 · `id: corporate-memphis`

用扁平抽象人形与受限纯色表示「友好大厂」的插画视觉语言：小头长肢、无面部细节、 紫黄桃等有限色板，圆润色块构图。生产成本低、人人可画，也因此高度同质。

**别名:** 企业孟菲斯 · 大厂插画风 · 蓝色小人插画 · 长手长脚扁平小人 · 科技公司插画风 · Alegria · Big Tech illustration · flat blob people

**分类:** Style / Visual Language

## 适用场景

- SaaS、工具类产品的空状态、引导页、营销插画，需要无攻击性的友好感
- 多人多地协作维护插画系统，要求画风可复制
- 要传达包容、协作、普惠的抽象价值观

## 不适用场景

- 品牌需要独特记忆点，同质化插画会让产品淹没在大厂语汇里
- 高端、奢侈、手作、严肃议题，扁平小人撑不起重量
- 用插画传达具体产品功能，抽象人形说不清细节

## 常见形式

- **经典人形** (Memphis people) — 小头长肢扁平小人，动作夸张，常配紫黄桃
- **抽象色块** (Abstract shapes) — 无人物，只用圆角矩形、圆点与弧线色块
- **渐变扁平** (Gradient flat) — 扁平形体加双色渐变，比纯色多一层柔光

## 开发规格

- **typography:** 几何无衬线中粗字，宽松行距
- **color:** 紫 #7B61FF × 黄 #FAD141 × 桃 #F48196，肤色非写实
- **border:** 无描边，色块直接相接
- **shadow:** 无阴影，纯平涂
- **spacing:** 大留白，插画与文案左右分栏
- **motion:** 150–200ms 的平涂色切换，无位移
- **states:** hover 换用相邻色块；focus 用紫色 2px 可见外框；active 换深色平涂；disabled 降不透明；error 用桃粉平涂

## 实现要点

**CSS:** `border-radius: 999px` `background: #7B61FF` `clip-path: ellipse()` `fill (SVG)` `no box-shadow`

插画用 SVG 或纯色块拼装：头是正圆，躯干圆角矩形，四肢是加粗圆头线条（stroke-linecap: round）。 色板锁 3～5 色，肤色用蓝 紫 绿等非写实色表示包容。禁止描边渐变阴影，全部纯色平涂。 UI 部件同源：大圆角胶囊按钮、无边框卡片、留白充足。深色模式换深底但保留同一组高饱和色。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 alegria 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 alegria 原 .gs-tasko-grid 四列：介绍/头像、真实日历及任务入口、绿色专注统计、笔记与励志卡；不是另造占 hero 40%–60% 的人物插画。页底为 #FFF8F0，紫色 #7B61FF 操作、白卡与 #E8DFF5 细边、24px token 圆角，字体沿用 Poppins/Nunito 系统回退栈；保留统计卡与励志卡原有渐变。日历采用固定六周格和紫色选中日，1020px 以下按已有容器规则两列、600px 以下单列。工作台继续真实任务/笔记列表，不用抽象人物替换它们。

复用当前 preview.tokens：背景 #FFF8F0；前景 #2B2140；强调 #7B61FF / #FFFFFF；卡面 #FFFFFF；边框 #E8DFF5；圆角 24px；字体 Poppins, Nunito, Helvetica Neue, PingFang SC, sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
免费试用进入协作工作区；原首屏日历可操作上一月、下一月和日期，支持跨年切月与选日，初始固定为 2024-01-17。原「任务 5」「笔记 12」入口分别打开真实的 5 项初始任务与 12 条可读取笔记。填写任务和负责人创建所选日期的任务，完成/取消完成同步待办计数、进度及所选日期摘要；新增、读取、删除笔记同步首屏笔记总数。内部重置或刷新均恢复 2024-01-17、5 项待办与 12 条笔记；产品、客户、价格、招聘、登录各有内容，无真实账号或团队邀请。

静态封面、详情演示与 /style-scenes/corporate-memphis/（英文 /en/style-scenes/corporate-memphis/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用企业孟菲斯风格（Corporate Memphis）设计界面：扁平抽象小人、长手长肢、紫黄桃有限色板、圆润色块。

**Design:** 企业孟菲斯设计规范：主紫 #7B61FF、辅黄 #FAD141、桃粉 #F48196、点缀青 #14C88C，肤色用 #86CCCA 类非写实色； 插画纯平涂无描边无阴影；标题几何无衬线（Poppins / Nunito 类），中粗即可不要压迫感； 按钮全胶囊，卡片无边框靠底色分区；大留白、插画占 hero 40%～60%； 深色模式深紫黑底，色块饱和度保持。

**Implementation:** 用当前风格完成 alegria 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 alegria 原 .gs-tasko-grid 四列：介绍/头像、真实日历及任务入口、绿色专注统计、笔记与励志卡；不是另造占 hero 40%–60% 的人物插画。页底为 #FFF8F0，紫色 #7B61FF 操作、白卡与 #E8DFF5 细边、24px token 圆角，字体沿用 Poppins/Nunito 系统回退栈；保留统计卡与励志卡原有渐变。日历采用固定六周格和紫色选中日，1020px 以下按已有容器规则两列、600px 以下单列。工作台继续真实任务/笔记列表，不用抽象人物替换它们。

复用当前 preview.tokens：背景 #FFF8F0；前景 #2B2140；强调 #7B61FF / #FFFFFF；卡面 #FFFFFF；边框 #E8DFF5；圆角 24px；字体 Poppins, Nunito, Helvetica Neue, PingFang SC, sans-serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

免费试用进入协作工作区；原首屏日历可操作上一月、下一月和日期，支持跨年切月与选日，初始固定为 2024-01-17。原「任务 5」「笔记 12」入口分别打开真实的 5 项初始任务与 12 条可读取笔记。填写任务和负责人创建所选日期的任务，完成/取消完成同步待办计数、进度及所选日期摘要；新增、读取、删除笔记同步首屏笔记总数。内部重置或刷新均恢复 2024-01-17、5 项待办与 12 条笔记；产品、客户、价格、招聘、登录各有内容，无真实账号或团队邀请。

静态封面、详情演示与 /style-scenes/corporate-memphis/（英文 /en/style-scenes/corporate-memphis/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [flat-design](/interface-atlas-web/styles/flat-design) — 相似概念
- [memphis](/interface-atlas-web/styles/memphis) — 替代方案
- [organic](/interface-atlas-web/styles/organic) — 替代方案
- [empty-state](/interface-atlas-web/patterns/empty-state) — 搭配使用
- [onboarding-tour](/interface-atlas-web/patterns/onboarding-tour) — 搭配使用
- [card](/interface-atlas-web/components/card) — 影响组件

## 容易混淆

- [memphis](/interface-atlas-web/styles/memphis) — 企业孟菲斯是 2017 后的扁平人形插画；孟菲斯是 1980s 米兰的波点波浪撞色家具语汇。

## Sources

- [Wikipedia — Corporate Memphis](https://en.wikipedia.org/wiki/Corporate_Memphis)
- [Wikipedia — Flat design](https://en.wikipedia.org/wiki/Flat_design)

---

JSON: `/interface-atlas-web/api/concept/styles/corporate-memphis.json` · 站点: /interface-atlas-web/styles/corporate-memphis
