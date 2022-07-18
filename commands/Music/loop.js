module.exports = {
  name: 'loop',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    if (player.loop === 0) {
      player.TrackRepeat();
      message.reply('Loop track enabled');
    } else if (player.loop === 1) {
      player.QueueRepeat();
      message.reply('Loop queue enabled');
    } else if (player.loop === 2) {
      player.DisableRepeat();
      message.reply('Loop disabled');
    }
  },
};
