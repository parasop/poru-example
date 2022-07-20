module.exports = {
  name: 'skip',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    player.stop();

    message.reply('Skipped the current track.');
  },
};
