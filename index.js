const discord = require("discord.js");
const { Poru } = require("poru");

const client = new discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
client.login(process.env.TOKEN).catch(e => console.log("No token provided"))

client.on('debug', console.log)
      .on('warn', console.log)

client.config = require("./config.json");
client.poru = new Poru(client, client.config.nodes)
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.slash = new discord.Collection();

//now creating interaction event
["commands","events","slash"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});





