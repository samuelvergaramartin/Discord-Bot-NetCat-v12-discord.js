const Discord = require ('discord.js');

module.exports = {
    name: "buenas-noches",
    run: async (client, message, args) => {
        message.channel.send('Buenas noches, duerme bien😽')
    }
}