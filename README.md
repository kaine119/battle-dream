# battle-dream
This is the first project for [FreeCodeCamp](freecodecamp.com)'s API certification. :thinking:
It's an express server with one route, `/:date`:
  - if :date is a unix timestamp or a date in the format (month in words) DD, YYYY, return JSON with the object `{"unix": <timestamp>, "natrual": <same format as earlier>}`
  - else, return `{"unix": null, "natural": null}`
