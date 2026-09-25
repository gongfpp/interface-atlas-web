# 头像 / Avatar

> 组件 · `id: avatar`

以圆形或圆角方形小图代表用户或组织：照片、姓名首字母或图标占位。 常与姓名一起出现在导航、评论与成员列表，可附在线状态点或多人叠加。

**别名:** 头像 · 用户头像 · 圆形头像 · 人员头像 · 账号图片 · 首字母头像 · 名字前面的小圆图

**分类:** Display / Identity

## 适用场景

- 用户身份的稳定视觉锚点（导航、评论、成员）
- 无图时用姓名首字母 + 品牌底色兜底
- 群组、多负责人场景做叠加展示

## 不适用场景

- 非人格化的系统对象（改用图标）
- 图片本身是内容主体（用完整图片展示）
- 需要展示丰富个人信息（用 profile 页或卡片）

## 常见形式

- **图片** (Image) — 用户上传的照片，裁切填充
- **首字母** (Initials) — 无图兜底，底色由名字散列固定
- **叠加** (Stacked) — 多人重叠 + 余量计数

## Platform API

- `<img>`

## 实现要点

**CSS:** `border-radius: 9999px` `object-fit: cover` `width` `height`

图片用 object-fit: cover 裁切防变形；首字母头像底色由名字散列映射到固定色板， 保证同一个人颜色稳定；状态点 absolute 右下并加描边。尺寸阶梯常用 24/32/40/48px。 图片必须有 alt 文本，纯装饰时用 aria-hidden 或空 alt。

## 交给 Agent 的任务 Prompt

```text
在当前项目中实现头像（Avatar）组件。

先检查现有组件体系与 Design Token，优先复用现有的表面色变量。
用途：导航用户区、评论列表与成员叠加。
要求：
- 图片 / 首字母两种内容，加载失败自动降级
- 首字母颜色按名字散列且稳定
- 尺寸档位 + 可选在线状态点 + 叠加形态
- 可访问性：有意义的 alt，装饰时 aria-hidden
- 不新增依赖
完成后运行现有检查，说明修改文件。
```

### 其余层级 Prompt

**Basic:** 创建一个头像（Avatar）组件：支持图片与首字母两种内容，三档尺寸，可附在线状态点。

**Design:** 创建 Avatar 组件。要求：圆形（或圆角方形）裁切；首字母兜底用低饱和底色 + 深色文字， 颜色由名字散列固定；在线状态点右下角带描边；尺寸 24/32/40 三档； 叠加形态 -ml-2 重叠 + 描边分隔；深浅色主题一致。

**Implementation:** 用 React + Tailwind 实现 Avatar：img + object-cover + rounded-full； 无 src 时渲染 initials（取名字前一字/首字母），底色从调色板数组按 name.charCodeAt 散列取色； 状态点 span absolute bottom-0 right-0 + ring-2 ring-[surface]； sizes 映射到 w/h；叠加组 flex -space-x-2，最后一项显示 +N； 图片 onError 时降级为首字母。

## 相关概念

- [badge](/components/badge) — 相似概念
- [dropdown](/components/dropdown) — 相似概念
- [profile](/components/profile) — 搭配使用

## Sources

- [Atlassian Design System — Avatar](https://atlassian.design/components/avatar/overview)
- [Ant Design — Avatar](https://ant.design/components/avatar)

---

JSON: `/api/concept/components/avatar.json` · 站点: /components/avatar
