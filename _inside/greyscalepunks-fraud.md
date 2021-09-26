---
title: "Inside the CryptoPunks Bubble - Greyscale / Grayscale Punks Collection Case Study - Conceptual Art (Parody)? (Get-Rich-Quick) Cash Grab? Greater Fools (Financial) Fraud?"

comments_url: https://old.reddit.com/r/CryptoPunksDev/comments/pakq6z/inside_the_cryptopunks_bubble_greyscale_grayscale/
---


Hello,

   I wrote-up an article titled [**Inside the CryptoPunks Bubble - Greyscale / Grayscale Punks Collection Case Study - Conceptual Art (Parody)? (Get-Rich-Quick) Cash Grab? Greater Fools (Financial) Fraud?**](https://github.com/cryptopunksnotdead/cryptopunks/tree/master/grayscale)

   What's your take? Questions and comments welcome.

PS: Download [**punks_grayscale.png**](https://github.com/cryptopunksnotdead/cryptopunks/blob/master/grayscale/i/punks_grayscale.png) (~800k) for all 10 000 grayscale punks or [**punks_sepia.png**](https://github.com/cryptopunksnotdead/cryptopunks/blob/master/grayscale/i/punks_sepia.png) (~800k) for all ye olde' sepia vinatage punks.

And here's the "magic" formula / script to turn all 10 000 original punks into grayscale (or why not? yes, ye olde' sepia vintage) in less than ten seconds:

``` ruby
require 'cryptopunks'

print "==> loading image..."
punks = Punks::Image::Composite.read( 'punks.png' )
print "OK\n"

# change all 10 000 punks to grayscale
punks_grayscale = punks.grayscale
punks_grayscale.save( "punks_grayscale.png" )

# or change all 10 000 punks to ye olde' sepia vintage
punks_sepia = punks.change_palette8bit( Palette8bit::SEPIA )
punks_sepia.save( "punks_sepia.png" )
```




