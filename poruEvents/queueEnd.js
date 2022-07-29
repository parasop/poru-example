module.exports.run = (client, player) => {
  const channel = client.channels.cache.get(player.textChannel);
  channel?.send(`Queue has ended.`);
  return player.destroy();
};
