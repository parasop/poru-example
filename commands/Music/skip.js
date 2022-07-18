module.exports = {
  name: 'skip',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);

    player.stop();

    message.reply('Skipped the current track.');
  },
};
