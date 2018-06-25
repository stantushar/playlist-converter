const { init } = require('./youtubeAuth');
const youtubeHelper = require('./youtubeHelper');

module.exports = {
  extract: youtubeHelper.getItemsFromPlaylist,
  init,
  name: () => 'Youtube',
};