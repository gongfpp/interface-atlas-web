# 圆角 / Border Radius

> 基础 · `id: border-radius`

把盒子四角做成圆弧，半径越大越柔和、越像卡片与气泡。圆角要和组件尺寸成套：按钮小、卡片中、大容器大，才像同一个家族；相邻圆角盒之间会留下难看的凹口，需要用同心圆角（外半径 = 内半径 + 间距）修正，或让它们干脆对齐。

**别名:** 圆角 · 圆角半径 · 为什么卡片看起来不精致 · 按钮圆角 · 胶囊形状 · border radius · rounded corners · corner radius

**分类:** Foundation / Shape / Visual

## 适用场景

- 需要柔化品牌气质，并区分卡片、按钮与容器的层级
- 按钮、输入框、头像等基础控件要统一圆角语言
- 嵌套容器需要同心圆角，保持内角与外角视觉顺滑

## 不适用场景

- 严肃的数据表格与像素级对齐的网格
- 12px 的小图标上加大圆角，反而糊成一团
- 用超大圆角把方形卡片压成胶囊，丢掉信息密度

## 常见形式

- **柔和小圆角** (Soft) — 4～8px，克制、专业，适合表格与密集控件
- **圆润中圆角** (Rounded) — 12～16px，卡片与面板的常用档，友好但不轻浮
- **胶囊与圆形** (Pill & circle) — 9999px 或 50%，用于按钮、标签和头像

## Platform API

- `border-radius`
- `border-start-start-radius`
- `50%`
- `--radius-lg`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) — 支持斜杠语法分别控制横纵半径 |
| Tailwind CSS | [rounded-lg / rounded-full](https://tailwindcss.com/docs/border-radius) — 成档的圆角工具类 |
| Design tokens | --radius-sm / --radius-md / --radius-full |

## 实现要点

**CSS:** `border-radius: 8px` `border-radius: 0.5rem` `border-radius: 9999px` `border-radius: 50%` `border-radius: calc(var(--radius-md) - var(--space-2))`

用 rem 定义 4～5 档：--radius-sm 4px、--radius-md 8px、--radius-lg 12px、--radius-xl 16px、--radius-full 9999px。组件的圆角跟随自身尺寸取档，父容器圆角明显时内层用 calc(var(--radius-lg) - var(--space-2)) 做同心。头像与开关用 50% 或 --radius-full。密切注意 1px 边框下的圆角抗锯齿，必要时内层留 1px。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现圆角体系。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 4～5 档圆角令牌，组件按尺寸取档
- 嵌套容器使用同心圆角 calc(外 − 内边距)
- 头像与开关用 50% / full，不散落裸 px
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立圆角体系：用成档的半径令牌统一按钮、卡片与容器，并处理嵌套时的同心圆角。

**Design:** 圆角规范：4～5 档（sm 4 / md 8 / lg 12 / xl 16 / full 9999px）；按钮用 md，卡片用 lg，大面板用 xl，头像用 50%；嵌套容器内圆角 = 外圆角 − 内边距；同一界面圆角档位不超过四种；1px 边框下注意内外对齐。

**Implementation:** 令牌写成 :root { --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-xl: 16px; --radius-full: 9999px; }，组件引用 var(--radius-md)。同心圆角写 border-radius: calc(var(--radius-lg) - var(--space-2))。Tailwind 侧映射到 theme 的 --radius-*，避免在组件里散落裸 px 值。

## 相关概念

- [spacing-scale](/foundation/spacing-scale) — 相似概念
- [elevation](/foundation/elevation) — 搭配使用
- [button](/foundation/button) — 搭配使用
- [card](/foundation/card) — 搭配使用

## Sources

- [MDN — border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- [Material Design — Shape](https://m3.material.io/styles/shape/overview)
- [Tailwind CSS — Border Radius](https://tailwindcss.com/docs/border-radius)

---

JSON: `/api/concept/foundation/border-radius.json` · 站点: /foundation/border-radius
