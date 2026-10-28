# 复古未来主义 / Retro-Futurism

> 风格 · `id: retro-futurism`

"过去的人想象中的未来"的视觉语言：奶油橙棕的暖色底、粗圆角机身、轨道线 与星球贴纸、像素化屏幕与 CRT 荧光，乐观却已过时的科技感。它把登机舱 仪表盘、老式家电与太空竞赛海报揉成一种温暖的怀旧未来。

**别名:** 复古未来主义 · 复古未来风 · 太空时代风 · 原子时代设计 · 七八十年代科幻风 · 落日灰壳那种怀旧科技 · Atompunk · Raygun Gothic

**分类:** Style / Visual Language

## 适用场景

- 游戏 音乐 与怀旧科技主题的品牌叙事
- 需要温暖乐观的未来感，拒绝冰冷的赛博叙事
- 概念产品 活动页，"过去的明天"是故事本身

## 不适用场景

- 现代工具型产品，旧机身隐喻降低效率感知
- 极简高端品牌，复古装饰稀释品牌信号
- 需要无障碍大对比的场景，暖色低对比组合常见

## 常见形式

- **原子时代** (Atompunk) — 五六十年代太空竞赛，轨道线与火箭
- **卡带未来** (Cassette Futurism) — 七八十年代 CRT 与米色机身仪表盘
- **合成器落日** (Synth Sunset) — 落日条纹网格地平线，与 Y2K 相邻

## 开发规格

- **typography:** 等宽铬金标题，全大写
- **color:** 深紫渐变 #140A33→#7A1F63 × 粉 #FF71CE
- **border:** 1px 霓虹粉描边
- **shadow:** 霓虹光晕
- **spacing:** 网格地平线式构图
- **motion:** 200–300ms 的霓虹渐亮与扫描线位移，尊重 prefers-reduced-motion
- **states:** hover 增强铬金与粉光晕；focus 用粉色可见亮环；active 压低亮度；disabled 去光降饱和；error 用洋红霓虹

## 实现要点

**CSS:** `background: linear-gradient(#F5E6C8, #E8B87A)` `border-radius: 24px` `box-shadow: inset` `repeating-linear-gradient` `font-family: monospace`

色板锁在暖调：奶油 #F2E4C2 杏橙 #E8965A 陶土棕 #8A4B2E 配一点湖蓝 #3D7A99 点缀；机身感来自大圆角（20px+）+ 双重内阴影（上亮下暗）模拟 塑料厚度；轨道线用细椭圆边框，网格地平线用 repeating-linear-gradient； 文字可混用宽体几何无衬线与等宽屏显字。深色模式转为 CRT：暖黑底加荧光 琥珀或青色屏显字。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 SYNTH-84 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

当前页面是 SYNTH-84 合成器电台：保留深紫渐变、粉色强调、等宽大写 DRIVE INTO / THE SUNSET 与原功能。主视觉由原创 SVG 条纹落日、山线、透视公路与 SIDE A 磁带构成，替换无业务含义的柱形图。播放器使用深色仪器面板与凹入刻度窗，FM 84.0、本地三曲、音量和播放逻辑不变；均衡器暂停时低亮，只有实际播放才按 .8s 动画，reduced-motion 停止。

复用当前 preview.tokens：背景 linear-gradient(180deg,#140A33 0%,#3D1170 62%,#7A1F63 100%)；前景 #FFE8F6；强调 #FF71CE / #2A0A2E；卡面 rgba(255,113,206,.12)；边框 rgba(255,113,206,.45)；圆角 6px；字体 'SF Mono', Menlo, monospace；卡影 none。

dark 与 variants 复用已有工作区 token；主视觉与页面共用 StyleSignatureArt 和 style-signatures.css，保留各自纸张、几何或电台材质。窄屏按内容重排。

完整页面操作：
播放电台由用户手势启动 WebAudio 合成单音；可播放/暂停、选择三曲、调节音量。电台、巡演、磁带、REC 有对应内容，明确本地合成并非真实广播或录音上传。

静态封面、详情演示与 /style-scenes/retro-futurism/（英文 /en/style-scenes/retro-futurism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用复古未来主义（Retro-Futurism）设计界面：奶油橙棕暖色底、粗圆角机身感 卡片、轨道线与像素屏幕点缀，呈现"过去想象的未来"。

**Design:** 复古未来设计规范：底色奶油 #F2E4C2 到杏橙 #E8965A 渐变；卡片大圆角 24px，上缘亮 内下缘暗的双重内阴影模拟塑料机身；按钮为胶囊形 或方形 大按钮，配湖蓝 #3D7A99 点缀；轨道线用 1px 椭圆，网格地平线用横向 repeating-linear-gradient；标题宽体几何无衬线，数据用等宽屏显字； 深色模式为 CRT 暖黑底 + 荧光琥珀字。

**Implementation:** 用当前风格完成 SYNTH-84 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

当前页面是 SYNTH-84 合成器电台：保留深紫渐变、粉色强调、等宽大写 DRIVE INTO / THE SUNSET 与原功能。主视觉由原创 SVG 条纹落日、山线、透视公路与 SIDE A 磁带构成，替换无业务含义的柱形图。播放器使用深色仪器面板与凹入刻度窗，FM 84.0、本地三曲、音量和播放逻辑不变；均衡器暂停时低亮，只有实际播放才按 .8s 动画，reduced-motion 停止。

复用当前 preview.tokens：背景 linear-gradient(180deg,#140A33 0%,#3D1170 62%,#7A1F63 100%)；前景 #FFE8F6；强调 #FF71CE / #2A0A2E；卡面 rgba(255,113,206,.12)；边框 rgba(255,113,206,.45)；圆角 6px；字体 'SF Mono', Menlo, monospace；卡影 none。

dark 与 variants 复用已有工作区 token；主视觉与页面共用 StyleSignatureArt 和 style-signatures.css，保留各自纸张、几何或电台材质。窄屏按内容重排。

播放电台由用户手势启动 WebAudio 合成单音；可播放/暂停、选择三曲、调节音量。电台、巡演、磁带、REC 有对应内容，明确本地合成并非真实广播或录音上传。

静态封面、详情演示与 /style-scenes/retro-futurism/（英文 /en/style-scenes/retro-futurism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [y2k](/styles/y2k) — 相似概念
- [cyberpunk](/styles/cyberpunk) — 相似概念
- [aurora](/styles/aurora) — 相似概念
- [glassmorphism](/styles/glassmorphism) — 相似概念
- [card](/components/card) — 影响组件

## Sources

- [Wikipedia — Retrofuturism](https://en.wikipedia.org/wiki/Retrofuturism)
- [Wikipedia — Cassette futurism](https://en.wikipedia.org/wiki/Cassette_futurism)

---

JSON: `/api/concept/styles/retro-futurism.json` · 站点: /styles/retro-futurism
