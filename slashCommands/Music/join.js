const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'join',
  description: 'Joins your voice channel',
  inVc: true,
  sameVc: true,
  run: (client, interaction) => {
    const player = client.poru.createConnection({
      guild: interaction.guild.id,
      voiceChannel: interaction.member.voice.channel.id,
      textChannel: interaction.channel,
      selfDeaf: true,
      selfMute: false,
    });

    const embed = new EmbedBuilder()
      .setColor('White')
      .setDescription(`Joined ${interaction.member.voice.channel.toString()}`);

     return  interaction.reply({
      embeds: [embed],
    });
  },
};
