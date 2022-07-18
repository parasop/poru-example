const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'disconnect',
  description: 'Disconnect the bot from your voice channel',
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, interaction) => {
    const player = client.poru.players.get(interaction.guildId);

    player.destroy();

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription('Disconnected the player!');

    interaction.reply({
      embeds: [embed],
    });
  },
};
