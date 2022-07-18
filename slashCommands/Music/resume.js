const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'resume',
  description: 'Resumes the player',
  inVc: true,
  sameVc: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (!player.isPaused) {
      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Player is not paused');

      interaction.reply({
        embeds: [embed],
      });
    } else {
      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Resumed the player');

      player.pause(false);
      interaction.reply({
        embeds: [embed],
      });
    }
  },
};
