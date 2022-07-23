module.exports = {
  name: 'clearqueue',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    if (!player.queue.length) {
      return message.reply('The queue is empty');
    }

    const { length } = player.queue;

    player.queue.clear();

    return message.reply(`Cleared \`${length}\` tracks from the queue.`);
  },
};
