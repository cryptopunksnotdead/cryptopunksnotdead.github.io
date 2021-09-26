---
title: "cryptopunks - The Shell Version V2 Upcoming - Request for Comments"

comments_urL:  https://old.reddit.com/r/CryptoPunksDev/comments/pmp41b/cryptopunks_the_shell_version_v2_upcoming_request/
---


Hello,

   Over the next days I try to update the [**punk command line tool**](https://github.com/cryptopunksnotdead/cryptopunks/tree/master/cryptopunks) also known as CryptoPunks - The Shell Version.

 Where we are today? Try:

```
$ punk -h
```

resulting in:

```
Usage: cryptopunk [options] IDs
  Mint punk characters from composite (./punks.png) - for IDs use 0 to 9999

  Options:
    -z, --zoom=ZOOM   Zoom factor x2, x4, x8, etc. (default: 1)
    -d, --dir=DIR     Output directory (default: .)
    -f, --file=FILE   True Official Genuine CryptoPunks™ composite image (default: ./punks.png)
    --offset=NUM  Start counting at offset (default: 0)
    -h, --help        Prints this help
```

What's planned for V2?   The idea is to incorporate the CryptoPunksData machinery and turn the punk command line into a multi-command line tool.  The "old" default minting now becomes
the  `punk tile`  command  that requires a composite image to work  and the new `punk generate` command will use the CryptoPunksData machinery built-in to generate any punks "out-of-thin-air" offline /offchain  from ids, attributes or comma-separated values (CSV) files.

Examples for new `punk tile` or `punk t`  command:

```
$ punk tile 0 2890 8219               # in v1 was: punk 0 2890 8219
$ punk tile --zoom 2 0 2890 8219  # in v1 was: punk --zoom 2 0 2890 8219
```

Example for new `punk generate` or `punk g` command:

```
$ punk generate --ids  0 2810                  # generate punk #0, #2810
$ punk generate --zoom 4 --ids 0 2810     # generate punk #0, #2810 in 4x zoom
$ punk generate  alien knitted_cap regular_shades  # generate punk with attributes listed
$ punk generate 11 22 21                       # same as above (but with attribute ids)
$ punks generate --file  first100.csv         # generate punks using the attributes in the csv file
```

What's your take? Do you have your own ideas or suggestions? Questions and comments welcome.


