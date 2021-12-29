const Discord = require ('discord.js');

module.exports = {
    name: "exit",
    run: async (client, message, args) => {
        message.author.send(":white_check_mark: ||  Servidor abandonado")
        message.channel.send("Abandonando servidor...")
        message.guild.leave();
    }
}