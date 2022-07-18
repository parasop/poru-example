module.exports = {
  name: 'shuffle',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);
if (player.queue.length <= 2) {
  return message.reply("Can't shuffle the queue.")
    }
    
    player.queue.shuffle();

    message.reply('Shuffled the queue');
  },
};
