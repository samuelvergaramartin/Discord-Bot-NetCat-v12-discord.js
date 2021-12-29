const Discord = require ('discord.js');

module.exports = {
    name: "furros",
    run: async (client, message, args) => {
        message.channel.send('Tú qué dirías?? Sí o no a los furros??\n**pon nc/sí-furros o nc/no-furros según tu opinión**')
    }
}