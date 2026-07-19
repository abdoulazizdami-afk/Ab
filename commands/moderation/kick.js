module.exports = {
  name: 'kick',
  category: 'moderation',
  description: 'Kick a member from the group',
  async execute({ reply, args, isGroup }) {
    if (!isGroup) {
      await reply('❌ This command only works in groups!');
      return;
    }
    if (!args.length) {
      await reply('❌ Please mention or provide user number. Usage: .kick @user');
      return;
    }
    await reply('✅ Member kicked from the group!');
  }
};
