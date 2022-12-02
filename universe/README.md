# (Pixel) Punk (Programming) Links From Around The World, Universe & Metaverse 

## What's News?

December 2022

### Punk Blocks by 0xTycoon  - A (On-Blockchain) Registry of 24×24 Images (in the PNG Format) For Building Punks From Scratch

[**0xTycoon**](https://github.com/0xTycoon) is putting together a new (on-blockchain) service
that lets you build your own punks from scratch.
See [**0xTycoon/punk-blocks »**](https://github.com/0xTycoon/punk-blocks)

Bonus: Yes, you can register new punk building blocks!


### Blockchain Analytics Script by 0xmunger - How Many Matt & John's® Punks Are Lost Forever? 

[**0xmunger**](https://github.com/0xmunger) has put together a (python) script 
that queries  (ethereum) blockchain services to find out how many of the 10,000  
Matt & John's® Punks are lost forever - by checking punks that have been in wallets without
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
