# 实时区域 / ARIA Live Region

> 无障碍 · `id: aria-live`

在页面上预留一块播报区，内容动态更新时把消息念给屏幕阅读器，而不移动焦点。保存成功、筛选结果数、异步校验这类「看得见变了但焦点没动」的信息，读屏用户不靠它就会漏掉。

**别名:** 实时区域 · 实时播报 · 播报区域 · 读屏播报 · aria-live · live region

**分类:** Accessibility / Feedback

## 名词辨析

aria-live 是不打断焦点的后台播报，modal 是抢走焦点的强制阅读——都在传达更新，一个插话，一个拦路。

## 适用场景

- 操作结果反馈（已保存、已复制、已提交）
- 异步结果与筛选计数等无焦点移动的更新
- 表单校验错误需要在字段之外被朗读

## 不适用场景

- 用播报区代替把焦点移到错误字段（字段级错误仍要 focus）
- 高频连续插入导致读屏被消息刷屏
- 必须被立即处理的阻断性错误只用 polite

## 常见形式

- **礼貌播报** (Polite live) — aria-live="polite"，等用户停顿再念，适合一般结果
- **紧急打断** (Assertive alert) — aria-live="assertive" / role="alert"，立刻打断，仅限关键警告
- **状态播报** (Status) — role="status"，隐含 polite，适合加载与完成状态

## Platform API

- `aria-live`
- `role="status"`
- `role="alert"`
- `aria-atomic`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| WCAG | [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages) |
| MDN | [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) |

## 实现要点

**CSS:** `aria-live` `role="status"` `role="alert"` `aria-atomic`

实时区域必须预先存在于 DOM（空容器即可），再更新文本内容——动态创建的 live region 常常不会被朗读。role="status" 与 role="alert" 自带隐含 aria-live，不必重复声明。aria-atomic="true" 保证整块重读；同一区域连续更新时先清空再写入，避免被合并。视觉隐藏用 sr-only 但保持可朗读。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现实时区域播报。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 预置 live region，动态更新写入文本
- polite / assertive / status 三档按消息重要性选择
- toast 与表单校验结果同步播报
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 给动态更新加上读屏播报：状态变化时屏幕阅读器能读出来。

**Design:** 每个 toast 与异步结果同时写入页面内的播报区；普通结果礼貌排队，阻断性错误立即打断；播报文案与视觉消息一致、简短、含结果动词。

**Implementation:** 预置 <div aria-live="polite" aria-atomic="true" class="sr-only"> 与 role="alert" 区域；状态变化 setState 写入文本。toast 组件挂载到已存在容器；避免 300ms 内多次写入同一区域。

## 相关概念

- [toast](/a11y/toast) — 搭配使用
- [alert](/a11y/alert) — 搭配使用
- [form-validation](/a11y/form-validation) — 搭配使用

## 容易混淆

- [modal](/a11y/modal) — modal 抢占焦点强制阅读，aria-live 在不夺走焦点的前提下朗读更新。

## Sources

- [WCAG 2.1 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages)
- [MDN — ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)

---

JSON: `/api/concept/a11y/aria-live.json` · 站点: /a11y/aria-live
