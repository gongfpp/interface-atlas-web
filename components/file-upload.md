# 文件上传区 / File Upload

> 组件 · `id: file-upload`

用于选择文件、展示校验反馈并管理待处理文件列表的表单区域。常见形式为原生文件选择按钮或可拖放区域；拖拽必须有按钮选择作为替代。选择文件不代表已经上传，界面应清楚区分待上传、处理中、成功和失败，并说明允许的格式与大小。

**别名:** 拖文件进去上传 · 拖拽上传框 · 选文件的地方 · dropzone

**分类:** Form

## 适用场景

- 提交图片、附件、PDF 等用户文件。
- 多文件任务需要逐项查看和移除。

## 不适用场景

- 只需要一个网址时使用文本输入。
- 未明确数据用途或上传目标时不要自动上传。

## 常见形式

- **拖放区域** (Drop zone) — 同时提供拖放与文件选择入口。
- **按钮选择** (Picker button) — 空间紧凑时使用原生文件选择。

## 实现要点

**CSS:** `border-style: dashed` `:focus-visible` `overflow: hidden`

保留原生 input type="file"，accept 只是筛选提示，还需校验类型与大小；服务端也必须验证上传内容。拖放阻止浏览器默认打开文件，错误明确到限制条件。示例不联网，只展示选择结果。

## 交给 Agent 的任务 Prompt

```text
先检查当前项目的组件与样式体系，复用已有能力实现文件上传区。
要求：
- 保留原生 input type="file"，accept 只是筛选提示，还需校验类型与大小；服务端也必须验证上传内容。拖放阻止浏览器默认打开文件，错误明确到限制条件。示例不联网，只展示选择结果。
- 文件选择与拖放采用相同限制，拒绝时不丢失已选文件。
- 选择成功不能显示为上传成功；这里没有上传请求。
- 窄屏可用，深浅色一致，尊重 reduced-motion。
- 不新增依赖。
运行项目现有检查，并列出修改文件及验证结果。
```

### 其余层级 Prompt

**Basic:** 创建文件上传区组件。提交图片、附件、PDF 等用户文件。

**Design:** 设计文件上传区，以清楚的层级、可见的状态和明确的反馈为优先。同时提供拖放与文件选择入口。空间紧凑时使用原生文件选择。文件选择与拖放采用相同限制，拒绝时不丢失已选文件。选择成功不能显示为上传成功；这里没有上传请求。

**Implementation:** 保留原生 input type="file"，accept 只是筛选提示，还需校验类型与大小；服务端也必须验证上传内容。拖放阻止浏览器默认打开文件，错误明确到限制条件。示例不联网，只展示选择结果。

## 相关概念

- [input](/components/input) — 相似概念
- [progress-bar](/components/progress-bar) — 相似概念
- [alert](/components/alert) — 相似概念

## Sources

- [MDN — HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)

---

JSON: `/api/concept/components/file-upload.json` · 站点: /components/file-upload
