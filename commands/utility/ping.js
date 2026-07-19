module.exports = {
  name: 'ping',
  category: 'utility',
  description: 'Check bot response time',
  async execute({ reply, client, message }) {
    try {
      const start = Date.now();
      const botPing = Date.now() - start;
      const apiPing = client.ws?.ping || 0;
      
      const pingText = `
🏓 **Pong!**

📊 **Bot Ping:** ${botPing}ms
🌐 **API Ping:** ${apiPing}ms
      `;
      
      await reply(pingText);
    } catch (error) {
      await reply('❌ Error checking ping. Please try again.');
    }
  }
};
