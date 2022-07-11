const discord = require("discord.js");
const { Poru } = require("poru");
require("dotenv").config()
const client = new discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS", "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
client.login(process.env.TOKEN).catch(e => console.log("No token provided"))


client.config = require("./config.json");
client.poru = new Poru(client, client.config.nodes, {
  deezer: {
    playlistLimit: 10
  },
  spotify: {
    clientID: "cb41529dc3bd4d8f8a240dbee0fff4e8",
    clientSecret: "bcca82f42930498aa385a8289fdf276b",
    playlistLimit: 5
  },
  apple: {
    playlistLimit: 5
  },


})
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.slash = new discord.Collection();

//now creating interaction event
["commands", "events", "slash", "PoruEvent"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});




require("http").createServer((_, res) => res.end(`Developed by <b><a href="https://discord.com/users/433227453637328897">Astra</a></b> with ❤️`)).listen(4535);