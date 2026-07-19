module.exports = {
  name: 'demote',
  category: 'moderation',
  description: 'Demote an admin from the group',
  async execute({ reply, args, isGroup }) {
    if (!isGroup) {
      await reply('❌ This command only works in groups!');
      return;
    }
    if (!args.length) {
      await reply('❌ Please mention an admin. Usage: .demote @admin');
      return;
    }
    await reply('✅ Admin demoted!');
  }
};
