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

## 实现要点

**CSS:** `border-radius: 999px` `background: #7B61FF` `clip-path: ellipse()` `fill (SVG)` `no box-shadow`

插画用 SVG 或纯色块拼装：头是正圆，躯干圆角矩形，四肢是加粗圆头线条（stroke-linecap: round）。 色板锁 3～5 色，肤色用蓝 紫 绿等非写实色表示包容。禁止描边渐变阴影，全部纯色平涂。 UI 部件同源：大圆角胶囊按钮、无边框卡片、留白充足。深色模式换深底但保留同一组高饱和色。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Corporate Memphis 企业孟菲斯视觉风格。

先检查现有插画资产与 Design Token，色板收敛到 3～5 色独立变量。
要求：
- 扁平抽象人形（小头长肢、无面部细节、非写实肤色）或抽象圆角色块
- 纯平涂，无描边、无渐变阴影（渐变变体除外，且仅双色）
- 胶囊按钮、无边框卡片、大留白
- 插画装饰 aria-hidden，不承担关键信息
- 文字对比度达标，深色模式保留高饱和色
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用企业孟菲斯风格（Corporate Memphis）设计界面：扁平抽象小人、长手长肢、紫黄桃有限色板、圆润色块。

**Design:** 企业孟菲斯设计规范：主紫 #7B61FF、辅黄 #FAD141、桃粉 #F48196、点缀青 #14C88C，肤色用 #86CCCA 类非写实色； 插画纯平涂无描边无阴影；标题几何无衬线（Poppins / Nunito 类），中粗即可不要压迫感； 按钮全胶囊，卡片无边框靠底色分区；大留白、插画占 hero 40%～60%； 深色模式深紫黑底，色块饱和度保持。

**Implementation:** 用 SVG 实现企业孟菲斯小人：<circle> 头 + <rect rx> 躯干 + stroke-linecap: round 的粗线四肢， fill 用色板变量，无 stroke。渐变变体只叠 linear-gradient 双色，不做立体光影。 UI 侧 border-radius: 999px 胶囊与 24px 卡片圆角统一；阴影完全不用。

## 相关概念

- [flat-design](/styles/flat-design) — 相似概念
- [memphis](/styles/memphis) — 替代方案
- [organic](/styles/organic) — 替代方案
- [empty-state](/styles/empty-state) — 搭配使用
- [onboarding-tour](/styles/onboarding-tour) — 搭配使用
- [card](/styles/card) — 影响组件

## 容易混淆

- [memphis](/styles/memphis) — 企业孟菲斯是 2017 后的扁平人形插画；孟菲斯是 1980s 米兰的波点波浪撞色家具语汇。

## Sources

- [Wikipedia — Corporate Memphis](https://en.wikipedia.org/wiki/Corporate_Memphis)
- [Wikipedia — Flat design](https://en.wikipedia.org/wiki/Flat_design)

---

JSON: `/api/concept/styles/corporate-memphis.json` · 站点: /styles/corporate-memphis
