---
title: "Weather API"
description: "First attempt at working with APIs"
thumbnail: "/project-images/weatherAPI_1.png"
tools: ["JavaScript", "HTML", "CSS"]
tags: ["class-assignment", "archive"]
link: "https://weatherapi.josephinemouse.repl.co/"
slug: "weather-api"
date: 2023-01-01
---

This was my first attempt at working with APIs. I decided to create a simple project that could tell you the weather given the latitude and longitude inputed, and I added a background for the homepage using an API that returned random images.

It would make more sense for the user to input a location and go through a geocoding API to get the latitude and longitude, but there wasn't a good API I could set up without a key, which I could not use due to class restrictions.
\
\
!["homepage"](/project-images/weatherAPI_1.png)

The image above shows the homepage of the program. As you can see, there is a space for the user to input latitude and longitude. There is also an image background and a paintbrush icon in the bottom right corner that allows the user to change the background to another random image. This is done with the [Lorem Ipsum API](https://picsum.photos/), which allows you to put in parameters and returns a random image that fits the given height, width, etc. This API is used every time the page is loaded, as well as whenever the user clicks the paintbrush, allowing a random background to be displayed every time the site is accessed:

```js
function changebg() {
  var num = Math.random();
  document.body.style.backgroundImage =
    "url('https://picsum.photos/1920/1080?random=" + num + "')";
}
```

\
The following shows the weather actually being returned:  
\
![New Orleans Weather](/project-images/weatherAPI_2.png)  
\

```js
function getweather() {
    console.log("lagsdjk;f")
    var lat = document.getElementById("latitude").value;
    var long = document.getElementById("longitude").value;
    console.log('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + long + '&temperature_unit=fahrenheit' + '&current_weather=true')
    fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + long + '&temperature_unit=fahrenheit' + '&current_weather=true')
         .then(response => response.json())
         .then(response => {
             weather.innerHTML = response.current_weather.temperature + "° F";
         }
}
```

\
There's more to the function, of course, but this is the most critical part.

You might notice that this page also has a background--the majority of the getweather() function is dedicated to setting the background. I should have used an API for this; instead, I added each photo myself.
