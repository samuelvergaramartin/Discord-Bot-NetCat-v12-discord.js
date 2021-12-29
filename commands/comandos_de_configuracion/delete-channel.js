const Discord = require ('discord.js');

module.exports = {
    name: "delete-channel",
    run: async (client, message, args) => {
        message.author.send(":white_check_mark: || Canal eliminado correctamente")
  message.channel.delete();
    }
}