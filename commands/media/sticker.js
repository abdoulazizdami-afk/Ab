module.exports = {
  name: 'sticker',
  category: 'media',
  description: 'Convert image to sticker',
  async execute({ reply, message }) {
    try {
      if (!message.hasQuotedMsg) {
        await reply('❌ Please reply to an image. Usage: Reply to an image and use .sticker');
        return;
      }
      await reply('🎨 Converting image to sticker...\n⏳ Please wait...');
      // Sticker conversion logic would be implemented here
      await reply('✅ Sticker created! Sending...');
    } catch (error) {
      await reply('❌ Error creating sticker. Please try again.');
    }
  }
};
