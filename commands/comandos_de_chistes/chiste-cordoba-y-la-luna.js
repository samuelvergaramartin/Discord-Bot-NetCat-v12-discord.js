const Discord = require ('discord.js');

module.exports = {
    name: "chiste-córdoba-y-la-luna",
    run: async (client, message, args) => {
        message.channel.send(`- Papá, ¿qué está más lejos, Córdoba o la Luna?.
- Pero vamos a ver, ¿tú ves desde aquí Córdoba?`);
    }
}