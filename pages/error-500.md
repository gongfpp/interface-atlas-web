# 服务错误页 / Server Error Page

> 页面 · `id: error-500`

在后端异常、请求无法完成时展示的页面：不暴露内部细节，用中性语气说明是服务端问题，给出稍后重试或联系支持的路径，并尽量保留用户已输入的内容。它承担故障期间的信任维护。

**别名:** 500 页面 · 服务器错误 · 服务出错页 · 系统错误页 · 服务崩了 · 服务器开小差 · 页面出错了

**分类:** Page / Error

## 适用场景

- 服务端异常、数据库或依赖不可用
- 请求超时或网关错误
- 需要在不暴露细节的前提下说明故障

## 不适用场景

- 页面地址不存在（应使用 404 页面）
- 用户无权限访问（应提示权限或登录）
- 可自动重试立即恢复的瞬时抖动

## 常见形式

- **极简错误** (Minimal) — 只说发生了服务错误，给一个重试按钮
- **带重试与倒计时** (With Retry) — 自动重试并显示倒计时与尝试次数
- **状态与支持** (Status and Support) — 展示故障状态摘要与支持入口，适合关键业务

## 页面结构

1. **状态码与标题** — 用 500 与中性标题说明是服务端问题，而非用户操作错误。
2. **错误说明** — 说清正在恢复、是否需要用户操作，不暴露堆栈或内部 ID。
3. **重试操作** — 主按钮重试请求，可带倒计时与尝试次数。
4. **故障状态** — 展开可看影响范围与更新时间，默认收起。
5. **支持入口** — 提供状态页或联系支持，供重试无果时求助。

## 实现要点

**CSS:** `flex` `grid` `min-height: 100vh` `text-align: center` `max-width: 48ch`

与 404 共用一套居中骨架：min-height 100vh 加 flex 居中，内容限制在 48ch。重试按钮点击后禁用并显示进行中状态， 用 aria-live 播报结果变化。服务端返回 5xx 状态码；日志记录请求 ID 供支持排查，但不要把堆栈渲染到页面上。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现服务错误页。

先检查现有错误边界、请求层与设计 Token，优先复用。
要求：
- 居中布局：状态码、说明、重试、详情、支持
- 保留用户已输入内容
- 重试态用 aria-live 播报，避免重复点击
- 服务端返回真实 5xx，日志记录请求 ID
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个服务错误页，包含状态码、错误说明和重试按钮。

**Design:** 设计一个 500 服务错误页：居中布局，大号 500，中性说明，重试主按钮，可展开的故障详情， 底部状态页与支持链接；深浅色一致，重试态有明确进行中反馈。

**Implementation:** 用 React 加 Tailwind 实现服务错误页：重试按钮受控并禁用重复点击，结果变化用 aria-live 播报； 保留用户表单输入；返回真实 5xx；动画尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [error-404](/pages/error-404) — 相似概念
- [button](/pages/button) — 包含组件
- [alert](/pages/alert) — 包含组件
- [empty-state](/pages/empty-state) — 使用模式

## Sources

- [MDN — HTTP 500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
- [Nielsen Norman Group — Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)

---

JSON: `/api/concept/pages/error-500.json` · 站点: /pages/error-500
