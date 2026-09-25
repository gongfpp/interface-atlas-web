# 更新日志页 / Changelog

> 页面 · `id: changelog`

按时间倒序罗列产品每次变化的页面：每条版本以日期与版本号开头，用新增、改进、修复分组呈现， 重要变更附迁移说明与链接。它让用户与团队在同一份事实源上理解「这次更新影响我什么」。

**别名:** 更新日志 · 更新日志页 · 版本更新记录 · 更新记录页 · 发版说明 · 版本历史页 · 新版本改了啥 · 更新公告页

**分类:** Page / Documentation

## 适用场景

- 产品持续迭代、有多个对外版本
- 用户需要知道自己用的版本改了什么
- 行为或 API 变更需要给出迁移说明

## 不适用场景

- 只有一次发布或基本不再更新
- 面向内部的任务流水（用项目协作工具）
- 需要逐条 commit 的开发者视图（用 release 页）

## 常见形式

- **时间线式** (Timeline) — 垂直时间轴，日期与版本号作为锚点
- **分组折叠** (Grouped) — 按版本折叠展开，默认展开最新
- **订阅流** (Feed) — 简洁列表配 RSS 或邮件订阅入口

## 页面结构

1. **标题与订阅** — 说明更新频率，并提供 RSS 或邮件订阅。
2. **最新版本** — 置顶当前版本，强调最重要的变更。
3. **版本条目** — 一条版本一个区块，倒序排列，可锚点直达。
4. **变更分组** — 新增、改进、修复分开列，每条一句话。
5. **迁移提示** — 破坏性变更单独提示，给出替代做法。

## 实现要点

**CSS:** `grid` `flex` `counter-reset: version` `border-left: 2px solid var(--color-line)` `position: sticky`

版本列表用有序列表或 article 语义，日期用 time 元素并带 datetime 属性。分类标签用文字而非纯色区分。 时间轴用左侧边框加圆点伪元素；折叠区用原生 details 或受控手风琴。订阅入口可见但克制； 筛选由状态驱动，不改变文档顺序。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现更新日志页。

先检查现有文档布局、版本数据来源与设计令牌，保持一致。
要求：
- 倒序版本列表，日期用 time[datetime]
- 新增、改进、修复分组，破坏性变更单独提示
- 按类型筛选与按版本折叠由状态驱动
- 提供 RSS 或邮件订阅入口
- 深浅色一致，不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个更新日志页，按时间倒序列出版本与主要变更。

**Design:** 创建产品更新日志页：顶部标题、更新频率说明与订阅按钮；下方倒序版本列表，每条含日期、版本号徽标与 新增、改进、修复分组；破坏性变更用醒目提示与迁移说明；顶部可按类型筛选。桌面单列窄栏，深浅色一致。

**Implementation:** 用 React + Tailwind 实现更新日志页：数据来自 Markdown 或 JSON；日期用 time[datetime]； 分类筛选与折叠由状态驱动；破坏性变更用强调色加文字标签；支持锚点直达某版本；不新增依赖。

## 相关概念

- [timeline](/pages/timeline) — 包含组件
- [accordion](/pages/accordion) — 包含组件
- [badge](/pages/badge) — 包含组件
- [search-filtering](/pages/search-filtering) — 使用模式
- [documentation](/pages/documentation) — 相似概念

## Sources

- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- [Semantic Versioning](https://semver.org/)

---

JSON: `/api/concept/pages/changelog.json` · 站点: /pages/changelog
