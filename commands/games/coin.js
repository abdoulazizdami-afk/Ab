module.exports = {
  name: 'coin',
  category: 'games',
  description: 'Flip a coin',
  async execute({ reply }) {
    try {
      const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
      const emoji = result === 'Heads' ? '🪙' : '🪙';
      await reply(`${emoji} Coin flip result:\n\n**${result}**`);
    } catch (error) {
      await reply('❌ Error flipping coin. Please try again.');
    }
  }
};
