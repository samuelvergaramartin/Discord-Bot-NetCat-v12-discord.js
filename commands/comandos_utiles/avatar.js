const Discord = require ('discord.js');

module.exports = {
    name: "avatar",
    run: async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  if(message.deletable) message.delete() 
  
let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor('RANDOM') 
    .setTitle(`Avatar de ${user.username}`) 
    .setImage(avatar) 
    .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed);
    }
}