---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: ""
tags:
  - restaurants
  - reviews
location:
  city: ""
  neighborhood: ""
  address: ""
  coordinates:
    latitude: 
    longitude: 
  map_bounds:
    north: 
    south: 
    east: 
    west: 
rating:
  overall: 0
  food: 0
  service: 0
  ambiance: 0
price_range: "$$"
photos:
  - src: "/images/restaurants/{{ .Name }}/exterior.jpg"
    alt: "Exterior of {{ replace .Name "-" " " | title }}"
    caption: ""
visit:
  date: ""
  companions: []
---

## Snapshot

- **Cuisine:** 
- **Visit timing:** Lunch / Dinner / Weekend / Weeknight
- **Standout dish:** 

## Highlights

- 

## Lowlights

- 

## Dishes Tried

- **Dish name** — tasting notes and whether you would order it again.

## Atmosphere & Service

- Notes on music, lighting, seating, and staff interactions.

## Photos

- Exterior: description of the exterior photo context.
- Interior: description of the interior photo context.
- Signature dish: description of the dish photo context.

## Map Notes

- Closest transit stops, parking tips, or neighborhood markers to help bound the city map view.
