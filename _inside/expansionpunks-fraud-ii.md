---
title: "Inside the Expansion Punk Fraud - 'Classic' Crypto Punks Collection Attribute Generation Rules - Your Comments Welcome"

comments_url: https://old.reddit.com/r/CryptoPunksDev/comments/piawh2/inside_the_expansion_punk_fraud_classic_crypto/
---


Hello,

  Jeremy Posvar, Data Wizard and Florian Uhde, Code Wizard from
the [Expansion Punks greater fool crypto scamming operation](https://old.reddit.com/r/CryptoPunksDev/comments/p84eqv/inside_the_expansionpunks_tokenomics_a_legit/)
(on target to hit a million $$$ - congrats!)
are posting some attribute generation rules if you want to match up with the original Larva Labs "genesis" collection.

Rule 1: Punks with "Welding Goggles" must NEVER be assigned
a "Hat" trait, only "Hair" traits.
Why? Goggles wouldn't pair well with various Hats.

Rule 2: "Pilot Helmet" punks NEVER have an "Eye" trait
(e.g. glasses, eyeshadows). Why?  The Pilot Helmet has integrated goggles, so double Eye traits would be awkward.

Rule 3:  Aliens/Apes NEVER have Facial Hair, Blemish, Mouth or Nose traits (in the genesis series).

Rule 4: Aliens/Apes should ONLY be assigned "hat" attributes,
NEVER "hair" attributes. Why? Aliens/Apes don't grow human hair styles (in the genesis series).


  What's your take?
  How punk is that "honoring of the original punk ethos"?
  Is it bullshit to rationalize a cash grab and selling a token with an index to an image any 6-year-old can (re)draw in minutes or download for free on
 the internets (in the original 24x24px size or with a 2x, 4x, 8x
  or you name it zoom factor)?

 [Ask me anything (AMA) - Tuesday Sept. 7th @ 9pm (PST).](https://twitter.com/ExpansionPunks/status/1434389113486987267)   Welcome to the "honest and transparent" crypto fraudster world.

**Update**   Let me clarify the post since there are two anonymous reports.  I applaud and approve greatly publishing on how the originial CryptoPunks are put together and the attention to detail on doing a 100% pixel-perfect clone and such.

However, I greatly disapprove of the fraud selling "art" tokens to greater fools with the promise of getting-rich-quick.  Shame on the self-proclaimed data wizard and code wizard. You for sure know what you are doing.


---

Notes:

While updating [**punks.contracts**](https://github.com/cryptopunksnotdead/punks.contracts) a code nugget from the ExpansionPunk contract:


```
/// this will take the money on the contract and split it
///  based on the logic below and send it out.
///  We funnel 1/3 for each dev and 1/3 into the
///  ExpansionPunkDAO
function withdraw() public onlyAdmin {
        uint256 _balance = address(this).balance;
        uint256 _split = _balance.mul(33).div(100);
        require(payable(jp).send(_split));   // Jeremy Posvar (jp)
        require(payable(fu).send(_split));   // Florian Uhde (fu)
        require(payable(dao).send(_balance.sub(_split * 2)));
}
```


