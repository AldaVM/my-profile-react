---
title: "Reduce in Action - JS"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
description: "Como utilizar el método reduce en arreglos"
tag: "#javascript"
coverImage:
  default: "/assets/blog/cover.png"
  medium: "/assets/blog/cover.png"
date: "2020-09-17"
timeRead: "5 min"
author:
  name: Aldair Valencia
  picture: "/assets/blog/cover.png"
ogImage:
  url: "/assets/blog/cover.png"
---

You may have been grinding all those algorithms question on various platforms for your next interview, ever wonder when can we actually use them. Well, I got to finally see them in action while creating a board game called 8 Puzzle. It is played on a 3-by-3 grid with 8 square tiles labeled 1 through 8 and a blank square. Your goal is to rearrange the tiles so that they are in order. You can check out my implementation to get a better idea here.

## Count Inversion

So the catch is that not all boards are solvable so how do we generate aboard for the player to be playable?. One thing is to just solve the board but how do we solve the board? more on solving the board later cause there’s a better way to find if the given board is solvable and yes without even solving it.

Let’s look carefully at what each move does with respect to changing relative positions between tiles. To be more specific about these changing positions we come up with a concept of inversion. An inversion is a pair of tiles where the one appearing first is larger than the after. Formally, an inversion is any pair of tiles i and j where i < j but i appears after j when considering the board in row-major order. By row-major we mean scanning row first and then the bottom.

Alright, what about inversion. The thing is that a swipe left or right does not change the number of inversions. The interesting case is though for up and down swipes, any vertical move changes the inversion by even numbers you can see it in the below example.

>
```
 const clients = [
   {},
   {},
   {}
 ]
```
>

Vitae tempus quam pellentesque nec nam. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Posuere morbi leo urna molestie at elementum eu facilisis. Risus feugiat in ante metus dictum at tempor. Semper eget duis at tellus at. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Tortor dignissim convallis aenean et tortor at risus viverra. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Odio tempor orci dapibus ultrices in iaculis nunc sed. Mattis rhoncus urna neque viverra. Sed ullamcorper morbi tincidunt ornare.
