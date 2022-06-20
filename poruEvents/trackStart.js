module.exports.run = async (client,player,track) => {

return player.textChannel.send(`Now Playing\n\n${track.title}\``);

}