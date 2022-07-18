const { MessageEmbed } = require('discord.js');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: 'resume',
  description: 'Resumes the player!',
  inVc: true,
  sameVc: true,

  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (!player.isPaused) {
      interaction.reply({
        embeds: [
          {
            color: 'WHITE',
            title: ` Player is Already Resumed`,
          },
        ],
      });
    } else {
      if (player.isPaused) {
        player.pause(false);
        return interaction.reply({
          embeds: [
            {
              color: 'WHITE',
              title: `Resumed the player!`,
            },
          ],
        });
      }
    }
  },
}; // try it
