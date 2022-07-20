module.exports = {
  name: 'pause',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    if (player.isPaused) {
      message.reply('Player is already paused.');
    } else {
      player.pause(true);

      message.reply('Paused the player.');
    }
  },
};
