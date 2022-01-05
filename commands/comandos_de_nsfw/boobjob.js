const Discord = require ('discord.js');

module.exports = {
    name: "boobjob",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const boobjob = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} le está haciendo un boobjob a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/791270423630315521/815300286000005130/boobjob.gif")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(boobjob);
    }
}