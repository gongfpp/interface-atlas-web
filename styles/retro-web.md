# 复古互联网 / Retro Web

> 风格 · `id: retro-web`

借用早期个人网站与桌面浏览器的视觉语言：灰色凹凸边框、衬线文字、蓝色下划线链接、侧栏目录和访客计数器。它表达的是手工制作网页的亲切感；不等同于像素艺术，也不需要牺牲今天的键盘操作、响应式布局和阅读体验。

**别名:** 老网页 · 早期互联网 · 个人主页风格 · Web 1.0 · old-school web · retro website

**分类:** Style / Visual Language

## 适用场景

- 个人主页、爱好者站点、互联网历史展览或怀旧创意项目。
- 希望强调手工整理、慢慢发现和个人表达的内容。

## 不适用场景

- 高密度工作系统或依赖可信支付与身份验证的关键流程。
- 不要复制闪烁文字、弹窗广告、固定宽度和过小触控目标等旧网页缺陷。

## 常见形式

- **个人主页** (Personal homepage) — 目录侧栏、短文和精选链接组成的手工小站。
- **旧浏览器窗口** (Vintage browser window) — 用标题栏、菜单和凹凸边框营造桌面窗口层次。

## 开发规格

- **typography:** 衬线正文、系统字体菜单、可读的蓝色下划线链接。
- **color:** 浅灰窗口、白色内容、深蓝标题栏与链接。
- **border:** 方角与 2px 凹凸边框，无模糊投影。
- **shadow:** 使用边框明暗方向表达凹凸，不加模糊阴影。
- **spacing:** 紧凑但保持足够触控面积，窄屏目录换行。
- **motion:** 即时切换，避免闪烁和自动滚动。
- **states:** 当前页加粗、焦点有清晰轮廓，表单反馈使用实时区域。

## 实现要点

**CSS:** `border-style` `text-decoration` `font-family` `:focus-visible` `flex-wrap`

用 inset/outset 或多层阴影表达灰色面板层次；正文使用可读字号，链接保留下划线。视觉样张可以还原固定构图，真实交互区必须换行并支持键盘。留言只用组件状态，明确不持久保存。

## 交给 Agent 的任务 Prompt

```text
检查项目现有路由和样式后，创建一个复古互联网个人主页。
包含目录导航、内容区和仅本地模拟的留言簿，所有页面入口都必须有效。
用灰色凹凸窗口、深蓝标题栏、衬线正文与蓝色下划线链接建立风格，不以整张截图替代 DOM。
不新增后端、凭据或外部请求。键盘可以完成切换和留言，空白提交有明确反馈，窄屏无页面横向溢出。
验证中英文本、焦点、页面切换与刷新后的状态边界，再报告实际通过和未验证的检查。
```

### 其余层级 Prompt

**Basic:** 使用复古互联网风格设计个人主页。保留灰色凹凸窗口、衬线正文、蓝色下划线链接和目录侧栏；保留现代可访问性，不使用闪烁文字和侵入弹窗。

**Design:** 以白色内容区和浅灰窗口形成层次，深蓝标题栏配系统字体。紧凑边距、方角和凹凸边框传达旧浏览器质感；链接必须可辨，触控目标不能随缩景变小。

**Implementation:** 复用语义 HTML，以 flex-wrap 让侧栏和内容响应窄屏。使用真正按钮或链接、可见 focus 和 aria-current。访客留言仅作为本地模拟，提交时明确反馈、不向外部服务发送内容。

## 相关概念

- [pixel-art](/interface-atlas-web/styles/pixel-art) — 相似概念
- [skeuomorphism](/interface-atlas-web/styles/skeuomorphism) — 相似概念
- [y2k](/interface-atlas-web/styles/y2k) — 相似概念
- [tabs](/interface-atlas-web/components/tabs) — 搭配使用

## 容易混淆

- [pixel-art](/interface-atlas-web/styles/pixel-art) — 像素艺术由点阵与有限色板定义；复古互联网由页面结构、超链接和旧浏览器视觉语汇定义，可包含照片与常规文字。

## Sources

- [MDN — border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
- [MDN — The anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)

---

JSON: `/interface-atlas-web/api/concept/styles/retro-web.json` · 站点: /interface-atlas-web/styles/retro-web
