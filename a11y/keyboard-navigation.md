# 键盘导航 / Keyboard Navigation

> 无障碍 · `id: keyboard-navigation`

让所有功能都能只用键盘完成：Tab/Shift+Tab 按合理顺序移动焦点，复合组件内用方向键漫游并配 roving tabindex，Escape 关闭浮层并归还焦点。这是焦点环之外的一整套焦点秩序，规则写在 ARIA APG 里。

**别名:** 键盘导航 · 键盘操作 · 键盘可达 · tab 顺序 · 不用鼠标操作 · keyboard nav

**分类:** Accessibility / Keyboard

## 名词辨析

「Tab 键」是移动焦点的按键，「标签页（Tabs）」是一个组件——英文同形，中文口语都可能说成 Tab，一个是输入按键，一个是界面元素。

## 适用场景

- 工具栏、菜单、标签页等复合组件的组内焦点管理
- 弹层、抽屉、对话框需要打开与关闭的焦点闭环
- 任何必须「无鼠标可完成」的核心流程

## 不适用场景

- 用 tabindex="0" 把非交互元素强行拉进 Tab 序
- 组内每个项都 tabindex="0"，方向键又不能漫游
- Escape 关掉浮层后焦点掉回 body 顶

## 常见形式

- **线性 Tab 序** (Linear tab order) — DOM 顺序即焦点顺序，页面级默认
- **漫游 tabindex** (Roving tabindex) — 组内仅一项 tabindex="0"，方向键切换
- **Escape 归还焦点** (Escape dismiss) — 关闭浮层后焦点回到触发元素

## Platform API

- `tabindex`
- `keydown`
- `:focus-visible`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| WAI-ARIA APG | [Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) |
| WCAG | [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) |

## 实现要点

**CSS:** `tabindex` `:focus-visible` `keydown`

页面级用自然 DOM 顺序 + 原生可交互元素，别用正数 tabindex 重排。复合组件按 APG：组内一项 tabindex="0" 其余 -1，keydown 处理方向键/Home/End 并 .focus() 目标项；浮层打开时焦点移入，Escape 关闭并归还触发元素。keydown 里 preventDefault 前先确认按键属于该组件。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现完整键盘导航。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- Tab 顺序与视觉顺序一致，不使用正数 tabindex
- 复合组件方向键漫游 + roving tabindex
- 浮层 Escape 关闭并把焦点还给触发元素
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 让页面和组件完整支持键盘操作：Tab 移动、方向键选择、Escape 关闭。

**Design:** 焦点顺序与视觉顺序一致；工具栏与菜单组内只占一个 Tab 站点、方向键漫游；弹层打开焦点移入、Escape 关闭并回到触发按钮；每个焦点位置都有可见焦点环。

**Implementation:** 组合式组件：container role + 项目 refs，state 记录 activeIndex；tabIndex={i === active ? 0 : -1}；onKeyDown 分发 Arrow/Home/End 后 focus(next)。浮层用 dialog/role="menu"，打开 focus 首项、Escape 关闭并 trigger.focus()。

## 相关概念

- [focus-ring](/a11y/focus-ring) — 搭配使用
- [skip-link](/a11y/skip-link) — 搭配使用
- [menu](/a11y/menu) — 搭配使用
- [command-palette](/a11y/command-palette) — 搭配使用

## 容易混淆

- [tabs](/a11y/tabs) — tabs 是标签页组件；keyboard-navigation 里的 Tab 键是焦点移动按键——同名不同物。

## Sources

- [WAI-ARIA APG — Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [WCAG 2.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)

---

JSON: `/api/concept/a11y/keyboard-navigation.json` · 站点: /a11y/keyboard-navigation
