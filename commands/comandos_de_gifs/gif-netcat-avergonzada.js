const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-avergonzada",
    run: async (client, message, args) => {
    const gifnetcatavergonzada = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat avergonzada:`)
        .setColor('RANDOM')
        .setDescription(`Qué vergüenza ,miau... `)
        .setImage("https://media.tenor.com/images/ce88f339ecf2887a126cf652b2d2ce49/tenor.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(gifnetcatavergonzada);
    }
}