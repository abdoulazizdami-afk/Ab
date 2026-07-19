module.exports = {
  name: 'tagall',
  category: 'moderation',
  description: 'Mention everyone in the group',
  async execute({ reply, isGroup }) {
    if (!isGroup) {
      await reply('❌ This command only works in groups!');
      return;
    }
    await reply('📢 @everyone - Message for all members!');
  }
};
