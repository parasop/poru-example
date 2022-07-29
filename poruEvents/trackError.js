const { EmbedBuilder } = require('discord.js');

module.exports.run = (client, player, track, error) => {
  const embed = new EmbedBuilder()
    .setTitle(`${error.exception.message}`)
    .setDescription(`[${track.info.title}](${track.info.uri})`);

  const channel = client.channels.cache.get(player.textChannel);
  return channel?.send({ embeds: [embed] });
};
