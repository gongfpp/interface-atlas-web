# 命令面板 / Command Palette

> 组件 · `id: command-palette`

用快捷键（⌘K / Ctrl+K）唤出的浮动搜索面板：输入即筛选命令、页面或内容， 键盘上下选择、回车执行。macOS Spotlight 把它带入大众视野， 现在是效率工具和开发者产品的标配。

**别名:** 命令搜索框 · 快捷搜索框 · 快速操作面板 · spotlight 搜索 · ctrl+k 搜索 · Mac 那种快捷搜索框 · cmd+k

**分类:** Navigation / Search

## 适用场景

- 功能多、层级深的产品（后台、开发工具、笔记软件）
- 目标用户是高频操作的高阶用户
- 想减少导航层级、直达任何地方

## 不适用场景

- 面向大众的浅层应用，用户不知道快捷键文化
- 移动端为主要场景（虚拟键盘体验差），改用底部搜索
- 命令总数极少（< 10 个），普通菜单就够了

## 常见形式

- **纯命令** (Command-only) — 只列操作命令，VS Code 风格
- **万能搜索** (Universal) — 命令 + 页面 + 内容 + 最近使用
- **AI 增强** (AI-enhanced) — 自然语言查询 + 建议操作

## Platform API

- `<dialog>`
- `role="combobox"`

## 实现要点

**CSS:** `position: fixed` `backdrop-filter: blur` `box-shadow` `transform-origin`

本质是受控弹层：fixed 居中 + 遮罩模糊；输入过滤用 useMemo 计算分组列表， 焦点锁定在输入框；键盘导航管理 activeIndex。开源实现可参考 cmdk（React）。 注意 aria-role="dialog" 与 focus trap。

## 横向对比维度 (`navigation-overlay`)

- **打断程度:** 中，覆盖但可快速关闭
- **内容容量:** 中，列表可虚拟滚动
- **触发成本:** 低，一组快捷键

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现命令面板（Command Palette）。

先检查现有弹层 / Dialog 组件与 Design Token，优先复用。
要求：
- ⌘K / Ctrl+K 全局唤出，Esc 关闭
- 输入即筛，结果按「命令 / 页面」分组
- 完整键盘导航与 aria 属性（dialog、listbox、option）
- 弹出动画轻微，尊重 prefers-reduced-motion
- 支持注册自定义命令（提供 useCommands 或类似 API）
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个命令面板组件：⌘K 唤出，输入即筛选命令列表，键盘上下选择、回车执行。

**Design:** 创建命令面板。要求：屏幕居中浮层 + 半透明遮罩模糊；顶部输入框，下方分组结果列表（命令 / 页面 / 最近使用）；选中项高亮；每项右侧显示快捷键提示；弹出有轻微 scale + fade 动画。视觉参考 macOS Spotlight / Linear。

**Implementation:** 用 React 实现受控命令面板：全局 keydown 监听 ⌘K/Ctrl+K 开关；role="dialog" + focus trap；输入 useMemo 过滤 + 分组；activeIndex 键盘导航（↑↓ Enter）；点击遮罩关闭。可参考 cmdk 的 API 设计但自行实现，不引入依赖。

## 相关概念

- [search](/components/search) — 搭配使用
- [dropdown](/components/dropdown) — 替代方案
- [sidebar](/components/sidebar) — 相似概念
- [menu](/components/menu) — 相似概念

## 可搭配的风格

`minimalism`

## Sources

- [macOS Human Interface Guidelines — Spotlight](https://developer.apple.com/design/human-interface-guidelines/)
- [cmdk — Command menu for React](https://cmdk.paco.me/)

---

JSON: `/api/concept/components/command-palette.json` · 站点: /components/command-palette
