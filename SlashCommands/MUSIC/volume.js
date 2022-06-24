const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "resume",
  description: "Resumes the player!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if(isNaN(args[0])) return interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `volume must be a real number!` // done here
      }]})
    player.setVolume(args[0]);

    interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `Volume is set to: ${args0}`
      }]})
  }
} 