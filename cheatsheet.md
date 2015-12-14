---
layout: markdown
title: Cheat Sheet
image: <img src="../imgs/doc.svg" alt="article-thumbnail">
---

##CSS

### Margin Auto

Remember to set the width first and to display as block. Auto sets half of remaining width to margin-left and the other half to margin-right.

### Display: Inlines and Blocks

**Inline** makes an element resist any vertical (top-bottom) padding or margin. Further, setting the height or width will do nothing. Elements with inline simply go with the flow and take up as much room as they need, nothing more nothing less.

**Inline-Block** allows you to set vertical settings and height/width while still displaying the element in-line with everything else.

**Block** gives an element its own line and defaults to taking up 100% width. You can play around with height/width, you name it.

### Vertical-Align

Only works with inline elements (or table cells).

##Ruby

### Enumerators and Enumerables

#### Why use an Enumerator?
1. For chaining multiple enumerable operations. 
2. For returning collections without computing data. Great if you don't want to pass around huge collections.
3. Check out this great [blog post](http://blog.arkency.com/2014/01/ruby-to-enum-for-enumerator/)

#### Some Useful Enumerable Methods
* Collect 
* Count
* Group_By
* Reduce
* Map
* Select
* [RUBY DOCS!!!](http://ruby-doc.org/core-2.2.3/Enumerable.html)


##Javascript

### Syntax

for each loops:

<!-- <pre class="prettprint lang-js">-->
~~~
for (var in object) { 
	...
}

array.forEach(function(entry) {
	...
});
~~~
{: .language-javascript}
<!-- </pre> -->
