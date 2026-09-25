# 焦点环 / Focus Ring

> 无障碍 · `id: focus-ring`

用可见轮廓标记当前键盘焦点位置，让用户知道下一个按键会落在哪里。鼠标点击往往不需要它，但键盘与辅助技术用户必须始终看见焦点在哪，否则只能盲操作。通常用 :focus-visible 控制——键盘聚焦才显示，鼠标点击不打扰。

**别名:** 焦点环 · 键盘焦点框 · 键盘框 · 蓝框 · 聚焦框 · focus outline · focus ring

**分类:** Accessibility / Keyboard

## 名词辨析

焦点环不等于 hover 高亮——焦点环服务键盘用户，hover 服务指针用户。

## 适用场景

- 任何可聚焦元素（按钮、链接、输入框、自定义控件）
- 用 :focus-visible 而非 :focus，避免鼠标点击也弹框
- 自定义控件覆盖了浏览器默认轮廓之后

## 不适用场景

- outline: none 之后不给任何替代指示（键盘用户直接失联）
- 把焦点环做成 hover 高亮的复制品，只在鼠标下可见
- 焦点环对比度不足 3:1，或被邻近元素裁切遮挡

## 常见形式

- **外轮廓** (Outline ring) — outline + outline-offset，最通用、可被 forced-colors 保留
- **阴影环** (Shadow ring) — box-shadow 双层描边，圆角跟随元素形状
- **描边染色** (Border tint) — 只变边框色，视觉最弱，需配合加粗才够用

## Platform API

- `:focus-visible`
- `outline`
- `outline-offset`
- `focus()`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| WCAG | [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) |
| CSS | [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) |

## 实现要点

**CSS:** `:focus-visible` `outline` `outline-offset`

基础写法：:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px }。需要跟随圆角时改用 box-shadow: 0 0 0 2px 两层环。覆盖浏览器默认轮廓后必须提供替代；forced-colors 模式下保留 outline。可用 :focus:not(:focus-visible) 精确去掉鼠标点击的环。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现可见键盘焦点环。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- :focus-visible 显示 2px 强调色轮廓，offset 3px，鼠标点击不显示
- 全项目禁止无替代的 outline: none
- 自定义圆角组件用 box-shadow 环跟随形状
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 给项目里的按钮和链接加上清晰的键盘焦点环，Tab 切换时能看见当前位置。

**Design:** 所有可聚焦元素显示 2px 强调色外轮廓，offset 3px，与圆角一致；鼠标点击不显示，键盘聚焦才显示；深浅色主题下对比度均不低于 3:1。

**Implementation:** 全局：:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px }；禁止裸写 outline:none；自定义圆角组件用 box-shadow 环替代；:focus:not(:focus-visible) { outline: none } 去掉点击环。

## 相关概念

- [keyboard-navigation](/a11y/keyboard-navigation) — 搭配使用
- [skip-link](/a11y/skip-link) — 搭配使用
- [contrast-ratio](/a11y/contrast-ratio) — 搭配使用

## 容易混淆

- [hover-glow](/a11y/hover-glow) — hover-glow 是鼠标悬停的装饰反馈，焦点环是键盘可达性的必需指示。

## Sources

- [WCAG 2.1 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible)
- [MDN — :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)

---

JSON: `/api/concept/a11y/focus-ring.json` · 站点: /a11y/focus-ring
