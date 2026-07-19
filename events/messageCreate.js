module.exports = {
  name: 'messageCreate',
  once: false,
  
  async execute(message, client) {
    // Ignore bot messages
    if (message.author.bot) return;

    // Get prefix from config or use default
    const prefix = process.env.PREFIX || '.';

    // Check if message starts with prefix
    if (!message.content.startsWith(prefix)) return;

    // Extract command and args
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Get command from collection
    const command = client.commands.get(commandName);

    if (!command) {
      return message.reply(`❌ Command \`${commandName}\` not found. Use \`.help\` for available commands.`);
    }

    try {
      // Execute command with context
      await command.execute({
        message,
        args,
        client,
        reply: (text) => message.reply({ content: text, allowedMentions: { repliedUser: false } })
      });

      console.log(`✅ Command executed: ${commandName} by ${message.author.tag}`);
    } catch (error) {
      console.error(`❌ Error executing command ${commandName}:`, error);
      await message.reply({
        content: `❌ An error occurred while executing this command.`,
        allowedMentions: { repliedUser: false }
      });
    }
  }
};
