const config = require('../../config');

module.exports = {
  name: 'owner',
  category: 'general',
  description: 'Get bot owner information',
  async execute({ reply }) {
    const info = `
🤖 BOT OWNER INFORMATION

Name: ${config.OWNER_NAME}
Number: ${config.OWNER_NUMBER}
Bot: ${config.BOT_NAME} v${config.BOT_VERSION}

For support, contact the owner.
    `;
    await reply(info);
  }
};
