module.exports = {
  name: 'remove',
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);

    if (args[0] === '1')
      return message.reply(`Cannot remove a song that is already playing.`);
    if (args[0] > player.queue.length) return message.reply('Track not found.');

    player.queue.remove(args[0] - 1);
    message.reply(`Removed the track from queue.`);
  },
};
