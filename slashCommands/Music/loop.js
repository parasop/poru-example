const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'loop',
  description: 'Set loop mode to current track',
  inVc: true,
  sameVc: true,
  run: async (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (player.loop === 0) {
      player.TrackRepeat();
      interaction.reply({
        embeds: [
          {
            color: 'WHITE',
            description: `Loop song enabled`,
          },
        ],
      });
    } else if (player.loop === 1) {
      player.QueueRepeat();
      interaction.reply({
        embeds: [
          {
            color: 'WHITE',
            description: `Loop queue enabled`,
          },
        ],
      });
    } else if (player.loop === 2) {
      player.DisableRepeat();
      interaction.reply({
        embeds: [
          {
            color: 'WHITE',
            description: `Loop disabled`,
          },
        ],
      });
    }
  },
};
