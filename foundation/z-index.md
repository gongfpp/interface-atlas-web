# 层级与堆叠 / Z-index & Stacking

> 基础 · `id: z-index`

用 z-index 决定已定位元素在纸面上的前后顺序，但真正说话的是层叠上下文：一旦祖先把 transform、opacity 或 isolation 变成上下文， 子元素的 9999 就只在这个盒子里有效，永远压不过外面的 z-index: 1。与其到处写魔法数字，不如定一套从小到大的命名档位。

**别名:** 层级 · 堆叠 · 图层顺序 · 谁盖住谁 · 弹窗被盖住 · 层叠上下文 · z-index · stacking context

**分类:** Stacking / Foundation

## 适用场景

- 下拉、气泡、抽屉、模态需要固定的前后叠放次序
- 吸顶导航与浮动按钮要始终压在滚动内容之上
- 调试“弹窗被遮住”时先定位层叠上下文，再谈数值

## 不适用场景

- 把 z-index 9999 当万能药，出问题就再加一位
- 没有档位体系，1、5、100、9999 随手混用
- 元素只想视觉浮起，却忘了它既没定位也没上下文

## 常见形式

- **数字档位** (Numeric ladder) — 10 / 20 / 40 留出插队空隙，够用且仍可读
- **命名档位** (Named tokens) — --z-dropdown、--z-modal、--z-toast，按用途引用
- **隔离上下文** (Isolated context) — 父级 isolation: isolate，把子元素锁在局部，数值不外泄

## Platform API

- `z-index`
- `position`
- `isolation`
- `transform`
- `opacity`

## 代码里叫什么

| 体系 | 名称 |
| --- | --- |
| CSS | [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) |
| CSS | [isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation) |
| Tailwind CSS | [z-10 / z-50](https://tailwindcss.com/docs/z-index) |

## 实现要点

**CSS:** `z-index: 40` `position: relative` `isolation: isolate` `--z-modal: 40` `transform: translateZ(0)`

先保证定位（position 非 static），z-index 才生效。把档位做成令牌：--z-base: 0; --z-dropdown: 10; --z-sticky: 20; --z-modal: 40; --z-toast: 60。需要把子元素锁在局部时给父级 isolation: isolate（或明确的 position 与 z-index）， 避免子元素的大数值越级。不要用 9999 兜底，档位之间留出插队空间。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现层级与堆叠。
先检查现有组件体系和 Design Token，优先复用当前组件。
要求：
- 一套命名 z-index 档位（base / dropdown / sticky / modal / toast）
- 浮层容器用 isolation: isolate，避免子元素数值越级
- 消除 9999 等魔法数字
保持现有项目视觉风格。不要新增不必要依赖。
尊重 prefers-reduced-motion。
完成后运行项目现有检查，并列出修改的文件。
```

### 其余层级 Prompt

**Basic:** 建立层级体系：定义从小到大的 z-index 档位，让弹层与内容有稳定的前后顺序。

**Design:** 层级规范：档位固定为 base 0 / dropdown 10 / sticky 20 / modal 40 / toast 60，中间留空隙；同屏浮层差不超过两档； 需要局部隔离时用 isolation: isolate；禁止出现 9999 之类的魔法数字；层级只表达前后关系，不承担视觉深度。

**Implementation:** 用 CSS 变量落地：--z-base: 0; --z-dropdown: 10; --z-sticky: 20; --z-modal: 40; --z-toast: 60；组件写 z-index: var(--z-modal) 并配 position。浮层容器加 isolation: isolate 防止内部数值越级。排查遮挡时先看祖先是否因 transform、 opacity、filter 生成了新的层叠上下文，再决定调值还是改结构。

## 相关概念

- [modal](/foundation/modal) — 搭配使用
- [dropdown](/foundation/dropdown) — 搭配使用
- [tooltip](/foundation/tooltip) — 搭配使用
- [elevation](/foundation/elevation) — 相似概念

## Sources

- [MDN — z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [MDN — isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)
- [W3C — CSS 2.2 Visual formatting model](https://www.w3.org/TR/CSS22/visuren.html)

---

JSON: `/api/concept/foundation/z-index.json` · 站点: /foundation/z-index
