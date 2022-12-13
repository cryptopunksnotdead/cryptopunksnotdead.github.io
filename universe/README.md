# (Pixel) Punk (Programming) Links From Around The World, Universe & Metaverse 


Note:  This link blog is written by [**Gerald Bauer**](https://github.com/geraldb).  For now I do NOT duplicate and include "self-referencing" links
to  my own little (punk) pixel art & blockchain scripts here - if you are curious what I am up to, see the weekly updates @ [**Gerald Bauer's Code Monkey Diary / Updates - What's News @ Punk's Not Dead, Learn Pixel Art, Pixel Art Exchange & Friends? »**](https://geraldb.github.io/) 


## What's News?

December 2022

### Punk Blocks by 0xTycoon  - A (On-Blockchain) Registry of 24×24 Images (in the PNG Format) For Building Punks From Scratch

[**0xTycoon**](https://github.com/0xTycoon) is putting together a new (on-blockchain) service
that lets you build your own punks from scratch.

See [**0xTycoon/punk-blocks »**](https://github.com/0xTycoon/punk-blocks)

Bonus: Yes, you can register new punk building blocks!


<!--
See 0xTycoon/punk-blocks »

**Update Dec/3rd**  Sorry - looks like 0xTycoon made the repo private. If anyone knows more about Punk Blocks by 0xTycoon, please tell.    
-->

### Blockchain Analytics Script by 0xmunger - How Many Matt & John's® Punks Are Lost Forever? 

[**0xmunger**](https://github.com/0xmunger) has put together a (python) script 
that queries  (ethereum) blockchain services to find out how many of the 10,000  
Matt & John's® Punks are lost forever - by checking punk tokens that have been in wallets without
any activity for years.  See [**0xmunger/lost-punks »**](https://github.com/0xmunger/lost-punks)

> Roughly 192, or 2% of CryptoPunks are lost. "Lost" is defined as a wallet 
> or related wallet having no transactions for 4 years.
>
> Interestingly, 155 of the 192 are concentrated in two wallets: 
> 0x717 which has 89 punks and 0x776 which has 66 punks.



### lep.directory - New Low-Effort Punks (LEP) Directory Website - Browse by Punk Type Incl. Original 1/1s And More

The original low-effort punk (token) collection is missing metadata (attributes, etc).  
A new (propriertary closed-source) website by ??? is filling the gap - see [**lep.directory »**](https://lep.directory/)


---

November 2022

### Matt & John's® Punk History Corner -  Androidify — [Matt & John's] Larva Labs & The First [Blockchain] Profile Picture (PFP) Use Case by Nick.bit

> On February 14, 2011, Larva Labs (the [Matt & John's] team who created [Matt & John's] Punks in 2017) 
> launched an internal project with Google Creative Lab called Androidify.
> The idea was to create unique customizable avatars based on the Android brand robot, 
> thanks to dozens of customization options and accessories, to be used as profile pictures (PFPs) / personal avatars on Android devices and social media sites. As [Matt & John's]  Larva Labs wrote, "Create Android versions of yourself and friends. Set as contact photo, or post to Twitter and Facebook. Resize, recolor and choose from lots of clothing options to get your Android just right!". It ended up growing to become a crucial part of the global Android brand with over 10 million downloads!
>
> [...]
>
> A Sense of Resemblance - 
> We also cannot deny that both products have a sense of resemblance, along with the fact that the Androidify project was intentionally created for profile picture (PFP) usage. As such, you could easily customize your own personalized avatar with many different hairstyles, skin colours, and accessories like 3D glasses, pipes, medical masks, beanies, and much more!
>
> To demonstrate this statement, I decided to use the original version of the Androidify App (Feb. 2011) to create similar-looking
> [Matt & John's] punks. As you can see from the image below, 
> it is quite evident that both products share lots of identical features and characteristics. It even appears that 44 punk traits were present in the app in 2011, and 57 traits in 2014. This means that (61%) of [Matt & John's] punks traits were present in the Androidify app by 2014!

[**Read more »**](https://mirror.xyz/nickbit.eth/awIhCJzTfWnykcqpaQ-hP3FEMTcyU-NTWzRzSdRn8xs) 

Bonus: Try [**Androdify**](https://web.archive.org/web/20150310015100/https://androidify.com/en/#/create) (the web edition in your browser via the Wayback Machine @ the Internet Archive).



### (Free) Metaverse Course Fall 2022 (12 Weeks) by Anonymous Punk #6529 Et Al

Anonymous Punk #6529 (of Noun fame & fortune) et al started a free 12-week massive open online course 
(via the University of Nicosia, Cyprus). The outline reads:

- Week 1 (Oct 3) - What is an Non-Fungible Token (NFT)?
- Week 2 (Oct 10) - Copyright and Provenance in Non-Fungible Tokens (NFTs)
- Week 3 (Oct 17) - Profile Picture (PFP) Non-Fungible Tokens (NFTs)
- Week 4 (Oct 24) - Art Non-Fungible Tokens - Part I: CryptoArt ("1 of 1s") 
- Week 5 (Oct 31) - Art Non-Fungible Tokens - Part II: Generative Art
- Week 6 (Nov 7) - Key considerations in the Non-Fungible Token (NFT) space
- Week 7 (Nov 14) - Gaming Non-Fungible Tokens (NFTs)
- Week 8 (Nov 21) - What is a metaverse?
- Week 9 (Nov 28) - Trends in visualization technology
- Week 10 (Dec 5) - Financing models in the Non-Fungible Token (NFT) and Metaverse space
- Week 11 (Dec 12) - Non-Fungible Tokens (NFTs) - off-chain objects and the broader environment
- Week 12 (Dec 19) - Metaverse 2030: Long-term technology stacks for the metaverse and digital society

For some first quick course notes & links, see [**Awesome Metaverse @ Profile Picture (As A Service) »**](https://github.com/profilepic/awesome-metaverse)


---

Evergreens - Oldies, But Goldies

### Matt & John's® Punks V2 Sales Data Script & Charts by ???


> Here is the plot of all [Matt & John's®] punk [V2] purchases from 6/23/2017 to present.
>
> Raw Data - You can find the raw data here. 
> This text file consists of rows of tuples of the form (date, punk id, price). It is updated with the latest transactions every 24 hours.
>
> Code - You can find the code for downloading the data and generating the plots here.

See [**punkprices.subopt.org »**](http://punkprices.subopt.org/)


### Subgraph for the Matt & John's® Punks V2 by Jerry Okolo

[**Jerry Okolo**](https://github.com/itsjerryokolo)  has put together a graph (blockchain) indexing 
service (aka "subgraph") that you can query / use via GraphQL. Example - Sales for the last 30 days:

```graphql
query Last30DaysSales($timestamp_gt: String) {
  sales(
    orderBy: timestamp
    orderDirection: desc
    where: { timestamp_gt: $timestamp_gt }
  ) {
    id
    to {
      id
    }
    amount
    txHash
    timestamp
  }
}
```

With `$timestamp_gt` set like this:

```javascript
{
  $timestamp_gt: Math.round(Date.now() / 1000) - 30 * 24 * 60 * 60;
}
```


See [**itsjerryokolo/CryptoPunks »**](https://github.com/itsjerryokolo/CryptoPunks)
 

---

## Suggestions? Questions? Comments? 

Post them on the [D.I.Y. Punk (Pixel) Art reddit](https://old.reddit.com/r/DIYPunkArt). Thanks.
