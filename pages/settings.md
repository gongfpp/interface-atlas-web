# 设置页 / Settings Page

> 页面 · `id: settings`

集中管理账号偏好与系统配置的功能页面：一侧是稳定的设置导航（通用、通知、安全等分区）， 另一侧是行式表单列表——每行一个"标签 + 控件 + 说明"，低频修改、即改即存。 页面按配置域分区而非按任务流组织，用户靠扫读标题定位，改完即走。

**别名:** 设置页面 · 设置面板 · 偏好设置 · 系统设置页 · 账号设置 · 配置页面 · 个人设置

**分类:** Page / Utility

## 适用场景

- 账号资料、通知、安全等偏好集中管理
- 配置项多、需要分区导航定位
- 修改低频但需要随时可达的入口

## 不适用场景

- 高频操作流（应放进对应工作界面）
- 只有 2～3 个开关的极简产品（并入菜单即可）
- 需要管理员审核的审批流页面

## 常见形式

- **侧栏导航设置** (Sidebar Settings) — 左侧分区导航 + 右侧表单，最常见
- **标签页设置** (Tabbed Settings) — 顶部 Tab 切换配置域，适合少分区
- **分组单页** (Sectioned Single Page) — 所有分区纵向滚动一页到底
- **弹窗设置** (Modal Settings) — 轻量设置以弹窗承载，不离开当前页

## 页面结构

1. **设置导航** — 按分区分组，标出当前所在分区。
2. **设置分区** — 每个分区只放一类设置，标题与说明清晰。
3. **行式表单** — 标签 + 控件 + 帮助文本，即时保存或统一保存二选一。
4. **危险区** — 删除 / 注销等不可逆操作，红色隔离并二次确认。
5. **保存条** — 未保存时出现，明确「有改动未保存」状态。

## 实现要点

**CSS:** `flex` `grid` `position: sticky` `scroll-margin-top: 6rem`

侧栏变体：nav sticky，内容区按分区渲染行式表单（label 左、控件右）。 分组单页变体用锚点 + scroll-margin 联动高亮当前分区。行式表单切换控件用受控 switch；有未保存更改时底部浮出保存条（sticky bottom）。危险区用红色边框与 二次确认弹窗隔离在页面末尾。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现设置页。

先检查现有设置入口、表单组件与 Design Token，保持一致。
要求：
- 分区导航 + 行式表单（数据驱动）
- 开关、输入受控，有未保存提示与保存反馈
- 危险区二次确认
- 深浅色一致，键盘可访问
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个设置页面，包含分区导航、行式表单和保存按钮。

**Design:** 创建侧栏式设置页：左侧分区导航（通用、通知、安全、账单），右侧每区一组行式表单（标签 + 说明 + 开关/输入）；通知区含邮件/推送/短信三个开关；页面底部红色"危险区"（删除账号，需二次确认）；有未保存更改时右下浮出保存条。

**Implementation:** 用 React + Tailwind 实现设置页：设置项数据驱动（{section, rows:[{label, hint, type}]}）； switch/input 受控；脏状态驱动保存条显隐（sticky bottom + toast 反馈保存成功）； 危险区按钮触发确认弹窗；分区切换支持键盘与 aria-current。不新增依赖。

## 相关概念

- [sidebar](/pages/sidebar) — 包含组件
- [switch](/pages/switch) — 包含组件
- [input](/pages/input) — 包含组件
- [tabs](/pages/tabs) — 包含组件
- [toast](/pages/toast) — 包含组件

## Sources

- [Nielsen Norman Group — Settings](https://www.nngroup.com/articles/settings-ux/)
- [Apple HIG — Settings](https://developer.apple.com/design/human-interface-guidelines/settings)

---

JSON: `/api/concept/pages/settings.json` · 站点: /pages/settings
