# 落地页 / Landing Page

> 页面 · `id: landing-page`

围绕单一转化目标纵向组织信息的营销页面：顶部导航与 Hero 主视觉先讲清楚"这是什么、好在哪"， 中段用功能区、信任区（客户 logo、评价、数据）逐层打消顾虑，末端以强视觉的行动按钮收口。 页面按说服顺序分区，每一屏都在回答用户下一步的疑问。

**别名:** 落地页 · 卖东西的落地页 · 产品主页 · 官网首页 · 营销首页 · 产品介绍页 · 转化页

**分类:** Page / Marketing

## 适用场景

- 推广单一产品或活动、追求注册/购买转化
- 来自广告或外链的访客需要快速理解价值
- 需要在无登录状态下完成首次转化

## 不适用场景

- 已登录用户的日常工作界面
- 信息层级复杂、需长期维护的内容站（用文档站更合适）
- 需要频繁检索的数据库型页面

## 常见形式

- **经典 Hero** (Classic Hero) — 大标题 + 主图 + 单一 CTA，最通用
- **功能矩阵** (Feature Grid) — Hero 之后用卡片矩阵罗列功能点
- **长滚动叙事** (Long-scroll Story) — 一屏一个论点，逐屏滚动说服
- **候补列表** (Waitlist) — 只有 Hero + 邮箱收集，产品未上线时用

## 页面结构

1. **导航** — Logo + 锚点导航 + 主 CTA，首屏常透明悬浮。
2. **主视觉** — 一句价值主张 + 主 CTA，首屏必须说清「是什么、给谁」。
3. **功能区** — 3–6 个能力点，图文并排，支撑价值主张。
4. **信任区** — 客户 logo 墙、用户评价或关键数据。
5. **行动区** — 页尾前的最后一次转化催促，重复主 CTA。
6. **页脚** — 站点地图、法律与社交链接，收束整页。

## 实现要点

**CSS:** `flex` `grid` `scroll-behavior: smooth` `scroll-snap-type: y mandatory`

页面纵向由 section 串联：hero 通常 100vh 或近满屏，功能区用 grid 自适应卡片， 信任区一行 logo + 评价卡。CTA 按钮全局唯一强调色并重复出现（hero 与页脚前各一次）。 长滚动变体可用 scroll-snap 分屏；进场动画尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现产品落地页。

先检查现有设计 Token、品牌色与已有营销页组件，保持一致。
要求：
- 语义化 section 结构与锚点导航
- Hero + 邮箱收集表单（校验 + 成功态）
- 功能卡片、信任区、重复 CTA
- 响应式与深浅色一致，动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个产品落地页，包含 Hero、功能区、用户评价和行动按钮。

**Design:** 创建 SaaS 产品落地页：吸顶导航（logo + 锚点 + 登录/注册按钮）；Hero 大标题 + 副标题 + 邮箱输入与主按钮；下方客户 logo 一排；功能区 3 列卡片；评价区 2～3 条带头像的引用；页脚前重复一条强 CTA 横幅。响应式、深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Landing Page：语义化 section + 锚点导航；邮箱表单做基础校验与成功态； 卡片进场用 IntersectionObserver 触发渐入（尊重 prefers-reduced-motion）； 图片用 loading="lazy"；CTA 事件可埋点。不新增依赖。

## 相关概念

- [navbar](/pages/navbar) — 包含组件
- [card](/pages/card) — 包含组件
- [scroll-reveal](/pages/scroll-reveal) — 搭配使用
- [text-reveal](/pages/text-reveal) — 搭配使用
- [hover-lift](/pages/hover-lift) — 搭配使用

## Sources

- [Nielsen Norman Group — Landing Pages](https://www.nngroup.com/articles/landing-pages/)
- [MDN — Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)

---

JSON: `/api/concept/pages/landing-page.json` · 站点: /pages/landing-page
