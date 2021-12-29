const Discord = require ('discord.js');

module.exports = {
    name: "chiste-general-y-soldado",
    run: async (client, message, args) => {
        message.channel.send(`General: Soldado, ice la bandera
Soldado: Pues le quedó muy bonita`);
    }
}