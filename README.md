# Alfred Kotlink

This is a workflow definition for [Alfred](https://www.alfredapp.com) to provide auto completion for [Kotlink](http://kotlink.org).

## Install

```
$ npm install --global alfred-kotlink
```

*Requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Usage

First you have to setup your Kotlink server and secret (you can find it in `https://YOUR_SERVER/ui/setup_instructions`). For that first you type `kk set_server YOUR_SERVER_URL` and then `kk set_secret YOUR_SECRET`.

Then in Alfred, type `kk` and your query, to search for links. Press enter to open in the default browser.