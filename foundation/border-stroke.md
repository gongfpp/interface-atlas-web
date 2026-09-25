# 边框与描边 / Borders & Strokes

> 基础 · `id: border-stroke`

用线条勾出元素的边界与状态：border 占据盒模型空间、outline 画在盒外不挤动布局、box-shadow 的 ring 用透明阴影描一圈。 普通态用低对比 border 静默分界，悬停加深、聚焦用 outline、报错换色；三者各司其职，边界才既清楚又不抖动。

**别名:** 边框 · 描边 · 线框 · 边界线 · 给元素加个框 · 点击时那圈高亮 · border · outline · ring

**分类:** Borders / Foundation

## 适用场景

- 输入框、卡片、按钮需要用细线勾出可点区域
- 悬停、聚焦、报错需要可感知但不重排布局的状态差
- 扁平风格里没有投影，靠描边区分相邻表面

## 不适用场景

- 用粗彩色边框装饰每个区块，页面像被框满的表格
- 在 border 与 outline 之间反复切换同一元素，宽度突跳
- 拿描边替代留白和分隔线来组织信息层级

## 常见形式

- **实体边框** (Solid border) — 计入盒模型尺寸，稳定但会占位；配 box-sizing: border-box 不撑破容器
- **轮廓描边** (Outline) — 画在盒外，可 outline-offset 拉开距离，不参与布局；聚焦态首选
- **阴影环** (Shadow ring) — 用 0 0 0 Npx 的 box-shadow 模拟描边，不占空间、可叠多层

## Platform API

- `border`
- `outline`
- `box-shadow`
- `box-sizing`
- `border-radius`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) |
| CSS | [outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline) |
| Tailwind CSS | [border / ring](https://tailwindcss.com/docs/border-width) |

## 实现要点

**CSS:** `border: 1px solid var(--color-line)` `box-sizing: border-box` `outline: 2px solid var(--color-accent)` `outline-offset: 2px` `box-shadow: 0 0 0 3px var(--color-accent-soft)`

全局设 box-sizing: border-box，让边框算进声明宽度，加粗描边不会把相邻元素挤走。默认态用 1px 的 --color-line 静默分界； 悬停换成 --color-line-strong；聚焦用 outline（不占位、可 offset），不要用 border 代替，否则元素会跳 2px； 报错换语义色并加一条 error 文案，别只靠颜色。需要无位描边时用 box-shadow: 0 0 0 3px var(--color-accent-soft)。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现边框与描边。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 全局 box-sizing: border-box
- border / outline / ring 三种描边各有明确用途，聚焦只用 outline
- 悬停、聚焦、报错三种状态有可感知但不重排的差异
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立描边规范：定义 border、outline、ring 三种描边的用法与默认 1px 边框令牌。

**Design:** 描边规范：默认 1px 低对比边框，悬停加深一档；聚焦一律用 2px outline + 2px offset，禁止用 border 做聚焦； 报错换语义色并附文案；所有元素 box-sizing: border-box；圆角成阶梯（4/8/12/16）；同屏描边颜色不超过三档。

**Implementation:** 用 CSS 变量落地：--border-width: 1px; --color-line 与 --color-line-strong 控制默认与悬停；聚焦写成 :focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }；全局 * { box-sizing: border-box; }。 需要无位描边时改用 box-shadow: 0 0 0 3px var(--color-accent-soft)。不要在内容盒上写死 px 边框。

## 相关概念

- [focus-ring](/foundation/focus-ring) — 搭配使用
- [input](/foundation/input) — 搭配使用
- [card](/foundation/card) — 搭配使用
- [elevation](/foundation/elevation) — 相似概念
- [neobrutalism](/foundation/neobrutalism) — 搭配使用

## Sources

- [MDN — border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [MDN — outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
- [web.dev — The box model](https://web.dev/learn/css/box-model)
- [W3C — CSS Backgrounds and Borders Level 3](https://www.w3.org/TR/css-backgrounds-3/)

---

JSON: `/api/concept/foundation/border-stroke.json` · 站点: /foundation/border-stroke
