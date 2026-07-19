module.exports = {
  name: 'dice',
  category: 'games',
  description: 'Roll a dice',
  async execute({ reply, args }) {
    try {
      const sides = args[0] ? parseInt(args[0]) : 6;
      if (sides < 2 || sides > 1000) {
        await reply('❌ Dice sides must be between 2 and 1000');
        return;
      }
      const result = Math.floor(Math.random() * sides) + 1;
      await reply(`🎲 You rolled a **${sides}-sided dice**\n\n🎯 Result: **${result}**`);
    } catch (error) {
      await reply('❌ Error rolling dice. Please try again.');
    }
  }
};
