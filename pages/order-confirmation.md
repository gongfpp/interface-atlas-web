# 订单确认页 / Order Confirmation

> 页面 · `id: order-confirmation`

下单成功后接住用户情绪的收尾页：用明确的成功状态、订单号与交付时间先给出确定感，再列商品明细、 金额与下一步动作（发票、物流、继续购物）。它不收集新信息，只把「钱已付、货在路上」讲清楚。

**别名:** 订单确认页 · 下单成功页 · 付款成功页 · 订单提交成功 · 支付成功页面 · 谢谢购买页 · 订单完成页 · 购买成功页

**分类:** Page / Commerce

## 适用场景

- 支付或下单成功后立即展示
- 需要给出订单号与交付预期
- 需要引导配送跟踪、发票或继续购物

## 不适用场景

- 支付失败或订单待审核（用状态或错误页）
- 只是暂存草稿，尚未真正成单
- 仍需用户继续填写信息

## 常见形式

- **收据式** (Receipt) — 明细与金额完整铺开，像一张电子小票
- **庆祝式** (Celebratory) — 成功动效加简短摘要，适合消费品牌
- **物流优先** (Tracking-first) — 交付时间线与跟踪入口置于最前

## 页面结构

1. **成功横幅** — 图标加一句确认语，第一眼就知道成单了。
2. **订单摘要** — 订单号、下单时间与预计送达，可一键复制。
3. **商品明细** — 缩略图、规格、数量与单价逐项列出。
4. **物流时间线** — 已下单、已付款、已发货、已送达的进度。
5. **后续动作** — 查看订单、下载发票、继续购物，主次分明。

## 实现要点

**CSS:** `flex` `grid` `counter-reset: step` `position: relative` `@media print`

成功横幅用 role="status" 让读屏播报结果；订单号提供复制按钮并给出已复制反馈。商品明细用列表或表格， 金额用等宽数字（font-variant-numeric: tabular-nums）右对齐。物流时间线用有序列表加伪元素连线； 庆祝动效须尊重 prefers-reduced-motion，并乘 --demo-speed。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现订单确认页。

先检查订单数据结构、支付回调与现有卡片和时间线组件，保持一致。
要求：
- 成功状态用 role="status" 播报
- 订单号可复制并给出已复制反馈
- 商品明细与金额摘要完整，金额用等宽数字右对齐
- 物流时间线用有序列表表达进度
- 庆祝动效尊重 prefers-reduced-motion
- 深浅色与打印样式一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个订单确认页，显示成功状态、订单号、商品明细和金额。

**Design:** 创建电商订单确认页：顶部成功横幅（图标加「支付成功」加可复制订单号）；中部订单摘要卡（下单时间、 预计送达）与商品明细列表；右栏或下方金额摘要（小计、运费、优惠、合计）；底部物流时间线与 「查看订单 / 下载发票 / 继续购物」按钮。移动端单列，深浅色一致。

**Implementation:** 用 React + Tailwind 实现订单确认页：从路由参数或订单接口取数据；订单号复制用剪贴板 API 并给出反馈； 金额计算抽成纯函数并用 tabular-nums 对齐；物流时间线为有序列表；庆祝动效可关闭且尊重 reduced-motion； 提供打印样式；不新增依赖。

## 相关概念

- [timeline](/pages/timeline) — 包含组件
- [card](/pages/card) — 包含组件
- [button](/pages/button) — 包含组件
- [confetti](/pages/confetti) — 搭配使用
- [checkout](/pages/checkout) — 相似概念

## Sources

- [Nielsen Norman Group — Progress Indicators](https://www.nngroup.com/articles/progress-indicators/)
- [W3C WAI — Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)

---

JSON: `/api/concept/pages/order-confirmation.json` · 站点: /pages/order-confirmation
