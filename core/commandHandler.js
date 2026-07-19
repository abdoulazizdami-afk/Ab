const config = require('../config');
const logger = require('../utils/logger');
const fs = require('fs-extra');
const path = require('path');

const commands = new Map();

// Load all commands
async function loadCommands() {
  const commandsDir = path.join(__dirname, '../commands');
  const categories = await fs.readdir(commandsDir);

  for (const category of categories) {
    const categoryPath = path.join(commandsDir, category);
    if ((await fs.stat(categoryPath)).isDirectory()) {
      const files = await fs.readdir(categoryPath);
      for (const file of files.filter(f => f.endsWith('.js'))) {
        const command = require(path.join(categoryPath, file));
        commands.set(command.name, { ...command, category });
      }
    }
  }
  logger.success(`✅ Loaded ${commands.size} commands`);
}

const commandHandler = {
  async handleMessage(m, socket) {
    const { messages } = m;
    if (messages.length === 0) return;

    const message = messages[0];
    if (!message.message || message.key.fromMe) return;

    const text = message.message.conversation || message.message.extendedTextMessage?.text || '';
    const sender = message.key.remoteJid;
    const isGroup = sender.endsWith('@g.us');

    // Check if message starts with prefix
    if (!text.startsWith(config.PREFIX)) return;

    const args = text.slice(config.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands.get(commandName);
    if (!command) return;

    try {
      logger.command(commandName, sender);
      await command.execute({
        message,
        socket,
        args,
        text,
        sender,
        isGroup,
        reply: async (msg) => await socket.sendMessage(sender, { text: msg })
      });
    } catch (error) {
      logger.error(`Error executing command ${commandName}:`, error);
    }
  },

  async initialize() {
    await loadCommands();
  }
};

module.exports = commandHandler;
