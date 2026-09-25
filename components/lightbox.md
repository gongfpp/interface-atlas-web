# 灯箱 / Lightbox

> 组件 · `id: lightbox`

以压暗遮罩放大展示图片或视频的媒体浮层，原页面暂时失去交互。内容居中呈现，常配左右切换、缩放与关闭；它是媒体专用的模态框，与通用对话框的区别在于主体是可观赏的视觉内容而非表单或文案。

**别名:** 图片灯箱 · 大图预览 · 图片放大预览 · 看大图 · lightbox

**分类:** Overlay / Media

## 名词辨析

Lightbox 是媒体专用的 Modal；Modal 是通用容器。灯箱打开的是「可以看的东西」，对话框打开的是「要你处理的事」。

## 适用场景

- 需要查看图片细节、原图或成组照片
- 视频需要脱离页面布局专注播放
- 缩略图点击后预期放大预览

## 不适用场景

- 内容是表单、说明或确认操作，用 modal
- 用户需要边看边操作底层页面，用 drawer 或 popover
- 媒体本身就是页面主体，直接用画廊页或视频播放页

## 常见形式

- **图片放大** (Image zoom) — 单图全屏放大，可缩放或平移查看细节
- **画廊切换** (Gallery) — 带左右箭头与计数，连续浏览组图
- **视频灯箱** (Video lightbox) — 浮层内播放视频，常自动播放并可全屏

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) |
| yet-another-react-lightbox | [Lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) |
| MUI | [Dialog (full-screen image)](https://mui.com/material-ui/react-dialog/) |

## 实现要点

**CSS:** `position: fixed` `object-fit: contain` `z-index` `background-color`

遮罩固定铺满并压暗底层，媒体用 object-fit: contain 居中，避免裁切。打开时锁定页面滚动、焦点困在浮层内；左右箭头与 Esc 均可键盘操作。切换用轻微淡入而非大幅位移，尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现灯箱（Lightbox）组件。
先检查现有浮层与 Design Token，优先复用遮罩、圆角与阴影变量。
用途：图片与视频的放大预览。
要求：
- 压暗遮罩 + 居中媒体，支持左右切换与关闭
- 焦点困在浮层内，关闭后焦点回到触发元素
- 图片加载失败有替代说明
- 尊重 prefers-reduced-motion，支持键盘操作
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个灯箱组件：点击缩略图在压暗遮罩上放大展示图片，支持左右切换与关闭。

**Design:** 设计灯箱。要求：半透明压暗遮罩 + 居中媒体；底部计数与图注；左右切换箭头与右上角关闭；切换时轻微淡入；Esc 与点击遮罩可关闭；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现灯箱：受控 index 与 open 状态；fixed inset-0 遮罩 + flex 居中的 figure；object-fit: contain 限制媒体尺寸；焦点困在浮层内，Esc 关闭并把焦点还给触发缩略图；图片 onError 显示占位说明。

## 相关概念

- [modal](/components/modal) — 替代方案
- [carousel](/components/carousel) — 搭配使用
- [drawer](/components/drawer) — 相似概念

## 容易混淆

- [modal](/components/modal) — modal 承载通用任务与文案，lightbox 专用于放大观赏媒体
- [carousel](/components/carousel) — carousel 在页面内轮播，lightbox 在压暗遮罩上全屏展示

## Sources

- [WAI-ARIA Authoring Practices — Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [MDN — dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [Apple Human Interface Guidelines — Full Screen Modal](https://developer.apple.com/design/human-interface-guidelines/modality)

---

JSON: `/api/concept/components/lightbox.json` · 站点: /components/lightbox
