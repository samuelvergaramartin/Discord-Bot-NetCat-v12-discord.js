const Discord = require ('discord.js');

module.exports = {
    name: "run",
    run: async (client, message, args) => {
    const run = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} salió corriendo. ¡Cuánto corre! `)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/399448944889036801/761253916209184779/6dfe6a79-3316-4a21-9827-72ebed0471ac.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(run);
    }
}