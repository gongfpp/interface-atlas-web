# 手绘涂鸦 / Hand-drawn UI

> 风格 · `id: hand-drawn`

用抖动线条、歪斜描边、纸张纹理和马克笔高亮表示「人手画的」的界面视觉语言。 圆故意画不圆，边框带手感抖动，图标像随手勾的。以人的温度对抗机器级完美。

**别名:** 手绘风 · 涂鸦风格 · 手绘描边 · 歪歪扭扭的线 · 纸感手写界面 · hand-drawn UI · doodle UI · sketchy UI

**分类:** Style / Visual Language

## 适用场景

- 独立创作者、手作品牌、教育类产品，需要亲和与在场感
- 空状态、引导气泡、彩蛋等轻量场景，涂鸦当调味
- 想打破 AI 生成界面的过度光滑与同质

## 不适用场景

- 金融、法务、医疗等需要精确与权威的界面
- 高密度数据表格与仪表盘，抖动线条干扰数字对齐
- 长文阅读区，纸纹与高亮叠多了伤阅读

## 常见形式

- **马克笔草图** (Marker sketch) — 粗头马克笔线，高亮笔刷色块压在字下
- **笔记本涂鸦** (Notebook doodle) — 横线纸底 + 圆珠笔细线 + 边角小图标
- **贴纸乱贴** (Sticker chaos) — 手绘贴纸元素随机倾斜叠放，像活页本封面

## 开发规格

- **typography:** 手写感无衬线或圆体，标题略歪
- **color:** 纸白 #FAF6EE × 墨色 #2B2B2B × 高亮黄 #FFE566
- **border:** 2px 抖动描边，非对称圆角
- **shadow:** 极浅纸质投影，几乎贴地
- **spacing:** 随手贴的错位与轻微倾斜

## 实现要点

**CSS:** `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px` `border: 2px solid #2B2B2B` `background: linear-gradient() #FFE566 高亮` `transform: rotate(-1deg)` `box-shadow: 2px 2px 0 rgba(0,0,0,0.08)`

抖动边框用非对称 border-radius 四角不同值即可，不必上 SVG filter；要更抖可用 SVG feTurbulence 位移， 但要包进 @media (prefers-reduced-motion: no-preference) 或默认静止。马克笔高亮是一条半透明黄色 background 线性渐变压在文字下 60% 高度。纸纹用低透明度噪点或 repeating-linear-gradient 横线，透明度低于 0.12。 每页倾斜元素 2～4 个即可，多了像没做完。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Hand-drawn UI 手绘涂鸦视觉风格。

先检查现有组件与纹理资产，手绘效果限制在展示层，不改交互命中区域。
要求：
- 非对称圆角抖动描边，2～4 个轻微倾斜元素
- 纸纹底（横线或噪点，透明度 < 0.12）与马克笔高亮
- 图标用手绘路径或粗描边简笔，装饰 aria-hidden
- 按钮命中区域保持规则矩形，只让视觉描边抖动
- 深色模式牛皮纸深棕底；动效尊重 prefers-reduced-motion
- 文字对比度达标，不新增依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用手绘涂鸦风格（Hand-drawn UI）设计界面：抖动描边、歪斜圆角、纸张纹理、马克笔高亮，图标像随手勾的。

**Design:** 手绘涂鸦设计规范：底色纸白 #FAF6EE，墨色 #2B2B2B，高亮黄 #FFE566，点缀珊瑚 #FF8A65； 所有容器非对称圆角（四角不同值）模拟手画；按钮 2px 抖动描边 + 轻微 rotate(-1deg)； 高亮条压在关键词下；图标用手绘路径或粗描边简笔； 深色模式用牛皮纸深棕底，墨色反成米白，高亮保持。

**Implementation:** 用 CSS 实现抖动容器：.sketchy { border: 2px solid #2B2B2B; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; } 高亮：background: linear-gradient(transparent 55%, #FFE566 55%); 纸纹：repeating-linear-gradient(#0000 0 27px, #2B2B2B12 27px 28px); 倾斜用 transform: rotate(-1deg) 且过渡尊重 prefers-reduced-motion。

## 相关概念

- [organic](/styles/organic) — 相似概念
- [neobrutalism](/styles/neobrutalism) — 相似概念
- [minimalism](/styles/minimalism) — 替代方案
- [empty-state](/styles/empty-state) — 搭配使用
- [button](/styles/button) — 影响组件
- [card](/styles/card) — 影响组件

## Sources

- [Wikipedia — Doodle](https://en.wikipedia.org/wiki/Doodle)
- [Wikipedia — Sketch (drawing)](https://en.wikipedia.org/wiki/Sketch_(drawing))

---

JSON: `/api/concept/styles/hand-drawn.json` · 站点: /styles/hand-drawn
