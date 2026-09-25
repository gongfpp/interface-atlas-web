# 字号阶梯 / Type Scale

> 基础 · `id: type-scale`

用一组按比例递增的字号定义标题与正文层级，让排版有稳定节奏。以正文基准字号乘以固定比例（如 1.25 大三度、1.333 纯四度）逐级放大，标题之间形成可预期的视觉落差，不必逐档拍脑袋定 px；也可用 sm/md/lg 尺码或 clamp() 流式档位落地。

**别名:** 字号阶梯 · 标题比例 · 字级 · 字体大小层级 · 字号系统 · type scale · modular scale

**分类:** Typography / Foundation

## 适用场景

- 页面存在标题、正文、辅助文字等多级文本层级
- 多人协作需要统一字号，避免各自随手写 13px、15px
- 响应式排版希望字号随视口连续或按断点有节制地变化

## 不适用场景

- 单一字号就够的极简控件条、图标工具栏
- 像素级还原设计稿且不允许任何取整合并
- 比例档位过多（超过 8 档），层级反而失去可辨识度

## 常见形式

- **模数比例** (Modular scale) — 基准字号乘固定比例逐级放大，档位离散、节奏稳定
- **流式字号** (Fluid type) — clamp(最小, 视口插值, 最大)，小屏大屏连续过渡
- **尺码档位** (T-shirt sizes) — sm / md / lg / xl 语义命名，工程侧好引用

## Platform API

- `font-size`
- `clamp()`
- `rem`
- `calc()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) — 流体字号的首选写法 |
| CSS | [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) |
| Tailwind CSS | [text-sm / text-base / text-lg](https://tailwindcss.com/docs/font-size) |

## 实现要点

**CSS:** `clamp()` `rem` `calc()` `font-size: var(--text-lg)`

用 rem 定义 6～8 档字号变量（--text-xs 到 --text-3xl），比例写进注释；标题跳档而非连续堆砌，相邻档位差异不小于 1.15 倍才可感知。流式档位写成 clamp(0.95rem, 0.8rem + 0.6vw, 1.25rem)，两端封顶防止 4K 失控。中文正文基准 15～17px，英文 16px 起。字号变更必须同步检查行高与行长。

## 横向对比维度 (`typography-trio`)

- **适用文本:** 标题与正文的全部层级
- **调节粒度:** 按比例档位跳变，一档一档调
- **响应式:** 高，clamp() 连续插值

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现字号阶梯。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 用 CSS 变量定义 6～8 档字号，按 1.25 或 1.333 比例生成
- 标题与正文共用同一阶梯，组件内禁止写死 px
- 需要响应式时用 clamp() 流式档位，两端封顶
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立一套字号阶梯：按比例定义标题与正文的字号层级，并输出为可复用的 Design Token。

**Design:** 字号阶梯设计规范：正文基准 16px，比例 1.25（大三度）或 1.333（纯四度）；共 6～8 档，命名 xs/sm/base/lg/xl/2xl/3xl；标题与正文共用同一阶梯，禁止页外写死 px；移动端用 clamp() 流式插值，两端封顶；每档同步给出对应行高建议。

**Implementation:** 用 CSS 自定义属性落地字号阶梯：:root { --text-base: 1rem; --text-lg: 1.25rem; --text-xl: 1.5625rem; }，标题用 var(--text-2xl) 引用；流式档位 --text-h1: clamp(2rem, 1.2rem + 2.5vw, 3.5rem)。Tailwind 侧映射到 @theme 的 --text-* 令牌。变更阶梯只改根变量，不改组件。

## 相关概念

- [font-stack](/foundation/font-stack) — 搭配使用
- [line-height](/foundation/line-height) — 搭配使用
- [measure](/foundation/measure) — 搭配使用
- [editorial](/foundation/editorial) — 搭配使用

## Sources

- [Type Scale — A Visual Calculator](https://typescale.com/)
- [MDN — clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Material Design — Typography](https://m3.material.io/styles/typography)

---

JSON: `/api/concept/foundation/type-scale.json` · 站点: /foundation/type-scale
