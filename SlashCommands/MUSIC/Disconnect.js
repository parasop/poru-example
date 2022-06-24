const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "disconnection",
  description: "stops the player!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
    player.destroy();

    return interaction.reply({ embeds: [{ color: 'WHITE', description: '<:checkmark:912259227060437012> |  Disconnected the player!'}]})
    
  }
} // try it 