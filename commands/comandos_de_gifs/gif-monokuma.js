const Discord = require ('discord.js');

module.exports = {
    name: "gif-monokuma",
    run: async (client, message, args) => {
    const monokuma = new Discord.MessageEmbed()
        .setTitle(`Gif monokuma:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/25ee31c40786a0332dd242da1b968c38/tenor.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(monokuma);
    }
}