# 对比度 / Contrast Ratio

> 基础 · `id: contrast-ratio`

前景与背景的亮度比值，衡量文字是否看得清。WCAG 2.1 给出硬性门槛：正文 AA 4.5:1、AAA 7:1，大号文字降到 3:1 与 4.5:1。APCA 按字重与字号给出更贴近感知的建议值。先算比值再选色，不要靠肉眼验收。

**别名:** 对比度 · 文字对比度 · 可读性对比 · WCAG 对比 · 看不清 · contrast ratio · color contrast

**分类:** Color / Foundation

## 适用场景

- 正文、标签、按钮文字需要满足无障碍基线
- 深浅主题切换后需要重新验证文字可读性
- 灰阶辅助文字（muted）容易不知不觉掉到 3:1 以下

## 不适用场景

- 装饰性大字或纯图形标识（另有非文本对比 3:1 要求）
- 被禁用的控件文字（WCAG 明确豁免）
- 把 AAA 当作所有界面的强制标准，导致设计空间过窄

## 常见形式

- **AA 正文** (AA body text) — 4.5:1，绝大多数界面的默认门槛
- **AAA 高标** (AAA) — 7:1，长文与老年用户场景
- **大号文字豁免** (Large text exception) — ≥24px 或 18.66px 粗体，门槛降到 3:1

## Platform API

- `WCAG 2.1`
- `APCA`
- `contrast-ratio()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| W3C | [WCAG 2.1 — Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) |
| W3C | [APCA](https://www.myndex.com/APCA/) |
| CSS | [contrast-ratio()](https://drafts.csswg.org/css-color-5/#contrast-ratio) — 颜色 5 草案中的比值函数 |

## 实现要点

**CSS:** `color-mix()` `oklch()` `contrast-ratio()` `@media (prefers-contrast: more)`

比值算法：先 sRGB 转线性亮度 Y，再 (L1+0.05)/(L2+0.05)。正文锁 4.5:1，大号锁 3:1；辅助文字不要靠降低透明度凑层级，改用 ink-2 色阶。高对比主题用 prefers-contrast: more 或独立角色表。交付前对文字角色两两抽查，尤其是 muted 与 line。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现对比度。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 文字组合过 WCAG AA（正文 4.5:1 / 大号 3:1）
- 提供比值计算与达标判定工具函数
- 高对比主题走独立角色表或 prefers-contrast
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 检查界面对比度：保证正文、标题、辅助文字与背景的对比比值达到 WCAG AA。

**Design:** 对比度规范：正文 ≥4.5:1，大号文字（≥24px 或 18.66px 粗体）≥3:1，AAA 场景 7:1 / 4.5:1；边框与图标属非文本对比 ≥3:1；禁用态豁免但需可辨识；高对比主题单独取值表。颜色选择先过比值再进稿。

**Implementation:** 实现一个对比度工具函数 relativeLuminance(hex) 与 contrastRatio(a, b)，在 Storybook 或设计系统文档里对每个语义色组合跑断言；CSS 侧用 @media (prefers-contrast: more) 切换高对比角色值。CI 可对 token 表做批量校验，输出不达标的组合清单。

## 相关概念

- [semantic-color](/foundation/semantic-color) — 搭配使用
- [color-palette](/foundation/color-palette) — 搭配使用
- [elevation](/foundation/elevation) — 搭配使用

## Sources

- [W3C — Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [APCA — Advanced Perceptual Contrast Algorithm](https://www.myndex.com/APCA/)
- [WebAIM — Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

JSON: `/api/concept/foundation/contrast-ratio.json` · 站点: /foundation/contrast-ratio
