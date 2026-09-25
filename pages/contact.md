# 联系页 / Contact Page

> 页面 · `id: contact`

收集访客留言并提供多种联系渠道的页面：主表单只问必要字段（姓名、邮箱、主题、留言），提交后给出明确成功反馈；旁边或下方并列邮箱、电话、地址与社交入口，再用简短 FAQ 拦下高频问题。

**别名:** 联系页 · 联系我们 · 联系表单页 · 客服联系页 · 留言页 · 找我们页面 · 商务合作页

**分类:** Page / Support

## 适用场景

- 访客需要咨询、反馈或商务合作
- 需要有可追踪的消息收件入口
- 高频问题可先用 FAQ 自助解决

## 不适用场景

- 已经登录的用户有站内消息系统
- 需要实时对话支持（用在线客服更合适）
- 表单字段多到像资格审核

## 常见形式

- **表单为主** (Form-first) — 表单居中，联系方式作为补充信息
- **左右分栏** (Split Layout) — 左信息右表单，或反之，信息密度更高
- **支持中心式** (Support Hub) — 先给渠道选择与 FAQ，再露出表单

## 页面结构

1. **顶栏** — 站点导航与搜索，保证随时可离开当前任务。
2. **引导语** — 一句话说明能帮什么、多久回复，管理预期。
3. **联系表单** — 姓名、邮箱、主题与留言，必填项最少，错误就地提示。
4. **联系方式** — 邮箱、电话、地址与社交入口，按优先级排列。
5. **地图地址** — 有实体场所时给出地图与周边交通，否则省略。
6. **常见问题** — 三到五条折叠问答，先拦下能自助解决的问题。

## 实现要点

**CSS:** `flex` `grid` `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` `min-height: 44px` `gap: 1rem`

表单字段竖排并给每个控件绑定 label；触控目标至少 44px；错误信息紧贴字段并用 aria-describedby 关联。分栏变体用 grid 自适应折叠为单列；提交成功后显示可聚焦的成功提示，并保留输入以免刷新丢失。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现联系页。

先检查现有表单控件与校验逻辑，优先复用。
要求：
- 引导语 + 联系表单 + 联系方式 + FAQ
- 每个字段有 label，错误用 aria-describedby 关联
- 触控目标 ≥44px，键盘可完成提交
- 提交成功有明确反馈并保留输入
- 尊重 prefers-reduced-motion，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个联系页，包含联系表单、联系方式和一个常见问题区。

**Design:** 设计联系页：顶部引导语说明回复时长；左侧表单（姓名、邮箱、主题下拉、留言、提交按钮），字段有聚焦态与就地错误；右侧三行联系方式配图标；下方折叠 FAQ；移动端顺序为引导语→表单→联系方式→FAQ。深浅色一致。

**Implementation:** 用 React + Tailwind 实现联系页：受控表单 + 基础校验（必填、邮箱格式），错误用 aria-describedby 关联；触控目标 ≥44px；提交成功切到成功态并保留数据；FAQ 用 details 或受控手风琴；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [input](/pages/input) — 包含组件
- [textarea](/pages/textarea) — 包含组件
- [button](/pages/button) — 包含组件
- [form-validation](/pages/form-validation) — 使用模式
- [about](/pages/about) — 相似概念

## Sources

- [W3C WAI — Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
- [web.dev — Learn Forms: Validation](https://web.dev/learn/forms/validation)

---

JSON: `/api/concept/pages/contact.json` · 站点: /pages/contact
