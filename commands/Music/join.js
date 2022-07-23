module.exports = {
  name: 'join',
  inVc: true,
  run: (client, message) => {
    client.poru.createConnection({
      guildId: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      selfDeaf: true,
      selfMute: false,
    });

    message.reply(`Joined ${message.member.voice.channel.toString()}.`);
  },
};
