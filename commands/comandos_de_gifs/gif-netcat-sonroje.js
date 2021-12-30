const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-sonroje",
    run: async (client, message, args) => {
    const gifnetcatsonroje = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat sonroje:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/52be0797a283d21927c3d4acff1b7bd3/tenor.gif")
        .setTimestamp()
        .setFooter(`• Gif para ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(gifnetcatsonroje);
    }
}