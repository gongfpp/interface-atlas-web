# 有机自然 / Organic

> 风格 · `id: organic`

以自然形态、温暖材质和低饱和大地色建立亲近感的视觉语言。页面通过不规则曲线、圆润容器和宽松留白形成舒展节奏，文字与按钮仍保持明确边界。适合生活方式与可持续主题；自然装饰应衬托内容，而不能牺牲可读性、信息层级或操作效率。

**别名:** 自然系设计 · 植物感网页 · 大地色风格 · organic design

**分类:** Style / Visual Language

## 适用场景

- 家居、生活方式、园艺与手工艺品牌。
- 需要温暖、舒适、安静气质的内容展示。

## 不适用场景

- 高密度交易界面不宜使用大量不规则装饰。
- 浅色文字叠加纹理会降低阅读清晰度。

## 常见形式

- **大地色** (Earthy) — 米白、陶土、苔绿构成低饱和色板。
- **植物形态** (Botanical) — 叶片曲线与拱形画面构成视觉焦点。

## 开发规格

- **typography:** 衬线标题与清楚的无衬线正文。
- **color:** 米白、苔绿与陶土色；正文使用深绿。
- **border:** 柔和圆角与少量拱形，不扭曲表单控件。
- **shadow:** 轻微接触阴影，不使用强发光。
- **spacing:** 大段留白与宽松行距，窄屏堆叠。
- **motion:** 250–350ms ease-out 的柔和生长与淡入，尊重 prefers-reduced-motion
- **states:** hover 轻微舒展并加深苔绿；focus 用绿色可见外框；active 收拢一像素；disabled 降为灰绿；error 用陶土红

## 实现要点

**CSS:** `border-radius` `linear-gradient()` `grid`

mori / 森 保留米白、深绿和苔绿色层次，使用轻衬线标题与无衬线正文。拱形主图与三张独立商品静物来自本项目生成素材，亚麻、陶器、木纹均可辨认；提供替代文字并注明 AI 生成。商品采用开放式图片排版、细分隔线、稳定矩形操作区，320ms 清单入场与轻微图片缩放，尊重减少动态偏好。

## 交给 Agent 的任务 Prompt

```text
用当前风格完成 mori / 森 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

mori / 森 保留米白、深绿和苔绿色层次，使用轻衬线标题与无衬线正文。拱形主图与三张独立商品静物来自本项目生成素材，亚麻、陶器、木纹均可辨认；提供替代文字并注明 AI 生成。商品采用开放式图片排版、细分隔线、稳定矩形操作区，320ms 清单入场与轻微图片缩放，尊重减少动态偏好。

复用当前 preview.tokens：背景 #f1efe5；前景 #29392b；强调 #526445 / #fff；卡面 #e3e5d6；边框 #b7bd9f；圆角 24px；字体 Georgia, serif；卡影 none。

dark 与 variants 延续已有工作区模式；style-signatures.css 负责本品牌主视觉、续页和微交互，封面与整页共用同一 renderer。

完整页面操作：
Explore 进入自然物件系列，查看三个产品、加入/移除选物清单并同步合计；Collection 与 About 到达系列和品牌理念，不提交订单。

静态封面、详情演示与 /style-scenes/organic/（英文 /en/style-scenes/organic/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

不新增依赖。检查中英文、原导航与 CTA、具体结果、返回/重置和窄屏重排；报告实际运行的检查与待验项，不将实现要求写成已通过结论。
```

### 其余层级 Prompt

**Basic:** 使用有机自然风格设计品牌展示页面。以自然形态、温暖材质和低饱和大地色建立亲近感的视觉语言。页面通过不规则曲线、圆润容器和宽松留白形成舒展节奏，文字与按钮仍保持明确边界。适合生活方式与可持续主题；自然装饰应衬托内容，而不能牺牲可读性、信息层级或操作效率。

**Design:** 衬线标题与清楚的无衬线正文。米白、苔绿与陶土色；正文使用深绿。柔和圆角与少量拱形，不扭曲表单控件。轻微接触阴影，不使用强发光。大段留白与宽松行距，窄屏堆叠。

**Implementation:** 用当前风格完成 mori / 森 同品牌完整页面，从原首屏延续到内容、具体操作结果和返回路径，而非孤立控件或局部 demo。保留品牌、首屏文案、素材、构图、tokens 与全部 variants。以当前 YAML preview 为品牌、原导航与 CTA 的事实来源，不替换成通用营销模板。

保留 mori / 森 的米色、深绿和苔绿色层次、Georgia 衬线字体、24px 圆角及右侧现有 CSS 生活景观，不另外换成植物照片或无衬线正文。产品区延续三张拱形底上的亚麻/陶器/木托盘 CSS 物件，木纹只用于托盘；清单与合计是正常可读内容，不让有机轮廓扭曲控件。

复用当前 preview.tokens：背景 #f1efe5；前景 #29392b；强调 #526445 / #fff；卡面 #e3e5d6；边框 #b7bd9f；圆角 24px；字体 Georgia, serif；卡影 none。

dark 与 variants 复用 generic-style-pages.css 已有工作区选择器，不据通用历史变体重画首屏；保留 renderer 内各视觉面板的局部高光、渐变和投影。

Explore 进入自然物件系列，查看三个产品、加入/移除选物清单并同步合计；Collection 与 About 到达系列和品牌理念，不提交订单。

静态封面、详情演示与 /style-scenes/organic/（英文 /en/style-scenes/organic/）共用 renderer；静态封面不嵌套真实按钮，详情在独立文档中启用同款页面的语义控件与品牌内容延续。原导航和 CTA 必须到达对应内容或工作流，不用占位链接、仅变颜色或一句 toast 代替结果。

操作状态仅存在当前页面内存；刷新、工具栏重载/重置与模式切换均恢复初始状态，不使用 localStorage 或 sessionStorage。页内清空/重置用于撤销本次操作，不暗示跨页或持久保存。

提供返回、取消或清空/重置路径，说明仅当前页内存的状态边界；不伪装真实支付、邮件、登录、AI 或云同步。桌面、390px、320px 按内容换行重排，保留可读字号和触控目标，不整体缩小桌面页。控件有可访问名称、键盘操作、可见焦点；弹层支持关闭和焦点返回，表单校验与结果可被辅助技术读到；尊重 prefers-reduced-motion。

## 相关概念

- [minimalism](/interface-atlas-web/styles/minimalism) — 相似概念
- [editorial](/interface-atlas-web/styles/editorial) — 相似概念
- [claymorphism](/interface-atlas-web/styles/claymorphism) — 相似概念
- [button](/interface-atlas-web/components/button) — 影响组件

## Sources

- [V&A — Arts and Crafts](https://www.vam.ac.uk/articles/arts-and-crafts-an-introduction)

---

JSON: `/interface-atlas-web/api/concept/styles/organic.json` · 站点: /interface-atlas-web/styles/organic
