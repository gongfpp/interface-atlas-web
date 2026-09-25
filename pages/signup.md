# 注册页 / Signup Page

> 页面 · `id: signup`

把陌生访客变成账号的转化页：表单只保留起步必需的字段（邮箱 + 密码），其余信息 延后到产品内补齐；辅以第三方注册、密码强度提示和服务条款勾选。与登录页共用 布局骨架，但每一处设计都在回答"注册这件事值不值得、麻不麻烦"。

**别名:** 注册页面 · 注册账号 · 创建账号页面 · 新用户注册 · 立即注册页 · 开户页 · 注册表单

**分类:** Page / Auth

## 适用场景

- 需要创建新账号的转化入口
- 产品承诺注册后即可开始使用（先试后买）
- 需要引导式补全资料的多步 onboarding 前置

## 不适用场景

- 已有账号用户的登录（勿让回访用户误入）
- 邀请制/企业 SSO 自动开户（无需自助注册）
- 匿名试用优先的产品（试用后再索要账号）

## 常见形式

- **居中卡片** (Centered Card) — 与登录页一致的居中卡片，认知成本最低
- **分屏价值** (Split Value Prop) — 左侧讲注册能得到什么，右侧表单
- **社交优先** (Social-first) — 第三方注册置顶，一键开通
- **多步引导** (Guided Steps) — 分步收集信息，边注册边 onboarding

## 页面结构

1. **品牌与价值主张** — 说明注册能得到什么，降低注册心理门槛。
2. **注册表单** — 只留邮箱与密码，其余延后到产品内补全。
3. **第三方注册** — 一键注册入口，与表单按钮区分主次。
4. **服务条款** — 条款勾选驱动提交按钮可用态。
5. **登录入口** — 「已有账号？登录」与登录页共用布局。

## 实现要点

**CSS:** `flex` `grid` `min-height: 100vh` `place-items: center`

与登录页共用布局骨架，仅切换文案与字段。字段做即时校验（邮箱格式、密码强度条）， autocomplete 用 new-password；服务条款复选框未勾选时提交按钮禁用。 第三方注册按钮与表单提交在视觉上区分主次；提交后进入引导式补全流程。

## 横向对比维度 (`auth-pages`)

- **用户状态:** 尚无账号的新用户
- **核心目标:** 降低门槛、完成转化
- **安全要求:** 高——验证与防滥用

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现注册页。

先检查现有认证接口、注册流程与表单组件，保持一致。
要求：
- 最少字段（邮箱 + 密码），即时校验与强度提示
- 第三方注册与登录入口
- 服务条款勾选联动提交按钮
- 深浅色一致，键盘可访问
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个注册页面，包含邮箱密码表单、第三方注册和登录入口。

**Design:** 创建居中卡片注册页：品牌 logo、"创建你的账号"标题、邮箱与密码输入（密码带强度条：弱/中/强三段变色）、服务条款勾选、主按钮"免费注册"、分隔线下两个第三方注册按钮、底部"已有账号？登录"。错误内联提示，条款未勾选时按钮禁用。

**Implementation:** 用 React + Tailwind 实现注册页：受控表单 + 即时校验；密码强度按长度与字符类别 计算并渲染三段强度条；autocomplete="new-password"；条款复选驱动按钮禁用态； 错误 aria-describedby 关联；深浅色一致。不新增依赖。

## 相关概念

- [input](/pages/input) — 包含组件
- [button](/pages/button) — 包含组件
- [form-validation](/pages/form-validation) — 使用模式
- [login](/pages/login) — 替代方案

## Sources

- [Nielsen Norman Group — Login & Registration Forms](https://www.nngroup.com/articles/login-registration-forms/)
- [Baymard Institute — Signup Usability](https://baymard.com/blog)

---

JSON: `/api/concept/pages/signup.json` · 站点: /pages/signup
