const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'clearqueue',
  description: 'Clears the queue',
  inVc: true,
  sameVc: true,
  run: async (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (!player.queue.length) {
      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Queue is empty!');

      return interaction.reply({
        embeds: [embed],
      });
    }

    const { length } = player.queue;

    player.queue.clear();

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription(`Cleared \`${length}\` from queue`);

    interaction.reply({
      embeds: [embed],
    });
  },
};
