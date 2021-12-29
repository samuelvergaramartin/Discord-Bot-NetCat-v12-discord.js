const Discord = require ('discord.js');

module.exports = {
    name: "scared",
    run: async (client, message, args) => {
    const scared = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} tiene miedo. ¡¿Por qué?!`)
        .setColor('RANDOM')
        .setImage("https://images-ext-2.discordapp.net/external/ngNXqB72DzairMuoGwrwaozDg7PdYKaPUtU-kXrffIQ/https/media.discordapp.net/attachments/399448944889036801/597135354918731786/a48fb0a16273d6e3762f0f58dd3464e91438448073_full.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(scared);
    }
}