# 行宽 / Measure

> 基础 · `id: measure`

一段文字每行容纳的字符数，决定眼睛回行是否省力。舒适区大约 45～75 个拉丁字符（中文 28～40 字），最常用 65ch 左右。行太窄回行太频繁，太宽则跟丢行；用 max-width 以 ch 为单位控制，比按像素猜更可靠。

**别名:** 行宽 · 行长 · 每行字数 · 一行多少字 · 字符数每行 · measure · characters per line

**分类:** Typography / Foundation

## 适用场景

- 长文阅读、文章正文、帮助文档等逐行阅读场景
- 容器宽度随屏幕变化，需要给正文一个稳定上限
- 多栏排版，每栏正文需要独立约束行长

## 不适用场景

- 表格、数据密集列表——行宽由列结构决定
- 单行输入框、按钮标签等非段落文字
- 在 65ch 上继续做复杂断行调优，收益极低

## 常见形式

- **舒适 65ch** (Optimal 65ch) — 长文默认档，回行省力
- **窄栏** (Narrow column) — 侧栏说明、引文块，45ch 上下
- **宽界面文字** (Wide UI text) — 设置页、表单说明，可放到 80ch

## Platform API

- `max-width`
- `ch`
- `text-wrap`
- `hyphens`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [max-width: 65ch](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch) — 以零字宽为单位的行长上限 |
| Tailwind CSS | [max-w-prose](https://tailwindcss.com/docs/max-width) — 约 65ch 的预设 |

## 实现要点

**CSS:** `max-width: 65ch` `max-width: 45rem` `text-wrap` `hyphens`

正文容器写 max-width: 65ch（或 36rem 上下），放进流体外层让左右留白随屏变化。ch 单位跟随当前字体的零字宽，换字体后行长自动重算，比写死 px 稳。中文行长用字数估：28～40 字约等于 56ch～80ch 的视觉长度。多栏每栏单独限宽，不要让整页宽度决定行长。

## 横向对比维度 (`typography-trio`)

- **适用文本:** 长文正文与说明段落
- **调节粒度:** 按容器宽度拖动，以 ch 为单位
- **响应式:** 高，max-width 加流体容器

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现行宽。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 长文正文容器 max-width 65ch 左右，外层保持流体
- 多栏每栏独立限宽
- 与行高、字号阶梯配套，不写死像素行长
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 为长文正文设置合适的行宽：限制每行字数，保证阅读舒适。

**Design:** 行宽规范：长文正文 65ch（约 28～40 个汉字）；侧栏与引文 45ch；表单说明可放宽至 80ch。行长与行高 1.6～1.75 成对使用；窄屏下让容器自然收窄，不要再加额外缩进；英文段落开启 hyphens: auto 前先确认断词表。

**Implementation:** 用 max-width: 65ch 限制 .prose 类正文容器，外层保持 width: 100% 做流体布局；多栏用 minmax(45ch, 1fr) 定义栅格列。Tailwind 可用 max-w-prose。调试时在控制台用元素宽度除以平均字宽估算 CPL，或临时用 Intl.Segmenter 统计。

## 相关概念

- [line-height](/foundation/line-height) — 搭配使用
- [type-scale](/foundation/type-scale) — 搭配使用
- [editorial](/foundation/editorial) — 搭配使用

## Sources

- [Practical Typography — Line length](https://practicaltypography.com/line-length.html)
- [MDN — ch unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch)
- [web.dev — CSS](https://web.dev/learn/css)

---

JSON: `/api/concept/foundation/measure.json` · 站点: /foundation/measure
