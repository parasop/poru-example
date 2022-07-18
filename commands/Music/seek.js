module.exports = {
  name: 'seek',
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: (client, message, args) => {
    const player = client.poru.players.get(message.guild.id);

    if (!player.currentTrack.isSeekable) {
      message.reply('This track is not seekable.');
    }

    player.seekTo(args[0] * 1000);

    message.reply(`Seeked ${args[0]}s`);
  },
};
