module.exports = {
  name: 'status',
  category: 'utility',
  description: 'Check bot status',
  async execute({ reply, client }) {
    try {
      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const statusText = `
✅ **Bot Status**

🤖 **Bot Name:** ${client.user?.name || 'Bot'}
⏱️ **Uptime:** ${hours}h ${minutes}m ${seconds}s
📱 **Status:** Online
🔗 **Connection:** Connected
      `;
      
      await reply(statusText);
    } catch (error) {
      await reply('❌ Error checking status. Please try again.');
    }
  }
};
