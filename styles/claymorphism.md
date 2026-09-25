# 黏土风 / Claymorphism

> 风格 · `id: claymorphism`

把控件捏成软黏土的视觉语言：大圆角、柔和粉彩底色，双重阴影——向内的内 凹阴影加向外的膨胀投影——让元素像充了气的黏土块，圆润 饱满 软乎乎。 它是新拟物与 3D 卡通之间的一种手感化中间态。

**别名:** 黏土风 · 黏土拟物 · 软糖质感设计 · 膨胀立体卡片 · 3D黏土按钮 · 橡皮泥风格 · Clay 3D · Puffy UI

**分类:** Style / Visual Language

## 适用场景

- 儿童 教育 休闲游戏类产品，需要亲和与手感
- 轻松的社交 消费品牌，传达可爱与松弛感
- 强调触觉反馈的移动端轻交互场景

## 不适用场景

- 专业 金融 企业级场景，软糖感削弱专业信号
- 信息密集的后台界面，膨胀阴影消耗空间与注意力
- 深色重度使用场景，粉彩膨胀感不易维持

## 常见形式

- **软黏土** (Soft Clay) — 经典粉彩加膨胀双影，最常见配方
- **糖果黏土** (Candy Clay) — 更高饱和的果冻色，接近游戏 UI
- **深色黏土** (Dark Clay) — 深灰底上的哑光黏土，膨胀感保留

## 开发规格

- **typography:** 圆体无衬线
- **color:** 淡紫底 #EDF0FF × 白卡 × 紫 #6C7BFF
- **border:** 几乎无边框，大圆角 22px
- **shadow:** 外投影 + inset 内阴影 = 黏土感
- **spacing:** 蓬松间距，元素相互分离

## 实现要点

**CSS:** `border-radius: 20px` `box-shadow: inset 0 -6px 12px` `box-shadow: 0 12px 24px` `pastel`

膨胀公式 = 大圆角（20～32px）+ 三重阴影：外侧大模糊同色系投影（如 0 14px 28px 主色 35%）、内侧下压暗影（inset 0 -8px 16px）、内侧顶部 高光（inset 0 3px 6px 白）。底色与投影必须同色系，投影带色而不发灰。 按下时缩小外投影并加强内凹，形成"捏下去"的反馈。深色黏土用深灰底 加更深一号的同色投影。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用黏土风（Claymorphism）实现一组膨胀按钮与卡片区块。

先检查现有 Design Token 与阴影变量，膨胀阴影参数做成可配置变量。
要求：
- 大圆角 + 三重阴影（外投影带色 内下压 内上高光）模拟黏土膨胀
- 按下态外投影收缩 内凹加强，形成捏压反馈
- 投影与底色同色系，避免灰黑阴影显脏
- 文字对比度达标；支持深色模式（深灰哑光黏土）
- 若有动效，尊重 prefers-reduced-motion
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用黏土风（Claymorphism）设计界面：大圆角粉彩元素，外膨胀投影 + 内凹 阴影的双重质感，控件像充气的软黏土块。

**Design:** 黏土风设计规范：底色粉彩（#EAF0FF 等浅底或淡粉 淡绿 淡紫）；主色 #6C8CFF 类柔和饱和色；卡片圆角 24px，阴影三重：0 14px 28px 主色 35%、 inset 0 -8px 16px 主色 30%、inset 0 3px 6px 白 70%；按钮按压时外投影 收缩 内凹加强；文字近黑保证对比；深色模式用深灰底 #23252E 加深一号 同色投影。

**Implementation:** 用 CSS 实现黏土按钮：.clay-btn { background: #6C8CFF; color: #fff; border: none; border-radius: 18px; padding: 12px 24px; box-shadow: 0 12px 22px rgba(108,140,255,0.4), inset 0 -6px 12px rgba(30,50,150,0.35), inset 0 3px 6px rgba(255,255,255,0.55); } :active { box-shadow: 0 5px 10px rgba(108,140,255,0.35), inset 0 -3px 8px rgba(30,50,150,0.4), inset 0 4px 8px rgba(0,0,0,0.15); }

## 相关概念

- [glassmorphism](/styles/glassmorphism) — 相似概念
- [neobrutalism](/styles/neobrutalism) — 相似概念
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件
- [badge](/styles/badge) — 影响组件

## Sources

- [Hype4 Academy — Claymorphism in design](https://www.hype4.academy/articles/design/claymorphism-in-web-design)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/api/concept/styles/claymorphism.json` · 站点: /styles/claymorphism
