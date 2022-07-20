module.exports = {
  name: 'SoundCloud',
  inVc: true,
  sameVc: true,
  args: true,
  run: async (client, message, args) => {
    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    });

    const resolve = await client.poru.soundcloud.fetch(args.join(' '));
    const { loadType, tracks, playlistInfo } = resolve;

      for (const track of resolve.tracks) {
        track.info.requester = message.author;
        player.queue.add(track);
      }
    
      message.channel.send(`Added: \`${tracks.length} from ${playlistInfo.name}\``);
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