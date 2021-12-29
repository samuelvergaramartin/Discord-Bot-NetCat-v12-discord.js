const Discord = require ('discord.js');

module.exports = {
    name: "punch",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
const punch = new Discord.MessageEmbed()
        .setTitle(`¡${message.author.username} pegó a ${user.username}`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/809053616413212672/tenor_1-1.gif")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(punch);
    }
}