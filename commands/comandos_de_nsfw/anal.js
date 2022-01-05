const Discord = require ('discord.js');

module.exports = {
    name: "anal",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const anal = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} le está haciendo un anal a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://images-ext-1.discordapp.net/external/e5L68CXPh7lFNhL-3C6D9AUYW5CtkcJ3srf3q3B_NDA/https/thumb-p8.xhcdn.com/a/qLjV23tChdUn9mXZjHWlEw/000/122/173/698_450.gif?width=400&height=300")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(anal);
    }
}