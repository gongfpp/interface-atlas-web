# 玻璃拟态 / Glassmorphism

> 风格 · `id: glassmorphism`

用半透明磨砂玻璃质感表示悬浮层级的视觉语言：backdrop-filter 背景模糊 + 低透明度 填充 + 一圈细窄的白色高光描边，让面板像磨砂玻璃片一样透出底下的色彩与图形。 它强调"层"——玻璃之下必须有可透出的丰富背景，否则质感无从谈起。

**别名:** 毛玻璃 · 苹果那种透明玻璃效果 · 玻璃拟态 · 磨砂玻璃 · 玻璃效果 · 半透明模糊背景 · Frosted Glass · Glassmorphism UI

**分类:** Style / Visual Language

## 适用场景

- 背景是渐变 照片或彩色内容，需要透出层次
- 弹层 播放器 系统级悬浮面板，要轻盈不要沉闷
- 想延续 macOS iOS 的材质语言获得熟悉感

## 不适用场景

- 背景纯净单调，玻璃无内容可透 出来只剩灰雾
- 长文本密集区域，模糊底会持续削弱文字对比度
- 低端设备兼容与性能敏感场景，backdrop-filter 开销大

## 常见形式

- **磨砂** (Frost) — 高模糊低透明，最经典的奶白玻璃
- **透明玻璃** (Clear Glass) — 低模糊高透明，更依赖高光描边
- **有色玻璃** (Tinted Glass) — 带色调的玻璃，iOS 振动感传统

## 开发规格

- **typography:** 无衬线，白色大标题
- **color:** 蓝紫粉渐变底 × 白色玻璃 rgba(255,255,255,.45)
- **border:** 1px 半透明白边框
- **shadow:** 大范围柔和彩色投影
- **spacing:** 圆角 16px+，卡片内边距充足

## 实现要点

**CSS:** `backdrop-filter: blur()` `background: rgba(255,255,255,0.1~0.4)` `border: 1px solid rgba(255,255,255,0.4)` `box-shadow: inset 0 1px 0 rgba(255,255,255,0.5)` `@supports`

玻璃三要素：半透明填充（白色 10%～40% 透明度）、backdrop-filter blur(8~24px)、 顶部 1px 半透明白描边制造玻璃厚度。深色底上玻璃效果最典型，可再叠一层顶部 内发光。务必用 @supports 为不支持 backdrop-filter 的环境准备降级（提高填充 不透明度）。文字对比度要按模糊后的实际背景校验。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用玻璃拟态风格（Glassmorphism）实现一个悬浮卡片 + 按钮区块。

先检查现有 Design Token 与弹层组件，确认背景层方案（渐变/图片）。
要求：
- 页面层提供彩色渐变背景，玻璃面板半透明 + backdrop-filter blur
- 1px 半透明白描边与顶部高光内阴影表现玻璃厚度
- @supports 降级：不支持时提高面板不透明度保证可读
- 深色模式使用更深渐变底（玻璃在深底上最典型）
- 玻璃上的文字对比度满足可读性要求
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用玻璃拟态风格（Glassmorphism）设计界面：半透明磨砂玻璃面板，背景模糊透出底下的渐变或照片，配细白色高光描边。

**Design:** 玻璃拟态设计规范：页面背景为鲜艳渐变或照片（深色背景效果最佳）；玻璃面板 填充 rgba(255,255,255,0.15) 左右，backdrop-filter blur(16px)；描边用 1px rgba(255,255,255,0.35)，顶部可加内发光高光；圆角 16px+；玻璃上的文字保证 4.5:1 对比度。深色模式用更深的渐变底，玻璃透明度略升。

**Implementation:** 用 CSS 实现玻璃拟态：封装 .glass 类（background: rgba(255,255,255,0.16); backdrop-filter: blur(16px) saturate(160%); border: 1px solid rgba(255,255,255,0.35); border-radius: 16px），用 @supports (backdrop-filter: blur(1px)) 提供不透明度更高的降级填充；卡片可加 inset 0 1px 0 的高光内阴影； 注意 backdrop-filter 会创建包含块，内部 fixed 定位需上移。

## 相关概念

- [skeuomorphism](/styles/skeuomorphism) — 相似概念
- [aurora](/styles/aurora) — 相似概念
- [minimalism](/styles/minimalism) — 相似概念
- [card](/styles/card) — 影响组件
- [modal](/styles/modal) — 影响组件

## Sources

- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

---

JSON: `/api/concept/styles/glassmorphism.json` · 站点: /styles/glassmorphism
