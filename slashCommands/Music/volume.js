const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'volume',
  description: 'Sets the volume of the player',
  inVc: true,
  sameVc: true,
  options: [
    {
      name: 'volume',
      description: 'The volume which you want to set',
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 0,
      max_value: 100,
    },
  ],
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    const volume = interaction.options.getNumber('volume', true);
    player.setVolume(volume);

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription(`Volume has been set to **${volume}%**.`);

    interaction.reply({
      embeds: [embed],
    });
  },
};
