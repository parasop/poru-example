module.exports = {
  name: 'ping',
  run: (client, message) => {
    message.channel.send(`Pong! ${client.ws.ping}ms`);
  },
};
