const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'commandHandler',
  description: 'Load all commands from commands directory',
  
  loadCommands: (client) => {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFolders = fs.readdirSync(commandsPath);

    for (const folder of commandFolders) {
      const folderPath = path.join(commandsPath, folder);
      
      if (!fs.statSync(folderPath).isDirectory()) continue;
      
      const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

      for (const file of commandFiles) {
        const filePath = path.join(folderPath, file);
        const command = require(filePath);

        if (command.name) {
          client.commands.set(command.name, command);
          console.log(`✅ Command loaded: ${command.name} (${command.category})`);
        }
      }
    }
    
    console.log(`📦 Total commands loaded: ${client.commands.size}`);
    return client.commands;
  }
};
