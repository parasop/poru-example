module.exports = {
  name: 'resume',
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);

    if (!player.isPaused) {
      return message.reply('Player is not paused.');
    } else {
      player.pause(false);
      message.reply('Resumed the player.');
    }
  },
};
