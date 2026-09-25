# 警告提示 / Alert

> 组件 · `id: alert`

嵌在页面流内、带状态色底色的横条，用于必须被看见的消息：错误、警告、重要通知。 它占据文档流而不是覆盖内容，通常常驻直到问题被处理或用户手动关闭。

**别名:** 警告条 · 提示横幅 · 警告框 · 通知横幅 · 错误提示条 · 页面顶部提示 · 表单提交后的错误提示

**分类:** Feedback

## 名词辨析

Alert 是页内持续显示的状态消息；Toast 是短暂浮层反馈；Modal 是必须处理的打断浮层。

## 适用场景

- 表单提交后的整体错误汇总
- 系统级通知（维护、额度将满）
- 破坏性操作前的页面内警告

## 不适用场景

- 轻量的成功反馈（改用 toast）
- 只与单个字段相关（改用字段内联错误）
- 多处滥用会稀释注意力，保持克制

## 常见形式

- **信息** (Info) — 中性色，一般通知
- **成功** (Success) — 确认操作已完成
- **警告** (Warning) — 有风险但可以继续
- **错误** (Error) — 失败或危险，需要处理

## Platform API

- `role="alert"`
- `aria-live="assertive"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA | role="alert" |
| shadcn/ui | [Alert](https://ui.shadcn.com/docs/components/alert) |
| MUI | [Alert](https://mui.com/material-ui/react-alert/) |
| AntD | [Alert](https://ant.design/components/alert) |

## 实现要点

**CSS:** `background-color` `border` `border-radius` `flex`

状态色映射：info/success/warning/error 各配低饱和底色、同色系图标与左侧强调边。 结构：图标 + 标题 + 描述 + 可选操作与关闭。放在出错内容上方或附近，而不是一律堆在页面顶部。 颜色之外必须配图标与文字，避免只靠颜色传达状态。

## 横向对比维度 (`form-feedback`)

- **打断程度:** 中，占据版面可见但不阻断
- **持续性:** 高，常驻直到处理或关闭
- **错误定位能力:** 中，能说明原因与影响范围

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现警告提示（Alert）组件。

先检查现有组件体系与 Design Token，优先复用现有的状态色与语义色变量。
用途：表单错误汇总与系统级通知。
要求：
- 支持 info/success/warning/error 四种状态
- 图标 + 标题 + 描述 + 可选操作与关闭
- 不只靠颜色传达状态（图标 + 文字）
- 常驻显示，不自动消失
- 深浅色主题一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个警告提示（Alert）组件：带状态色底色的横条，包含图标、标题、说明文本和关闭按钮， 支持 info/success/warning/error 四种状态。

**Design:** 创建 Alert 组件。要求：低饱和状态色底 + 左侧同色强调边；图标 + 标题 + 描述行 + 右上关闭按钮； 圆角适中，文字对比度达标；常驻显示直到手动关闭；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Alert：variant 映射到配色对象（surface/border/icon 文本色）； 结构 flex：图标、内容区（标题 + 描述）、可选操作按钮、关闭按钮（aria-label）； 组件受控 visible 或由父层条件渲染；入场可用淡入 keyframes（时长乘 var(--demo-speed, 1)）； role 视状态用 alert（error）或 status。

## 相关概念

- [toast](/components/toast) — 替代方案
- [form-validation](/components/form-validation) — 替代方案
- [modal](/components/modal) — 相似概念

## 容易混淆

- [toast](/components/toast) — Toast 短暂自动消失，Alert 常驻直到状态消除。
- [modal](/components/modal) — Modal 阻断并要求操作，Alert 只告知不打断。

## Sources

- [Apple HIG — Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)
- [Material Design — Banners](https://m3.material.io/components/banners/overview)

---

JSON: `/api/concept/components/alert.json` · 站点: /components/alert
