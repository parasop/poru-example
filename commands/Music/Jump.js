module.exports = {
  name: "jump",
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
 
    let player = client.poru.players.get(message.guild.id)

    const position = Number(args[0]);
  
    if (!position || position < 0 || position > player.queue.size) {
      return message.reply(`Usage: ${client.prefix}jump <Number of song in queue>`);   
    }
    
    player.queue.remove(0, position - 1)
    
    player.stop()

    return message.reply(`Jumped to ${args[0]} Skip`)
  }
}