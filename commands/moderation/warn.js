module.exports = {
  name: 'warn',
  category: 'moderation',
  description: 'Warn a member',
  async execute({ reply, args, isGroup }) {
    if (!isGroup) {
      await reply('❌ This command only works in groups!');
      return;
    }
    if (!args.length) {
      await reply('❌ Please mention a member. Usage: .warn @user [reason]');
      return;
    }
    const reason = args.slice(1).join(' ') || 'No reason provided';
    await reply(`⚠️ Member warned! Reason: ${reason}`);
  }
};
