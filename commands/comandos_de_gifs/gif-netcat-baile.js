const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-baile",
    run: async (client, message, args) => {
    const gifnetcatbaile = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat baile feliz:`)
        .setDescription(`¡Así se baila de verdad miau🐱!`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/d73fac2da0d8555d8a1dfb4c1ea09ddc/tenor.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(gifnetcatbaile);
    }
}