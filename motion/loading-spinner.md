# 加载指示器 / Loading Spinner

> 动效 · `id: loading-spinner`

用一个持续旋转的圆环或圆点表示"正在处理"。占用空间极小、语义全球通用， 适合嵌入按钮内、跟随光标或作为局部区块的轻量加载反馈。 它只表达"忙碌"，不表达进度多少，也不预告还剩多久。

**别名:** 加载图标 · 转圈加载 · 加载中图标 · 转圈圈 · loading 转圈 · 旋转加载

**分类:** Motion / Loading

## 适用场景

- 1～5 秒的短时等待（请求、提交、刷新）
- 按钮内联表示"点击已生效，处理中"
- 局部小区域加载，不值得整页骨架屏

## 不适用场景

- 超过 5～10 秒的等待（改用进度条）
- 首屏内容加载（改用骨架屏保布局）
- 无限旋转但任务可能失败（需可取消/可退出）

## 常见形式

- **圆环** (Ring) — 部分弧线旋转，Material 风格
- **圆点跳动** (Dots) — 三点波浪起伏，社交产品常用
- **双环** (Dual ring) — 双层反向旋转，科技感更强

## 实现要点

**CSS:** `@keyframes spin` `border-radius: 50%` `border-top-color`

最简实现：直径 16～24px 的圆，边框 2～3px，只给顶部一个强调色边框， animation: spin 0.8s linear infinite。圆点版用三个圆 + 交错 animation-delay。 必须加 role="status" 与 aria-label="加载中"， 并尊重 prefers-reduced-motion（降级为呼吸透明度）。

## 横向对比维度 (`loading-indicator`)

- **打断程度:** 低，占位极小
- **信息量:** 低，只表达忙碌
- **适用时长:** 1～5 秒
- **与结果一致性:** 低，不预示结果形态

## 交给 Agent 的任务 Prompt

```text
为项目中的异步按钮与局部区块统一加载指示器。

先检查现有 loading 组件与令牌，避免重复造轮子。
要求：
- 16px 圆环指示器，0.8s 匀速旋转，颜色用强调色令牌
- 按钮场景禁用交互并锁定宽度防抖动
- 可访问性：role="status" + aria-label
- 尊重 prefers-reduced-motion
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给按钮添加旋转加载指示器：提交中按钮内显示转圈图标并禁用点击。

**Design:** 提交时按钮文字替换为 16px 强调色圆环指示器，按钮禁用并保持宽度不变， 旋转 0.8s linear infinite；完成后恢复文字。

**Implementation:** 纯 CSS：border: 2px solid transparent; border-top-color: var(--accent); animation: spin .8s linear infinite。按钮内联时用 flex 居中并锁宽 （min-width 防抖动）。加 role="status" aria-label="加载中"； 尊重 prefers-reduced-motion（改用透明度呼吸）。

## 相关概念

- [skeleton-loading](/motion/skeleton-loading) — 替代方案
- [progress-bar](/motion/progress-bar) — 替代方案
- [button](/motion/button) — 应用于

## Sources

- [Material Design — Progress indicators](https://m3.material.io/components/progress-indicators/overview)

---

JSON: `/api/concept/motion/loading-spinner.json` · 站点: /motion/loading-spinner
