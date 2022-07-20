module.exports.run = (client, player) => {
  player.textChannel.send(`Queue has ended.`);
  player.destroy();
};
