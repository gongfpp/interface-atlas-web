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

## 实现要点

**CSS:** `background: linear-gradient(#F5E6C8, #E8B87A)` `border-radius: 24px` `box-shadow: inset` `repeating-linear-gradient` `font-family: monospace`

色板锁在暖调：奶油 #F2E4C2 杏橙 #E8965A 陶土棕 #8A4B2E 配一点湖蓝 #3D7A99 点缀；机身感来自大圆角（20px+）+ 双重内阴影（上亮下暗）模拟 塑料厚度；轨道线用细椭圆边框，网格地平线用 repeating-linear-gradient； 文字可混用宽体几何无衬线与等宽屏显字。深色模式转为 CRT：暖黑底加荧光 琥珀或青色屏显字。

## 交给 Agent 的任务 Prompt

```text
在当前项目中用复古未来主义（Retro-Futurism）实现一个机身感卡片与按钮区块。

先检查现有 Design Token 与色彩变量，复古暖色板做独立作用域。
要求：
- 暖色奶油橙棕色板锁定，不引入冷灰
- 大圆角 + 双重内阴影模拟塑料机身，按钮有实体按压感
- 轨道线 网格地平线等点缀元素克制在 2～3 处
- 支持深色模式（CRT 暖黑 + 荧光琥珀屏显）
- 若有动效，尊重 prefers-reduced-motion
- 不新增任何依赖
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 用复古未来主义（Retro-Futurism）设计界面：奶油橙棕暖色底、粗圆角机身感 卡片、轨道线与像素屏幕点缀，呈现"过去想象的未来"。

**Design:** 复古未来设计规范：底色奶油 #F2E4C2 到杏橙 #E8965A 渐变；卡片大圆角 24px，上缘亮 内下缘暗的双重内阴影模拟塑料机身；按钮为胶囊形 或方形 大按钮，配湖蓝 #3D7A99 点缀；轨道线用 1px 椭圆，网格地平线用横向 repeating-linear-gradient；标题宽体几何无衬线，数据用等宽屏显字； 深色模式为 CRT 暖黑底 + 荧光琥珀字。

**Implementation:** 用 CSS 实现复古未来机身卡片：.casing { background: linear-gradient( #F7EDD6, #EBD9B4); border-radius: 24px; box-shadow: inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -4px 8px rgba(120,70,30,0.25), 0 6px 14px rgba(90,50,20,0.25); } 网格地平线：repeating-linear-gradient(0deg, rgba(61,122,153,0.35) 0 1px, transparent 1px 12px)。

## 相关概念

- [y2k](/styles/y2k) — 相似概念
- [cyberpunk](/styles/cyberpunk) — 相似概念
- [aurora](/styles/aurora) — 相似概念
- [glassmorphism](/styles/glassmorphism) — 相似概念
- [card](/styles/card) — 影响组件

## Sources

- [Wikipedia — Retrofuturism](https://en.wikipedia.org/wiki/Retrofuturism)
- [Wikipedia — Cassette futurism](https://en.wikipedia.org/wiki/Cassette_futurism)

---

JSON: `/api/concept/styles/retro-futurism.json` · 站点: /styles/retro-futurism
