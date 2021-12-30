const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-mueve-cola",
    run: async (client, message, args) => {
    const cola = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat mueve cola:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/c2f1e7d17828e1ffd248df91f011c90a/tenor.gif")
        .setTimestamp()
        .setFooter(`• Gif para ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(cola);
    }
}