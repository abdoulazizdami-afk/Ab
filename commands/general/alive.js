module.exports = {
  name: 'alive',
  category: 'general',
  description: 'Check if bot is alive',
  async execute({ reply }) {
    await reply('✅ Bot is alive and running!');
  }
};
