# 抽屉滑入 / Drawer Slide

> 动效 · `id: drawer-slide`

面板从屏幕边缘（常为右侧或底部）滑入并带遮罩，像从抽屉里拉出来。 转场方向即空间隐喻：从边缘滑入表示"叠加的临时层"， 关闭时原路滑回，保持心智模型不换。

**别名:** 抽屉滑入 · 侧滑面板 · 侧边栏滑出 · 底部抽屉 · 滑出层

**分类:** Motion / Overlay

## 适用场景

- 移动端筛选、设置、详情等次级内容
- 需要保留主页面上下文的侧边操作
- 底部抽屉（bottom sheet）承载移动端快捷操作

## 不适用场景

- 不可跳过的强制任务（抽屉可随手关掉）
- 内容复杂需要大空间（改用整页或 modal）
- 滑入动画超过 300ms（等待感明显）

## 常见形式

- **右侧滑入** (Right sheet) — X 轴位移，桌面端最常见
- **底部抽屉** (Bottom sheet) — Y 轴上滑，移动端标准形态
- **遮罩渐变** (Scrim fade) — 遮罩与面板同步淡入，加深层次

## 实现要点

**CSS:** `transform: translateX/Y` `cubic-bezier(0.32, 0.72, 0, 1)` `scrim opacity` `transform-only (no reflow)`

面板 transform 从 translateX(100%)（或 translateY(100%)）到 0，260～300ms， 材料系抽屉曲线 cubic-bezier(0.32, 0.72, 0, 1)；关闭方向相反。 遮罩 opacity 0→1 同步。 只动 transform/opacity 不引起回流；打开时锁 body 滚动并管理焦点与 Esc 关闭。

## 交给 Agent 的任务 Prompt

```text
为项目添加抽屉滑入转场（右侧筛选抽屉）。

先检查现有 drawer/modal 组件，复用其焦点与滚动锁定逻辑。
要求：
- transform 滑入 260～300ms，材料抽屉曲线
- 遮罩同步淡入，Esc/遮罩点击可关
- 只动 transform/opacity，无布局位移
- 尊重 prefers-reduced-motion（改为淡入淡出）
- 不引入新依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 给筛选面板添加抽屉滑入效果：从右侧滑入并带遮罩。

**Design:** 筛选抽屉从右侧滑入 280ms，曲线带回抽感，遮罩同步淡入；关闭时原路滑回；底部抽屉在移动端从下方上滑。

**Implementation:** transform: translateX(100%) ↔ 0，transition 280ms cubic-bezier(0.32, 0.72, 0, 1)；遮罩 opacity 过渡同步。挂载期用两帧（rAF）切状态避免首帧跳变。打开时 document.body.style.overflow = hidden，Esc 与遮罩点击关闭，焦点移入抽屉。

## 相关概念

- [drawer](/motion/drawer) — 应用于
- [modal](/motion/modal) — 应用于
- [sidebar](/motion/sidebar) — 应用于
- [popover](/motion/popover) — 应用于

## Sources

- [Material Design — Side sheets](https://m3.material.io/components/side-sheets/overview)

---

JSON: `/api/concept/motion/drawer-slide.json` · 站点: /motion/drawer-slide
