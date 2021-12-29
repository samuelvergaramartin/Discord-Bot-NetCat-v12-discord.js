const Discord = require ('discord.js');

module.exports = {
    name: "kill",
    run: async (client, message, args) => {

let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
const kill = new Discord.MessageEmbed()
        .setTitle(`¡${message.author.username} mató a ${user.username}! D:`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/595828073400893465/tenor_14.gif")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(kill);
    }
}