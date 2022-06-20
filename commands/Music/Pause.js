module.exports = {
  name: "pause",
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
    
    let player = client.poru.players.get(message.guild.id)

    if(player.paused){
message.reply("Player is Already Paused")
    }
    
    if (!player.paused){
      
      player.pause(true)

    return message.reply('Paused')
    }
  }
}