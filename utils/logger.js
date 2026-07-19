const chalk = require('chalk');

const logger = {
  info: (message) => console.log(chalk.blue('ℹ️ [INFO]'), message),
  success: (message) => console.log(chalk.green('✅ [SUCCESS]'), message),
  warn: (message) => console.log(chalk.yellow('⚠️ [WARN]'), message),
  error: (message) => console.log(chalk.red('❌ [ERROR]'), message),
  debug: (message) => console.log(chalk.gray('🐛 [DEBUG]'), message),
  server: (message) => console.log(chalk.cyan('🖥️ [SERVER]'), message),
  command: (command, user) => console.log(chalk.magenta(`📝 [COMMAND] ${command} by ${user}`)),
};

module.exports = logger;
