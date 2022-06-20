module.exports = {
  name: "resume",
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (!player.paused) {
      message.reply("Player is Already Resumed")
    }

    if (player.paused) {
      player.pause(false)
      return message.reply('Resumed')
    }
  }
}