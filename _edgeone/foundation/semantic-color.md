# 语义色 / Semantic Color Token

> 基础 · `id: semantic-color`

按用途而非色相命名的颜色变量：bg、surface、text、muted、accent、danger。组件只认角色，主题切换时在映射层换指向即可，不必改组件。浅色、深色、高对比、品牌皮肤都是同一套角色的不同取值表。

**别名:** 语义色 · 语义色 token · 角色色 · 主题色变量 · 换肤 · semantic color · color token

**分类:** Color / Foundation

## 适用场景

- 需要浅色 / 深色双主题或可换肤
- 组件库要跨产品复用，颜色含义必须稳定
- 无障碍要求高对比主题或强制配色

## 不适用场景

- 单页营销稿，颜色即最终视觉，无需抽象
- 角色名起得比色值还多（--color-card-header-icon-hover）
- 把插画专用色也塞进语义层

## 常见形式

- **浅深双主题** (Light / dark dual) — 同一角色两套取值，.dark 下整体切换
- **高对比** (High contrast) — 收紧明度差，边界与文字加强
- **品牌覆盖** (Brand override) — 只换 accent 与少数角色，其余不动

## Platform API

- `:root`
- `color-scheme`
- `CSS custom properties`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) — 让 UA 控件跟随浅深主题 |
| CSS | [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) |
| Tailwind CSS | [@theme / dark:](https://tailwindcss.com/docs/dark-mode) |

## 实现要点

**CSS:** `:root` `color-scheme` `--color-bg` `--color-surface`

分两层：色阶层（--color-primary-500）与角色层（--color-accent: var(--color-primary-600)）。组件只允许引用角色层。深色主题覆盖角色层取值并加 color-scheme: dark，让滚动条与表单控件同步变暗。高对比主题独立一张表，不要在深色表上继续堆 if。强制配色场景再补 forced-colors 适配。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现语义色。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- bg / surface / text / muted / accent / danger 角色层
- 浅深双主题取值表，组件不写死色值
- 配 color-scheme，组合对比度过 AA
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立语义色 Token：用 bg / surface / text / muted / accent / danger 等角色名定义颜色变量，并支持深浅主题。

**Design:** 语义色规范：角色层固定为 bg、surface、raised、text、muted、line、accent、danger；浅深主题各一张取值表，组件不感知主题；accent 全局唯一，danger 只用于破坏性操作；所有文字角色对当前底色过 WCAG AA；禁止在组件里出现 #hex。

**Implementation:** 用 CSS 自定义属性实现：:root { --color-bg: #fafaf7; --color-surface: #fff; --color-text: #17150f; --color-accent: var(--color-primary-600); }，.dark { --color-bg: #121210; … } 并设 color-scheme: dark。Tailwind 通过 @theme inline 映射 bg-bg、text-text 等工具类。主题切换只换 class。

## 相关概念

- [color-palette](/foundation/color-palette) — 搭配使用
- [contrast-ratio](/foundation/contrast-ratio) — 搭配使用
- [elevation](/foundation/elevation) — 搭配使用

## Sources

- [Material Design — Color roles](https://m3.material.io/styles/color/roles)
- [MDN — color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme)
- [W3C — CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)

---

JSON: `/api/concept/foundation/semantic-color.json` · 站点: /foundation/semantic-color
