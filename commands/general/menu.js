module.exports = {
  name: 'menu',
  aliases: ['help'],
  category: 'general',
  description: 'Display all available commands',
  async execute({ reply }) {
    const menu = `
╔═══════════════════════════════════╗
║   TOXIC-MD BOT - COMMAND MENU    ║
║         Version 1.0.0             ║
╚═══════════════════════════════════╝

🎯 GENERAL COMMANDS:
  .menu / .help - Display this menu
  .alive - Check if bot is online
  .ping - Check bot response time
  .owner - Bot owner information

👑 MODERATION:
  .kick - Remove member
  .add - Add member
  .promote - Make admin
  .demote - Remove admin
  .tagall - Mention everyone
  .warn - Give warning
  .unwarn - Remove warning

🎵 MEDIA TOOLS:
  .play - Download from YouTube
  .video - Download video
  .tiktok - Download TikTok video
  .instagram - Download Instagram content
  .facebook - Download Facebook video
  .sticker - Convert to sticker

🤖 AI & UTILITIES:
  .ai - Ask AI questions
  .google - Search Google
  .weather - Get weather info
  .translate - Translate text
  .qr - Generate QR code

🎮 GAMES:
  .tictactoe - Play Tic Tac Toe
  .trivia - Play trivia quiz
  .joke - Get a random joke
  .meme - Get a random meme

⚙️ OWNER COMMANDS:
  .language - Change language
  .mode - Change mode (public/private)
  .block - Block user
  .shutdown - Shutdown bot
    `;
    await reply(menu);
  }
};
