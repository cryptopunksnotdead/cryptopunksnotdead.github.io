# How to Draw Punks on Canvas (in JavaScript) from Scratch / Zero Using Punk Building Blocks in Pixel Art "Ascii" Text Format


## Step 1 -  Use the shared pixel art library and the shared punk pixel art design

In your head of your web page add:

``` html
  <!-- 1) pull in pixel art and punk drawing machinery / library code -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/lib/pixelart.js"></script>

  <!-- 2) pull in some (shared) punk pixel art designs (e.g. alien, demon, etc.) -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/designs.js/designs.js"></script>
```

## Step 2 - For every punk that you want to draw add a canvas element

Let's draw two punks - the first in the original 24x24 format (zoom = 1) and the second with a 8x zoom. Add in the body of your web page
to canvas elements with ids:

``` html
   <canvas id='punk'></canvas>
8x <canvas id='punk8x'></canvas>
```

## Step 3- Draw the punks using any punk type or attribute from the punk build blocks and any zoom (original, 2x, 4x, etc) 

Add an inline script block that uses the drawPunk method to draw the punk according to your specs on the canvas:

``` html
<script>
    drawPunk( '#punk',  [alien, headband] );
    drawPunk( '#punk8x' [zombie, knittedcap, lasereyes] );
</script>
``` 

That's it.    Open up the web page and enjoy your punks.



## Questions? Comments?

Post them on the [CryptoPunksDev reddit](https://old.reddit.com/r/CryptoPunksDev). Thanks.






---

Bonus:  All together now - for easy cut-n-paste and reference:

``` html
<head>
  <!-- 1) pull in pixel art and punk drawing machinery / library code -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/lib/pixelart.js"></script>

  <!-- 2) pull in some (shared) punk pixel art designs (e.g. alien, demon, etc.) -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/designs.js/designs.js"></script>
</head>
<body>

   <!-- let's draw two punks -->
  <canvas id='punk'></canvas>
  8x <canvas id='punk8x'></canvas>

  <script>
    drawPunk( '#punk',  [alien, headband] );
    drawPunk( '#punk8x' [zombie, knittedcap, lasereyes] );
  </script>
</body>
```

Save as `[punks.html](punks.html)` and open up in your browser to enjoy your punks.
