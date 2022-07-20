const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'jump',
  description: 'Moves the position of two tracks',
  inVc: true,
  sameVc: true,
  options: [
    {
      name: 'track',
      description: 'The track which you want to move.',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 1,
    },
    {
      name: 'position',
      description: 'Remove a track from the queue.',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 2,
    },
  ],
  run: (client, interaction) => {
    function moveArrayElement(arr, fromIndex, toIndex) {
      arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
      return arr;
    }

    const player = client.poru.players.get(interaction.guild.id);

    const from = interaction.options.getNumber('track');
    const to = interaction.options.getNumber('position');

    if (
      from === to ||
      isNaN(from) ||
      from < 1 ||
      from > player.queue.length ||
      isNaN(to) ||
      to < 1 ||
      to > player.queue.length
    )
      return interaction.reply("That track doesn't exist in the queue.");

    const moved = player.queue[from - 1];
    moveArrayElement(player.queue, from - 1, to - 1);

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription(`Moved ${moved.info.title} to \`${to}\`.`);

    return interaction.reply({
      embeds: [embed],
    });
  },
};
