const { Client, Collection, GatewayIntentBits } = require('discord.js');
require("dotenv").config();
const { Poru } = require('poru');
const {Spotify} = require("poru-spotify");

let spotify = new Spotify({
  clientID:"PUT HERE",
  clientSecret:"PUT HERE"
})


const client = new Client({
  failIfNotExists: true,
  allowedMentions: {
    parse: ['roles', 'users', 'everyone'],
    repliedUser: false,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.config = require('./config.json');
client.poru = new Poru(client, client.config.nodes, {
 library:"discord.js",
 defaultPlatform: "ytsearch",
 plugins: [spotify]
});
client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();

['commands', 'events', 'slash', 'poruEvent'].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);
