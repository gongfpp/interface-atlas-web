# 进度条 / Progress Bar

> 组件 · `id: progress-bar`

用横条从左到右填充来表示任务完成比例的加载指示，常配百分比或步骤文字。 适用于时长可预测的确定性任务：上传、下载、安装与分步表单。

**别名:** 进度条 · 加载进度 · 进度指示条 · 百分比进度条 · 上传进度条 · linear progress · 显示百分之多少的横条

**分类:** Feedback / Loading

## 适用场景

- 时长可预测的确定性任务（上传、导出）
- 分步流程中展示当前进行到第几步
- 时长超过 3 秒、需要传达量感

## 不适用场景

- 时长不可知（用 loading-spinner 或骨架屏）
- 极短任务（< 1 秒，直接完成即可）
- 无法给出真实进度（宁可显示不定态，避免假进度）

## 常见形式

- **确定进度** (Determinate) — 已知比例按值填充
- **不定进度** (Indeterminate) — 滑块往复运动，表达进行中但时长未知
- **带标签** (Labeled) — 附百分比或步骤文字

## Platform API

- `<progress>`
- `role="progressbar"`
- `aria-valuenow`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| ARIA | role="progressbar" |
| HTML | [<progress>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) |
| shadcn/ui | [Progress](https://ui.shadcn.com/docs/components/progress) |
| MUI | [LinearProgress](https://mui.com/material-ui/react-progress/) |

## 实现要点

**CSS:** `width` `transition` `background-color` `border-radius` `@keyframes`

轨道固定高度（4~8px）圆角，填充条用 width 百分比或 transform scaleX 过渡； 不定态用 keyframes 平移一小块往复循环。务必绑定真实进度事件，无法获知时用不定态而非假进度。 可达性：role="progressbar" + aria-valuenow / aria-valuemin / aria-valuemax。

## 横向对比维度 (`loading-indicator`)

- **打断程度:** 低，嵌入版面不遮挡
- **信息量:** 中，传达比例与剩余量
- **适用时长:** 3 秒以上的确定性任务
- **与结果一致性:** 高，需绑定真实进度

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现进度条（Progress Bar）组件。

先检查现有组件体系与 Design Token，优先复用现有的强调色与表面色变量。
用途：文件上传与分步表单。
要求：
- 确定态绑定真实进度值，不定态用往复动画
- role="progressbar" + aria-valuenow 可达性
- 完成态有明确的视觉变化
- 动画尊重 prefers-reduced-motion
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个进度条（Progress Bar）组件：显示任务完成百分比，支持确定与不定两种状态。

**Design:** 创建进度条组件。要求：6px 高圆角轨道 + 强调色填充；右侧或上方标注百分比（等宽数字）； 完成时变为成功色并可显示对勾；不定态用小块往复滑动动画；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 ProgressBar：value 0-100 受控；轨道 div 内填充 div style={{ width: `${value}%` }} 配 transition（时长乘 var(--demo-speed, 1)）； 不定态用 keyframes translateX 往复；role="progressbar" + aria-valuenow； 达 100 时切换成功态；尊重 prefers-reduced-motion。

## 相关概念

- [loading-spinner](/components/loading-spinner) — 替代方案
- [skeleton-loading](/components/skeleton-loading) — 替代方案
- [number-counter](/components/number-counter) — 搭配使用
- [optimistic-ui](/components/optimistic-ui) — 搭配使用

## Sources

- [Material Design — Linear progress](https://m3.material.io/components/linear-progress/overview)
- [MDN — ARIA progressbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)

---

JSON: `/api/concept/components/progress-bar.json` · 站点: /components/progress-bar
