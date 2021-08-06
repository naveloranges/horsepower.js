# horsepower.js


<p align="center">
  <img width="460" height="300" src="https://github.com/itsmygit/horsepower.js/blob/main/docs/hpower.PNG">
</p>

# A tiny, lightning fast script to identify processing power in the browser

At it's heart the library works like the modernizr library.
just install with npm
```html
npm i hpower
```
and import in your index.js
```javascript
import hpower from "hpower"
```

This is all you have to do then the html of your website will be one of these classes so you can use it in your css(from the lowest performant browser to the highest)
```css
.one-fifth-powerful
.two-fifth-powerful
.three-fifth-powerful
.four-fifth-powerful
.five-fifth-powerful
```

so you can style your html like
```css
.three-fifth-powerful .div{}
```
for a medium powerful machine. Or you can use it in javascript by
```javascript
if(hpower.isThreeFifthPowerful){
    // run this code
}
```
The intended time it takes to produce benchmark is less than 50ms and the library size is about 50kb.

# How does it work?
This is done by running simple random operations and benchmarking the execution time for trying to find out the processing power of the device the browser is running on. The randomized behavior of the code prevents the javascript engine to cache anything and helps identifying the browser power more accurately.
