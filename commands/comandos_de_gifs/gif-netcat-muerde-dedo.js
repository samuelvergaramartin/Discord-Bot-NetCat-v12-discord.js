const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-muerde-dedo",
    run: async (client, message, args) => {
    const gifnetcatmuerdededo = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat muerde dedo:`)
        .setDescription(`Ñan, ñam :p`)
        .setImage("https://media.tenor.com/images/ae20222d721d258464174bf553728bbf/tenor.gif")
        .setTimestamp()
        .setFooter(`• Gif para ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(gifnetcatmuerdededo);
    }
}