const Discord = require ('discord.js');

module.exports = {
    name: "lick",
    run: async (client, message, args) => {

let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
const lick = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} ha lamido a ${user.username} `)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/719158526588616784/0e2f3f2f-bbef-4f47-a400-247a5f90385f.gif")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(lick);
    }
}