module.exports = {
  name: 'play',
  inVc: true,
  sameVc: true,
  args: true,
  run: async (client, message, args) => {
    const query = args.join(' ');
    if (!query) return message.reply('Please provide the name/url of the track to play.')
    const memberChannel = message.member.voice.channel.id;

    // Spawning lavalink player
    const player = client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    });

    // Getting tracks
    const resolve = await client.poru.resolve(query);
    const { loadType, tracks, playlistInfo } = resolve;

    // Adding in queue
    if (loadType === 'PLAYLIST_LOADED') {
      for (let x of resolve.tracks) {
        x.info.requester = message.author;
        player.queue.add(x);
      }
      
      message.channel.send(`Added: \`${resolve.tracks.length} from ${resolve.playlistInfo.name}\``);
      if (!player.isPlaying && !player.isPaused) return player.play();
    } else if (loadType === 'SEARCH_RESULT' || loadType === 'TRACK_LOADED') {
      const track = tracks.shift();
      track.info.requester = message.author;

      player.queue.add(track);
      message.channel.send(`Added: \`${track.info.title}\``);
      if (!player.isPlaying && !player.isPaused) return player.play();
    } else {
      return message.channel.send('There are no results found.');
    }
  },
};
