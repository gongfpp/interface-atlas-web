# 开关 / Switch

> 组件 · `id: switch`

用滑轨上的圆形滑块表示二元设置的开与关，拨动立即生效，无需确认。 滑块位移与轨道变色同时反馈状态，右侧或内嵌「开 / 关」文字辅助辨认， 是设置页的标准控件。

**别名:** 开关 · 拨动开关 · 切换开关 · toggle 开关 · 滑动开关 · 开关键

**分类:** Form / Input

## 适用场景

- 二元设置拨动后立即生效（通知、深色模式）
- 状态改变无需提交即可见
- 设置页等以「开 / 关」心智组织的场景

## 不适用场景

- 修改后需要点保存才生效，用 checkbox + 表单
- 语义是「从列表多选几项」，用 checkbox
- 需要第三个中间状态，用分段控件

## 常见形式

- **基础** (Basic) — 纯滑轨无文字
- **带状态文字** (With text) — 内嵌开 / 关字样辅助辨认
- **设置行** (Settings row) — 左标题右开关，设置页标准排布

## Platform API

- `<input type="checkbox" role="switch">`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA | role="switch" |
| shadcn/ui | [Switch](https://ui.shadcn.com/docs/components/switch) |
| MUI | [Switch](https://mui.com/material-ui/react-switch/) |
| AntD | [Switch](https://ant.design/components/switch) |

## 实现要点

**CSS:** `transition` `transform: translateX` `background` `border-radius: 999px`

轨道 w 固定，thumb 用 translateX 在两端间过渡，轨道底色同步在灰与 accent 间切换， 全部时长乘 --demo-speed。role="switch" + aria-checked 表达状态； 整行 label 可点击；触控热区高不小于 32px（视觉可以更小）。 状态文字用 opacity 淡入淡出避免跳动。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现开关组件。

先检查现有表单组件与 accent 色变量，保持一致。
要求：
- 受控 checked，拨动立即生效
- 滑块位移与轨道变色过渡尊重 prefers-reduced-motion
- role="switch" + aria-checked + 键盘空格切换
- 深浅色主题一致
- 不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个开关组件，拨动立即切换状态并反馈到界面。

**Design:** 创建开关组件。要求：滑块位移 + 轨道变色双重反馈，动画平滑； 提供纯滑轨、内嵌开 / 关文字、左标题右开关的设置行三种形态； role="switch" + aria-checked；深浅色一致。

**Implementation:** 用 React + Tailwind 实现 Switch：受控 checked；按钮内绝对定位 thumb， translateX 过渡（时长乘 --demo-speed）；轨道 checked ? bg-accent : bg-ink-3/30；状态文字 opacity 过渡；role="switch" + aria-checked + aria-labelledby 关联标题。

## 相关概念

- [checkbox](/components/checkbox) — 相似概念
- [press-feedback](/components/press-feedback) — 搭配使用
- [settings](/components/settings) — 搭配使用

## 可搭配的风格

`minimalism` `claymorphism`

## Sources

- [Apple HIG — Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles)
- [Material Design — Switch](https://m3.material.io/components/switch/overview)

---

JSON: `/api/concept/components/switch.json` · 站点: /components/switch
