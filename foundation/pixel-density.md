# 像素密度与分辨率 / Pixel Density & Resolution

> 基础 · `id: pixel-density`

屏幕同时用两套像素计数：真实的设备像素与布局用的 CSS 像素，一个 CSS 像素里塞进几个设备像素就是设备像素比 DPR。手机像素密、CSS 像素少，位图被撑到 CSS 尺寸就发虚。图片按 2x/3x 提供并配 srcset 与矢量，文字用 rem，在高密度屏上才锐利。

**别名:** 像素密度 · 设备像素比 · 为什么图在手机上发虚 · 手机上看图模糊 · 高清屏 · Retina · DPR · pixel density · device pixel ratio

**分类:** Foundation / Rendering / Responsive

## 适用场景

- 位图、图标与截图需要在手机等高密度屏上保持锐利
- 设计稿以 px 标注，开发需要换算到不同 DPR
- 排查“为什么图在 Retina 上发虚”或配置响应式图片

## 不适用场景

- 纯文字页面没有位图与图标，密度差异基本无感
- 只面向固定 1x 的投屏或信息屏，不涉及高密度设备
- 把所有尺寸都乘 DPR 写死，丢掉 CSS 像素这层抽象

## 常见形式

- **标清 1x** (Standard 1x) — 一个 CSS 像素等于一个设备像素，资源原样显示
- **Retina 2x** (Retina 2x) — 一个 CSS 像素摊到四个设备像素，位图要出 2x 才不虚
- **高密度 3x 与矢量** (Dense 3x + vectors) — 手机到 3x，图标与文字交给 SVG 和 rem 更稳

## Platform API

- `dppx`
- `devicePixelRatio`
- `srcset`
- `image-set()`
- `rem`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [resolution media query / dppx](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution) — 按屏幕密度切换资源或样式 |
| HTML | [srcset / sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) — 让浏览器按 DPR 选图 |
| React | [window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) |

## 实现要点

**CSS:** `image-set(url(logo.png) 1x, url(logo@2x.png) 2x)` `@media (min-resolution: 2dppx)` `srcset="hero@2x.png 2x"` `width: 24px; height: 24px` `font-size: 1rem`

位图按目标 DPR 出 2x/3x 资源，用 image-set() 或 srcset/sizes 让浏览器自己挑，不要只把 1x 放大。CSS 尺寸一律按 CSS 像素写，映射到设备像素交给浏览器；图标与文字优先 SVG 与 rem，发丝线保持 1px。devicePixelRatio 只用于需要精确像素计算的 canvas 或图片预览，不要拿它缩放整个界面。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现像素密度适配。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 布局与尺寸全部按 CSS 像素书写，不乘 DPR
- 位图提供 1x/2x/3x 并用 image-set() 或 srcset/sizes 选择
- 图标与文字优先 SVG 与 rem，发丝线保持 1px
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 让位图与图标在手机等高密度屏上保持清晰：按 DPR 提供多倍图，并说清 CSS 像素与设备像素的区别。

**Design:** 像素密度规范：布局与标注统一用 CSS 像素，交付 1x/2x/3x 位图；图标与 Logo 用 SVG；正文用 rem，发丝线固定 1px；切图命名带 @2x/@3x；说明目标设备的 DPR 区间，不要用设备像素直接标注设计稿。

**Implementation:** 用 image-set() 或 srcset/sizes 提供多倍图，例如 img { width: 24px; height: 24px; content: image-set(url(icon.png) 1x, url(icon@2x.png) 2x); }。高密度下再用 @media (min-resolution: 2dppx) 覆盖细节。字体与间距用 rem，canvas 里乘 window.devicePixelRatio 设置 backing store，并按 CSS 尺寸缩放上下文。

## 相关概念

- [relative-units](/foundation/relative-units) — 相似概念
- [type-scale](/foundation/type-scale) — 搭配使用
- [alt-text](/foundation/alt-text) — 搭配使用
- [pixel-art](/foundation/pixel-art) — 搭配使用

## Sources

- [MDN — window.devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
- [MDN — CSS resolution (dppx)](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [Apple HIG — Images](https://developer.apple.com/design/human-interface-guidelines/images)

---

JSON: `/api/concept/foundation/pixel-density.json` · 站点: /foundation/pixel-density
