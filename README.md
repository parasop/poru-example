# Poru Music

A Music Bot Template Based on [Poru](https://npmjs.com/poru) lavalink client ❤️

## Features
- Poru wrapper based music client
- Rick audio quality music
- Inbuilt audio filters
- 100% Compatible with Lavalink
- Easy to use and setup


## Configration

- enter your bot token in .env file with `TOKEN` variable
```js
{
  "prefix": '.',
  "owner":["YOUR DISCORD ID"],
  "nodes": [{
    "name":"NODE_1",
    "host":"localhost", // your lavalink host
    "port": 2333, // Your lavalink port
    "password": "youshallnotpass" // Your lavalink pass
  }]
}
```
### Need help
If you need help ! Feel free to join our [Support server](https://discord.gg/b3k6XNA5pw)

- [ Note ] Support us by giving star to this reposity and by following [Paras](https://github.com/parasop) and by Donating [here](https://ko-fi.com/parasdev)



# Poru

<p align="center">
  
[![Discord](https://img.shields.io/discord/567705326774779944?style=flat-square)](https://discord.gg/Zmmc47Nrh8)
[![npm](https://img.shields.io/npm/v/poru?style=flat-square)](https://www.npmjs.com/package/poru)
![Github Stars](https://img.shields.io/github/stars/parasop/poru?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/parasop/poru?style=flat-square)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/poru?style=flat-square) 
![NPM](https://img.shields.io/npm/l/poru?style=flat-square)
</p>

  <p align="center">
    <img src="https://media.discordapp.net/attachments/732987654165233744/987656504373026816/20220618_000923_0000.png"> 
</p>

## About
- Stable Lavalink client
- Rick quality music
- 100% Compatible with Lavalink
- Object-oriented
- Easy to use and setup

### Installation 
```js
npm install poru //npm 
yarn add poru // yarn
```

## Code snippet examples 

### Index.js file (client file)
```js
const Discord = require('discord');
const client = Discord.Client();
const { Poru } = require("poru")

client.config = require("./config.json");
client.manager = new Poru(client, client.config.nodes);

client.manager.on("nodeConnect", (node) => { console.log(`lavalink ${node.name} is ready!`) });
client.on('raw', async (packet) => { await client.poru.packetUpdate(packet) });

client.log(process.env.token)
```

### creating player
```js
// creating player
const player = await client.manger.createConnection({
  guild: message.guild.id,
  voiceChannel: message.member.voice.channel.id,
  textChannel: message.channel,
  selfDeaf: true,
  selfMute: false, 
  })
  // Getting tracks
const resolve = await client.manager.resolve('Ignite');
```


## Implementation 
[Poru Music](https://github.com/parasop/poru-example) **Example bot as guide for beginning.** 

### Others
Feel free to join our [suppport server](https://discord.gg/b3k6XNA5pw), Give us suggestions and advice about errors and new features. 
with ❤️ by [Paras](https://github.com/parasop) .
