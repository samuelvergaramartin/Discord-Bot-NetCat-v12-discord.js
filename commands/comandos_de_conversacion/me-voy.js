const Discord = require ('discord.js');

module.exports = {
    name: "me-voy",
    run: async (client, message, args) => {
        message.channel.send('Adiós, espero que vuelvas pronto!😸')
    }
}