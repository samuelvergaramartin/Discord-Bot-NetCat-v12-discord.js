const Discord = require ('discord.js');

module.exports = {
    name: "feed",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
const feed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está dando de comer a ${user.username}. Ñam, ñam`)
        .setColor('RANDOM')
        .setImage("https://images-ext-1.discordapp.net/external/Rvkvv-y0S0TdkQMc0jbVLsbxCXQwUW7OnHjlZjYYxoE/https/media.discordapp.net/attachments/399448944889036801/601061673473671168/feed2.gif?width=400&height=225")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(feed);
    }
}