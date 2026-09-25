# 间距系统 / Spacing Scale

> 基础 · `id: spacing-scale`

用一组固定的间距档位（如 4、8、12、16、24、32、48px，通常按 4 或 8 的倍数生长）统一控制 padding、margin 与 gap。所有留白都从同一把尺子里取，而不是随手写数值，疏密节奏才稳定；间距同时承担分组，间距越大，元素之间的关系越疏远。

**别名:** 间距系统 · 间距阶梯 · 间距规范 · 为什么留白忽大忽小 · 间距尺寸 · spacing scale · spacing tokens · 4pt grid

**分类:** Foundation / Layout / Spacing

## 适用场景

- 多组件、多页面需要统一的疏密节奏，避免每处随手写数
- 设计系统要交付 padding / margin / gap 的间距令牌
- 想用间距表达分组与层级，而不是到处加分割线

## 不适用场景

- 一次性插画或版式实验，间距本就该自由
- 需要光学对齐时，仍要靠目测微调而非死守档位
- 档位过密（每 2px 一档），选型反而变慢

## 常见形式

- **4px 线性** (Linear 4px) — 4 的倍数逐档递增，最通用也最密
- **8px 基准** (8px base) — 以 8 为基准、必要时补 4 与 12，节奏更疏
- **语义间距** (Semantic spacing) — inline / stack / section 按关系命名，跨组件稳定

## Platform API

- `gap`
- `padding`
- `margin`
- `calc()`
- `--space-4`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [gap / padding / margin](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) — 间距落地的三个属性 |
| Tailwind CSS | [p-4 / gap-4 (spacing scale)](https://tailwindcss.com/docs/padding) — 4px 基准的成倍工具类 |
| Design tokens | --space-1 … --space-8 |

## 实现要点

**CSS:** `--space-1: 0.25rem` `gap: var(--space-4)` `padding: var(--space-3) var(--space-4)` `margin-block: var(--space-6)` `gap: calc(var(--space-4) * var(--density, 1))`

用 rem 定义 6～8 档：--space-1 到 --space-8（4/8/12/16/24/32/48/64px）。组件只引用令牌，不写裸数值；同组元素用同一档，分组越大用越大的档。全局密度用一个乘数（--density）整体缩放，暗色或移动端可单独收紧。相邻档差距过小就合并，档位控制在 8 个以内。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现间距系统。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 用 rem 定义 6～8 档间距令牌，按 4 或 8 的倍数
- 组件只引用令牌，不写裸 margin/padding 数值
- 用间距表达分组，并提供密度乘数
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立间距系统：用 4 或 8 的倍数定义 6～8 档间距令牌，并用它统一组件的 padding、margin 与 gap。

**Design:** 间距规范：基准 4px（或 8px），档位 4/8/12/16/24/32/48/64；同组元素用同一档，分组越大档位越大；组件内只用令牌不写裸数；提供 --density 乘数用于紧凑与宽松；相邻档至少相差 4px，总档位不超过 8。

**Implementation:** 落地为 CSS 变量：:root { --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem; --space-6: 1.5rem; --space-8: 2rem; }，组件用 gap: var(--space-4) 与 padding: var(--space-3) var(--space-4)。Tailwind 映射到 theme 的 spacing。整体密度靠 --density 乘数一次性调整。

## 相关概念

- [relative-units](/foundation/relative-units) — 相似概念
- [border-radius](/foundation/border-radius) — 相似概念
- [type-scale](/foundation/type-scale) — 搭配使用
- [button](/foundation/button) — 搭配使用

## Sources

- [Material Design — Spacing](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- [Apple HIG — Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Tailwind CSS — Padding](https://tailwindcss.com/docs/padding)

---

JSON: `/api/concept/foundation/spacing-scale.json` · 站点: /foundation/spacing-scale
