const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-manzana",
    run: async (client, message, args) => {
    const gifnetcatmanzana = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat manzana:`)
        .setDescription(`Hmmmmm... Deliciosa 😸`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/a1aea29065c5c2011aba6bdcaca6f1eb/tenor.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(gifnetcatmanzana);
    }
}