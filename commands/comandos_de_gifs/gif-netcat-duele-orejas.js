const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-duele-orejas",
    run: async (client, message, args) => {
    const orejas = new Discord.MessageEmbed()
        .setTitle(`Gif NetCat duele orejas:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/6b757c065bed23ff460518ae2bd5682f/tenor.gif")
        .setTimestamp()
        .setFooter(`• Gif para ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(orejas);
    }
}