module.exports = {
  name: 'ping',
  category: 'general',
  description: 'Check bot response time',
  async execute({ reply }) {
    const start = Date.now();
    const latency = Date.now() - start;
    await reply(`🏓 Pong! Latency: ${latency}ms`);
  }
};
