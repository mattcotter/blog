---
layout: ../../layouts/BlogPostLayout.astro
title: 'CSS Variables Are Here!'
pubDate: 2025-06-28
description: "New CSS Features"
author: 'Matt Cotter'
image:
    url: '/public/astro-to-wordpress.jpg'
    alt: 'Astro to Wordpress'
tags: ["web development", "css", "javascript"]
---

## It's Finally Here
Front-end developers, rejoice: conditional logic has officially arrived in CSS! With the release of Chrome 137, we now have native support for the long-awaited if() function in CSS. No JavaScript, no class juggling, just pure style logic.

In this post, I’ll break down what `if()` does, how to use it, and why this new feature is a huge deal for modern web design.

## What Is the `If()` Function?

Think of `if()` like a ternary operator for CSS values. It lets you conditionally apply styles based on custom properties (`style()`), media queries (`media()`), or feature support (`supports()`).

Here's a basic example:
```css
padding: if(
  style(--theme: dark): 2rem;
  else: 3rem
);
```