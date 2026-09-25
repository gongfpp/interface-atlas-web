# 按钮 / Button

> 组件 · `id: button`

用可点击的色块触发一个明确的动作，是界面中最基础的操作入口。 通过填充、描边、幽灵等视觉层级区分主次操作，按压时有即时的下沉反馈， 繁忙时进入加载态并禁用点击，防止重复提交。

**别名:** 按钮 · 按键 · 点击按钮 · 主按钮 · 提交按钮 · CTA 按钮

**分类:** Action / Form

## 适用场景

- 需要用户主动触发一个明确动作（提交、创建、确认）
- 同一区域存在主次多个操作，需要视觉分层
- 操作会改变数据或状态，需要防止误触与重复提交

## 不适用场景

- 动作只是导航到另一页，用链接更符合预期
- 操作可逆且频繁切换，用开关或复选框更合适
- 一屏内大量重复的次要操作，弱化为文字按钮避免视觉噪音

## 常见形式

- **主要** (Primary) — 实心填充，一屏内主操作唯一
- **次要** (Secondary) — 描边样式，与主操作并列
- **幽灵** (Ghost) — 无边框纯文字，弱化视觉重量
- **危险** (Danger) — 不可逆操作的警示色

## Platform API

- `<button>`
- `type`
- `role="button"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| HTML | [<button>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) |
| shadcn/ui | [Button](https://ui.shadcn.com/docs/components/button) |
| MUI | [Button](https://mui.com/material-ui/react-button/) |
| AntD | [Button](https://ant.design/components/button) |

## 实现要点

**CSS:** `transition` `transform: scale(0.97)` `background` `box-shadow`

用 transition 让颜色与阴影平滑变化，按压瞬间加 scale(0.97) 下沉； focus-visible 描边保证键盘可达；加载态将文字替换为 spinner 并 disabled， 保留按钮宽度避免布局跳动。触控目标高度不小于 44px。

## 横向对比维度 (`click-feedback`)

- **强度:** 低～中，轻微下沉即可
- **移动端友好:** 好，触控目标不小于 44px
- **适合元素:** 按钮 / 小尺寸可点块

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现按钮组件。

先检查现有的 Design Token 与按钮类样式，优先复用现有颜色与圆角变量。
要求：
- 主要 / 次要 / 幽灵 / 危险四种样式
- 按压反馈与 focus-visible 键盘焦点样式
- 加载态：spinner + disabled + 宽度不变
- 深浅色主题一致，尊重 prefers-reduced-motion
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个按钮组件，支持主要、次要、幽灵、危险四种样式和加载状态。

**Design:** 创建按钮组件。要求：四种层级（实心主按钮、描边次按钮、幽灵文字按钮、危险按钮）， 按压有轻微下沉反馈，加载时显示 spinner 并禁用点击且保持宽度不变， 支持 icon 前置位，深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Button：variant 与 size 走映射表；disabled 与 loading 合并控制 pointer-events；点击反馈用 active:scale-[0.97] + transition；加载态渲染 spinner 并保留 min-width；支持 asChild 或 as="a" 复用到链接场景。 尊重 prefers-reduced-motion（去掉位移类动画）。

## 相关概念

- [press-feedback](/components/press-feedback) — 替代方案
- [ripple](/components/ripple) — 搭配使用
- [magnetic-button](/components/magnetic-button) — 搭配使用
- [hover-lift](/components/hover-lift) — 搭配使用
- [loading-spinner](/components/loading-spinner) — 搭配使用

## 可搭配的风格

`minimalism` `neobrutalism` `glassmorphism`

## Sources

- [Material Design — Common buttons](https://m3.material.io/components/buttons/overview)
- [Apple HIG — Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

---

JSON: `/api/concept/components/button.json` · 站点: /components/button
