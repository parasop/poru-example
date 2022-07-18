const { ApplicationCommandOptionType, ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'seek',
  description: 'seek the player!',
  inVc: true,
  sameVc: true,
  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);
    
    if (!player.currentTrack.isSeekable) {
      const embed = new EmbedBuilder()
      interaction.reply({
        embeds: [
          {
            color: 'WHITE',
            description: `Track is not seekable`,
          },
        ],
      });
    }

    player.seekTo(args[0] * 1000);

    return interaction.reply({
      embeds: [
        {
          color: 'WHITE',
          description: `Seeked to \`${args[0]}\``,
        },
      ],
    });
  },
};
