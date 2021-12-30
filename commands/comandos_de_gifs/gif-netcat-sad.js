const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-sad",
    run: async (client, message, args) => {
    const gifnetcatsad = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat sad:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/076279f24133f5327e694da07a33aeaa/tenor.gif")
        .setTimestamp()
        .setFooter(`• Gif para ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(gifnetcatsad);
    }
}