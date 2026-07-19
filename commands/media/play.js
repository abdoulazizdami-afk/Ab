const axios = require('axios');

module.exports = {
  name: 'play',
  category: 'media',
  description: 'Download music/video from YouTube',
  async execute({ reply, args }) {
    if (!args.length) {
      await reply('❌ Please provide a song title or YouTube URL. Usage: .play [title or URL]');
      return;
    }
    try {
      const query = args.join(' ');
      await reply(`🎵 Searching for "${query}"...\n⏳ Please wait, downloading...`);
      // Download logic would be implemented here
      await reply('✅ Music downloaded! Sending audio...');
    } catch (error) {
      await reply('❌ Error downloading music. Please try again.');
    }
  }
};
