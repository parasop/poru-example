const {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  EmbedBuilder,
} = require('discord.js');

module.exports = {
  name: 'volume',
  type: ApplicationCommandType.ChatInput,
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
  run: async (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    player.setVolume(args[0]);

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription(`Volume is set to ${args[0]}.`);

    interaction.reply({
      embeds: [embed],
    });
  },
};
