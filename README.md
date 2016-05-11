[![npm version](https://badge.fury.io/js/generator-ng2-comp.svg)](https://badge.fury.io/js/generator-ng2-comp)
![dependencies](https://david-dm.org/michaelknoch/genrator-ng2-comp.svg)

> Generator for tiny Angular2 Components, enjoy.
This is a friendly fork of [Samuel Kollat](https://github.com/samuel-kollat/generator-ng2-component)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ng2-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ng2-comp
```

Then generate your new Angular2 component:

```bash
yo ng2-comp
```

Ensure you include node into your ambientDependencies in typings.json.
```
{
  "ambientDependencies": {
    ...
    "node": "github:DefinitelyTyped/DefinitelyTyped/node/node.d.ts#138ad74b9e8e6c08af7633964962835add4c91e2"
  }
}

```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Michael Knoch](https://github.com/michaelknoch)


