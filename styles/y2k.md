# Y2K 千禧美学 / Y2K Aesthetic

> 风格 · `id: y2k`

复刻千禧年前后数码乐观主义的视觉语言：镀铬液态金属、iMac 糖果半透明塑料、 气泡字与闪光星形、粉紫蓝渐变配银白高光。它混合了对未来的天真想象与低分辨率 3D 的笨拙质感，甜腻、闪亮、毫不克制。

**别名:** 千禧风 · Y2K风格 · 千禧年美学 · 镀铬金属质感 · iMac糖果色那种 · 闪亮科技感 · 千禧辣妹风 · Cyber Y2K

**分类:** Style / Visual Language

## 适用场景

- 音乐 潮流 时尚品牌，瞄准怀旧千禧的年轻受众
- 派对 社交 娱乐类产品，需要甜腻高饱和情绪
- 复古主题营销活动与限定包装

## 不适用场景

- 金融 医疗 生产力工具，需要可信与克制
- 长内容阅读场景，高饱和与闪光持续消耗注意力
- 无障碍要求高的场景，银底浅字对比度普遍不足

## 常见形式

- **糖果塑料** (Candy Plastic) — iMac G3 半透明糖果壳，蓝绿橙粉
- **镀铬金属** (Liquid Chrome) — 液态金属字与镜面渐变，Cyber Y2K
- **珠光幻彩** (Iridescent) — 珍珠光泽幻彩渐变 CD 盘面

## 开发规格

- **typography:** 圆体字 + 金属渐变标题
- **color:** 银紫粉渐变 × 电紫 #7B61FF
- **border:** 1px 淡紫描边，大圆角
- **shadow:** 柔和紫色光晕投影
- **spacing:** 气泡式 20px 圆角，松弛排布

## 实现要点

**CSS:** `background: linear-gradient(#e0e0e0, #8f9096, #f5f5f5)` `background-clip: text` `text-shadow` `border-radius: 999px` `box-shadow: inset`

镀铬感的公式是窄幅多段灰阶渐变：#f8f8f8 → #9a9ba2 → #ffffff → #7c7d84， 配 1px 白高光内阴影与深色投影；文字镀铬用 background-clip: text 加同款 渐变。糖果塑料用高饱和色 + 顶部 40% 白色内阴影模拟透光。星形闪光与 泡泡字是点睛元素，克制在 2～3 处。深色模式改用紫黑底让银色更突出。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用 Y2K 千禧美学实现一组胶囊按钮与糖果卡片区块。

先检查现有 Design Token 与色彩体系，把 Y2K 色板隔离在独立作用域。
要求：
- 镀铬渐变用多段灰阶 background-clip: text 或填充实现
- 糖果塑料感用高饱和色 + 顶部白色内阴影模拟
- 闪光 星形等点缀元素控制在 2～3 处
- 文字对比度按最终背景校验，关键信息不依赖闪光装饰传达
- 支持深色模式（紫黑底 + 银铬高亮）
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用 Y2K 千禧美学设计界面：镀铬液态金属、iMac 糖果半透明塑料、粉紫蓝渐变 与闪光星形元素，甜腻闪亮的千禧年质感。

**Design:** Y2K 设计规范：底色粉紫渐变（#FFC8F0 → #C8B8FF → #A8D8FF）或银白；主按钮 用胶囊形 + 铬渐变（灰白四段）+ 白高光内阴影；卡片为半透明糖果色圆角块， 顶部白色内发光；标题用气泡粗字或镀铬字（background-clip: text）；点缀 四角星闪光；深色模式用紫黑底 + 银铬高亮。

**Implementation:** 用 CSS 实现 Y2K 镀铬：.chrome { background: linear-gradient(180deg, #fdfdfd, #b9bac1 38%, #ffffff 50%, #83848c 62%, #e6e6ea); background-clip: text; color: transparent; -webkit-text-fill-color: transparent; } 糖果按钮 .candy { background: #7DE2FF; box-shadow: inset 0 14px 18px rgba(255,255,255,0.75), inset 0 -8px 14px rgba(0,60,120,0.25); border-radius: 999px; }

## 相关概念

- [cyberpunk](/styles/cyberpunk) — 相似概念
- [aurora](/styles/aurora) — 相似概念
- [glassmorphism](/styles/glassmorphism) — 相似概念
- [retro-futurism](/styles/retro-futurism) — 相似概念
- [card](/styles/card) — 影响组件

## Sources

- [Wikipedia — Y2K aesthetic](https://en.wikipedia.org/wiki/Y2K_aesthetic)
- [MDN — linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

---

JSON: `/api/concept/styles/y2k.json` · 站点: /styles/y2k
