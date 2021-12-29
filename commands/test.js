const Discord = require ('discord.js');

module.exports = {
    name: "test",
    run: async (client, message, args) => {
        message.channel.send('Todo en orden')
    }
}