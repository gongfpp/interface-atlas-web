# 调色板 / Color Palette

> 基础 · `id: color-palette`

从一个基色出发生成有规律的色阶（50～900），再分配主色、辅助色、点缀色与中性色角色。色阶靠明度递进而非随手取色，保证 hover、disabled、边框都有对应深度可选；角色先于色值被命名，主题才换得动。

**别名:** 调色板 · 配色 · 色板 · 色阶 · 颜色系统 · color palette · palette

**分类:** Color / Foundation

## 适用场景

- 产品需要一套可扩展的品牌色与中性灰体系
- 同一色相需要 hover、active、disabled 等多个深度
- 深浅主题共用同一套角色，只换色阶取值

## 不适用场景

- 插画或营销页一次性用色，不需要系统化
- 把十种高饱和色直接堆进界面，无主次
- 只有黑白灰两色且永不扩展——写死即可

## 常见形式

- **单色相色阶** (Single hue ramp) — 一个基色拉出 50～900，配中性灰
- **互补双色** (Complementary) — 色轮对面取辅助色，对比强
- **单色系** (Monochrome) — 只用明度差，彩色仅作点缀

## Platform API

- `color-mix()`
- `oklch()`
- `hsl()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) — 感知均匀的色阶插值 |
| CSS | [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) |
| Tailwind CSS | [color palette (50–950)](https://tailwindcss.com/docs/colors) |

## 实现要点

**CSS:** `oklch()` `color-mix()` `hsl()` `--color-primary-500`

用 oklch() 或 hsl() 按明度生成 50～900 十档：浅端 L≈97%，深端 L≈12%，中间保持感知均匀；饱和度浅端略降、深端略升。色阶命名 --color-primary-500，不要写 --color-brand-blue。中性灰单独一条低饱和色阶，不要用纯黑纯白。生成后用对比度工具抽查 500/600 与白字的组合。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现调色板。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 基色生成 50～900 色阶，明度递进
- 主色 / 辅助 / 点缀 / 中性四类角色
- 命名按角色与档位，不写死色相名
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 生成一套调色板：从品牌基色拉出 50～900 色阶，并定义主色、辅助色、点缀色与中性色。

**Design:** 调色板规范：一个基色生成 50～900 十档色阶（oklch 明度递进），主色取 500～600，点缀色一个即可，中性灰单独成阶；浅端降饱和、深端升饱和；所有文字与底色组合须过 WCAG AA；命名按角色不按色相。

**Implementation:** 用 CSS 自定义属性输出色阶：--color-primary-50: oklch(97% 0.02 250); … --color-primary-900: oklch(18% 0.05 250);。角色层再引用色阶：--color-accent: var(--color-primary-600)。Tailwind 侧映射到 @theme 色板。生成脚本一次写入，后续只调角色指向。

## 相关概念

- [semantic-color](/foundation/semantic-color) — 搭配使用
- [contrast-ratio](/foundation/contrast-ratio) — 搭配使用
- [minimalism](/foundation/minimalism) — 搭配使用

## Sources

- [Material Design — Color system](https://m3.material.io/styles/color/system/overview)
- [MDN — oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [oklch.com — Color picker](https://oklch.com/)

---

JSON: `/api/concept/foundation/color-palette.json` · 站点: /foundation/color-palette
