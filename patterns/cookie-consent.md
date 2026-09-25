# Cookie 同意条 / Cookie Consent Banner

> 交互模式 · `id: cookie-consent`

在写入非必要 Cookie 前向用户征求同意的横幅或浮层，属于合规门槛而非系统告警。提供接受、拒绝或颗粒度选项，并记住选择；未作出选择前不得落下追踪类 Cookie。常驻底部或首入居中，不应遮挡核心操作。

**别名:** Cookie 同意条 · Cookie 提示条 · cookie 小横幅 · 隐私同意条 · 追踪同意弹条 · cookie banner · cookie consent · consent banner

**分类:** Feedback / Compliance

## 名词辨析

易与 Alert 混淆：Alert 是系统消息提示，用于状态与错误；Cookie 同意条是写入追踪前的法律门槛， 必须等用户做出选择后才可落下非必要 Cookie，不能用"知道了"糊弄过去。

## 适用场景

- 站点要写入分析、广告等非必要 Cookie
- 面向 GDPR / ePrivacy 等有同意要求的地区
- 需要记录并可撤回用户的同意选择

## 不适用场景

- 只用严格必要 Cookie，无需打扰用户
- 把它当通用公告条复用（语义与法律效力都错位）
- 拒绝按钮比接受更难找到（暗黑模式，合规与信任双输）

## 常见形式

- **最简告知** (Minimal notice) — 一句话说明 + 接受/拒绝两钮，最克制
- **颗粒度选择** (Granular choices) — 按类别开关（必要/分析/营销），必要项锁定
- **墙式** (Wall-style) — 不同意就不能继续，争议大，慎用

## 实现要点

**CSS:** `position` `transition` `aria-live` `form`

同意前不加载非必要脚本；选择写入长期存储（cookie 或 localStorage）并可从设置页撤回。 横幅用 position: fixed 贴底，移动端改为全宽卡片；按钮层级上"拒绝"与"接受"同等可发现。 入场过渡时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Cookie 同意条。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 同意前不加载非必要脚本
- 接受、拒绝、颗粒度偏好三类入口，拒绝同等可发现
- 选择可持久化并可从设置撤回
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个 Cookie 同意条（Cookie Consent Banner），在写入追踪 Cookie 前征求用户同意。

**Design:** 创建 Cookie 同意条。要求：底部横幅说明用途，提供接受全部 / 拒绝 / 管理偏好；偏好面板按必要、分析、营销分类开关（必要项锁定）；拒绝与接受同等可发现；支持深浅色主题。

**Implementation:** 用 React + 受控开关实现 Cookie 同意条：useState 管理可见性与分类开关；确认后写入 localStorage 并隐藏横幅；设置入口可再次打开。role="dialog" 或 region + aria-label 表达 语义，焦点进入面板。动画时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 相关概念

- [alert](/patterns/alert) — 替代方案
- [toast](/patterns/toast) — 相似概念
- [form-validation](/patterns/form-validation) — 搭配使用

## Sources

- [W3C — Privacy Principles](https://www.w3.org/TR/privacy-principles/)
- [MDN — HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Nielsen Norman Group — Cookie Consent](https://www.nngroup.com/articles/cookie-consent/)

---

JSON: `/api/concept/patterns/cookie-consent.json` · 站点: /patterns/cookie-consent
