# 评分 / Rating

> 组件 · `id: rating`

用有限等级收集主观评价的输入组件，常见形式是星级或带文字的满意度选项。悬停表示候选分值，点击或键盘选择才提交当前值。应提供每一档的文字含义，区分尚未评分与最低分；只读平均分则应明确标注统计数量，避免让用户误以为可以操作。

**别名:** 点星星评分 · 五颗星评价 · 满意度打分 · star rating

**分类:** Feedback

## 适用场景

- 收集一次服务或产品体验的满意度。
- 有明确等级定义的轻量反馈。

## 不适用场景

- 需要解释问题原因时还应提供文本反馈。
- 精确的数量或测量值应使用数字输入。

## 常见形式

- **星级评分** (Stars) — 五级星标，每档带文字说明。
- **感受评分** (Sentiment) — 用表情或符号表达满意程度。

## 实现要点

**CSS:** `:checked` `:focus-visible` `transform: scale()`

单选评分可使用同名 radio。每档设置可访问名称，悬停预览不能覆盖已确认分值。未评分时禁用提交；尊重 reduced-motion。只读星级不要使用可交互角色。

## 交给 Agent 的任务 Prompt

```text
先检查当前项目的组件与样式体系，复用已有能力实现评分。
要求：
- 单选评分可使用同名 radio。每档设置可访问名称，悬停预览不能覆盖已确认分值。未评分时禁用提交；尊重 reduced-motion。只读星级不要使用可交互角色。
- 悬停只预览，移开后恢复已选分数。
- 零分值代表未选择，提交后有明确反馈。
- 窄屏可用，深浅色一致，尊重 reduced-motion。
- 不新增依赖。
运行项目现有检查，并列出修改文件及验证结果。
```

### 其余层级 Prompt

**Basic:** 创建评分组件。收集一次服务或产品体验的满意度。

**Design:** 设计评分，以清楚的层级、可见的状态和明确的反馈为优先。五级星标，每档带文字说明。用表情或符号表达满意程度。悬停只预览，移开后恢复已选分数。零分值代表未选择，提交后有明确反馈。

**Implementation:** 单选评分可使用同名 radio。每档设置可访问名称，悬停预览不能覆盖已确认分值。未评分时禁用提交；尊重 reduced-motion。只读星级不要使用可交互角色。

## 相关概念

- [radio](/components/radio) — 相似概念
- [slider](/components/slider) — 相似概念
- [button](/components/button) — 相似概念

## Sources

- [W3C WAI — Accessible interaction patterns](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

---

JSON: `/api/concept/components/rating.json` · 站点: /components/rating
