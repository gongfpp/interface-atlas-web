# 工具条 / Toolbar

> 组件 · `id: toolbar`

把作用于当前视图或选中项的操作按钮压成一条横向（偶尔纵向）控件带，按功能分组并用分隔线 划分。工具条管「动作」，菜单管「选项」，站点导航管「去哪」。典型如编辑器的加粗 / 斜体排版条、 图片查看器的旋转下载条、列表页的批量操作条。

**别名:** 工具条 · 工具栏 · 操作栏 · 快捷操作那一排 · toolbar · tool bar

**分类:** Navigation / Controls

## 名词辨析

工具条（Toolbar）是动作按钮的集合，按钮点了就执行；菜单条（Menubar）是菜单入口的集合， 点开后还要在列表里再选一次；导航条（Navbar）是站点或应用的目的地入口，点击会改变路由或 页面。看「点完之后发生什么」：执行动作 → 工具条；展开选项 → 菜单；换页面 → 导航。

## 适用场景

- 对当前视图或选中项有一组高频动作（格式化、批量操作）
- 动作需要常驻可见、一次点击即达
- 图标足以表达含义，可省略文字标签

## 不适用场景

- 动作低频或有争议（收进溢出菜单或更多按钮）
- 用户要从固定选项中选一个（那是菜单或 select）
- 负责全站目的地跳转（那是 navbar 或 sidebar）

## 常见形式

- **图标工具条** (Icon toolbar) — 纯图标按钮，悬浮提示补语义
- **排版工具条** (Formatting toolbar) — 加粗 / 斜体 / 对齐等富文本动作，带激活态
- **上下文工具条** (Contextual toolbar) — 仅在选中内容时出现，离开即隐藏

## Platform API

- `role="toolbar"`
- `aria-label`
- `roving tabindex`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA APG | [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) |
| Radix | [Toolbar](https://www.radix-ui.com/primitives/docs/components/toolbar) |
| MUI | [Toolbar](https://mui.com/material-ui/react-toolbar/) |

## 实现要点

**CSS:** `flex` `gap` `border-radius` `background` `transition`

容器 role="toolbar" + aria-label，内部按功能分组，分组用 role="group" + aria-label， 分隔符是 aria-hidden 的 1px 竖线。键盘用 roving tabindex：整条只占一个 Tab 站点， 组内左右方向键移动（纵向条用上下），Home / End 跳两端。切换型按钮用 aria-pressed。 窄屏允许换行或收进溢出菜单。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个 Toolbar 工具条组件。
先检查现有组件体系和 Design Token，优先复用现有按钮。
与导航条、菜单条区分：这里只放作用于当前上下文的动作。
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion，支持键盘操作（roving tabindex）。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个工具条（Toolbar）组件：一排分组的图标按钮作用于当前内容，支持切换激活态。

**Design:** 创建工具条：浅底圆角条 + 内边距 4px，按钮 32px 方形图标钮，激活态用主色浅底； 组间 1px 分隔线；按钮悬浮加深、按压轻微下沉；窄屏可换行；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Toolbar：role="toolbar" + roving tabindex，组内方向键移动； 切换型按钮 aria-pressed 绑定 Set<string> 状态；分隔符 aria-hidden；动作按钮 onClick 执行并写入状态；窄屏 flex-wrap。尊重 prefers-reduced-motion。无新增依赖。

## 相关概念

- [navbar](/components/navbar) — 替代方案
- [menu](/components/menu) — 搭配使用
- [button](/components/button) — 搭配使用

## 容易混淆

- [navbar](/components/navbar) — 导航条跳转目的地；工具条执行当前上下文的动作。
- [menu](/components/menu) — 菜单点开后再选一项；工具条按钮点击即执行。

## Sources

- [ARIA APG — Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
- [Apple HIG — Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)
- [MDN — ARIA toolbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)

---

JSON: `/api/concept/components/toolbar.json` · 站点: /components/toolbar
