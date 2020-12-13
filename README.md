<h1 align="center">
  <br>
  Phaser 3 + enable3d
  <br>
</h1>

## About

This is a clone of the popular [phaser-project-template](https://github.com/yandeu/phaser-project-template), which includes the latest enable3d.io version.

## How to use

```console
# Clone this repository
$ git clone --depth 1 https://github.com/enable3d/enable3d-phaser-project-template.git enable3d-game

# Go into the repository
$ cd enable3d-game

# Install dependencies
$ npm install

# Start the local development server (on port 8080)
$ npm start

# Ready for production?
# Build the production ready code to the /dist folder
$ npm run build
```

## JavaScript

You want to use JavaScript instead of TypeScript?

- Add `"checkJs": false,` to [tsconfig.json](./tsconfig.json)
- Change the extension of all game files in [/src/scripts](./src/scripts) from `.ts` to `.js` (except `game.ts`).
