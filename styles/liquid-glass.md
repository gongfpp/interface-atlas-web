# 液态玻璃 / Liquid Glass

> 风格 · `id: liquid-glass`

用厚折射玻璃层、镜面高光与液体形变表示「功能浮层」的视觉语言。玻璃像一块厚透镜， 折射底下的内容并反射环境光，边缘带 lensing 变形；强调材质的体积与流动性。

**别名:** 液态玻璃 · 苹果新玻璃 · 厚玻璃折射 · 玻璃透镜效果 · Liquid Glass · refractive glass UI

**分类:** Style / Visual Language

## 适用场景

- 需要与系统级导航 控制条 浮层保持同一材质语言
- 底下是彩色照片或丰富内容，折射透出层次才有意义
- 想要「厚玻璃片」的体积感，而不是一层薄雾

## 不适用场景

- 长文本密集区，折射与高光会持续干扰阅读
- 低端设备与性能敏感场景，实时折射开销大
- 只需要轻量磨砂分层，那用玻璃拟态更省

## 常见形式

- **片状透镜** (Sheet lens) — 大面积厚玻璃板，边缘 lensing 明显
- **胶囊按钮** (Button capsule) — 小尺寸胶囊控制件，镜面高光集中
- **全幅面板** (Full panel) — 侧栏 系统条级别大块玻璃，吸收环境色

## 开发规格

- **typography:** 系统无衬线，玻璃上的字重略轻
- **color:** 由底层内容决定玻璃色相，高光近白
- **border:** 1px 半透明白描边，暗示折射边缘
- **shadow:** 顶部镜面内高光 + 大范围柔和外投影
- **spacing:** 20px+ 圆角或胶囊，控制件独立浮层

## 实现要点

**CSS:** `backdrop-filter: blur() saturate()` `box-shadow: inset 高光 + 外投影` `border: 1px solid rgba(255,255,255,0.5)` `background: rgba(255,255,255,0.12)` `border-radius: 999px`

厚度感来自三层：低透明填充 + backdrop-filter blur(20px) saturate(180%) + 顶部 1px 镜面高光内阴影 与底部暗边内阴影。边缘 lensing 近似用较厚的半透明白描边 + 外圈极浅放大后的底色。 真折射需要 SVG filter 或 canvas，Web 里通常用高光与饱和度补偿暗示。玻璃必须浮在彩色内容上。 深色模式用深色填充，高光保持。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Liquid Glass 液态玻璃视觉风格。

先检查现有弹层与导航组件，确认底层有可折射的彩色内容。
要求：
- 厚玻璃：低透明填充 + backdrop blur/saturate + 顶部镜面高光 + 底部暗边
- 边缘用半透明白描边暗示 lensing，不用薄磨砂一片雾
- 控制件浮在独立功能层，玻璃不遮死底层内容
- @supports 降级为更实填充；深色模式保留高光
- 文字对比度按折射后的实际背景校验
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用液态玻璃风格（Liquid Glass）设计界面：厚折射玻璃浮层、镜面高光、边缘 lensing 变形，浮在彩色内容之上。

**Design:** 液态玻璃设计规范：底层放彩色照片或渐变；玻璃填充 rgba(255,255,255,0.12) 深色模式 rgba(20,20,30,0.35)； backdrop-filter blur(20px) saturate(180%)；顶部 inset 0 1px 0 rgba(255,255,255,0.7) 镜面高光， 底部 inset 0 -1px 0 rgba(0,0,0,0.15)；1px 半透明白描边；圆角 20px 或胶囊 999px； 控制件浮在独立功能层，内容区保持通透。

**Implementation:** 用 CSS 实现液态玻璃：.lg { background: rgba(255,255,255,0.12); backdrop-filter: blur(20px) saturate(180%); border: 1px solid rgba(255,255,255,0.45); box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.18); border-radius: 22px; } 用 @supports 降级为更实的填充；hover 可把高光内阴影上移 1px 表示受光。

## 相关概念

- [glassmorphism](/styles/glassmorphism) — 相似概念
- [skeuomorphism](/styles/skeuomorphism) — 相似概念
- [aurora](/styles/aurora) — 搭配使用
- [navbar](/styles/navbar) — 影响组件
- [modal](/styles/modal) — 影响组件
- [button](/styles/button) — 影响组件

## 容易混淆

- [glassmorphism](/styles/glassmorphism) — 玻璃拟态是薄磨砂模糊（backdrop blur 一片雾）；液态玻璃是厚折射透镜，边缘变形并带镜面高光。

## Sources

- [Apple — Liquid Glass technology overview](https://developer.apple.com/documentation/technologyoverviews/liquid-glass)
- [WWDC25 — Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)

---

JSON: `/api/concept/styles/liquid-glass.json` · 站点: /styles/liquid-glass
