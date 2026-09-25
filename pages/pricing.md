# 定价页 / Pricing Page

> 页面 · `id: pricing`

把付费方式讲清楚的商业页面：页面通常以标题与计费周期切换开头，主体是并排的套餐卡 （价格、功能清单、行动按钮），推荐档位用视觉强调；下方补功能对比表和 FAQ 兜底疑虑。 组织逻辑是"先选周期、再选档位、最后消除犹豫"。

**别名:** 价格方案页面 · 定价页 · 套餐价格页 · 收费方案 · 花多少钱的页面 · 订阅方案页 · 价格表

**分类:** Page / Marketing

## 适用场景

- 订阅制或有多个档位的产品售卖
- 访客需要在购买前比较不同方案
- 需要引导用户从免费档向付费档升级

## 不适用场景

- 只有一个固定价格（并入落地页即可）
- 完全定制报价、按项目计费（用联系销售页更合适）
- 已登录用户的账户账单管理（属于设置/账单页）

## 常见形式

- **简单分层** (Simple Tiers) — 3～4 张套餐卡并排，最经典
- **月年切换** (Billing Toggle) — 月付/年付切换并给出折扣提示
- **功能对比** (Feature Comparison) — 套餐卡 + 完整功能对照表
- **免费增值** (Freemium) — 免费档永久免费，强调付费档价值

## 页面结构

1. **标题区** — 页面主张与定位说明，先讲清价值再谈价格。
2. **计费周期切换** — 月付 / 年付切换，年付标注折扣。
3. **套餐卡** — 2–4 档，推荐档视觉强化；每档列出关键差异。
4. **功能对比表** — 细粒度功能逐项对比，可折叠次要行。
5. **常见问题** — 打消计费、退款、升级等购买顾虑。

## 实现要点

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` `transform: scale(1.05)`

套餐卡用等高网格排布，推荐档位以边框强调色 + 轻微放大或徽标突出； 月/年切换用受控状态切换价格并做数字过渡；对比表桌面横向滚动、移动端折叠成手风琴； FAQ 用原生 details 或手风琴组件。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现定价页。

先检查品牌色、现有卡片/手风琴组件与路由，保持一致。
要求：
- 月/年切换驱动价格与折扣角标
- 推荐档位视觉强调（边框 + 徽标）
- 功能对比表（移动端可横向滚动）
- FAQ 手风琴
- 深浅色一致，响应式
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个定价页，包含三档套餐卡、月付年付切换和功能对比表。

**Design:** 创建 SaaS 定价页：标题 + 月付/年付分段切换（年付标"省 20%"）；三张等高套餐卡（免费/专业/企业），专业档用强调色边框 + "最受欢迎"徽标 + 轻微放大；每卡含价格、功能清单（勾选样式）、主按钮；下方功能对比表与 4 条 FAQ 手风琴。响应式，移动端卡片纵向堆叠。

**Implementation:** 用 React + Tailwind 实现定价页：billing 周期受控状态驱动价格渲染（带数字过渡）； 套餐卡数据驱动（{name, price, features, highlight}）；对比表用 table + 溢出滚动； FAQ 用受控手风琴；勾选图标内联 SVG。深浅色一致；不新增依赖。

## 相关概念

- [card](/pages/card) — 包含组件
- [badge](/pages/badge) — 包含组件
- [switch](/pages/switch) — 包含组件
- [accordion](/pages/accordion) — 包含组件
- [table](/pages/table) — 包含组件

## Sources

- [Nielsen Norman Group — Pricing Page Design](https://www.nngroup.com/articles/pricing-pages/)
- [Baymard Institute — Pricing & Plans](https://baymard.com/blog)

---

JSON: `/api/concept/pages/pricing.json` · 站点: /pages/pricing
