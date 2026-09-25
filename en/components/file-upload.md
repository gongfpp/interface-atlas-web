# File Upload / 文件上传区

> Components · `id: file-upload`

A form region for selecting files, checking constraints and managing a pending list. It may use a native picker or a drop zone, but drag-and-drop must have a picker alternative. Selection is not upload completion: distinguish pending, processing, success and failure, and explain accepted types and size limits.

**Aliases:** 拖文件进去上传 · 拖拽上传框 · 选文件的地方 · dropzone

**Category:** Form

## When to use

- Select user images, attachments or PDFs.
- Review and remove individual files in a batch.

## When not to use

- Use a text field when only a URL is needed.
- Do not auto-upload without explaining the purpose and destination.

## Variants

- **Drop zone** (拖放区域) — Support both dropping files and a file picker.
- **Picker button** (按钮选择) — Use a native picker in a compact layout.

## Implementation

**CSS:** `border-style: dashed` `:focus-visible` `overflow: hidden`

Retain a native file input. The accept attribute is a picker hint; validate size and type and verify uploads on the server. Prevent the browser from navigating to dropped files. Explain constraints in errors. This demo only lists local selections.

## Agent task prompt

```text
Inspect existing components and tokens before implementing File Upload.
Requirements:
- Retain a native file input. The accept attribute is a picker hint; validate size and type and verify uploads on the server. Prevent the browser from navigating to dropped files. Explain constraints in errors. This demo only lists local selections.
- Picker and drop share constraints; a rejection preserves previous files.
- Do not label a selected file as uploaded; this demo sends no upload request.
- Support narrow screens, both themes and reduced motion.
- Add no dependencies.
Run existing checks and list changed files and validation results.
```

### Other prompt layers

**Basic:** Create a File Upload component. Select user images, attachments or PDFs.

**Design:** Design a File Upload with clear hierarchy and state feedback. Support both dropping files and a file picker. Use a native picker in a compact layout. Picker and drop share constraints; a rejection preserves previous files. Do not label a selected file as uploaded; this demo sends no upload request.

**Implementation:** Retain a native file input. The accept attribute is a picker hint; validate size and type and verify uploads on the server. Prevent the browser from navigating to dropped files. Explain constraints in errors. This demo only lists local selections.

## Related

- [input](/components/input) — Similar
- [progress-bar](/components/progress-bar) — Similar
- [alert](/components/alert) — Similar

## Sources

- [MDN — HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)

---

JSON: `/api/concept/components/file-upload.json` · Site: /en/components/file-upload
