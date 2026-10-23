# 行高 / Line Height

> 基础 · `id: line-height`

一行文字占的垂直空间，决定段落的松紧与呼吸。标题收紧（1.1～1.3）显得挺拔，正文放宽（1.5～1.8）利于逐行阅读，引文可以更松。优先用无单位倍数，让行高随字号缩放，而不是写死像素值。

**别名:** 行高 · 行距 · leading · 行间距 · 排得挤不挤 · 松紧 · line height

**分类:** Typography / Foundation

## 适用场景

- 长段落正文需要可逐行追踪的阅读节奏
- 标题与正文混排，需要通过行高拉开层级
- 字号会响应式变化，行高必须跟着缩放

## 不适用场景

- 单行标签、按钮文字——行高只用来垂直居中时改用 flex
- 行高设得过松（> 2.0 正文），行与行失去联系
- 用 px 锁死行高，字号一变就出现裁切或重叠

## 常见形式

- **收紧显示** (Tight display) — 1.1～1.3，大标题挺拔不散
- **舒适正文** (Comfortable body) — 1.5～1.8，长文逐行好跟
- **松弛编辑** (Loose editorial) — 1.9～2.2，引文与短诗留呼吸

## Platform API

- `line-height`
- `leading`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |
| Tailwind CSS | [leading-none / leading-normal / leading-relaxed](https://tailwindcss.com/docs/line-height) |

## 实现要点

**CSS:** `line-height: 1.6` `line-height: normal` `leading-relaxed`

行高写无单位倍数（line-height: 1.6），继承时按自身字号换算；写 px 会把子元素行高锁死在父级字号上。经验值：标题 1.15～1.3、正文 1.6～1.75、辅助文字 1.4。中文正文比英文略松（1.7 上下）更耐读。用 ex / 半 leading 技巧做首行基线对齐时要单独验证。

## 横向对比维度 (`typography-trio`)

- **适用文本:** 段落正文为主，标题单独收紧
- **调节粒度:** 连续微调，0.05 即可感知
- **响应式:** 中，可按断点切换两档

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现行高。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 标题 / 正文 / 辅助三级无单位行高令牌
- 与字号阶梯成对引用，禁止写死 px 行高
- 中文正文适当放宽
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 统一项目的行高体系：标题、正文、辅助文字分别给出合适的 line-height。

**Design:** 行高规范：大标题 1.15，小标题 1.3，正文 1.65，辅助文字 1.4；全部使用无单位倍数；中文长文正文放宽到 1.7；段间距不小于 0.75em；行高与字号阶梯成对交付，不允许单独调整其一。

**Implementation:** 用 CSS 变量配对字号阶梯定义行高：--leading-tight: 1.2; --leading-body: 1.65; --leading-loose: 1.9。正文 class 组合 font-size: var(--text-base); line-height: var(--leading-body)。Tailwind 侧映射到 leading-* 令牌。禁止在组件里写 line-height: 24px。

## 相关概念

- [type-scale](/foundation/type-scale) — 搭配使用
- [measure](/foundation/measure) — 搭配使用
- [font-stack](/foundation/font-stack) — 搭配使用

## Sources

- [MDN — line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [Practical Typography — Line spacing](https://practicaltypography.com/line-spacing.html)

---

JSON: `/api/concept/foundation/line-height.json` · 站点: /foundation/line-height
