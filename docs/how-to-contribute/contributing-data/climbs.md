---
sidebar_position: 2
title: "What are 'Climbs' in OpenBeta"
sidebar_label: "Climbs"
---

# Climbs

Can you lay hands on it? Does it have hand and foot holds? Does it have a start and a finish? If so, then this is likely a climb (route).

OpenBeta is an organisation that collects climbing data, so naturally **climbs** are a big part of what we deal with. Contributors looking to add or improve data relating to **climbs** may find it useful to take a look at this specification.

## Name(s)
While in some ways the most straightforward piece of data to collect, climb names have a number of unique gotchas that are worth noting.

### Alternate Names
Climbs (Routes) that have been around for a while are liable to develop their own nicknames or name variants. If you are a contributor working on capturing existing climbs it is always valuable to ask: 

> "Is this climb known to others by a different name?"
 
And then ensure that this data is recorded.

## Beta
We define Beta as any advice or specification as to how a route should be climbed. If there are holds that are eliminated, a complex [crux](https://en.wikipedia.org/wiki/Crux_(climbing)), or an unintuitive start, these are all considered part of the beta.

Beta often resembles a step-by-step instruction set that climbers will use to identify the route and know how it has been climbed before. There can often be a number of successful approaches to a given climb, and contributors are encouraged to append their own beta to a climbs beta content if they have improved on, or even completely reworked what is already available.

Contributors are also encouraged not to delete existing beta  **even if you feel you have improved it**. What works well for you may not always be best for everyone. If you are looking to improve existing beta, ensuring that hold descriptions are accurate and detailed can be a worthwhile effort.

### Pad placement
For boulderers, pad placement is a fine art that is honed over many years. Even with experience, there are occasionally boulders with unintuitive falls or pad beta that is unique in some other way.

Pads used for blocking sun that blinds climbers at specific points, or instructions to rig a pad in place on a slope are examples of unusual pad beta.

The nature of pad beta is that it is usually brief to share, but long and potentially dangerous to work out yourself.

![Pad beta example](/img/climbing-photos/pad-placement-example.jpg)
<sub>Example of pad placement with rigged pads</sub>

### Protection
Protection is another aspect of Beta, as it specifies how dangerous a route is (and is distinct from a climbs [grade](#grade)

### Grade
Grading has always been a complex subject for climbers. There are a number of grading systems around the world, and none of them were approached with the same design. This presents a unique i18n problem for contributors.

Grading is further complicated by the fact that it is intensely subjective, and no two climbers are likely to agree precisely on what the grade of a given climb is. If these two climbers are giving their opinions in two separate grading systems that **also** do not align perfectly the problem of communicating and recording accurate grades becomes even more complex.

For this reason, it is important for contributors to opine on routes they have personally climbed -**Even if the route has a recorded grade already**. Recording as many grade opinions as possible gives OpenBeta the broadest flexibility to improve on the understanding and communicating of that data.


## Location
OpenBeta only records a single coordinate for climbs (Even for ones that may span large enough areas where alternative means may seem attractive). The _Location_ field is understood by OpenBeta as the single coordinate point where the **start of the climb** may be found.

Given the wide variety of climbing disciplines, this seems to be a simple common denominator. If there is, for example, a traverse that spans a wide cartographic set of coordinates we would suggest the Beta field as an appropriate field to link or attach this data.