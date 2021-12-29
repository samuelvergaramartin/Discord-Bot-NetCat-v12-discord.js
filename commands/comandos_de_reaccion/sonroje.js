const Discord = require ('discord.js');

module.exports = {
    name: "sonroje",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
const blushotro = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} se sonrojó al ver/por culpa de ${user.username} `)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://tenor.com/view/blush-anime-angry-gif-13159552")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(blushotro);
    }
}