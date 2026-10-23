# 孟菲斯风格 / Memphis Design

> 风格 · `id: memphis`

反功能主义的后现代视觉语言：波浪线 圆点 锯齿 斑点等天真涂鸦元素，与高饱和 撞色、黑色粗描边一起铺满画面，故意打破网格与秩序。它拥抱廉价与热闹，用 "丑得快乐"对抗优雅的现代主义。

**别名:** 孟菲斯风格 · 孟菲斯设计 · 八十年代波普风 · 波点波浪线装饰风 · 彩色几何涂鸦风 · 水磨石撞色风 · Memphis Milano · Postmodern Pop

**分类:** Style / Visual Language

## 适用场景

- 潮流 玩具 派对 音乐节等需要欢乐能量的场景
- 儿童与创意教育产品，热闹无攻击性
- 短期营销活动，需要一眼难忘的视觉记忆点

## 不适用场景

- 需要长时间专注使用的工具与阅读产品
- 品牌调性高级 克制 或面向严肃决策者
- 信息密集界面，装饰密度会淹没功能

## 常见形式

- **经典孟菲斯** (Classic Memphis) — Ettore Sottsass 式黑白底 大色块 波浪
- **水磨石** (Terrazzo) — 碎片斑点铺满底面，密度取胜
- **新孟菲斯** (Neo-Memphis) — 网页化改良，留白增多 描边变细

## 开发规格

- **typography:** 无衬线粗标题，随性排版
- **color:** 奶油底 × 粉 #FF5C8A 黄 #FFD23F 青 #3EC6A8
- **border:** 2px 黑边
- **shadow:** 4px 4px 0 位移硬投影
- **spacing:** 故意歪斜、错位排布
- **motion:** 150ms 的轻微弹跳位移，短 ease-out，尊重 prefers-reduced-motion
- **states:** hover 错位并加深硬投影；focus 用 2px 黑色可见外框；active 位移贴合投影；disabled 去色不位移；error 用粉红强调

## 实现要点

**CSS:** `background-image: radial-gradient` `border: 3px solid #000` `box-shadow: 5px 5px 0` `border-radius: 50%` `clip-path`

经典配方：黑白几何底纹（波点用 radial-gradient 平铺，条纹用 repeating- linear-gradient）垫底；主体元素用高饱和撞色（柠檬黄 珊瑚红 湖蓝 紫罗兰） + 2～3px 黑描边 + 偏移实心阴影；波浪线与锯齿用 SVG 或 clip-path，数量 控制在 3～5 个防止失控。深色模式把黑底反转成墨蓝，保持撞色饱和度。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Milano '88 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Milano ’88 奶油底、粉色 CTA、粉/黄/青绿三卡与圆/三角/方形主视觉；卡片使用原 2px 圆角及 4px 4px 硬投影，不另铺满黑白波点壁纸或强制全体 10px 圆角。邀请卡按现有 2px 黑边、7px 7px 硬投影和 2deg 倾斜呈现，名称/人数/配色更新这一张卡。

复用当前 preview.tokens：背景 #FFF4E3；前景 #232323；强调 #FF5C8A / #fff；卡面 #FFFFFF；边框 #232323；圆角 2px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 4px 4px 0 #232323。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
开派对后填写名称、人数、配色生成邀请卡，可修改重新生成；家居、图案、派对、意大利制造各有内容，不发送真实邀请。

静态封面、详情演示与 /style-scenes/memphis/（英文 /en/style-scenes/memphis/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用孟菲斯风格（Memphis Design）设计界面：波浪线 圆点 锯齿涂鸦元素与高饱和 撞色，黑色描边与偏移阴影，热闹反秩序的后现代气质。

**Design:** 孟菲斯设计规范：底面用黑白波点或条纹几何纹样；主体色块用柠檬黄 #FFD53D 珊瑚红 #FF6B6B 湖蓝 #4D96FF 紫罗兰 #B388FF，全部 3px 黑描边加 5px 偏移 实心阴影；点缀波浪线 锯齿与三角 圆 小方等涂鸦元素 3～5 个；文字粗壮 无衬线可略倾斜；深色模式底改墨蓝 #14143C，撞色保持饱和。

**Implementation:** 用当前风格完成 Milano '88 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Milano ’88 奶油底、粉色 CTA、粉/黄/青绿三卡与圆/三角/方形主视觉；卡片使用原 2px 圆角及 4px 4px 硬投影，不另铺满黑白波点壁纸或强制全体 10px 圆角。邀请卡按现有 2px 黑边、7px 7px 硬投影和 2deg 倾斜呈现，名称/人数/配色更新这一张卡。

复用当前 preview.tokens：背景 #FFF4E3；前景 #232323；强调 #FF5C8A / #fff；卡面 #FFFFFF；边框 #232323；圆角 2px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 4px 4px 0 #232323。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

开派对后填写名称、人数、配色生成邀请卡，可修改重新生成；家居、图案、派对、意大利制造各有内容，不发送真实邀请。

静态封面、详情演示与 /style-scenes/memphis/（英文 /en/style-scenes/memphis/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [bauhaus](/styles/bauhaus) — 相似概念
- [neobrutalism](/styles/neobrutalism) — 相似概念
- [y2k](/styles/y2k) — 相似概念
- [button](/components/button) — 影响组件
- [card](/components/card) — 影响组件

## Sources

- [Memphis Milano](https://memphis-milano.com/)
- [Wikipedia — Memphis Group](https://en.wikipedia.org/wiki/Memphis_Group)

---

JSON: `/api/concept/styles/memphis.json` · 站点: /styles/memphis
