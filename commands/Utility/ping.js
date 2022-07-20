module.exports = {
  name: 'ping',
  run: async (client, message) => {
    message.channel.send(`Pong! ${client.ws.ping}ms`);
  },
};
