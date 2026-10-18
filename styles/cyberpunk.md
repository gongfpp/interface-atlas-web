# 赛博朋克 / Cyberpunk

> 风格 · `id: cyberpunk`

"High tech, low life" 的视觉语言：近黑的深底上，霓虹青与品红发光描边切割 界面，等宽字体与终端符号贯穿，扫描线 故障位移 毛刺纹理营造信息系统过载 的压抑未来感。光是从黑暗里切出来的，界面像一台被劫持的显示器。

**别名:** 赛博朋克 · 赛博风格 · 霓虹故障风 · 黑底荧光紫青 · 数字废土风 · 黑客终端风 · Cyberpunk UI · Neon Glitch

**分类:** Style / Visual Language

## 适用场景

- 游戏 科幻项目 黑客主题社区，风格即世界观
- 音乐 夜店 电竞品牌，需要强烈的亚文化信号
- 深色为主的产品，可低成本叠加霓虹点缀

## 不适用场景

- 无障碍要求高的正文阅读，荧光色对比闪烁伤眼
- 企业级正式场景，亚文化气质会削弱信任
- 浅色底为主的现有体系，硬切赛博朋克成本高

## 常见形式

- **霓虹都市** (Neon City) — 青品红双色霓虹，攻壳机动队式夜景
- **终端黑客** (Terminal Hacker) — 单色荧光绿或琥珀，CRT 磷光屏
- **故障艺术** (Glitch Art) — RGB 错位位移与撕裂条纹为主角

## 开发规格

- **typography:** 等宽字体 + 霓虹发光标题
- **color:** 深夜蓝黑 #0B0F1A × 青色 #00E5FF
- **border:** 1px 霓虹青色边框，小圆角
- **shadow:** 青色霓虹光晕 box-shadow
- **spacing:** 终端式紧凑排布
- **motion:** 120ms 的霓虹瞬时点亮过渡，尊重 prefers-reduced-motion
- **states:** hover 增亮青色霓虹；focus 用 2px 青色可见描边；active 反向闪烁一次；disabled 降为暗灰去光；error 用洋红霓虹

## 实现要点

**CSS:** `box-shadow: 0 0 8px #0ff` `text-shadow` `clip-path` `@keyframes glitch` `repeating-linear-gradient`

深底用 #0a0a12～#12101f；霓虹色必须同时给发光（box-shadow/text-shadow 0 0 8px 同色）与实体描边，只有光晕会糊。面板用 clip-path 切角（单角或 对角切 8～12px）代替圆角。扫描线用 repeating-linear-gradient 叠加层， opacity 控制在 0.06 以下。故障动画是文本双层 RGB 错位，播放频率低、 时长短，并尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 NEON://CITY 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 NEON://CITY 的深夜蓝黑底、青色描边/微光、等宽大写字、右侧柱形图与三张终端卡。面板沿用现有 4px 小圆角，不额外裁切 12px 角或叠扫描线/故障动画。工作台保持离线终端与青色信号柱，状态由真实 HUD 文本和装备复选框表达。

复用当前 preview.tokens：背景 #0B0F1A；前景 #EAF6FF；强调 #00E5FF / #050810；卡面 rgba(0,229,255,.06)；边框 rgba(0,229,255,.35)；圆角 4px；字体 'SF Mono', Menlo, monospace；卡影 0 0 14px rgba(0,229,255,.25)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
接入网络按所选街区离线接入并可断开；勾选/取消装备后 HUD 同步显示街区、连接和装备状态。街区、装备、黑市、SYS 状态各有本地内容，不真实联网或交易。

静态封面、详情演示与 /style-scenes/cyberpunk/（英文 /en/style-scenes/cyberpunk/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用赛博朋克风格（Cyberpunk）设计界面：近黑深底、霓虹青与品红发光描边、 切角面板、等宽终端字体，辅以扫描线与故障效果。

**Design:** 赛博朋克设计规范：底色 #0d0b14；主霓虹青 #00E5FF、辅品红 #FF2E88，发光 半径 8px 内；面板用 clip-path 切角代替圆角，1px 霓虹描边 + 同色微光； 文字用等宽字体（JetBrains Mono/系统 mono），标题可双层 RGB 错位；扫描线 叠层 opacity 0.05；交互元素 hover 时描边加亮；深浅模式仅做深色（浅色 底违背风格本体）。

**Implementation:** 用当前风格完成 NEON://CITY 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 NEON://CITY 的深夜蓝黑底、青色描边/微光、等宽大写字、右侧柱形图与三张终端卡。面板沿用现有 4px 小圆角，不额外裁切 12px 角或叠扫描线/故障动画。工作台保持离线终端与青色信号柱，状态由真实 HUD 文本和装备复选框表达。

复用当前 preview.tokens：背景 #0B0F1A；前景 #EAF6FF；强调 #00E5FF / #050810；卡面 rgba(0,229,255,.06)；边框 rgba(0,229,255,.35)；圆角 4px；字体 'SF Mono', Menlo, monospace；卡影 0 0 14px rgba(0,229,255,.25)。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

接入网络按所选街区离线接入并可断开；勾选/取消装备后 HUD 同步显示街区、连接和装备状态。街区、装备、黑市、SYS 状态各有本地内容，不真实联网或交易。

静态封面、详情演示与 /style-scenes/cyberpunk/（英文 /en/style-scenes/cyberpunk/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [y2k](/interface-atlas-web/styles/y2k) — 相似概念
- [retro-futurism](/interface-atlas-web/styles/retro-futurism) — 相似概念
- [neobrutalism](/interface-atlas-web/styles/neobrutalism) — 相似概念
- [input](/interface-atlas-web/components/input) — 影响组件
- [card](/interface-atlas-web/components/card) — 影响组件

## Sources

- [Wikipedia — Cyberpunk derivatives](https://en.wikipedia.org/wiki/Cyberpunk_derivatives)
- [MDN — CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

---

JSON: `/interface-atlas-web/api/concept/styles/cyberpunk.json` · 站点: /interface-atlas-web/styles/cyberpunk
