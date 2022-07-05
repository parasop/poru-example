const discord = require("discord.js")
const ms = require("ms")
module.exports.run = async (client,player,track,error) => {

  let embed = new discord.MessageEmbed()
  .setTitle(`Track is Not valid`)
  .setDescription(`${error.exception.message}`)

  return player.textChannel.send({embeds:[embed]})

}