# 图标变形 / Morphing Icon

> 动效 · `id: morphing-icon`

一个图标在两种状态间平滑变形，而不是替换—— 最经典是汉堡三横变关闭叉。 用同一组线条的旋转、位移与透明度组合完成， 传达"同一个控件换了状态"。

**别名:** 图标变形 · 汉堡变叉 · 图标切换动画 · 菜单变关闭 · 图标过渡

**分类:** Motion / Feedback

## 适用场景

- 汉堡菜单 ↔ 关闭、播放 ↔ 暂停等成对状态
- 同一位置的切换型图标按钮
- 需要强调"状态变了"而空间不变

## 不适用场景

- 两个语义无关的图标（变形反而误导）
- 变形前后形状差异过大（中间帧生硬）
- 图标极小（小于 16px 变形细节看不清）

## 常见形式

- **汉堡变叉** (Hamburger to X) — 中线上移淡出、上下线旋转交叉
- **加号变叉** (Plus to X) — 整体旋转 45°，最简单的变形
- **播放变暂停** (Play to pause) — 三角与双竖条互相变形

## 实现要点

**CSS:** `transform: rotate + translate` `transition 300ms` `opacity: middle line`

用三条 span（或 SVG line）加 transition transform 300ms。 汉堡变叉：上线 translateY(6px) rotate(45°)，下线 translateY(-6px) rotate(-45°)， 中线 opacity 0。 aria-label 必须随状态切换； 尊重 prefers-reduced-motion 改为直接切换图形。

## 交给 Agent 的任务 Prompt

```text
为项目导航按钮实现汉堡变叉图标变形。

先检查现有图标体系（SVG 或 iconfont），选择可行的实现层。
要求：
- 同一组线条的 rotate/translate/opacity 过渡，300ms
- aria-label 随状态切换，键盘可触发
- 图标占位尺寸不变，无布局位移
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给导航按钮添加汉堡变叉的图标变形动画。

**Design:** 菜单开合时汉堡三横在 300ms 内变形为关闭叉：上下线旋转交叉、中线淡出；图标占位不变，aria-label 同步切换。

**Implementation:** 三条绝对定位 span，open 状态：上线 translateY(6px) rotate(45deg)，下线 translateY(-6px) rotate(-45deg)，中线 opacity 0；transition transform+opacity 300ms。按钮加 aria-label={open ? 关闭 : 菜单}。reduced-motion 关闭过渡。

## 相关概念

- [button](/motion/button) — 应用于
- [menu](/motion/menu) — 应用于
- [drawer](/motion/drawer) — 应用于
- [press-feedback](/motion/press-feedback) — 相似概念

## Sources

- [MDN — CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions)

---

JSON: `/api/concept/motion/morphing-icon.json` · 站点: /motion/morphing-icon
