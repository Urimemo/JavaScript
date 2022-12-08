"use strict";

caches.open("traficante").then(cache => {
    cache.add("index.html")
});

