const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "join",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {

    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    })

    interaction.reply({ embeds: [{
      color: 'WHITE',
      description: `Joined ${interaction.user.voice?.channel}`
    }]})
  }
} // try it 