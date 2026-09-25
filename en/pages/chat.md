# Chat / Messaging / 聊天消息页

> Pages · `id: chat`

A page organized around conversations: a session list sorted by latest message, a chronological bubble thread and a composer for text and attachments.

**Aliases:** 聊天页 · 聊天消息页 · 私信页 · 对话页 · 消息窗口 · 聊天界面 · 发消息的页面 · 会话列表

**Category:** Page / Messaging

## When to use

- One-to-one or small-group real-time communication
- Messages must keep context and support history lookup
- Ongoing support, community or team conversations

## When not to use

- One-way broadcasts — use a notification center or banner
- Content needs structured comparison — use a table or board
- One-off confirmations under a few messages — inline hints suffice

## Variants

- **Split View** (分栏会话) — Conversation list plus thread, the desktop default
- **Focused Thread** (单线程) — Only the current conversation, common on mobile
- **Bubble Stream** (气泡流) — Group-style consecutive bubbles emphasizing speakers

## Page structure

1. **Conversation list** — Avatar, name, last-message snippet and unread badge, ordered by latest message.
2. **Thread header** — Peer name, presence and more actions; returns to the list on mobile.
3. **Message bubbles** — Left/right distinguishes sender, with time and read state at the tail.
4. **Date divider** — Day dividers keep long threads from losing their sense of time.
5. **Composer** — Multi-line input plus attachments and send, with configurable Enter-to-send.

## Implementation

**CSS:** `flex` `grid` `overflow-y: auto` `overflow-anchor: auto`

Two columns via grid-cols-[280px_1fr], collapsing to a single stacked column on mobile. Keep the thread in chronological order and scroll to the end on send (scrollIntoView), anchoring scroll position when loading history. Cap bubbles near 72% width, auto-grow the textarea, and use optimistic sends that mark a retry state on failure.

## Agent task prompt

```text
Implement the chat page in the current project.

Inspect the existing message API, avatar and input components first; stay consistent.
Requirements:
- Conversation list, thread area and composer layout
- Optimistic send with auto-scroll to the bottom
- Distinct own/peer bubble styles and day dividers
- Clear unread badges when a conversation opens
- Collapse to a single column responsively; keyboard operable
- No new dependencies
Run existing checks when done and list modified files.
```

### Other prompt layers

**Basic:** Create a chat page with a conversation list, a message thread and a composer.

**Design:** Build a team chat page: conversation list on the left (avatar, name, last snippet, unread badge); a thread header with presence; chronological messages with own bubbles right in accent and peer bubbles left in neutral, plus day dividers; a composer with attach and send, Enter to send; auto-scroll to the newest message. Responsive and theme-consistent.

**Implementation:** React + Tailwind chat page: conversations and messages in controlled state; on send, optimistically append the local message and scroll to the end; auto-grow the textarea; clear the unread badge when a conversation is opened; keep the scroll anchor when loading history; respect prefers-reduced-motion; no new dependencies.

## Related

- [input](/pages/input) — Contains
- [avatar](/pages/avatar) — Contains
- [badge](/pages/badge) — Contains
- [infinite-scroll](/pages/infinite-scroll) — Uses pattern
- [optimistic-ui](/pages/optimistic-ui) — Uses pattern

## Sources

- [Nielsen Norman Group — Chatbots and conversational UI](https://www.nngroup.com/articles/chatbots/)
- [W3C WAI-ARIA Authoring Practices — Feed pattern](https://www.w3.org/WAI/ARIA/apg/patterns/feed/)

---

JSON: `/api/concept/pages/chat.json` · Site: /en/pages/chat
