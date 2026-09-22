---
title: "Markdown Kitchen Sink: A Formatting Test Post"
date: "2026-09-22"
description: "A test post covering headings, lists, tables, code, images, quotes, and more so I can check how my site renders Markdown."
tags: [test, markdown, formatting]
---

# Markdown Kitchen Sink

This post exists purely to stress-test the site's Markdown rendering. It throws
a little bit of everything at the renderer: headings, emphasis, lists, tables,
code blocks, blockquotes, images, and links.

## Headings

# H1 heading
## H2 heading
### H3 heading
#### H4 heading
##### H5 heading
###### H6 heading

## Text emphasis

Plain text, **bold text**, *italic text*, ***bold italic text***,
~~strikethrough text~~, and `inline code`.

You can also mix it up: **bold with *nested italic* inside**, or a sentence
with a [link to a website](https://example.com) right in the middle of it.

## Blockquotes

> This is a simple blockquote.

> Blockquotes can span
> multiple lines, and even
>
> contain a blank line in between.

> **Nested quotes work too:**
>
> > This is a quote inside a quote.
> >
> > > And one more level down.

## Lists

### Unordered list

- First item
- Second item
  - Nested item one
  - Nested item two
    - Deeply nested item
- Third item

### Ordered list

1. Step one
2. Step two
3. Step three
   1. Sub-step A
   2. Sub-step B
4. Step four

### Task list

- [x] Write the test post
- [x] Add some images
- [ ] Proofread everything
- [ ] Ship it

## Code

Inline code looks like `const x = 42;`.

A fenced code block with syntax highlighting:

```javascript
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greet("world");
```

A fenced code block in a different language:

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))
```

A code block with no language specified:

```
plain text in a code fence
no syntax highlighting here
```

## Tables

| Feature       | Supported | Notes                     |
|---------------|:---------:|----------------------------|
| Headings      |    ✅     | H1–H6                      |
| Tables        |    ✅     | You're looking at one      |
| Code blocks   |    ✅     | Inline and fenced          |
| Images        |    ✅     | See below                  |
| Footnotes     |    ❓     | Depends on the renderer    |

| Left aligned | Center aligned | Right aligned |
|:-------------|:--------------:|--------------:|
| a            |       b         |             c |
| longer text  |      mid        |           123 |

## Images

A standard image with alt text:

![A scenic mountain landscape](https://picsum.photos/id/1015/800/450)

An image used inline as a "figure" with a caption written below it:

![A random abstract placeholder image](https://picsum.photos/id/1025/800/450)
*Caption: just a random placeholder image, not the actual subject of this post.*

A small square image to check inline sizing/behavior:

![A small square placeholder](https://picsum.photos/id/1043/200/200)

## Links

- [A regular link](https://example.com)
- [A link with a title](https://example.com "Example Domain")
- Bare URL: <https://example.com>
- An [internal-style link](/posts/test) to another post

## Horizontal rule

Above this line is one section.

---

Below this line is another.

## Inline HTML (optional test)

<p>This is a raw HTML paragraph, in case the renderer allows it.</p>
<mark>This text might be highlighted if <code>mark</code> is supported.</mark>

## Footnotes

Here's a sentence with a footnote reference.[^1]

[^1]: This is the footnote content, in case the renderer supports footnotes.

## Wrap-up

If everything above rendered correctly — headings scale properly, lists nest,
code blocks are highlighted, images load and are sized sensibly, tables align,
and blockquotes are visually distinct — then the Markdown pipeline is in good
shape. 🎉
