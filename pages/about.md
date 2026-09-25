# 关于页 / About Page

> 页面 · `id: about`

向访客解释「我们是谁、为什么做这件事」的品牌页面：开头用一句使命宣言定调，中段以创始故事、发展历程或团队照片建立信任，再用价值观与关键数据支撑，结尾导向联系、招聘或产品。

**别名:** 关于页 · 关于我们 · 公司介绍页 · 团队介绍页 · 我们是谁 · 品牌故事页 · 关于我们页面

**分类:** Page / Brand

## 适用场景

- 访客在决策前想了解团队与背景
- 品牌需要传达使命与价值观
- 招聘、融资或合作需要可信的自我介绍

## 不适用场景

- 用户只关心功能与价格（用落地页或定价页更合适）
- 团队或公司信息尚未确定
- 需要承载复杂操作流程

## 常见形式

- **品牌故事** (Brand Story) — 以创始人叙事为主线，情绪与图片占主导
- **团队展示** (Team Grid) — 头像网格 + 职位与简介，强调人
- **历程时间线** (Timeline) — 以时间线串起里程碑与关键数据

## 页面结构

1. **顶栏** — 站点导航与主 CTA，与全站保持一致。
2. **使命宣言** — 一句加大的主张配一张品牌照片，先回答「我们为何存在」。
3. **故事历程** — 创始故事或时间线，用具体事件与年份建立可信度。
4. **团队成员** — 头像、姓名与职位网格，规模小则给每人一句简介。
5. **价值观** — 三到四条原则，每条一句解释，避免空泛口号。
6. **行动区** — 导向联系、招聘或产品体验，给读者下一步。

## 实现要点

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` `gap` `object-fit: cover`

分区纵向堆叠，团队与价值观用 auto-fit 网格；头像统一正方形并 object-fit: cover，避免拉伸。长页在分区进入时做轻微淡入，需尊重 prefers-reduced-motion；文字与图片的对比度要达 WCAG AA。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现关于页。

先检查现有布局壳、卡片与头像组件，优先复用。
要求：
- 使命宣言 + 故事/时间线 + 团队 + 价值观 + CTA
- 团队与价值观用自适应网格，头像不变形
- 时间线语义化为有序列表
- 图片有 alt，文字对比度达 AA
- 尊重 prefers-reduced-motion，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个关于页，包含使命宣言、团队介绍和价值观。

**Design:** 设计品牌关于页：顶部大标题使命宣言 + 品牌图；中段时间线串起里程碑；团队区四列头像卡，每张含姓名与职位；价值观三列图标 + 短句；结尾 CTA 横幅指向联系我们与加入我们。深浅色一致，进场轻微淡入。

**Implementation:** 用 React + Tailwind 实现关于页：语义化 section，团队与价值观用 grid auto-fit；头像固定比例并 object-fit: cover；时间线用有序列表表达先后；进场动画用 IntersectionObserver 并尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [avatar](/pages/avatar) — 包含组件
- [timeline](/pages/timeline) — 包含组件
- [card](/pages/card) — 包含组件
- [scroll-reveal](/pages/scroll-reveal) — 搭配使用
- [contact](/pages/contact) — 相似概念

## Sources

- [Nielsen Norman Group — Articles](https://www.nngroup.com/articles/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

JSON: `/api/concept/pages/about.json` · 站点: /pages/about
