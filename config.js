// ╔═══════════════════════════════════════════════════════════════╗
// ║         TOXIC-MD BOT CONFIGURATION FILE (config.js)           ║
// ║                  Customize your bot here!                      ║
// ╚═══════════════════════════════════════════════════════════════╝

module.exports = {
  // Bot Settings
  BOT_NAME: 'Toxic Mini',
  BOT_VERSION: '1.0.0',
  PREFIX: '.', // Default command prefix (customizable)
  OWNER_NUMBER: '212XXXXX', // Replace with your WhatsApp number
  OWNER_NAME: 'Toxic Admin',
  
  // Server & Session
  SESSION_ID: 'toxic_session', // Session identifier
  LOG_LEVEL: 'info', // 'debug', 'info', 'warn', 'error'
  AUTO_READ_STATUS: true,
  AUTO_READ_MESSAGES: false,
  TYPING_SIMULATION: true,
  
  // Database & Storage
  USE_DATABASE: true,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/toxic-md',
  
  // API Keys & External Services
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '', // For .ai command
  RAPID_API_KEY: process.env.RAPID_API_KEY || '', // For various API calls
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || '', // For .google command
  
  // Feature Flags
  FEATURES: {
    AI_ENABLED: true,
    MEDIA_DOWNLOAD: true,
    GAME_ENABLED: true,
    MODERATION: true,
    AUTO_REPLY: false,
    STATISTICS: true,
    WELCOME_MESSAGE: true,
    GOODBYE_MESSAGE: true
  },
  
  // Bot Mode
  MODE: 'public', // 'public' or 'private'
  
  // Language
  LANGUAGE: 'fr', // 'fr', 'en', 'es', 'de', 'it'
  
  // Auto Report Settings
  AUTO_REPORT_ENABLED: false,
  AUTO_REPORT_INTERVAL: 86400000, // 24 hours in milliseconds
  
  // Anti-Spam Settings
  ANTI_SPAM_ENABLED: true,
  SPAM_THRESHOLD: 5, // Messages per minute
  SPAM_ACTION: 'warn', // 'warn', 'kick', 'mute'
  
  // Moderation
  AUTO_ANTI_LINK: false,
  AUTO_ANTI_DELETE: false,
  WARNING_THRESHOLD: 3, // Warnings before action
  
  // Welcome & Goodbye Messages
  WELCOME_MESSAGE: 'Bienvenue dans le groupe! 🎉',
  GOODBYE_MESSAGE: 'Au revoir! 👋',
  
  // Blocked Users
  BLOCKED_USERS: [],
  
  // Rate Limiting
  RATE_LIMIT_ENABLED: true,
  RATE_LIMIT_WINDOW: 60000, // 1 minute
  RATE_LIMIT_MAX_REQUESTS: 10,
  
  // Advanced Settings
  DEBUG_MODE: false,
  RESTART_ON_ERROR: true,
  MAX_RECONNECT_ATTEMPTS: 5,
  CONNECTION_TIMEOUT: 60000
};
