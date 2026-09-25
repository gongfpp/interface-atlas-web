# 字体栈 / Font Stack

> 基础 · `id: font-stack`

按优先级排列的字体回退链：首选字体缺席时依次落到下一个，最后由通用族兜底。系统栈零下载、即时渲染，网络字体保品牌气质但要配 font-display 控制闪烁，本地优先则两者之间取平衡。栈的顺序就是渲染的决策顺序。

**别名:** 字体栈 · 字体回退 · 备用字体 · 字体族 · 字体列表 · font stack · font-family

**分类:** Typography / Foundation

## 适用场景

- 正文与 UI 文字需要在任何设备上稳定渲染
- 品牌字体只覆盖部分字重或字符集，需要可靠回退
- 首屏性能敏感，不希望字体请求阻塞文字显示

## 不适用场景

- 排版完全依赖单一展示字体且缺失即失效（如 Logo 字标）
- 栈里堆了七八个几乎相同的字体，决策成本高却无收益
- 不同回退字体字宽差异过大，换字后版式崩坏

## 常见形式

- **系统栈** (System stack) — 零下载零闪烁，随操作系统变化而变化
- **网络字体 + 回退** (Web font + fallback) — 品牌一致性优先，需 font-display 与字宽度量对齐
- **本地优先** (Local-first) — 先用同名本地字体，缺了再下载，兼顾速度与气质

## Platform API

- `font-family`
- `@font-face`
- `font-display`
- `font-weight`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |
| CSS | [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) |
| Next.js | [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — 自动子集化与 size-adjust 对齐 |

## 实现要点

**CSS:** `font-family` `@font-face` `font-display` `size-adjust`

字体栈写成一行：'Inter', 'PingFang SC', system-ui, sans-serif。中文场景务必在拉丁字体后接中文族，否则汉字会落到丑陋的默认宋体。网络字体用 font-display: swap 或 optional；用 size-adjust / ascent-override 把回退字的字宽字高对齐到首选字体，换字瞬间不跳版。等宽场景单独维护 mono 栈。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现字体栈。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 正文 / 标题 / 等宽三套 font-family 回退链，末尾带通用族
- 网络字体用 font-display 控制闪烁，并对齐回退字度量
- 中文回退族紧跟拉丁字体之后
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 为项目建立字体栈：定义正文、标题、等宽三套 font-family 回退链。

**Design:** 字体栈规范：正文 'Inter', 'PingFang SC', system-ui, sans-serif；标题可用高对比衬线并给出中文回退；等宽 'JetBrains Mono', 'SF Mono', Menlo, monospace。网络字体 font-display: swap，并用 size-adjust 对齐回退度量；每条栈末尾必须有 sans-serif / serif / monospace 通用族。

**Implementation:** 用 CSS 变量集中管理字体栈：:root { --font-sans: 'Inter', 'PingFang SC', system-ui, sans-serif; --font-mono: 'JetBrains Mono', Menlo, monospace; }。@font-face 声明里写 font-display: swap 与 size-adjust；Tailwind 侧映射 font-sans / font-serif / font-mono。禁止在组件内散写 font-family 字符串。

## 相关概念

- [type-scale](/foundation/type-scale) — 搭配使用
- [line-height](/foundation/line-height) — 搭配使用
- [minimalism](/foundation/minimalism) — 搭配使用

## Sources

- [MDN — font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [MDN — @font-face font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)
- [CSS-Tricks — Using System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)

---

JSON: `/api/concept/foundation/font-stack.json` · 站点: /foundation/font-stack
