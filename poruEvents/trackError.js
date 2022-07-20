const { EmbedBuilder } = require('discord.js');

module.exports.run = (client, player, track, error) => {
  const embed = new EmbedBuilder()
    .setTitle(`${error.exception.message}`)
    .setDescription(`[${track.info.title}](${track.info.uri})`);

  return player.textChannel.send({ embeds: [embed] });
};
