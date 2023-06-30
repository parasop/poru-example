const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'seek',
  description: 'Seek the player',
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  options: [
    {
      name: 'position',
      description: 'New position of the player',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 0,
    },
  ],
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    const position = interaction.options.getNumber('position', true);

    if (player.currentTrack.info.isSeekable) {
      const embed = new EmbedBuilder()
        .setColor('Blue')
        .setDescription('Track is not seekable');

      interaction.reply({
        embeds: [embed],
      });
    } else {
      player.seekTo(position * 1000);

      const embed = new EmbedBuilder()
        .setColor('Blue')
        .setDescription(`Seeked to ${position}`);

      return interaction.reply({
        embeds: [embed],
      })
    }
  },
};
