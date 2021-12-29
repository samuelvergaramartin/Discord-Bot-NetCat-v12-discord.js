const Discord = require ('discord.js');

module.exports = {
    name: "spank",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || D- debes mencionar a al- alguien") || client.users.cache.get(args[0]) || message.author;
const spank = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} nalgea a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/399448944889036801/662979867582791693/tenor_1.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(spank);
    }
}