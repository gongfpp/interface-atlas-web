# 撒花彩带 / Confetti

> 动效 · `id: confetti`

完成关键动作后从一点爆出彩色纸屑飘落，用一次性高能量庆祝"做成了"。 只在里程碑出现：提交成功、任务完成、订阅达成—— 正因为稀有，才有庆祝的分量。

**别名:** 撒花 · 彩带动画 · 庆祝特效 · 五彩纸屑 · 撒花庆祝

**分类:** Motion / Celebration

## 适用场景

- 里程碑完成（首次发布、支付成功、目标达成）
- 空状态被首次打破、成就解锁
- 品牌调性允许庆祝的 C 端产品

## 不适用场景

- 高频操作（每次保存都撒花即灾难）
- 严肃或专业工具界面
- 会遮挡关键结果信息的时机

## 常见形式

- **中心爆开** (Burst) — 从按钮中心向外抛射，最常用
- **双侧礼炮** (Cannons) — 左右两门礼炮对射，仪式感更强
- **顶部飘落** (Rain) — 从顶部持续飘落数秒，覆盖感最强

## 实现要点

**CSS:** `absolute particles` `random transform translate/rotate` `@keyframes fall` `cleanup after animation`

用绝对定位的若干小块（div 或 canvas 粒子），随机角度、初速、颜色做抛物线下落并旋转， 1～2s 动画结束后立即从 DOM 移除， 防止节点泄漏。 一次性触发，不循环； 尊重 prefers-reduced-motion 改为静态成功图标。

## 交给 Agent 的任务 Prompt

```text
为项目里程碑时刻添加撒花庆祝动效。

先检查产品调性与触发时机清单，确认撒花是合适的（低频正向）。
要求：
- 30～60 枚纸屑，1～2s 抛物线飘落后清理 DOM
- 一次性触发，颜色用品牌令牌
- 不遮挡结果信息，pointer-events 不拦截点击
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给任务完成时刻添加撒花庆祝效果：点击完成后爆出彩色纸屑。

**Design:** 完成按钮点击后从按钮中心爆出 30～60 枚纸屑，抛物线下落 1.5s 后消失；颜色取品牌色板；一次性，不循环。

**Implementation:** 点击时生成 N 个绝对定位小 div，随机 --dx/--dy/--rot 自定义属性驱动 @keyframes 抛物线 + 旋转，animationend 后 remove()。容器 pointer-events:none + overflow:hidden。reduced-motion 直接显示成功状态。

## 相关概念

- [elastic-bounce](/motion/elastic-bounce) — 相似概念
- [empty-state](/motion/empty-state) — 搭配使用
- [button](/motion/button) — 应用于
- [optimistic-ui](/motion/optimistic-ui) — 搭配使用

## Sources

- [canvas-confetti — canonical implementation](https://github.com/catdad/canvas-confetti)

---

JSON: `/api/concept/motion/confetti.json` · 站点: /motion/confetti
