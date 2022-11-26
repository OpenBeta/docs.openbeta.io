---
sidebar_position: 1
title: "What are 'Areas' in OpenBeta?"
sidebar_label: "Areas"
---

![area cover photo](/img/stock-photos/guy-standing.jpg)

# Areas in OpenBeta

From a technical standpoint, areas are generic containers in OpenBeta that allow hierarchical organization of other containers (see [data model](/under-the-hood/data-model)). In a more broad sense, Areas can be understood by considering the data that is captured about them. These groupings are critical for a number of reasons, but they can be best understood by enumerating the various data that an "Area" is comprised of.

**If it is a means of collocating or grouping [climbs](/how-to-contribute/contributing-data/climbs), then it is an area.** There is maybe a slightly unintuitive bit of naming here, because by this definition concepts like "Boulder" or "Crag" [are areas](#leaf-areas).

## Area Concepts

The following sections discuss the various fields that OpenBeta aims to populate and maintain for climbing areas.

### Access
Access and [Navigation](#navigation) are not the same concept within the OpenBeta dataset. "Access" refers to any information that may relate to acquiring or negotiating **permission** to climb in a given area. Different countries and different landowners may have their own rules/laws surrounding lawfully accessing an Area.

Not all climbing areas will have complex access requirements, but when they exist it is critical to capture information about them lest visiting climbers find themselves at a locked gate or listening to an angry landowner.

> Knowing what to expect in terms of land access is imperative for climbers visiting an area for the first time

### Ethic

Throughout the world there are a variety of climbing practices that need to be upheld not only for the protection of social relations between visiting climbers and locals, but also for the conservation of the surrounds and sustainability of the sport.

#### Critical Data Points
Visiting climbers need to know a lot of things when visiting new areas, but the most important information to record is usually whatever is most critical to local climbers and conservationists.

Make no assumptions about what visiting climbers may or may not know. Depending on where visiting climbers are coming from, there may be very little overlap between the practices observed by local climbers and the visitors.

This fact makes it very hard to make a specific list of information to capture, but they can be broadly listed as:

1. What must climbers do to protect local rock
1. What must climbers **NOT** do to protect the local rock
1. How must climbers behave while climbing in this area; Climbing areas are often shared by both climbers and non-climbers, so what should visitors be aware of while exploring.
1. What should climbers bear in mind while exploring this area in terms of conservation. Areas often have disparate rules for taking care of the environment, and it is best to record critical rules - Again, making no assumptions about what visitors may already know about conservation in the area.

### Navigation
Not all navigational challenges are created equally. Most climbing areas will have straightforward approaches, but some will be poorly documented and easy to get wrong. Weather this be because of poor or non-existent mapping data or simply complex terrain, it can sometimes be necessary to record some specific instructions regarding *getting to* an area mentioned in the OpenBeta database.

### Photos and Media
A photo of a boulder field, A photo of a massive cliff, A photo to help identify a boulder. These are useful for navigation and for knowing what to expect while exploring new climbing places. 

Photos of boulders and crags are just as critical to the OpenBeta mission as photos of routes themselves. Contributors are encouraged to take photos of these [leaf areas](#leaf-areas) as they explore. Once the effort is undertaken to photograph an area, it rarely needs to be done again. Unlike routes that can have grips break or beta change, areas are less vulnerable to this kind of change.

[Read more about photos and media](/how-to-contribute/contributing-data/photos)

## Other Notes about Areas

_If you are just looking to get up and going quickly, you can likely skip over this section, as it is intended to document some slightly more niche problems that contributors may run into._

Climbers use Areas to divide routes into contextually significant groupings. A group of boulders, for example, can be understood as a boulder field - and will be read by guidebook followers as being all within a single context. An extension of this would be groups of areas. These are also "Areas", even though they themselves are comprised of areas; These are larger but are still contextually significant to guidebook consumers. At the top level, the broadest possible area in the OpenBeta paradigm are [countries](https://wiki.openstreetmap.org/wiki/Country_code). There is potentially a "meta-area" that might be considered as "The World", but we do not support is as an explicit data structure as it is redundant.

_It's also worth noting that OpenBeta yields ground on geopolitical commentary insofar as the definition of country and borders. We follow the specifications and deliberation undertaken by [Open Street maps](https://wiki.openstreetmap.org/wiki/Country_code) ([read more](https://wiki.openstreetmap.org/wiki/Nominatim/Country_Codes)). OpenBeta and its contributors do care about issues in this regard, but encourage advocates to observe that [OSM](https://www.openstreetmap.org/) is upstream in this regard._

### Leaf Areas
