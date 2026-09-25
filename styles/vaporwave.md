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

## 实现要点

**CSS:** `linear-gradient 粉紫青` `perspective + rotateX 网格地平线` `background-clip: text 镀铬字` `text-shadow 多层霓虹` `repeating-linear-gradient 扫描线`

地平线网格是招牌：一个 perspective 容器里放 rotateX(70deg) 的 repeating-linear-gradient 网格 平面，底部渐隐。镀铬字用多段灰阶或粉青渐变 + background-clip: text + 深色描边。 霓虹用 text-shadow 多层同色扩散，色相锁粉 #FF71CE 青 #01CDFE 紫 #B967FF。棕榈树与希腊柱当剪影贴 1～2 处。故障动画短促低频，尊重 prefers-reduced-motion。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现 Vaporwave 蒸汽波视觉风格。

先检查现有主题与动效体系，蒸汽波色板与效果做独立作用域。
要求：
- 粉紫青霓虹色板 + 透视网格地平线 + 镀铬标题字
- 棕榈树/罗马柱剪影点缀控制在 1～2 处
- 扫描线 opacity ≤ 0.06，故障动画短促低频并尊重 prefers-reduced-motion
- 关键正文对比度达标，霓虹只做点缀
- 深色为主，浅色「商场软调」作为变体
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用蒸汽波风格（Vaporwave）设计界面：霓虹粉紫青、透视网格地平线、镀铬 3D 字、棕榈树剪影与轻故障。

**Design:** 蒸汽波设计规范：底色深紫粉渐变（#2B0F54 → #FF71CE 边缘）；网格地平线青 #01CDFE； 标题镀铬字（银灰多段或粉青渐变 background-clip: text）；按钮粉青描边胶囊 + 霓虹外发光； 棕榈树/罗马柱剪影点缀 1～2 处；扫描线 opacity ≤ 0.06； 深色模式本来就是主模式，浅色版只用于「商场软调」变体。

**Implementation:** 用 CSS 实现网格地平线：.vapor-grid { perspective: 220px; overflow: hidden; } .vapor-grid i { display:block; height: 240px; transform: rotateX(72deg); background: repeating-linear-gradient(90deg, #01CDFE 0 2px, transparent 2px 48px), repeating-linear-gradient(0deg, #01CDFE 0 2px, transparent 2px 48px); } 镀铬字 background-clip: text；故障用两层 RGB 错位伪元素短促动画。

## 相关概念

- [y2k](/styles/y2k) — 相似概念
- [cyberpunk](/styles/cyberpunk) — 相似概念
- [retro-futurism](/styles/retro-futurism) — 相似概念
- [memphis](/styles/memphis) — 相似概念
- [card](/styles/card) — 影响组件
- [button](/styles/button) — 影响组件

## Sources

- [Wikipedia — Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)
- [Wikipedia — Synthwave](https://en.wikipedia.org/wiki/Synthwave)

---

JSON: `/api/concept/styles/vaporwave.json` · 站点: /styles/vaporwave
