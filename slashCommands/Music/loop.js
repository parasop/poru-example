const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'loop',
  description: 'Set loop mode to current track',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,

  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (player.loop === 0) {
      player.TrackRepeat();

      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Track loop enabled');

      interaction.reply({
        embeds: [embed],
      });
    } else if (player.loop === 1) {
      player.QueueRepeat();

      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Queue loop enabled');

      interaction.reply({
        embeds: [embed],
      });
    } else if (player.loop === 2) {
      player.DisableRepeat();

      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Loop disabled');

      interaction.reply({
        embeds: [embed],
      });
    }
  },
};
