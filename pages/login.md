# 登录页 / Login Page

> 页面 · `id: login`

用最小干扰让已有账号用户进入系统的门面页：核心只有身份识别表单（邮箱/密码）与一个主按钮， 辅以第三方登录、忘记密码和注册入口。页面刻意保持极简——少一个字段，转化就高一分； 所有装饰都让位于"快点进去"这一目标。

**别名:** 登录页面 · 登陆页 · 登录界面 · 登录表单 · 登录框 · 输密码进系统的页面 · 账号登录页

**分类:** Page / Auth

## 适用场景

- 已有账号体系的产品的入口
- 回访用户需要快速恢复会话
- 需要对接 SSO 或第三方身份提供方

## 不适用场景

- 新用户首次创建账号（用注册页承接）
- 一次性工具、无需身份识别
- 内嵌到弹窗的轻量验证（用模态登录更轻）

## 常见形式

- **居中卡片** (Centered Card) — 单卡片居中，最通用的默认形态
- **分屏品牌** (Split Screen) — 左品牌图 + 右表单，SaaS 常用
- **多步登录** (Multi-step) — 先认邮箱再要密码，支持无密码流
- **社交优先** (Social-first) — 第三方登录按钮置顶，表单退居其次

## 页面结构

1. **品牌区** — Logo 或品牌插画；分屏布局时占一侧，移动端隐藏。
2. **登录表单** — 邮箱 / 用户名 + 密码，字段最少化，主按钮唯一。
3. **第三方登录** — OAuth 按钮置于分隔线下，与主按钮区分主次。
4. **辅助链接** — 忘记密码、记住我等次要操作，弱化处理。
5. **注册入口** — 「没有账号？注册」放页尾，形成账号闭环。

## 实现要点

**CSS:** `flex` `grid` `min-height: 100vh` `place-items: center`

居中卡片用 min-h-screen grid place-items-center；分屏变体 md 断点下 grid-cols-2， 左侧品牌区在移动端隐藏。表单字段用 autocomplete（username / current-password）， 密码框配可见性切换；错误信息内联展示并 aria-describedby 关联； 提交中按钮禁用防止重复提交。

## 横向对比维度 (`auth-pages`)

- **用户状态:** 已有账号的回访用户
- **核心目标:** 快速进入系统
- **安全要求:** 中——会话与暴力破解防护

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现登录页。

先检查现有认证接口、路由守卫与表单组件，保持一致。
要求：
- 邮箱 + 密码表单，autocomplete 与内联错误提示
- 第三方登录按钮与注册入口
- 提交态防重复提交
- 深浅色一致，键盘可访问
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个登录页面，包含邮箱密码表单、第三方登录和注册入口。

**Design:** 创建居中卡片式登录页：品牌 logo、邮箱与密码输入（带可见性切换）、记住我开关、忘记密码链接、主按钮"登录"、分隔线下的两个第三方登录按钮、底部"没有账号？注册"。错误内联提示，提交中按钮 loading。

**Implementation:** 用 React + Tailwind 实现登录页：受控表单 + 前端校验（邮箱格式、密码非空）， autocomplete 属性齐全；密码可见性切换；提交态禁用按钮； 错误 aria-describedby 关联字段；深浅色一致。不新增依赖。

## 相关概念

- [input](/pages/input) — 包含组件
- [button](/pages/button) — 包含组件
- [form-validation](/pages/form-validation) — 使用模式
- [signup](/pages/signup) — 替代方案

## Sources

- [Nielsen Norman Group — Login & Registration Forms](https://www.nngroup.com/articles/login-registration-forms/)
- [MDN — Web authentication](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API)

---

JSON: `/api/concept/pages/login.json` · 站点: /pages/login
