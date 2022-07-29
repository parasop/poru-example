module.exports = {
  name: 'disconnect',
  inVc: true,
  sameVc: true,
  player: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    player.destroy();

    return message.reply('Disconnected the player.');
  },
};
