# 底部抽屉 / Bottom Sheet

> 组件 · `id: bottom-sheet`

从屏幕底边升起、覆盖在当前页面之上的面板，顶部有抓手可供拖动或下滑关闭。打断程度介于模态框与 气泡卡片之间：有遮罩但拇指可及、可下滑快速收起。是移动端承接筛选、分享、短表单的默认容器， 桌面端应改用侧边抽屉或居中对话框。

**别名:** 底部抽屉 · 底部面板 · 上拉面板 · 手机底部弹出来的面板 · 底部弹层 · bottom sheet · action sheet

**分类:** Overlay / Mobile

## 名词辨析

「抽屉」有歧义：底部抽屉（Bottom Sheet）指从底边升起的面板；侧边抽屉（Drawer）从左右边缘滑入； 系统对话框的 sheet 是居中弹出的文档式窗口；表格软件的 sheet 则指工作表，与浮层无关。

## 适用场景

- 移动端筛选、排序、分享等短任务，需覆盖在当前页上
- 操作列表或选项数量有限，单手拇指可达
- 内容比一行 tooltip 多、比整页流程短

## 不适用场景

- 桌面端为主的界面（改用 drawer 或 modal）
- 需要强制决策、不可轻易关闭（改用 modal）
- 长表单或长篇阅读（改为全屏页面更稳）

## 常见形式

- **固定高度** (Fixed height) — 内容量可预期，一次到位不拖拽
- **可拖拽档位** (Draggable detents) — 抓手拖到半开 / 全开档位，iOS Sheet 风格
- **全屏展开** (Full expand) — 上拉占满屏幕，适合长内容或键盘弹出

## Platform API

- `<dialog>`
- `role="dialog"`
- `aria-modal="true"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| iOS | [UISheetPresentationController](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller) |
| MUI | [SwipeableDrawer](https://mui.com/material-ui/react-swipeable-drawer/) |
| Radix | [Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) |

## 实现要点

**CSS:** `position: fixed` `transform` `transition` `touch-action`

面板 fixed 贴底，用 transform: translateY(100%) ↔ 0 收放（不要动 height，GPU 友好）； 顶部抓手为 36×4 圆角条。拖拽档位用 pointer 事件跟踪 dy，松手按阈值吸附到最近档位； 下滑超过阈值关闭。遮罩淡入、body 滚动锁定、焦点移入面板，Esc 关闭；尊重 prefers-reduced-motion。

## 横向对比维度 (`overlay-container`)

- **打断程度:** 中高，有遮罩但可下滑快速关闭
- **内容容量:** 中高，适合操作列表与短表单
- **移动端友好:** 优，拇指热区在屏幕底部

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个 Bottom Sheet 底部抽屉组件。
先检查现有组件体系和 Design Token，优先复用当前组件。
与侧边 Drawer、居中 Modal 明确区分，只从底边升起。
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion，支持键盘与拖拽操作。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个底部抽屉（Bottom Sheet）组件：点击按钮从屏幕底部升起面板，带抓手和遮罩，可下滑关闭。

**Design:** 创建底部抽屉：圆角顶边 + 顶部居中抓手，半透明遮罩；标题行 + 可滚动内容 + 吸底操作按钮； 上滑 / 下滑关闭动画 240ms；抓手可拖到半开与全开两档；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Bottom Sheet：open 受控；面板 fixed inset-x-0 bottom-0， transform translateY 过渡（时长乘 var(--demo-speed, 1)）；抓手 pointerdown 起拖， 松手按阈值吸附档位或关闭；role="dialog" aria-modal="true"，焦点移入、Esc 与点遮罩关闭； 尊重 prefers-reduced-motion。无新增依赖。

## 相关概念

- [drawer](/components/drawer) — 替代方案
- [modal](/components/modal) — 替代方案
- [pull-to-refresh](/components/pull-to-refresh) — 搭配使用

## 容易混淆

- [drawer](/components/drawer) — 侧边抽屉从左右边缘滑入，底部抽屉只从底边升起。
- [modal](/components/modal) — 模态框居中且强调强制决策；底部抽屉贴底、可下滑关闭。

## Sources

- [Apple HIG — Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)
- [Material Design — Bottom sheets](https://m2.material.io/components/bottom-sheets/overview)
- [ARIA APG — Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

---

JSON: `/api/concept/components/bottom-sheet.json` · 站点: /components/bottom-sheet
