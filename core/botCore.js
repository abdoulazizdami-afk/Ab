const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const config = require('../config');
const logger = require('../utils/logger');
const commandHandler = require('./commandHandler');
const fs = require('fs-extra');
const path = require('path');

let socket;

const botCore = {
  async initialize() {
    try {
      const { state, saveCreds } = await useMultiFileAuthState('auth_info');
      
      socket = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: logger.debug,
        browser: ['Toxic-MD', 'Safari', '3.0']
      });

      // Connection updates
      socket.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
          const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
          if (shouldReconnect) {
            logger.warn('🔄 Reconnecting...');
            botCore.initialize();
          } else {
            logger.warn('❌ Connection closed. Please scan QR code again.');
          }
        } else if (connection === 'open') {
          logger.success('✅ Bot connected successfully!');
        }
      });

      // Save credentials
      socket.ev.on('creds.update', saveCreds);

      // Message handling
      socket.ev.on('messages.upsert', async (m) => {
        await commandHandler.handleMessage(m, socket);
      });

      // Group updates
      socket.ev.on('groups.update', async (updates) => {
        logger.debug('Group update received');
      });

    } catch (error) {
      logger.error('Bot initialization failed:', error);
      throw error;
    }
  },

  getSocket() {
    return socket;
  }
};

module.exports = botCore;
