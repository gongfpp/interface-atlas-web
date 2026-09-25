# 悬浮按钮 / Floating Action Button

> 组件 · `id: fab`

锚在视口角落、悬浮于内容之上的圆形按钮，承载当前页面唯一的主操作（新建、撰写、扫码）。 用阴影和位置宣告「我在所有内容之上」，比行内主按钮更醒目，但一屏只应有一个。点击后可展开 为带标签的扩展形态，或扇出一组快捷动作。

**别名:** 悬浮按钮 · 浮动按钮 · 悬浮球 · 右下角那个圆按钮 · FAB · floating action button

**分类:** Action

## 名词辨析

悬浮按钮不是「更显眼的主按钮」：主按钮嵌在页面布局里、随内容滚动；悬浮按钮脱离文档流、 常驻视口角落并覆盖在内容之上。判断标准是它是否悬浮在滚动内容之上，而不是颜色有多亮。

## 适用场景

- 页面有唯一、高频、正向的主操作（新建、撰写）
- 底部拇指热区需要常驻入口
- 工具型界面需要比行内按钮更强的操作召唤

## 不适用场景

- 有多个并列主操作（并列会互相削弱，用底部操作条）
- 操作是破坏性的（删除、清空）
- 会遮挡关键内容或底部导航

## 常见形式

- **单一圆形** (Single) — 纯图标圆形按钮，最常见形态
- **扩展标签** (Extended) — 图标 + 文字标签，行动意图更明确
- **快捷扇出** (Speed dial) — 点击扇出多个子动作，再点收起

## Platform API

- `<button>`
- `position`
- `box-shadow`
- `aria-expanded`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| MUI | [Fab](https://mui.com/material-ui/react-fab/) |
| Ionic | [Fab](https://ionicframework.com/docs/api/fab) |
| Material Design | [FAB](https://m3.material.io/components/floating-action-button/overview) |

## 实现要点

**CSS:** `position: fixed` `border-radius` `box-shadow` `transform` `transition`

position: fixed（或 absolute 于滚动容器外）锚定角落，圆形用 border-radius: 9999px； 抬升靠 box-shadow 多层阴影而非描边。扇出的子动作用 scale + opacity 依次错开出现， 主按钮旋转 45° 变关闭。按压 scale(0.94) 反馈；触控目标不小于 48px；尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现一个 FAB 悬浮按钮组件。
先检查现有组件体系和 Design Token，优先复用当前按钮与阴影变量。
与行内主按钮区分：悬浮、常驻、一屏一个。
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion，支持键盘操作。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个悬浮按钮（FAB）组件：圆形图标按钮固定在右下角，点击扇出多个子动作。

**Design:** 创建 FAB：56px 圆形、主色填充、白色图标、多层柔和阴影；右下角距边 16px； 扩展形态为图标 + 标签胶囊；扇出子动作为 40px 小圆钮，从下往上错开浮现； 按压轻微缩小；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 FAB：variant 映射 single / extended / speed-dial；open 受控， 子动作用 CSS transition 交错 delay 呈现；role="menu" 或 group 语义，aria-expanded 标在主按钮上；主按钮点击切换 open，Esc 收起并归还焦点；active:scale-[0.94] 按压反馈； 尊重 prefers-reduced-motion。无新增依赖。

## 相关概念

- [button](/components/button) — 替代方案
- [press-feedback](/components/press-feedback) — 搭配使用
- [ripple](/components/ripple) — 搭配使用

## Sources

- [Material Design — Floating action button](https://m3.material.io/components/floating-action-button/overview)
- [Apple HIG — Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

---

JSON: `/api/concept/components/fab.json` · 站点: /components/fab
