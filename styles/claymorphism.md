# 黏土风 / Claymorphism

> 风格 · `id: claymorphism`

把控件捏成软黏土的视觉语言：大圆角、柔和粉彩底色，双重阴影——向内的内 凹阴影加向外的膨胀投影——让元素像充了气的黏土块，圆润 饱满 软乎乎。 它是新拟物与 3D 卡通之间的一种手感化中间态。

**别名:** 黏土风 · 黏土拟物 · 软糖质感设计 · 膨胀立体卡片 · 3D黏土按钮 · 橡皮泥风格 · Clay 3D · Puffy UI

**分类:** Style / Visual Language

## 适用场景

- 儿童 教育 休闲游戏类产品，需要亲和与手感
- 轻松的社交 消费品牌，传达可爱与松弛感
- 强调触觉反馈的移动端轻交互场景

## 不适用场景

- 专业 金融 企业级场景，软糖感削弱专业信号
- 信息密集的后台界面，膨胀阴影消耗空间与注意力
- 深色重度使用场景，粉彩膨胀感不易维持

## 常见形式

- **软黏土** (Soft Clay) — 经典粉彩加膨胀双影，最常见配方
- **糖果黏土** (Candy Clay) — 更高饱和的果冻色，接近游戏 UI
- **深色黏土** (Dark Clay) — 深灰底上的哑光黏土，膨胀感保留

## 开发规格

- **typography:** 圆体无衬线
- **color:** 淡紫底 #EDF0FF × 白卡 × 紫 #6C7BFF
- **border:** 几乎无边框，大圆角 22px
- **shadow:** 外投影 + inset 内阴影 = 黏土感
- **spacing:** 蓬松间距，元素相互分离
- **motion:** 180–240ms 的柔和弹性按压过渡，尊重 prefers-reduced-motion
- **states:** hover 轻微上浮并加深外阴影；focus 用紫色可见柔框；active 转为 inset 内陷；disabled 变扁降饱和；error 用珊瑚红内陷

## 实现要点

**CSS:** `border-radius: 20px` `box-shadow: inset 0 -6px 12px` `box-shadow: 0 12px 24px` `pastel`

膨胀公式 = 大圆角（20～32px）+ 三重阴影：外侧大模糊同色系投影（如 0 14px 28px 主色 35%）、内侧下压暗影（inset 0 -8px 16px）、内侧顶部 高光（inset 0 3px 6px 白）。底色与投影必须同色系，投影带色而不发灰。 按下时缩小外投影并加强内凹，形成"捏下去"的反馈。深色黏土用深灰底 加更深一号的同色投影。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Claymates 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Claymates 淡紫底、白色 22px 圆角卡、紫色操作和右侧立体设备面板。沿用 token 的外投影与 inset 内影，不把所有按钮替换成另一套 18px 黏土按钮。小屋中的 .gs-blob 保留不规则软圆形、顶部/底部内影与带色外投影，捏压只触发原 .35s 形变。

复用当前 preview.tokens：背景 #EDF0FF；前景 #3A3F5C；强调 #6C7BFF / #fff；卡面 #FFFFFF；边框 rgba(108,123,255,.18)；圆角 22px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 0 14px 28px rgba(108,123,255,.22), inset 0 -6px 12px rgba(108,123,255,.10)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
捏一下进入黏土小屋，选择颜色、反复捏压并同步计数和角色结果，可收藏到小屋；主页、小屋、商店、小熊入口均有内容，不真实购买。

静态封面、详情演示与 /style-scenes/claymorphism/（英文 /en/style-scenes/claymorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用黏土风（Claymorphism）设计界面：大圆角粉彩元素，外膨胀投影 + 内凹 阴影的双重质感，控件像充气的软黏土块。

**Design:** 黏土风设计规范：底色粉彩（#EAF0FF 等浅底或淡粉 淡绿 淡紫）；主色 #6C8CFF 类柔和饱和色；卡片圆角 24px，阴影三重：0 14px 28px 主色 35%、 inset 0 -8px 16px 主色 30%、inset 0 3px 6px 白 70%；按钮按压时外投影 收缩 内凹加强；文字近黑保证对比；深色模式用深灰底 #23252E 加深一号 同色投影。

**Implementation:** 用当前风格完成 Claymates 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 Claymates 淡紫底、白色 22px 圆角卡、紫色操作和右侧立体设备面板。沿用 token 的外投影与 inset 内影，不把所有按钮替换成另一套 18px 黏土按钮。小屋中的 .gs-blob 保留不规则软圆形、顶部/底部内影与带色外投影，捏压只触发原 .35s 形变。

复用当前 preview.tokens：背景 #EDF0FF；前景 #3A3F5C；强调 #6C7BFF / #fff；卡面 #FFFFFF；边框 rgba(108,123,255,.18)；圆角 22px；字体 'Helvetica Neue', 'PingFang SC', 'Noto Sans CJK SC', sans-serif；卡影 0 14px 28px rgba(108,123,255,.22), inset 0 -6px 12px rgba(108,123,255,.10)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

捏一下进入黏土小屋，选择颜色、反复捏压并同步计数和角色结果，可收藏到小屋；主页、小屋、商店、小熊入口均有内容，不真实购买。

静态封面、详情演示与 /style-scenes/claymorphism/（英文 /en/style-scenes/claymorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [glassmorphism](/interface-atlas-web/styles/glassmorphism) — 相似概念
- [neobrutalism](/interface-atlas-web/styles/neobrutalism) — 相似概念
- [button](/interface-atlas-web/components/button) — 影响组件
- [card](/interface-atlas-web/components/card) — 影响组件
- [badge](/interface-atlas-web/components/badge) — 影响组件

## Sources

- [Hype4 Academy — Claymorphism in design](https://www.hype4.academy/articles/design/claymorphism-in-web-design)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

---

JSON: `/interface-atlas-web/api/concept/styles/claymorphism.json` · 站点: /interface-atlas-web/styles/claymorphism
