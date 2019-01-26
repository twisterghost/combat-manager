# Combat Manager

> A generic tabletop combat manager

Combat Manager (clever name to come eventually) is a lightweight, generic tabletop RPG combat UI to assist dungeon/game masters when running tabletop games. The design goals are:

* Clear, effective UI
* No account necessary (all data locally saved)
* Fault tolerance (accidental refreshes don't lose any data)
* Very fast load and run time
* Generic enough to support most games

This project is a work in progress. See the [roadmap](#roadmap) for functionality targets. When a stable-enough-to-use version is reached, there will be a publicly available hosted copy, so no need to run it yourself if you don't need to!

## Development / Running

This project uses Nuxt to generate a standalone front-end application. For more information, see the [Nuxt.js docs](https://nuxtjs.org).

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Roadmap

* [ ] Generic stat definitions
* [ ] Saveable default player data
* [ ] Customizable monster library
* [ ] Combat state autosave
* [ ] Improved styling and UX
* [ ] Import/Export local data
