---
title: "Makeup API"
description: "Simple makeup API"
thumbnail: "/project-images/makeup-api/makeupAPI_7.png"
tools: ["JavaScript", "HTML"]
tags: ["class-assignment", "archive", "website", "front-end"]
link: "https://makeupapi.josephinemouse.repl.co/"
slug: "makeup-api"
date: 2023-01-01
---

Unfortunately, the API used for this project looks like it's no longer being maintained, so some links and products may not load/work properly. However, this project was still great practice for using JS to dynamically create and delete elements, and I especially enjoyed creating the search function to find products quickly.

What I least liked about this website was the loading times. For every page, I had all the products under the category load at once, which was still tolerable since the API doesn't have that many products, but is definitely not scalable, and even at such a small scale, it's still incredibly slow and could be much better.

Some other cool features of the site include product displays listing prices and ratings, the ability to click into and see a more detailed description of each product, a direct link to buy the product from the product details page (given the website still exists), and previously the ability to sort products by brand through either selecting the brand from an array of options or by clicking on the brand on any display of the product. Below are a few screenshots of the site.

![](/project-images/makeup-api/makeupAPI_1.png)
![](/project-images/makeup-api/makeupAPI_2.png)
![](/project-images/makeup-api/makeupAPI_3.png)
![](/project-images/makeup-api/makeupAPI_4.png)
![](/project-images/makeup-api/makeupAPI_5.png)
![](/project-images/makeup-api/makeupAPI_6.png)
![](/project-images/makeup-api/makeupAPI_7.png)
![](/project-images/makeup-api/makeupAPI_8.png)

If I were to go back and add to this site, I would add a proper home page, of course, as well as filters for each page (price, style, etc., so you can have _multiple_ filters for products) and an option to choose how many products you want to load per page. This would likely come with a page selector, but I could also just add a "load more" at the bottom of each page.

At the start of the project, I did have a home page, but it just loaded _all_ the products in the database, no "load more" or anything, which failed pretty quickly. If I were to go back and add more, I think I would randomly select a category or filter and show all products from those on the page, changing the category/filter on each reload.

I would also give each page its own URL.
