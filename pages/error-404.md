# 404 页面 / 404 Page

> 页面 · `id: error-404`

在用户请求的地址不存在时展示的兜底页面：用一句人话说明发生了什么，提供返回首页、搜索或推荐入口，把一次失败访问转成继续浏览的机会。它不解决问题本身，但决定用户是离开还是留下。

**别名:** 404 页面 · 找不到页面 · 页面不存在 · 页面打不开 · 链接点进去空的 · 迷路页 · 死链页

**分类:** Page / Error

## 适用场景

- 请求路径不存在或页面已下线
- 用户输入或点击了错误链接
- 内容被删除后仍需承接旧流量

## 不适用场景

- 服务端或后端故障（应使用 500 服务错误页）
- 未登录或权限不足（应引导登录或返回）
- 旧链接可精确重定向到新地址（直接跳转即可）

## 常见形式

- **极简提示** (Minimal) — 只有状态码、一句说明和一个返回入口
- **带搜索** (With Search) — 提供搜索框与热门链接，帮用户自己找回目标
- **插图引导** (Illustrated) — 用插画与推荐内容弱化失败感

## 页面结构

1. **状态码与标题** — 用 404 加一句人话标题，先让用户明白没有崩。
2. **说明文案** — 一句话解释地址不存在，避免技术术语与自责语气。
3. **插图** — 轻量插画或图标，弱化失败感但不喧宾夺主。
4. **操作入口** — 主按钮返回首页，次入口返回上一页或联系支持。
5. **推荐内容** — 搜索框或热门链接，把用户带向下一步而不是终点。

## 实现要点

**CSS:** `flex` `grid` `min-height: 100vh` `text-align: center` `max-width: 48ch`

整页用 min-height 100vh 加 flex 居中，内容宽度限制在 48ch 内保证文案可读。状态码可用大号 font-serif 做视觉锚点， 搜索框与推荐链接放在同一 max-width 容器内。服务器返回真实 404 状态码，不要用 200 包裹错误页，否则搜索引擎会收录空页。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 404 页面。

先检查现有路由、错误边界与设计 Token，优先复用。
要求：
- 居中布局：状态码、说明、插图、主次操作
 - 搜索框可过滤推荐链接
 - 服务端返回真实 404 状态码
 - 深浅色一致，动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个 404 页面，包含状态码、说明文案和返回首页按钮。

**Design:** 设计一个 404 页面：居中布局，大号 404 状态码，一句说明，插图或图标，主按钮返回首页，次入口返回上一页； 带搜索框与三个热门链接，深浅色一致，移动端优先。

**Implementation:** 用 React 加 Tailwind 实现 404 页面：搜索框受控并可在输入时过滤推荐链接；主按钮走路由返回首页； 确保服务端返回真实 404；尊重 prefers-reduced-motion；不新增依赖。

## 相关概念

- [error-500](/pages/error-500) — 相似概念
- [button](/pages/button) — 包含组件
- [navbar](/pages/navbar) — 包含组件
- [empty-state](/pages/empty-state) — 使用模式

## Sources

- [MDN — HTTP 404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
- [Nielsen Norman Group — Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)

---

JSON: `/api/concept/pages/error-404.json` · 站点: /pages/error-404
