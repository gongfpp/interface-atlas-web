# 表单校验 / Form Validation

> 交互模式 · `id: form-validation`

在用户填写表单的过程中或提交时检查输入合法性，并把错误就地显示在对应字段旁边。 目标是让用户在离错误最近的位置、以最小的打断成本知道"哪里错了、怎么改"，而不是提交后被一整个错误页打回。

**别名:** 表单校验 · 输入报错 · 实时校验 · 表单验证 · 输入错误提示 · 红框报错

**分类:** Forms / Feedback

## 适用场景

- 注册、登录、结账等字段正确性直接影响流程的表单
- 字段有明确格式约束（邮箱、手机号、密码规则）
- 表单较长，用户需要在提交前发现并修正问题

## 不适用场景

- 用户还在输入中途就狂报错，造成干扰
- 纯偏好类选项没有对错，无需校验
- 错误信息含糊（"输入无效"），用户无法据此修正

## 常见形式

- **失焦校验** (On blur) — 离开字段时检查，干扰最小
- **实时校验** (Live) — 输入即校验，反馈最快，注意时机
- **提交校验** (On submit) — 点提交统一检查并定位首个错误

## 实现要点

**CSS:** `:focus` `aria-invalid` `transition-colors` `[role=alert]`

错误态用 aria-invalid 与红色描边标记字段，错误文本挂 role="alert" 或 aria-live="polite"。 校验时机建议：失焦后开始实时校验，提交时统一兜底并聚焦首个错误字段。错误信息写清原因与改法， 不要只写"无效"。成功态可用绿色勾选即时确认。

## 横向对比维度 (`form-feedback`)

- **打断程度:** 低，错误就地显示，不打断输入流
- **持续性:** 高，错误停留在字段旁直到修正
- **错误定位能力:** 精确到具体字段和原因

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现表单校验（Form Validation）。

先检查现有表单组件与错误提示样式，保持一致。
用途：注册表单的邮箱字段。
要求：
- 失焦后实时校验，提交时兜底并聚焦首个错误字段
- 错误信息就地显示在字段下方，写明原因与改法
- aria-invalid 与 role="alert" 无障碍标注
- 不引入表单库等新依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个表单校验（Form Validation）演示，输入邮箱时实时校验格式并就地显示错误或成功状态。

**Design:** 创建表单校验演示。要求：邮箱输入框，失焦后实时校验，错误时红框 + 字段下方错误文案（说明原因与改法）， 合法时绿勾确认；提交按钮在整体合法前禁用或提交后给出成功提示；错误文案颜色满足对比度。

**Implementation:** 用 React 受控组件实现表单校验：正则校验邮箱格式，状态机为 idle / invalid / valid； 首次 blur 后开启实时校验（on-change），提交时兜底检查并聚焦错误字段。错误文本用 role="alert"， 字段加 aria-invalid。不引入第三方表单库。

## 相关概念

- [input](/patterns/input) — 搭配使用
- [toast](/patterns/toast) — 替代方案
- [alert](/patterns/alert) — 替代方案
- [inline-editing](/patterns/inline-editing) — 相似概念
- [empty-state](/patterns/empty-state) — 相似概念

## 可搭配的风格

`minimalism`

## Sources

- [Material Design — Text fields: Error](https://m3.material.io/components/text-fields/guidelines)
- [W3C WAI — Forms Tutorial: Error messages](https://www.w3.org/WAI/tutorials/forms/error-messages/)

---

JSON: `/api/concept/patterns/form-validation.json` · 站点: /patterns/form-validation
