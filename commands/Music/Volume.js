module.exports = {
  name: "pause",
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    player.setVolume(args[0])
message.reply(`Volume set to ${args[0]}`)
  }
}