# 多步表单 / Wizard

> 交互模式 · `id: wizard`

把长表单拆成有序步骤，每步聚焦少量字段，逐步推进到完成。用步骤指示器标出进度与当前位置，用户可回看已完成步骤、修正后再前进，末步通常汇总确认。它把"填不完的大表单"变成可完成的小任务，降低单屏认知负荷。

**别名:** 多步表单 · 分步填写 · 向导 · 步骤表单 · 一步步填的表单 · wizard · stepper form

**分类:** Form / Flow

## 适用场景

- 字段超过约 8 个，且可按主题自然分组
- 填写有先后依赖，后一步答案取决于前一步
- 注册、预订、开户、理赔等长流程申请

## 不适用场景

- 字段很少，一屏填完比翻步骤更快
- 步骤之间毫无依赖，强制线性只会碍事
- 用户需要反复对照全部字段（如并排比较填写）

## 常见形式

- **线性** (Linear) — 严格一步一步推进，不可跳步，最常见
- **自由顺序** (Free-order) — 步骤可点击跳转，已完成步打勾
- **带确认步** (With review) — 末步汇总全部答案，提交前可回改

## 实现要点

**CSS:** `grid` `flexbox` `aria-current="step"` `fieldset`

步骤指示用有序列表，当前步标 aria-current="step"，完成步可点击回跳；每步内容放在 fieldset + legend 内表达分组。切换步时先跑本步校验，通过再前进；数据在内存中累积， 提交才落库。移动端把指示器压缩为"第 N/共 M 步"。尊重 prefers-reduced-motion， 步间切换可只做淡入或无动画。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现多步表单向导。

先检查现有组件体系和 Design Token，优先复用当前组件。
保持现有项目视觉风格。不要新增不必要依赖。
要求：
- 步骤指示 + 每步少量字段 + 上一步/下一步导航
- 下一步前校验当前步，数据内存累积、末步提交
- 当前步标 aria-current="step"，支持键盘 Tab 遍历
- 尊重 prefers-reduced-motion
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个多步表单向导（Wizard），把长表单拆成有序步骤逐步填写。

**Design:** 创建多步表单向导。要求：顶部步骤指示（账号 / 资料 / 确认三步，当前步高亮）；每步只放 2～3 个字段；底部上一步 / 下一步导航；末步汇总已填内容；支持深浅色主题。

**Implementation:** 用 React + 受控 state 实现 Wizard：step 索引 + values 对象；下一步先跑本步校验；步骤指示用 ol + aria-current="step"；内容区 fieldset 分组；移动端指示器折叠为进度文案。步骤切换动画 时长乘 var(--demo-speed, 1)，尊重 prefers-reduced-motion。

## 相关概念

- [form-validation](/patterns/form-validation) — 搭配使用
- [stepper](/patterns/stepper) — 搭配使用
- [progressive-disclosure](/patterns/progressive-disclosure) — 相似概念
- [onboarding-tour](/patterns/onboarding-tour) — 相似概念

## Sources

- [Material Design — Steppers](https://m3.material.io/components/steppers/overview)
- [W3C — HTML form element](https://html.spec.whatwg.org/multipage/forms.html)
- [Nielsen Norman Group — Wizard](https://www.nngroup.com/articles/wizards/)

---

JSON: `/api/concept/patterns/wizard.json` · 站点: /patterns/wizard
