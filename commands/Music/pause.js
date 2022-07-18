module.exports = {
  name: 'pause',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);

    if (player.isPaused) {
      return message.reply('Player is already paused.');
    } else {
      player.pause(true);

      message.reply('Paused the player.');
    }
  },
};
