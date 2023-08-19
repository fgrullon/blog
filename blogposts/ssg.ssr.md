---
title: "When to Use Static Generation vs Server-side Rendering"
date: "2023-08-19"
---

We recommend using **Static Generation** (with and without data) whener possible because your page can be built once and serverd by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you shouldl choose Static Generation.
