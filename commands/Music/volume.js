module.exports = {
  name: 'volume',
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);
    if (isNaN(args[0])) {
      return message.channel.send(`Volume must be a number.`);
    }

    player.setVolume(args[0]);
    message.reply(`Volume has been set to **${args[0]}%**.`);
  },
};
