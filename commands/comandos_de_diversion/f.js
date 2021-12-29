const Discord = require ('discord.js');

module.exports = {
    name: "f",
    run: async (client, message, args) => {
    const efe = new Discord.MessageEmbed()
        .setTitle(`Estoy de acuerdo ${message.author.username}`)
        .setColor('RANDOM')
        .setImage("https://c.tenor.com/rAuQOw-WY7IAAAAM/press-f-pay-respect.gif")
        .setTimestamp()
        .setFooter(`• F por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
        message.channel.send(efe);
    }
}