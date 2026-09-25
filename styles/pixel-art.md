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

## 实现要点

**CSS:** `image-rendering: pixelated` `border-radius: 0` `font-family: monospace` `box-shadow: 多层硬阶梯模拟圆角` `background: repeating-conic-gradient() 抖动网点`

像素感的铁律是整数倍缩放：素材按 1x 设计，展示用 transform: scale(整数) 或 image-rendering: pixelated。 圆角用 box-shadow 多层硬阶梯近似，或直接用直角。过渡渐变用抖动：repeating-conic-gradient 交替两色。 字体用点阵字体（如 Press Start 2P）或等宽体加 letter-spacing 模仿。深色模式换调色板但保持同一网格。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Pixel Art UI 像素风视觉风格。

先检查现有图标与字体资源，像素素材按整数倍缩放管理。
要求：
- 硬像素边缘，border-radius 0，描边用纯色像素块
- 调色板收敛到 6 色以内，渐变一律抖动网点
- 点阵字或等宽体，字号取整数倍
- 按钮按下位移吃掉硬阴影；image-rendering: pixelated 用于位图
- 深色模式换调色板暗档；文字对比度达标
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用像素风（Pixel Art UI）设计界面：硬像素边缘、有限色板、点阵字形、抖动网点过渡，游戏机怀旧感。

**Design:** 像素风设计规范：调色板锁 6 色内（如 #1A1C2C #5D275D #B13E53 #EF7D57 #FFCD75 #A7F070）； 全部圆角 0；描边 2px 纯黑像素块；按钮用 2px 硬边 + 按下时 2px 位移吃掉描边； 标题点阵字体 16px 整数倍；渐变一律抖动网点；深色模式用同一调色板的暗档。

**Implementation:** 用 CSS 实现像素按钮：.px-btn { border-radius: 0; border: 2px solid #1A1C2C; box-shadow: 4px 4px 0 #1A1C2C; image-rendering: pixelated; } 抖动渐变：background: repeating-conic-gradient(#EF7D57 0% 25%, #FFCD75 0% 50%) 0 0/4px 4px; 缩放容器 transform: scale(2) 并 transform-origin: top left。

## 相关概念

- [y2k](/styles/y2k) — 相似概念
- [retro-futurism](/styles/retro-futurism) — 相似概念
- [cyberpunk](/styles/cyberpunk) — 搭配使用
- [button](/styles/button) — 影响组件
- [badge](/styles/badge) — 影响组件
- [progress-bar](/styles/progress-bar) — 影响组件

## Sources

- [Wikipedia — Pixel art](https://en.wikipedia.org/wiki/Pixel_art)
- [MDN — image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)

---

JSON: `/api/concept/styles/pixel-art.json` · 站点: /styles/pixel-art
