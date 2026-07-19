module.exports = {
  name: 'help',
  category: 'utility',
  description: 'Show all available commands',
  async execute({ reply, client }) {
    try {
      let helpText = '📚 **Available Commands**\n\n';
      
      const categories = {};
      
      // Group commands by category
      for (const command of client.commands.values()) {
        if (!categories[command.category]) {
          categories[command.category] = [];
        }
        categories[command.category].push(command);
      }
      
      // Build help text
      for (const [category, commands] of Object.entries(categories)) {
        helpText += `**${category.toUpperCase()}**\n`;
        for (const cmd of commands) {
          helpText += `• **.${cmd.name}** - ${cmd.description}\n`;
        }
        helpText += '\n';
      }
      
      await reply(helpText);
    } catch (error) {
      await reply('❌ Error displaying help. Please try again.');
    }
  }
};
