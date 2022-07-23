const { EmbedBuilder } = require('discord.js');
const ms = require('ms');

module.exports.run = (client, player, track) => {
  const embed = new EmbedBuilder()
    .setAuthor({
      name: `Now Playing`,
      iconURL: track.info.requester.displayAvatarURL(),
    })
    .setColor('White')
    .setDescription(
      `
**Track**: [${track.info.title}](${track.info.uri})
**Author**: ${track.info.author}
**Source**: ${track.info.sourceName}
**Duration**: ${ms(track.info.length)}

`,
    )
    .setImage(track.info.image);

  const channel = client.channels.cache.get(player.textChannel);
  return channel?.send({ embeds: [embed] });
};
