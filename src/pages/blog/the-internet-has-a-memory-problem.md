---
layout: ../../layouts/BlogPostLayout.astro
title: 'The Internet Has a Memory Problem'
pubDate: 2026-07-03
description: "Is archiving the web important still?"
author: 'Matt Cotter'
image:
    url: '/public/astro-to-wordpress.jpg'
    alt: 'Astro to Wordpress'
tags: ["elementor", "divi", "internet", "ai"]
---

## The 90s

Back in the late 1990s, I was getting into web development for the first time. It was the Wild West. Tables were used for layout, browsers had their own quirky HTML tags like `<marquee>` and `<blink>`, and every website felt like it was making up the rules as it went.

I remember picking up a copy of [*Creating Killer Websites* by David Siegel](https://killersites.com/killerSites/3-pdf/press.pdf), and it completely changed how I thought about web design. At the time, it felt revolutionary. It encouraged designers to push past the limitations of HTML and create sites that looked more like print than plain documents.

I still own that edition today. It hasn't aged particularly well, but that's kind of the point. It's a snapshot of what the web looked like at a specific moment in time. You can flip through it and immediately remember where the industry was headed.

The web changes constantly. Content gets updated. Designs get refreshed. Companies come and go. Entire domains disappear without anyone noticing. That got me wondering: why don't we talk more about preserving any of it?

## It's More Than Just Nostalgia

When people think of old websites, they usually picture Geocities pages covered in animated GIFs, "Under Construction" signs, visitor counters, and guestbooks.

There's definitely some nostalgia there, but that's not why archives matter.

The Internet Archive's Wayback Machine isn't just preserving ugly websites from the '90s. It's preserving our history.

The internet has become the place where we publish everything. News breaks online. Businesses live online. Communities form online. People document their lives online. Entire hobbies and subcultures exist only because someone decided to throw together a website twenty years ago.

The problem is that none of it is permanent.

Articles get rewritten. Companies quietly delete pages. Forums shut down. Personal blogs disappear when someone forgets to renew a domain name.

Without archives, those things are simply gone.

It's the digital equivalent of burning down a library and hoping nobody notices.

## Modern Websites Aren't Easy to Archive

One thing that's made this worse is the way many modern websites are built.

Take Elementor, for example. It's an incredible tool for building websites, but like many visual builders and JavaScript frameworks, it leans heavily on JavaScript to render content in the browser.

To someone visiting the site today, everything works perfectly.

To an archival crawler, not always.

If the crawler can't execute the JavaScript, or if an API disappears a few years later, the archived page may only capture the framework instead of the actual content. The page exists, but the words, images, and information people came for never load.

That's a real problem if we're trying to preserve the web.

This isn't really Elementor's fault. It's just the direction the web has moved. Rich, interactive experiences require more JavaScript than ever before. But somewhere along the way, we started treating HTML as an empty container instead of the thing that actually holds the content.

## AI Has Accidentally Made the Problem Worse

There's another issue that's started popping up over the last couple of years.

AI companies are crawling huge portions of the web to collect training data for language models. That explosion in automated traffic has caused a lot of website owners to crack down on bots.

Cloudflare challenges. WAF rules. Blocking crawlers altogether.

Unfortunately, the Internet Archive often gets caught up in those same restrictions.

The Wayback Machine is still archiving websites, but preserving the web has become a lot harder because so many sites now treat every crawler like it's trying to scrape content for AI.

I don't blame site owners for protecting their bandwidth or content. I'd probably do the same.

But it's unfortunate that one of the biggest casualties has been web preservation.

## Why I Like Static Sites

This is one of the reasons I've become such a fan of Astro.

When Astro builds a page, the content is already there. Headings, paragraphs, images, and links are all rendered into HTML before anyone visits the site.

That makes the site faster.

It makes search engines happier.

And it gives archives a much better chance of preserving the page exactly as it looked when it was published.

JavaScript still has its place. I use it every day. Interactive applications wouldn't exist without it.

I just don't think people should need JavaScript to read an article.

The web worked that way for a long time, and I think there's still value in that philosophy.

## Building Something That Lasts

Most of us don't think about whether our websites will still exist twenty years from now.

We're thinking about deadlines, Lighthouse scores, SEO, accessibility, analytics, and whatever feature is next on the roadmap.

But every website we publish becomes part of the historical record.

Someone twenty years from now might be researching a local business, a political campaign, a community project, or just trying to remember what the internet looked like in 2026.

I'd like to think they'll still be able to find it.

The internet has become the largest collection of human knowledge ever assembled. It would be a shame if we slowly made it impossible to preserve.

Maybe that's something we should think about a little more when we build for the web.