# 结账页 / Checkout Page

> 页面 · `id: checkout`

电商转化的最后一公里：页面把收货信息、配送方式、支付方式和订单摘要组织成一条 不可回头的短流程，步骤条标示进度，表单尽量预填与自动更正，摘要常驻展示金额明细。 核心原则是每一步只问必要的信息，任何犹豫点（运费、总金额）都要提前说清楚。

**别名:** 结账页 · 下单页 · 付款页面 · 收银台 · 提交订单页 · 支付页面 · 买的东西确认页

**分类:** Page / Commerce

## 适用场景

- 购物车到支付的完整下单流程
- 需要分步收集收货、配送、支付信息
- 需要同时展示金额明细与优惠减免

## 不适用场景

- 单件虚拟商品的极简购买（一屏内完成更优）
- 浏览和挑选商品的商城首页
- 订阅升级（用定价页的升级弹层更轻）

## 常见形式

- **单页结账** (One-page Checkout) — 所有信息一屏铺开，转化路径最短
- **多步结账** (Multi-step Checkout) — 步骤条分段收集，长表单减压
- **手风琴式** (Accordion Checkout) — 完成一段折叠一段，兼顾单页与分步
- **快捷支付优先** (Express-first) — 一键支付按钮置顶，表单退居其次

## 页面结构

1. **步骤条** — 购物车 → 信息 → 支付 → 完成，标明当前进度。
2. **收货与支付表单** — 地址与卡信息分组，减少字段并支持自动填充。
3. **支付方式** — 卡 / 钱包 / 分期并列，默认选中推荐方式。
4. **订单摘要** — 商品、运费、税费与合计，结算全程可见。
5. **提交按钮** — 唯一致命操作，处理中禁用并给出反馈。

## 实现要点

**CSS:** `flex` `grid` `position: sticky` `accent-color: var(--color-accent)`

多步流程用受控 step 状态 + 步骤条（可点击回退）；每步本地校验通过才放行。 订单摘要桌面端 sticky 右栏，移动端折叠成"合计 ¥xx"的可展开条。 表单输入配 autocomplete（name / postal-code / cc-number）、输入掩码与即时校验。 提交中禁用按钮并防重复下单；成功后跳转确认页。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现结账页。

先检查购物车数据结构、支付接口与表单组件，保持一致。
要求：
- 步骤条 + 分步表单（可回退），每步校验
- 订单摘要 sticky，金额明细完整
- 提交态防重复下单，成功跳转确认页
- 移动端摘要折叠
- 深浅色一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个结账页，包含收货表单、支付方式选择和订单摘要。

**Design:** 创建三步结账页：顶部步骤条（收货 → 支付 → 确认）；左栏当前步表单（收货：姓名/地址/电话，即时校验；支付：卡号掩码与支付方式单选）；右栏 sticky 订单摘要（商品两行 + 运费 + 优惠 + 合计）；底部"提交订单"按钮带提交 loading。移动端摘要折叠。

**Implementation:** 用 React + Tailwind 实现结账页：step 受控 + 每步字段级校验；卡号输入掩码 （4 位分组）；金额计算抽成纯函数；摘要 sticky；提交态防重复； 支付方式单选受控；深浅色一致。不新增依赖。

## 相关概念

- [input](/pages/input) — 包含组件
- [form-validation](/pages/form-validation) — 使用模式
- [progress-bar](/pages/progress-bar) — 包含组件
- [toast](/pages/toast) — 包含组件
- [button](/pages/button) — 包含组件

## Sources

- [Baymard Institute — Checkout Usability](https://baymard.com/lists/checkout-flow-usability)
- [Nielsen Norman Group — Checkout](https://www.nngroup.com/articles/checkout-flow/)

---

JSON: `/api/concept/pages/checkout.json` · 站点: /pages/checkout
