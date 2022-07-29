const { InteractionType } = require('discord.js');

module.exports.run = async (client, interaction) => {
  if (interaction.type === InteractionType.ApplicationCommand) {
    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;

    const player = client.poru.players.get(interaction.guild.id);
    const memberChannel = interaction.member.voice.channelId;
    const botChannel = interaction.guild.members.me.voice.channelId;

    //Voice Channel only
    if (command.inVc && !memberChannel) {
      return interaction.reply(
        'You must be in a Voice channel to use this command.',
      );
    }
    //Same Voice Channel only
    if (command.sameVc && player && botChannel !== memberChannel) {
      return interaction.reply(
        'You must be in the same Voice channel as mine to use this command.',
      );
    }

    //Player check
    if (command.player && !player) {
      return interaction.followUp(`No player exists for this server.`);
    }

    if (command.current && !player.currentTrack) {
      interaction.followUp('There is nothing playing right now.');
    }

    //Error handling

    try {
      command.run(client, interaction);
    } catch (error) {
      interaction.reply(error.message);
    }
  }
};
