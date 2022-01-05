const Discord = require ('discord.js');

module.exports = {
    name: "funciona",
    run: async (client, message, args) => {
        message.channel.send('Gracias por su participación en esta prueba, miau miau🐱')
    }
}