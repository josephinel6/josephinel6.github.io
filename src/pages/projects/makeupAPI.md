---
layout: "../../layouts/Project.astro"
title: "Makeup API"
description: "Simple makeup API"
thumbnail: "../../public/project-images/makeupAPI_7.png"
tools: ["javascript"]
tags: ["class assignment"]
---

**Purpose:** Class assignment  
**Link:** https://makeupapi.josephinemouse.repl.co/

Unfortunately, the API used for this project looks like it's no longer being maintained, so some links and products may not load/work properly. However, this project was still great practice for using JS to dynamically create and delete elements, and I especially enjoyed creating the search function to find products quickly.

What I least liked about this website was the loading times. For every page, I had all the products under the category load at once, which was still tolerable since the API doesn't have that many products, but is definitely not scalable, and even at such a small scale, it's still incredibly slow and could be much better.

Some other cool features of the site include product displays listing prices and ratings, the ability to click into and see a more detailed description of each product, a direct link to buy the product from the product details page (given the website still exists), and previously the ability to sort products by brand through either selecting the brand from an array of options or by clicking on the brand on any display of the product. Below are a few screenshots of the site.

<!-- \
![](images/makeupAPI_1.PNG)
![](images/makeupAPI_2.PNG)
![](images/makeupAPI_3.PNG)
![](images/makeupAPI_4.PNG)
![](images/makeupAPI_5.PNG)
![](images/makeupAPI_6.PNG)
![](images/makeupAPI_7.PNG)
![](images/makeupAPI_8.PNG)
\
\ -->

![](../../../public/project-images/makeupAPI_7.PNG)

**Reflection:** I don't think I will, but if I were to go back and add to this site, I would add a proper home page, of course, as well as filters for each page (price, style, etc., so you can have _multiple_ filters for products) and an option to choose how many products you want to load per page. This would likely come with a page selector, but I could also just add a "load more" at the bottom of each page. At the start of the project, I did have a home page, but it just loaded _all_ the products in the database, no "load more" or anything, which naturally failed pretty quickly. If I were to go back and add more, I think I would randomly select a category or filter and show all products from those on the page, changing the category/filter on each reload.

Another large change I would make is having each page have it's own URL. This is more possible now that I've started deploying sites through Github Pages and not solely relying on replit or just opening the html file, but even in the past I think I could've organized it better, especially since I had the entire website in one giant HTML file, script and all.
