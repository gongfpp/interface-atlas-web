# 团队页 / Team Page

> 页面 · `id: team`

用人物卡片组介绍组织构成的页面：头像、姓名、职位与一句职责说明构成最小单元，按部门或职能分组， 常附加入职链接与价值观叙述。它把抽象的「我们」换成具体可辨认的人，用真实面孔建立信任。

**别名:** 团队页 · 团队成员页 · 团队介绍页 · 关于我们团队 · 我们是谁页面 · 公司团队页 · 成员介绍页 · 团队墙

**分类:** Page / Marketing

## 适用场景

- 公司或产品需要展示核心成员
- 招聘与信任建设需要真实面孔
- 组织可按部门或职能分组呈现

## 不适用场景

- 只展示一位创始人（用关于页）
- 成员信息涉密或频繁变动
- 需要详细履历与作品（用个人主页）

## 常见形式

- **照片网格** (Photo Grid) — 等尺寸头像网格，悬停显示简介
- **名册式** (Roster) — 按部门分组的紧凑列表
- **焦点式** (Featured) — 大图加关键成员长简介

## 页面结构

1. **标题与使命** — 一句团队使命或规模说明，给页面定调。
2. **成员网格** — 卡片等宽排列，头像统一裁切比例。
3. **部门分组** — 按职能或部门分区，各配短标题。
4. **成员卡片** — 头像、姓名、职位与一句职责，可跳转个人页。
5. **招聘行动区** — 页尾指向开放职位，承接浏览者的兴趣。

## 实现要点

**CSS:** `grid` `flex` `aspect-ratio: 1` `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))` `object-fit: cover`

成员网格用 repeat(auto-fit, minmax(140px, 1fr)) 自适应；头像统一 aspect-ratio: 1 与 object-fit: cover， 并带真实 alt 文本。卡片悬停可微抬，但必须在 reduced-motion 下关闭。按部门筛选时保持键盘可达， 卡片本身是可聚焦链接而非纯装饰 div。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现团队页。

先检查现有成员数据、头像资源与卡片组件，优先复用。
要求：
- 按部门分组的响应式成员网格
- 头像方形裁切并带真实 alt 文本
- 卡片可聚焦跳转个人页
- 部门筛选键盘可达，尊重 prefers-reduced-motion
- 页尾招聘 CTA，深浅色一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个团队页，用头像卡片展示成员姓名与职位。

**Design:** 创建公司团队页：顶部团队使命与人数说明；按部门分组的成员卡片网格，每张卡含方形头像、姓名、职位与 一句职责；悬停轻微上浮；页尾「加入我们」招聘按钮。响应式 2 到 4 列，深浅色一致。

**Implementation:** 用 React + Tailwind 实现团队页：数据来自 CMS 或 JSON；网格用 auto-fit 加 minmax；头像 aspect-ratio 方形并带真实 alt；卡片为可聚焦链接；部门筛选键盘可达；悬停动画尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [card](/pages/card) — 包含组件
- [avatar](/pages/avatar) — 包含组件
- [badge](/pages/badge) — 包含组件
- [profile](/pages/profile) — 相似概念
- [hover-lift](/pages/hover-lift) — 搭配使用

## Sources

- [Material Design 3 — Cards](https://m3.material.io/components/cards/overview)
- [Apple Human Interface Guidelines — Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Nielsen Norman Group — Trustworthy Design](https://www.nngroup.com/articles/trustworthy-design/)

---

JSON: `/api/concept/pages/team.json` · 站点: /pages/team
