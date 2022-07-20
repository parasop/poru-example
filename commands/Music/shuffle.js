module.exports = {
  name: 'shuffle',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message) => {
    const player = client.poru.players.get(message.guild.id);

    if (player.queue.length <= 2) {
      return message.reply("Can't shuffle the queue.");
    }

    if (!player.queue.length) {
      return message.reply('The queue is empty');
    }

    player.queue.shuffle();

    message.reply('Shuffled the queue');
  },
};
