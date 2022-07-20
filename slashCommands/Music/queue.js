const { EmbedBuilder } = require('discord.js');
const ms = require('ms');

module.exports = {
  name: 'queue',
  description: 'Show the server queue',
  inVc: true,
  sameVc: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    const queue =
      player.queue.length > 9 ? player.queue.slice(0, 9) : player.queue;

    const embed = new EmbedBuilder()
      .setColor('White')
      .setTitle('Now Playing')
      .setThumbnail(
        `https://img.youtube.com/vi/${player.currentTrack.identifier}/default.jpg`,
      )
      .setDescription(
        `[${player.currentTrack.info.title}](${player.currentTrack.uri}) [${ms(
          player.currentTrack.info.length,
        )}]`,
      )
      .setFooter({ text: `Queue length: ${player.queue.length} tracks` });

    if (queue.length)
      embed.addFields([
        {
          name: 'Up Next',
          value: queue
            .map(
              (track, index) =>
                `**${index + 1}.** [${track.info.title}](${track.info.uri})`,
            )
            .join('\n'),
        },
      ]);

    interaction.reply({ embeds: [embed] });
  },
};
