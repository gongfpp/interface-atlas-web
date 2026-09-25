# 轮播 / Carousel

> 组件 · `id: carousel`

用水平滑动的轨道展示一组内容，同一时刻只突出一项，其余滑出视野或露出边缘作暗示。通过分页点、 箭头或自动播放切换，常用于首屏 Banner、图片画廊与推荐位。适合「一组同类内容、逐个浏览」的场景， 不适合需要并排对照的信息。

**别名:** 轮播 · 图片轮播 · 轮播图 · banner 切换 · 跑马灯切换 · carousel · slider gallery

**分类:** Display / Media

## 适用场景

- 一组同类内容需要逐个浏览（Banner、图集、推荐位）
- 横向空间有限，又想保留「还有更多」的暗示
- 图片或卡片为主、文字说明简短

## 不适用场景

- 用户需要并排对照多个项目（用卡片网格或表格）
- 内容只有三五条且全部重要（直接平铺，别藏起来）
- 关键操作或表单藏在某一页里（切换会打断任务）

## 常见形式

- **分页点** (Dot pagination) — 底部小圆点指示位置，点按直达，最省空间
- **箭头** (Arrow controls) — 左右箭头逐步切换，桌面端最常见
- **自动播放** (Autoplay with pause) — 定时前进，悬停或聚焦暂停；必须提供暂停入口

## Platform API

- `aria-roledescription="carousel"`
- `scroll-snap-type`
- `aria-live`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) |
| shadcn/ui | [Carousel (Embla)](https://ui.shadcn.com/docs/components/carousel) |
| MUI | Carousel |

## 实现要点

**CSS:** `scroll-snap-type` `overflow-x` `transform`

轨道用 overflow-x: auto + scroll-snap-type: x mandatory，项目 scroll-snap-align: center， 纯 CSS 即可滑动；控件切换则用 transform: translateX(-index * 100%)。当前项用 aria-hidden 或 inert 降低朗读噪音，容器标 aria-roledescription="carousel"，切换时 aria-live="polite" 播报「第 n / N 项」。自动播放必须提供暂停按钮，并在 prefers-reduced-motion 下关闭。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个 Carousel 轮播组件。
先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion，支持键盘操作。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个轮播组件：水平滑动的轨道展示多个项目，用分页点和左右箭头切换。

**Design:** 创建轮播：轨道露出下一张边缘作暗示，当前项完整可见；底部分页点（当前项用主色加宽）， 左右箭头半透明悬浮在两侧，悬停显形；切换有 300ms 滑动过渡；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Carousel：activeIndex 受控；轨道 flex + overflow-hidden， 内层 translateX 过渡（时长乘 var(--demo-speed, 1)）；分页点与箭头同步 activeIndex； 键盘左右键切换，容器 role="group" + aria-roledescription="carousel"；自动播放用 setInterval，悬停/聚焦/暂停按钮停止；尊重 prefers-reduced-motion。无新增依赖。

## 相关概念

- [tabs](/components/tabs) — 替代方案
- [marquee](/components/marquee) — 替代方案
- [card](/components/card) — 搭配使用

## Sources

- [ARIA APG Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [MDN scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)

---

JSON: `/api/concept/components/carousel.json` · 站点: /components/carousel
