module.exports = {
  name: "play",
  inVc: true,
  sameVc:true,
  args: true,
  run: async (client, message, args) => {

    const memberChannel = message.member.voice.channel.id

    // Spawning lavalink player
    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    })

    // Getting tracks
    const resolve = await client.poru.resolve(args.join(' '))
    const { loadType, tracks, playlistInfo } = resolve;
    const track = tracks.shift();
    track.requester = message.member.user;

    // Adding in queue
    if (loadType === "PLAYLIST_LOAD") {

      for (x of resolve.tracks) {
        player.queue.add(x);

      }
      message.channel.send({ content: `Added: \`${resolve.tracks.length}\`` });
      if (!player.playing && !player.paused) return player.play();

    }


    switch (resolve.loadType) {
      case "NO_RESULTS":
        message.channel.send({ content: "There are no results found." });
        break;

      case "TRACK_LOADED":
        player.queue.add(resolve.tracks[0]);
        message.channel.send({ content: `Added: \`${resolve.tracks[0].title}\`` });
        if (!player.playing && !player.paused) return player.play();
        break;

      case "PLAYLIST_LOADED":
        break;

      case "SEARCH_RESULT":
        player.queue.add(resolve.tracks[0]);
        message.channel.send({ content: `Added: ${resolve.tracks[0].title}` });
        if (!player.playing) return player.play();
        break;
    }

  }
}
