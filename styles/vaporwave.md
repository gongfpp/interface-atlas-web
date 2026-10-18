# 蒸汽波 / Vaporwave

> 风格 · `id: vaporwave`

用霓虹粉紫青、透视网格地平线、镀铬 3D 字与棕榈树剪影表示「消费主义怀旧」的视觉语言。 拼贴 80-90 年代商场、早期 CGI 与故障信号，甜腻、迷幻、又带着空洞的乐观。

**别名:** 蒸汽波 · 蒸汽波风格 · 粉紫蓝复古未来 · 霓虹网格地平线 · 80年代商场美学 · vaporwave · synthwave UI · retro mall aesthetic

**分类:** Style / Visual Language

## 适用场景

- 音乐、夜店、潮牌、复古主题活动，风格即情绪
- 需要强烈亚文化信号与迷幻氛围的营销页
- 播放器、票券、虚拟商品等娱乐向界面

## 不适用场景

- 金融、医疗、政务等需要冷静可信的界面
- 长文阅读与表单录入，霓虹与闪烁持续消耗注意力
- 无障碍要求高的场景，粉紫青对比度与闪烁都有风险

## 常见形式

- **商场软调** (Mall soft) — 粉彩大理石、希腊柱与 Windows 95 窗口，甜而空
- **霓虹故障** (Neon glitch) — 粉青霓虹 + RGB 错位与扫描线，信号不稳
- **全息镀铬** (Holographic chrome) — 液态金属 3D 字与 CD 幻彩反光

## 开发规格

- **typography:** 镀铬渐变展示字 + 宽字距无衬线
- **color:** 粉 #FF71CE × 青 #01CDFE × 紫 #B967FF
- **border:** 1px 霓虹描边，胶囊与直角混用
- **shadow:** 多层同色霓虹光晕
- **spacing:** 地平线居中对称，元素悬浮网格上
- **motion:** 300–400ms 的霓虹渐亮与地平线滑动，尊重 prefers-reduced-motion
- **states:** hover 增强多层霓虹光晕；focus 用青色可见亮环；active 压低饱和；disabled 去光降透明；error 用粉红霓虹

## 实现要点

**CSS:** `linear-gradient 粉紫青` `perspective + rotateX 网格地平线` `background-clip: text 镀铬字` `text-shadow 多层霓虹` `repeating-linear-gradient 扫描线`

地平线网格是招牌：一个 perspective 容器里放 rotateX(70deg) 的 repeating-linear-gradient 网格 平面，底部渐隐。镀铬字用多段灰阶或粉青渐变 + background-clip: text + 深色描边。 霓虹用 text-shadow 多层同色扩散，色相锁粉 #FF71CE 青 #01CDFE 紫 #B967FF。棕榈树与希腊柱当剪影贴 1～2 处。故障动画短促低频，尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 MALL★95 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 MALL★95 原粉紫渐变、青色操作/描边、山景剪影面板及胶囊功能卡；不强制新增透视地平线、镀铬 background-clip 字、棕榈树/罗马柱或故障动画。楼层地图才使用现有横纵重复渐变网格、青色字光晕与三层色相变化；护照列表按正常文档流显示。

复用当前 preview.tokens：背景 linear-gradient(180deg,#2B0F54 0%,#5B1E8C 45%,#FF71CE 100%)；前景 #FFE9FF；强调 #01CDFE / #0A0030；卡面 rgba(255,113,206,.12)；边框 rgba(1,205,254,.55)；圆角 999px；字体 Arial Black, Futura, Helvetica Neue, PingFang SC, sans-serif；卡影 0 0 16px rgba(1,205,254,.45)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
步入中庭进入楼层导览，选楼层查看音像、美食等场所，护照打卡且重复不计数；音像、美食广场、关于可返回对应导览，无真实消费。

静态封面、详情演示与 /style-scenes/vaporwave/（英文 /en/style-scenes/vaporwave/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用蒸汽波风格（Vaporwave）设计界面：霓虹粉紫青、透视网格地平线、镀铬 3D 字、棕榈树剪影与轻故障。

**Design:** 蒸汽波设计规范：底色深紫粉渐变（#2B0F54 → #FF71CE 边缘）；网格地平线青 #01CDFE； 标题镀铬字（银灰多段或粉青渐变 background-clip: text）；按钮粉青描边胶囊 + 霓虹外发光； 棕榈树/罗马柱剪影点缀 1～2 处；扫描线 opacity ≤ 0.06； 深色模式本来就是主模式，浅色版只用于「商场软调」变体。

**Implementation:** 用当前风格完成 MALL★95 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 MALL★95 原粉紫渐变、青色操作/描边、山景剪影面板及胶囊功能卡；不强制新增透视地平线、镀铬 background-clip 字、棕榈树/罗马柱或故障动画。楼层地图才使用现有横纵重复渐变网格、青色字光晕与三层色相变化；护照列表按正常文档流显示。

复用当前 preview.tokens：背景 linear-gradient(180deg,#2B0F54 0%,#5B1E8C 45%,#FF71CE 100%)；前景 #FFE9FF；强调 #01CDFE / #0A0030；卡面 rgba(255,113,206,.12)；边框 rgba(1,205,254,.55)；圆角 999px；字体 Arial Black, Futura, Helvetica Neue, PingFang SC, sans-serif；卡影 0 0 16px rgba(1,205,254,.45)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

步入中庭进入楼层导览，选楼层查看音像、美食等场所，护照打卡且重复不计数；音像、美食广场、关于可返回对应导览，无真实消费。

静态封面、详情演示与 /style-scenes/vaporwave/（英文 /en/style-scenes/vaporwave/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [y2k](/interface-atlas-web/styles/y2k) — 相似概念
- [cyberpunk](/interface-atlas-web/styles/cyberpunk) — 相似概念
- [retro-futurism](/interface-atlas-web/styles/retro-futurism) — 相似概念
- [memphis](/interface-atlas-web/styles/memphis) — 相似概念
- [card](/interface-atlas-web/components/card) — 影响组件
- [button](/interface-atlas-web/components/button) — 影响组件

## Sources

- [Wikipedia — Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)
- [Wikipedia — Synthwave](https://en.wikipedia.org/wiki/Synthwave)

---

JSON: `/interface-atlas-web/api/concept/styles/vaporwave.json` · 站点: /interface-atlas-web/styles/vaporwave
