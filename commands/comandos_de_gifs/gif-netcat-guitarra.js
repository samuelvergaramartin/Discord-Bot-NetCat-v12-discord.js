const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-guitarra",
    run: async (client, message, args) => {
    const guitarra = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat guitarra:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/854761b21a96e03a1667ea02be32725b/tenor.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(guitarra);
    }
}