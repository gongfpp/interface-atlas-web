# 相对单位 / Relative Units

> 基础 · `id: relative-units`

长度可以写死成 px，也可以相对别的量：rem 相对根元素字号，em 相对元素自身或父级的字号，% 相对容器，vw/vh 相对视口。用户把浏览器默认字号调大时，用 px 排的版面纹丝不动，用 rem 的会整体放大。字号、间距、圆角尽量用 rem，只有边框与发丝线才写死 px。

**别名:** 相对单位 · 相对长度 · rem 和 em 的区别 · 为什么改浏览器字号界面不变大 · 响应式单位 · relative units · rem vs em · px vs rem

**分类:** Foundation / Layout / Typography

## 适用场景

- 用户能改浏览器默认字号，界面需要跟着一起放大
- 同一组件要在不同容器与字号下复用，尺寸需自适应
- 做随视口变化的流式排版、间距或整屏区块

## 不适用场景

- 1px 发丝线与需要绝对精确的边框
- 位图按原始像素对齐，不允许任何取整偏差
- em 在多层嵌套里层层放大，尺寸彻底失控

## 常见形式

- **相对根字号 rem** (Root-relative rem) — 1rem 等于根字号，改根字号整页同步缩放
- **相对父级 em** (Local em) — 1em 取决于当前字号，嵌套会层层相乘
- **视口单位 vw/vh** (Viewport units) — 随窗口尺寸变化，适合整屏区块与流式间距

## Platform API

- `rem`
- `em`
- `vw`
- `vh`
- `calc()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [rem / em](https://developer.mozilla.org/en-US/docs/Web/CSS/length) — 相对根字号与相对父级字号 |
| CSS | [vw / vh / dvh](https://developer.mozilla.org/en-US/docs/Web/CSS/length) — 相对视口宽高，dvh 处理移动端地址栏 |
| Tailwind CSS | [rem-based spacing scale](https://tailwindcss.com/docs/theme) |

## 实现要点

**CSS:** `font-size: 1rem` `padding: 1.5rem` `width: 50vw` `height: 100dvh` `border: 1px solid var(--color-line)`

:root 不写死 font-size，让浏览器默认字号保持可调；正文用 1rem，组件内字号与间距用 rem，最大宽度用 ch/rem。vw/vh 用于整屏区块，vh 在移动端改用 dvh 以避开地址栏跳动。发丝线与边框保留 1px。em 只用在确实需要随局部字号缩放的场合，并留意嵌套相乘。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现相对单位体系。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 不写死 html 根字号，正文用 1rem
- 字号、间距、圆角用 rem，视口区块用 dvh
- 边框与发丝线保持 px，em 仅局部使用
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用相对单位改造布局：字号、间距、圆角用 rem，整屏区块用 vw/vh，只保留边框为 px。

**Design:** 相对单位规范：根字号保持浏览器默认（不写死 html font-size）；正文与组件字号用 rem；间距与圆角用 rem；整屏高度用 dvh；发丝线用 1px；禁止用 vw 直接设正文字号以免小屏过小；em 仅在随局部字号缩放时使用，嵌套不超过两层。

**Implementation:** 用 CSS 自定义属性把基准集中：:root { --space-4: 1rem; --radius-md: 0.5rem; }，组件引用变量而不写 px。流式尺寸写 clamp(1rem, 2.5vw, 2rem)。移动端整屏用 min-height: 100dvh。验证方法是把浏览器默认字号从 16px 改到 20px，检查版面和控件是否等比例放大。

## 相关概念

- [type-scale](/foundation/type-scale) — 搭配使用
- [pixel-density](/foundation/pixel-density) — 相似概念
- [spacing-scale](/foundation/spacing-scale) — 相似概念
- [measure](/foundation/measure) — 搭配使用

## Sources

- [MDN — CSS values and units](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [web.dev — Learn Design: Typography](https://web.dev/learn/design/typography)
- [W3C — CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/)

---

JSON: `/api/concept/foundation/relative-units.json` · 站点: /foundation/relative-units
