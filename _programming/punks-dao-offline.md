---
title: "Run Your Own Free Decentralized Autonomous Punk Generator Contract / Service (Offline and Offchain) in Your Own Home"

comments_url: https://old.reddit.com/r/CryptoPunksDev/comments/pmonuv/run_your_own_free_decentralized_autonomous_punk/
---


Hello,

   I've put together a little [**generate sample script**](https://github.com/cryptopunksnotdead/cryptopunks/blob/master/punksdata-contract/generate.rb) using the CryptoPunksData data / decoding machinery
that lets you run your own free decentralized autonomous punk generator contract /service (offline and offchain) in your own home.

   Yes, you can generate your own punks too - pass along the attributes by number / id or by name. Example:

``` ruby
punk = punks.generate( "Alien, Knitted Cap, Regular Shades" )
punk.zoom(4).save( "punk4x.png" )
```

Same as:

``` ruby
punk = punks.generate( 11, 22, 21 )
```

Find out more [**Inside the CryptoPunksData Contract - The Decentralized Autonomous "Off-Chain" Offline Version - Generate Punks by ID (0 to 9999) in the Original 24x24 Format or with 2x, 4x, 8x Zoom or More, Query for Attributes by ID and More  »**](https://github.com/cryptopunksnotdead/cryptopunks/tree/master/punksdata-contract)

Questions and comments welcome.

