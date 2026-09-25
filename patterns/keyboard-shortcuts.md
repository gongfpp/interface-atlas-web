# 快捷键 / Keyboard Shortcuts

> 交互模式 · `id: keyboard-shortcuts`

为高频操作提供可发现的键盘加速键，并配帮助入口。提示可用工具条标注、快捷键对话框（⌘K 风格）或 vim 式序列。它服务专家用户提速，同时必须保证焦点可见、不抢夺输入框按键，新手也能查到怎么按。

**别名:** 快捷键 · 键盘快捷键 · 快捷键提示 · 键盘加速键 · 按键操作 · keyboard shortcuts · hotkeys · key bindings

**分类:** Interaction / Keyboard

## 适用场景

- 高频重复操作密集（编辑器、后台、设计工具）
- 用户以键盘流为主，追求肌肉记忆
- 已有命令面板，需要补齐按键绑定与帮助

## 不适用场景

- 表单输入为主的页面，全局劫持按键会毁掉打字
- 触屏为主的产品，快捷键无处施展
- 只给快捷键不给可发现入口，新手完全摸不到

## 常见形式

- **工具条标注** (Tooltip hints) — 按钮旁或悬浮提示里标注按键，最轻量
- **快捷键对话框** (Shortcuts dialog) — ⌘K 或 ? 唤出全量速查表
- **vim 式序列** (Vim-style sequences) — 多键序列（gg、dd），专家效率极高但学习成本大

## Platform API

- `keydown`
- `KeyboardEvent`
- `:focus-visible`

## 实现要点

**CSS:** `:focus-visible` `outline` `kbd` `grid`

监听 keydown 时检查 event.target：处于 input / textarea / contenteditable 内则跳过单键 绑定。用 event.key + metaKey/ctrlKey/shiftKey 组合判定，调用 preventDefault 前确认不会 破坏系统或浏览器保留键。快捷键对话框可 role="dialog"，kbd 元素展示按键。焦点环用 :focus-visible，尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现快捷键体系。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 高频操作有按键绑定，并在 UI 上可发现
- 提供快捷键帮助对话框或速查入口
- 不抢夺输入框按键，焦点环使用 :focus-visible
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个快捷键（Keyboard Shortcuts）演示：按钮可点，也能用按键触发，并提供速查帮助。

**Design:** 创建快捷键演示。要求：工具条按钮旁标注 ⌘K / ⌘S 等按键；按 ? 唤出快捷键速查对话框，列出分组绑定；实际按键可触发对应操作并给反馈；焦点环清晰；支持深浅色主题。

**Implementation:** 用 React + window keydown 实现：useEffect 绑定/解绑监听，检查 event.target 是否在输入控件内； 绑定表数据驱动（{keys, label, run}）。对话框 Esc 关闭并归还焦点。按键展示用 kbd 元素。 动画时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 相关概念

- [command-palette](/patterns/command-palette) — 搭配使用
- [tooltip](/patterns/tooltip) — 搭配使用
- [focus-ring](/patterns/focus-ring) — 搭配使用
- [keyboard-navigation](/patterns/keyboard-navigation) — 搭配使用

## Sources

- [W3C ARIA APG — Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [MDN — KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [Nielsen Norman Group — Keyboard Accessibility](https://www.nngroup.com/articles/keyboard-accessibility/)

---

JSON: `/api/concept/patterns/keyboard-shortcuts.json` · 站点: /patterns/keyboard-shortcuts
