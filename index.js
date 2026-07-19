// ╔═══════════════════════════════════════════════════════════════╗
// ║              TOXIC-MD BOT - MAIN ENTRY POINT                  ║
// ║                  WhatsApp Bot Automation                       ║
// ╚═══════════════════════════════════════════════════════════════╝

const { Boom } = require('@whiskeysockets/baileys');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const config = require('./config');
const logger = require('./utils/logger');
const botCore = require('./core/botCore');

// Load environment variables
require('dotenv').config();

// Initialize bot
async function startBot() {
  try {
    logger.info(`🤖 Starting ${config.BOT_NAME} v${config.BOT_VERSION}...`);
    await botCore.initialize();
  } catch (error) {
    logger.error('❌ Failed to start bot:', error);
    if (config.RESTART_ON_ERROR) {
      setTimeout(startBot, 5000);
    }
  }
}

// Handle process errors
process.on('uncaughtException', (error) => {
  logger.error('⚠️ Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('⚠️ Unhandled Rejection at:', promise, 'reason:', reason);
});

// Start the bot
startBot();

module.exports = { startBot };
