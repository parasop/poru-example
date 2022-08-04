const { EmbedBuilder } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = {
  name: 'help',
  run: (client, message, args) => {
    const prefix = client.prefix;

    if (!args[0]) {
      const categories = [];

      readdirSync('./commands/').forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith('.js'),
        );

        const cmds = commands.map((command) => {
          const file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return 'No command name.';

          const name = file.name.replace('.js', '');

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? 'Unknown' : cmds.join(', '),
        };

        categories.push(data);
      });

      const embed = new EmbedBuilder()
        .setTitle('Help Menu')
        .addFields(categories)
        .setFooter({
          text: `Requested by ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL(),
        })
        .setFooter({text:
          `Type ${prefix}help <command name> for details on a command!`,
        })
        .setTimestamp()
        .setColor('White');

      return message.reply({ embeds: [embed] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase()),
        );

      if (!command) {
        const embed = new EmbedBuilder()
          .setTitle(
            `Invalid command! Use \`${prefix}help\` for all of my commands!`,
          )

          .setColor('Red');

        return message.reply({ embeds: [embed] });
      }

      const embed = new EmbedBuilder()
        .setTitle(`Help Command: ${args[0]}`)
        .addFields([
          {
            name: 'Command:',
            value: command.name
              ? `\`${command.name}\``
              : 'No name for this command.',
          },
          {
            name: 'Aliases:',
            value: command.aliases
              ? `\`${command.aliases.join('` `')}\``
              : 'No aliases for this command.',
          },
          {
            name: 'Usage:',
            value: command.usage
              ? `\`?${command.name} ${command.usage}\``
              : `\`?${command.name}\``,
          },
          {
            name: 'description',
            value: command.description
              ? command.description
              : 'No description for this command.',
          },
        ])
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL(),
        )
        .setTimestamp()
        .setColor('White');

      return message.reply({ embeds: [embed] });
    }
  },
};
