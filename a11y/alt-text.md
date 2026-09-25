# 替代文本 / Alt Text

> 无障碍 · `id: alt-text`

给图片写一句文本替代：信息图传达同样的信息，装饰图写空 alt 让读屏跳过，功能图描述动作而非画面。读屏用户、图片加载失败的用户和搜索引擎都靠这句话理解图在说什么。

**别名:** 替代文本 · 图片描述 · 图说 · alt 文本 · 图片替代文本 · alt text

**分类:** Accessibility / Content

## 名词辨析

alt 文本是图片的文本替代，tooltip 是指针悬停的补充说明——前者服务读屏与图片失效场景，后者只服务看得见的指针用户。

## 适用场景

- 承载信息的图片、图表、插画、二维码
- 头像、商品图、文章配图等语义内容
- 图片是链接或按钮的唯一内容时

## 不适用场景

- 给装饰性纹理、分隔线写「图片」「image」占位
- 把长篇说明塞进 alt（应配 visible caption 或 aria-describedby）
- 相邻文字已完整描述时再把同一句念一遍

## 常见形式

- **信息型** (Informative) — 传达图片信息本身，如「3 月销量环比上涨 18%」
- **装饰型** (Decorative) — alt="" 让读屏直接跳过，不留噪音
- **功能型** (Functional) — 描述动作：「关闭」而不是「灰色叉号图标」

## Platform API

- `alt`
- `aria-label`
- `role="presentation"`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| WCAG | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) |
| W3C WAI | [Images Tutorial](https://www.w3.org/WAI/tutorials/images/) |

## 实现要点

**CSS:** `alt` `aria-label` `role="presentation"`

永远给 <img> 写 alt 属性；纯装饰用 alt=""（或 role="presentation" + aria-hidden），不要省略属性——省略会让读屏念出文件名。图标按钮用 aria-label 或可见文字，不要依赖图标字体的伪元素文本。图内文字尽量搬到 HTML；复杂图表配 aria-describedby 指向长描述。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现图片替代文本规范。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 所有信息图有表达信息结论的 alt
- 装饰图 alt=""，读屏可跳过
- 图标按钮与链接用 aria-label 描述动作
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 检查并补齐全站图片的替代文本，装饰图标记为可跳过。

**Design:** 信息图的 alt 写「信息结论」而不是「画面描述」；装饰图 alt 置空；图标按钮文案说动作；商品图与头像 alt 含关键辨识信息（名称、颜色）。

**Implementation:** 所有 <img> 显式写 alt；装饰图 alt=""；<svg> 装饰加 aria-hidden="true"，有意义则 role="img" + <title>。图标按钮 aria-label。构建期用 lint 阻断缺失 alt 的图片。

## 相关概念

- [avatar](/a11y/avatar) — 搭配使用
- [card](/a11y/card) — 搭配使用
- [empty-state](/a11y/empty-state) — 搭配使用

## 容易混淆

- [tooltip](/a11y/tooltip) — tooltip 是悬停才出现的补充说明，替代文本是图片本身无障碍必需的文本替身。

## Sources

- [WCAG 2.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content)
- [W3C WAI — Images Tutorial](https://www.w3.org/WAI/tutorials/images/)

---

JSON: `/api/concept/a11y/alt-text.json` · 站点: /a11y/alt-text
