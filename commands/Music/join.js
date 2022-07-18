module.exports = {
  name: 'join',
  inVc: true,
  run: (client, message) => {
    const player = client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    });

    message.reply(`Joined ${message.member.voice.channel.toString()}.`);
  },
};
