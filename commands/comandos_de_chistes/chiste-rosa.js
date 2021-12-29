const Discord = require ('discord.js');

module.exports = {
    name: "chiste-rosa",
    run: async (client, message, args) => {
        message.channel.send(`- Hola Ana.

- Soy Rosa.

- Ah, perdóname, es que soy daltónico.`);
    }
}