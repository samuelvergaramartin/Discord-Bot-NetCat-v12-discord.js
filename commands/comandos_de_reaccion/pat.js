const Discord = require ('discord.js');

module.exports = {
    name: "pat",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
const pat = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} acarició a ${user.username} con amor`)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/399448944889036801/609460244854079616/BkaRWA4CZ.gif")
       .setTimestamp()
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(pat);
    }
}