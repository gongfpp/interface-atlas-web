# 层级 / Elevation

> 基础 · `id: elevation`

用阴影的深浅表达元素离纸面的远近：0 贴平、1～2 浮起、3 以上成浮层。一套阴影由本影、半影、环境三层叠加而成，档位越高投影越大越淡。层级只用来表达叠放关系，不要拿它当装饰。

**别名:** 层级 · 投影层级 · 阴影层级 · 海拔 · z-depth · elevation · shadow level

**分类:** Surface / Foundation

## 适用场景

- 卡片、菜单、弹层需要可感知的叠放次序
- 可点击块要暗示“浮在页面之上”
- 模态与吸顶栏需要比内容更高的投影档位

## 不适用场景

- 扁平风格或新粗野主义，投影与语言冲突
- 全屏堆满高档位投影，层级通胀后无人可信
- 用投影代替分隔线或留白来划分区域

## 常见形式

- **双层材质投影** (Material 2-layer) — 本影 + 半影双阴影，档位 0～5 清晰
- **扁平描边** (Flat border-only) — 无投影，靠 1px 边框与底色差
- **柔和环境投影** (Soft ambient) — 大而淡的单层投影，气质轻盈

## Platform API

- `box-shadow`
- `env(safe-area-inset-*)`
- `z-index`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) |
| Material Design | [Elevation](https://m3.material.io/styles/elevation/overview) |
| Tailwind CSS | [shadow-sm / shadow-md / shadow-xl](https://tailwindcss.com/docs/box-shadow) |

## 实现要点

**CSS:** `box-shadow` `env(safe-area-inset-*)` `z-index`

把档位做成令牌：--elev-0: none; --elev-1: 0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.12); 每升一档投影更扩散、更淡。深色模式阴影几乎不可见，改用更亮的描边或提高表面亮度。浮层记得配 z-index 阶梯；贴边浮层用 env(safe-area-inset-*) 避开手势区。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现层级。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 0～5 档投影令牌，档位越高越扩散越淡
- 卡片 / 弹层 / 模态各自固定档位
- 深色模式用描边或表面提亮补偿
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立投影层级：定义 0～5 档 box-shadow 令牌，让卡片与浮层有清晰的深度差。

**Design:** 层级规范：0 贴平、1～2 卡片、3～4 弹层、5 模态；每档由本影 + 半影 + 环境三层叠加，档位越高投影越大越淡；深色模式改用描边或表面提亮；同屏浮层数量不超过 3 个档位差。投影只表达叠放，不作装饰。

**Implementation:** 用 CSS 变量定义档位：--elev-0 … --elev-5，组件写 box-shadow: var(--elev-2)。浮层容器配 z-index 令牌（--z-dropdown: 40; --z-modal: 50）。深色模式在 .dark 下覆盖 --elev-* 为描边方案。贴边浮层加 env(safe-area-inset-bottom) 内边距。

## 相关概念

- [semantic-color](/foundation/semantic-color) — 搭配使用
- [glassmorphism](/foundation/glassmorphism) — 搭配使用
- [hover-lift](/foundation/hover-lift) — 搭配使用

## Sources

- [Material Design — Elevation](https://m3.material.io/styles/elevation/overview)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

---

JSON: `/api/concept/foundation/elevation.json` · 站点: /foundation/elevation
