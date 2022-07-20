const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'pause',
  description: 'pause the player',
  inVc: true,
  sameVc: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (player.isPaused) {
      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Player is already paused');

      return interaction.reply({
        embeds: [embed],
      });
    }

    player.pause(true);

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription('Paused the player');

    return interaction.reply({
      embeds: [embed],
    });
  },
};
