const Discord = require ('discord.js');

module.exports = {
    name: "bored",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const bored = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está aburrido/a`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/659843676109013022/giphy.gif")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(bored);
    }
}