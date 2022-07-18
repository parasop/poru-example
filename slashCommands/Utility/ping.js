module.exports = {
  name: 'ping',
  description: 'Returns the ping of bot',
  run: async (client, interaction) => {
    interaction.followUp(`Pong! ${client.ws.ping}ms`);
  },
};
