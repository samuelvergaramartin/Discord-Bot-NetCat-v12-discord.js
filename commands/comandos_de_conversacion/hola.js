const Discord = require ('discord.js');

module.exports = {
    name: "hola",
    run: async (client, message, args) => {
        message.channel.send('Hola, qué tal?😺')
    }
}