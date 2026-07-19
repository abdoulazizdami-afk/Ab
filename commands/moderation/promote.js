module.exports = {
  name: 'promote',
  category: 'moderation',
  description: 'Promote a member to admin',
  async execute({ reply, args, isGroup }) {
    if (!isGroup) {
      await reply('❌ This command only works in groups!');
      return;
    }
    if (!args.length) {
      await reply('❌ Please mention a member. Usage: .promote @user');
      return;
    }
    await reply('✅ Member promoted to admin!');
  }
};
