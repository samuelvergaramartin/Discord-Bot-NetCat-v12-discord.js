const Discord = require ('discord.js');

module.exports = {
    name: "gif-f",
    run: async (client, message, args) => {
    const f = new Discord.MessageEmbed()
        .setTitle(`Gif F:`)
        .setColor('RANDOM')
        .setImage("https://c.tenor.com/9f1lboKKmBUAAAAM/keyboard-hyperx.gif")
        .setTimestamp()
        .setFooter(`• Gif para ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(f);
    }
}