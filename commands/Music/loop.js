module.exports = {
  name: 'loop',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    if (player.loop === "NONE") {
      player.setLoop('TRACK');
      message.reply('Loop track enabled');
    } else if (player.loop === "TRACK") {
      player.setLoop('QUEUE');
      message.reply('Loop queue enabled');
    } else if (player.loop === "QUEUE") {
      player.setLoop('NONE');
      message.reply('Loop disabled');
    }
  },
};
