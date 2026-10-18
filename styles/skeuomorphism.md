# 拟物化 / Skeuomorphism

> 风格 · `id: skeuomorphism`

用现实世界的材质与物理形态表示数字控件的视觉语言：皮革缝线、木质纹理、拉丝 金属、玻璃光泽，按钮做成可以按压的实体，开关做成拨杆。界面元件拥有高光、 投影与倒角，"看起来像什么"直接暗示"能怎么用"。

**别名:** 拟物化 · 拟物风格 · 仿真质感设计 · 苹果早期那种真皮缝线效果 · 带纹理立体感的老式UI · 皮革木纹质感界面 · Realistic UI · Skeuomorphic Design

**分类:** Style / Visual Language

## 适用场景

- 用户不熟悉触屏，需要借助现实隐喻降低学习成本
- 品牌需要复古 怀旧或高端工艺感（音响 咖啡 笔记本应用）
- 表达物理操作的乐趣，如拨动 按压 旋转

## 不适用场景

- 信息密度高的工具类界面，装饰会挤压内容与效率
- 需要频繁换肤与多平台适配，重度纹理维护成本高
- 极简品牌语境，拟物会显得过时与俗气

## 常见形式

- **皮革缝线** (Leather) — 皮革纹理加缝线描边，早期 iOS 日历 记事本
- **拉丝金属** (Brushed Metal) — 金属渐变与高光倒角，iTunes 老播放器
- **纸质** (Paper) — 纸张折角与压印文字，iBooks 书架

## 开发规格

- **typography:** 系统无衬线，贴近真实印刷
- **color:** 灰铝渐变底 × 蓝色高光
- **border:** 金属描边 + 内侧高光线
- **shadow:** 外投影 + inset 内高光同时使用
- **spacing:** 控件内边距模拟实物比例
- **motion:** 150–200ms 的按压实感过渡，模拟物理回弹
- **states:** hover 加深高光；focus 用蓝色发光可见轮廓；active 用 inset 阴影表现按下；disabled 降低对比；error 用红色高光

## 实现要点

**CSS:** `background-image: url(texture)` `box-shadow: inset 0 1px 0` `linear-gradient` `border-radius` `text-shadow`

三层立体感：基础材质层（纹理图或细密渐变），顶部 1px 高光内阴影模拟受光 上缘，底部外投影表现厚度。按钮按下时反转内阴影方向制造"压下去"。渐变 范围要窄（3%～8% 明度差），否则像廉价塑料。文字用压印效果：深色投影 1px 加同色 1px 高光。深色模式降低材质明度但保留高光结构。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 Daily Goods 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 Daily Goods 的相机、木桌、书与绿植原照片：桌面照片占右侧 74%，#e7ddcd 暖底与左侧米色遮罩承接文案。品牌用 Georgia，主文案为现有粗无衬线；CTA 沿用 #9b6c36→#775025 棕色渐变、内高光、细边与 .25cqw 小圆角，右侧旋转纸签保留暖纸渐变与投影。商品延续区用米色纸卡与棕色材质按钮；窄屏让文案、320px 照片、纸签依次入流。不要用程序纹理替换照片，也不要重做成铝灰笔记工具。

完整页面操作：
探索系列与 01/02/03 展示对应商品；搜索好物并检查无匹配结果，查看商品后加入购物袋，调整/移除并查看合计；产品、故事、手工制作、门店均有对应内容，结算不创建真实订单。

静态封面、详情演示与 /style-scenes/skeuomorphism/（英文 /en/style-scenes/skeuomorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 用拟物化风格（Skeuomorphism）设计界面：控件采用真实材质质感——皮革 金属 木材， 按钮有立体按压感，开关像实物拨杆。

**Design:** 拟物化设计规范：底色用皮革纹或木纹材质图；按钮为窄幅线性渐变（上下明度差 8% 以内）+ 1px 顶部高光内阴影 + 底部投影；控件圆角 6～10px；文字用压印 效果（1px 深影 + 1px 高光）；缝线用 dashed 描边模拟；按下态反转内阴影并 下移 1px。深色模式整体降明度 20%，高光保留。

**Implementation:** 用当前风格完成 Daily Goods 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。preview.brand 与共享 REFERENCE_BRANDS 保持一致；首屏结构、实际导航与素材以 ReferenceStyleScene 为准。

保留 Daily Goods 的相机、木桌、书与绿植原照片：桌面照片占右侧 74%，#e7ddcd 暖底与左侧米色遮罩承接文案。品牌用 Georgia，主文案为现有粗无衬线；CTA 沿用 #9b6c36→#775025 棕色渐变、内高光、细边与 .25cqw 小圆角，右侧旋转纸签保留暖纸渐变与投影。商品延续区用米色纸卡与棕色材质按钮；窄屏让文案、320px 照片、纸签依次入流。不要用程序纹理替换照片，也不要重做成铝灰笔记工具。

探索系列与 01/02/03 展示对应商品；搜索好物并检查无匹配结果，查看商品后加入购物袋，调整/移除并查看合计；产品、故事、手工制作、门店均有对应内容，结算不创建真实订单。

静态封面、详情演示与 /style-scenes/skeuomorphism/（英文 /en/style-scenes/skeuomorphism/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [glassmorphism](/interface-atlas-web/styles/glassmorphism) — 相似概念
- [flat-design](/interface-atlas-web/styles/flat-design) — 相似概念
- [retro-futurism](/interface-atlas-web/styles/retro-futurism) — 相似概念
- [button](/interface-atlas-web/components/button) — 影响组件
- [switch](/interface-atlas-web/components/switch) — 影响组件

## Sources

- [Nielsen Norman Group — Flat Design and Skeuomorphism](https://www.nngroup.com/articles/death-of-flat-design/)
- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

---

JSON: `/interface-atlas-web/api/concept/styles/skeuomorphism.json` · 站点: /interface-atlas-web/styles/skeuomorphism
