const Discord = require ('discord.js');

module.exports = {
    name: "kiss",
    run: async (client, message, args) => {

let user = message.mentions.users.first() 

  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
 const kiss = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} besó a ${user.username} con mucho amor 😽`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/747838604105089096/0605fdcc-fa03-468e-9b6b-1e0551d09fe5.gif")
       .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(kiss);
    }
}