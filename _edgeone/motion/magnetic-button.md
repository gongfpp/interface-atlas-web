# 磁吸按钮 / Magnetic Button

> 动效 · `id: magnetic-button`

鼠标靠近按钮时，按钮像被磁铁吸住一样朝光标方向偏移一小段距离， 离开后弹性归位。偏移量按光标与按钮中心的距离计算，通常限制在 8～20px。 一种高"手感"的桌面端彩蛋交互，常出现在作品集与创意官网。

**别名:** 磁吸按钮 · 磁性按钮 · 按钮被鼠标吸过去 · 鼠标靠近按钮偏移 · magnetic effect · 磁力吸附

**分类:** Motion / Hover

## 适用场景

- 落地页的 CTA、导航图标等少量关键按钮
- 创意类 / 作品集网站的品牌调性
- 桌面端为主、留白充足的布局

## 不适用场景

- 触屏设备（没有 hover，效果失效）
- 表单控件与密集操作区（偏移破坏瞄准）
- 页面大量按钮全部磁吸（眩晕且廉价）

## 常见形式

- **平移跟随** (Translate follow) — 按钮整体向光标平移，最基础
- **按钮与文字分层跟随** (Layered follow) — 文字比外壳多移一档，产生视差
- **磁吸 + 微倾斜** (Magnet + tilt) — 叠加轻微 rotateX/Y，立体感更强

## 实现要点

**CSS:** `transform: translate` `transition` `mousemove` `getBoundingClientRect`

在按钮（或更大的热区）上监听 mousemove，用 getBoundingClientRect 求光标相对 中心的比例，乘以最大偏移（如 0.3 × 40px）写入 transform: translate； mouseleave 时归零并给 300～500ms 的弹性过渡（cubic-bezier(.2,.8,.3,1.2)）。 进入热区时把 transition 缩短到 100ms 让跟随更"黏"。 触屏直接禁用，配 @media (hover:hover)。

## 交给 Agent 的任务 Prompt

```text
为项目的主 CTA 按钮添加磁吸交互。

先确认按钮组件结构与强调色令牌，保持一致。
要求：
- 热区 1.5 倍按钮大小，偏移上限 12px，跟随 100ms 弹回 400ms
- 键盘焦点与触屏行为不受影响
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给按钮添加磁吸效果：鼠标靠近时按钮朝光标方向轻微偏移，离开后弹回。

**Design:** 按钮在光标进入 1.5 倍热区时按比例向光标平移（最大 12px），跟随 100ms、 弹回 400ms 弹性缓动；只用于主 CTA，触屏与键盘操作不受影响。

**Implementation:** React 实现：热区 div 监听 onMouseMove/onMouseLeave，getBoundingClientRect 计算相对中心偏移，setState 驱动 transform: translate(x,y)；内部用 will-change: transform。跟随 100ms、回弹 400ms cubic-bezier(.2,.8,.3,1.2)。 @media (hover:hover) 门控；尊重 prefers-reduced-motion（禁用偏移）。

## 相关概念

- [hover-lift](/motion/hover-lift) — 相似概念
- [press-feedback](/motion/press-feedback) — 相似概念
- [hover-glow](/motion/hover-glow) — 相似概念
- [elastic-bounce](/motion/elastic-bounce) — 相似概念

## Sources

- [MDN — Element: mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)

---

JSON: `/api/concept/motion/magnetic-button.json` · 站点: /motion/magnetic-button
