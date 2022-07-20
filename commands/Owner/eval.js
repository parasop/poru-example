module.exports = {
  name: 'eval',
  run: (client, message) => {
    if (!client.config.ownerIds.includes(message.author.id)) return;

    const content = message.content.split(' ').slice(1).join(' ');
    const result = new Promise((resolve) => resolve(eval(content)));

    return result
      .then((output) => {
        if (typeof output !== 'string') {
          output = require('util').inspect(output, { depth: 0 });
        }
        message.channel.send(`\`\`\`${output}\`\`\``, {
          code: 'js',
        });
      })
      .catch((err) => {
        err = err.toString();
        if (err.includes(client.token)) {
          err = err.replace(process.env.TOKEN, '');
        }

        message.channel.send(err, {
          code: 'js',
        });
      });
  },
};
