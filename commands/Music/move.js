function moveArrayElement(arr, fromIndex, toIndex) {
  arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
  return arr;
}

module.exports = {
  name: 'jump',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);

    const from = args[0] ? parseInt(args[0], 10) : null;
    const to = args[1] ? parseInt(args[1], 10) : null;

    if (from === null || to === null)
      return message.reply(`Invalid usage. \n**Example:** ?move 10 1`);

    if (
      from === to ||
      isNaN(from) ||
      from < 1 ||
      from > player.queue.length ||
      isNaN(to) ||
      to < 1 ||
      to > player.queue.length
    )
      return message.reply("That track doesn't exist in the queue.");

    const moved = player.queue[from - 1];
    moveArrayElement(player.queue, from - 1, to - 1);

    return message.reply(`Moved ${moved.info.title} to \`${to}\``);
  },
};
