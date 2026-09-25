# 分页 / Pagination

> 组件 · `id: pagination`

用带页码的控件把长结果集切分为离散页面：用户显式点击页码或上一页 / 下一页 按钮取回对应片段，当前位置永远可知、可分享、可回退。与无限滚动的"失控 漂移"相对，它是数据浏览中最可控的方式，也是搜索结果与后台表格的默认选择。

**别名:** 分页器 · 翻页 · 页码 · 上一页下一页 · 页码条 · pager

**分类:** Navigation / Data

## 适用场景

- 结果集有序、用户需要定位与回溯
- 需要可分享的页码 URL（搜索、后台表格）
- 需要跳到末页或精确页码

## 不适用场景

- 休闲浏览的无限信息流
- 结果集很小，一页即可容纳
- 内容无法均匀切分且顺序常变

## 常见形式

- **页码型** (Numbered) — 完整页码 + 省略号，可控性最强
- **简洁型** (Simple) — 仅上一页 / 下一页与计数
- **跳页型** (Jump) — 页码 + 输入跳转，适合超大结果集

## Platform API

- `<nav aria-label="Pagination">`
- `role="navigation"`

## 实现要点

**CSS:** `flex` `gap` `min-width` `aria-disabled`

页码窗口算法：始终显示首末页与当前页 ± 1，中间折叠为省略号。当前页用 aria-current="page" 与强调色块标识；首末页时禁用上一页 / 下一页 （disabled + aria-disabled）。URL 同步用查询参数 ?page=n，保证可分享可回退。

## 横向对比维度 (`scroll-loading`)

- **触发方式:** 显式点击页码或翻页按钮
- **数据控制:** 强，用户掌握并记住页码位置
- **适用内容:** 有序、可寻址的结果集

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现分页组件。

先检查现有列表 / 表格的数据获取方式，分页状态应与路由查询参数同步。
要求：
- page / total 受控，URL 同步（?page=n）
- 页码窗口折叠省略号，当前页 aria-current="page"
- 边界正确禁用上一页 / 下一页
- 切页后列表滚动位置回到顶部
- 键盘可达（页码为 button，跳页输入回车提交）
- 不新增不必要的依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 创建一个分页组件：上一页、页码列表（带省略号折叠）、下一页，当前页高亮，点击切换。

**Design:** 创建分页：28px 方形页码按钮，当前页用强调色实底反白；页码超过 7 位时中间 折叠为省略号；首末页禁用翻页按钮并用次级色表达；右侧显示"第 n / m 页"。 深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Pagination：total 与 page 受控，onChange 回调； 页码窗口算法（首末页 + 当前页 ± 1 + 省略号）；当前页 aria-current="page"； 边界禁用翻页；提供 simple（仅上下页）与 jump（输入跳页，回车提交）变体。 无新增依赖。

## 相关概念

- [infinite-scroll](/components/infinite-scroll) — 替代方案
- [pull-to-refresh](/components/pull-to-refresh) — 替代方案
- [table](/components/table) — 相似概念
- [tabs](/components/tabs) — 相似概念
- [search-filtering](/components/search-filtering) — 搭配使用

## 可搭配的风格

`minimalism` `swiss-style`

## Sources

- [NN/g — Pagination](https://www.nngroup.com/articles/pagination/)
- [WAI-ARIA Authoring Practices — Pagination](https://www.w3.org/WAI/ARIA/apg/patterns/pagination/)

---

JSON: `/api/concept/components/pagination.json` · 站点: /components/pagination
