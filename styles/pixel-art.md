# 像素风 / Pixel Art UI

> 风格 · `id: pixel-art`

用硬像素边缘、有限色板与点阵字形表示「游戏机记忆」的界面视觉语言。锯齿即正确， 缩放必须整数倍，抖动网点做过渡。刻意站在抗锯齿的对立面。

**别名:** 像素风 · 像素游戏界面 · 8位机风格 · 马赛克复古风 · 点阵字界面 · pixel art UI · 8-bit UI · pixel retro

**分类:** Style / Visual Language

## 适用场景

- 游戏、独立游戏发行、复古主题产品，风格即世界观
- 想用点阵与有限色制造怀旧亲和，或做游戏化进度反馈
- 徽章、成就、状态点等小尺寸图标需要强识别

## 不适用场景

- 长文阅读与高密度表格，点阵字放大后可读性崩坏
- 需要连续渐变、照片展示、平滑动效的场景
- 正式政企金融界面，像素语汇会削弱可信度

## 常见形式

- **8位复古** (8-bit retro) — NES 式硬边与 3～6 色调色板，黑描边像素块
- **现代像素** (Modern pixel) — 高分辨率像素网格，色板更宽，圆角用像素阶梯近似
- **等距像素** (Isometric pixel) — 2:1 等距投影小场景，像 SimCity 小地图

## 开发规格

- **typography:** 点阵字体或等宽体，字号整数倍
- **color:** 6 色以内的有限调色板，高对比硬切
- **border:** 2px 纯色像素描边，圆角 0
- **shadow:** 硬偏移像素块投影，无模糊
- **spacing:** 8px 网格对齐，元素贴像素格
- **motion:** 无补间，步进式的瞬时切换
- **states:** hover 换用高亮像素色；focus 用 2px 像素可见描边；active 位移一个像素块；disabled 降为两档灰；error 用红像素块

## 实现要点

**CSS:** `image-rendering: pixelated` `border-radius: 0` `font-family: monospace` `box-shadow: 多层硬阶梯模拟圆角` `background: repeating-conic-gradient() 抖动网点`

像素感的铁律是整数倍缩放：素材按 1x 设计，展示用 transform: scale(整数) 或 image-rendering: pixelated。 圆角用 box-shadow 多层硬阶梯近似，或直接用直角。过渡渐变用抖动：repeating-conic-gradient 交替两色。 字体用点阵字体（如 Press Start 2P）或等宽体加 letter-spacing 模仿。深色模式换调色板但保持同一网格。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 BITMAP 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 BITMAP 深底、Courier New 等宽大写、直角黑边、硬偏移卡影和原 screen 面板；不强制把现有屏幕渐变、网页字体或全部中性色改成六色抖动。六色限制作用于实际 8×8 画板调色盘，画板为 repeat(8,minmax(0,1fr)) 正常网格、黑色 4px 外边与可见格子焦点；不对文字和页面整体 transform 缩放，也不新增投币支付。

复用当前 preview.tokens：背景 #1A1C2C；前景 #F4F4F4；强调 #EF7D57 / #1A1C2C；卡面 #29366F；边框 #000000；圆角 0px；字体 Courier New, ui-monospace, monospace；卡影 4px 4px 0。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

完整页面操作：
INSERT COIN 启动 8×8 六色像素画板；方向键移动绘制焦点、空格绘制，也可点击格子；可清空重画，开始、图鉴、商店均有内容，不涉及真实投币。

静态封面、详情演示与 /style-scenes/pixel-art/（英文 /en/style-scenes/pixel-art/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用像素风（Pixel Art UI）设计界面：硬像素边缘、有限色板、点阵字形、抖动网点过渡，游戏机怀旧感。

**Design:** 像素风设计规范：调色板锁 6 色内（如 #1A1C2C #5D275D #B13E53 #EF7D57 #FFCD75 #A7F070）； 全部圆角 0；描边 2px 纯黑像素块；按钮用 2px 硬边 + 按下时 2px 位移吃掉描边； 标题点阵字体 16px 整数倍；渐变一律抖动网点；深色模式用同一调色板的暗档。

**Implementation:** 用当前风格完成 BITMAP 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 BITMAP 深底、Courier New 等宽大写、直角黑边、硬偏移卡影和原 screen 面板；不强制把现有屏幕渐变、网页字体或全部中性色改成六色抖动。六色限制作用于实际 8×8 画板调色盘，画板为 repeat(8,minmax(0,1fr)) 正常网格、黑色 4px 外边与可见格子焦点；不对文字和页面整体 transform 缩放，也不新增投币支付。

复用当前 preview.tokens：背景 #1A1C2C；前景 #F4F4F4；强调 #EF7D57 / #1A1C2C；卡面 #29366F；边框 #000000；圆角 0px；字体 Courier New, ui-monospace, monospace；卡影 4px 4px 0。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

INSERT COIN 启动 8×8 六色像素画板；方向键移动绘制焦点、空格绘制，也可点击格子；可清空重画，开始、图鉴、商店均有内容，不涉及真实投币。

静态封面、详情演示与 /style-scenes/pixel-art/（英文 /en/style-scenes/pixel-art/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [y2k](/interface-atlas-web/styles/y2k) — 相似概念
- [retro-futurism](/interface-atlas-web/styles/retro-futurism) — 相似概念
- [cyberpunk](/interface-atlas-web/styles/cyberpunk) — 搭配使用
- [button](/interface-atlas-web/components/button) — 影响组件
- [badge](/interface-atlas-web/components/badge) — 影响组件
- [progress-bar](/interface-atlas-web/components/progress-bar) — 影响组件

## Sources

- [Wikipedia — Pixel art](https://en.wikipedia.org/wiki/Pixel_art)
- [MDN — image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)

---

JSON: `/interface-atlas-web/api/concept/styles/pixel-art.json` · 站点: /interface-atlas-web/styles/pixel-art
