const Discord = require ('discord.js');

module.exports = {
    name: "futanari",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const futa = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} tiene sexo futanari con ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://images-ext-2.discordapp.net/external/nFeOnzPlS0FzWnPaPHbwhwnw2XnQp8DCyA1kV_twDKc/http/img-l3.xvideos-cdn.com/videos/thumbs169poster/86/57/6d/86576d79c042c97199316bfbb0fd79e0/86576d79c042c97199316bfbb0fd79e0.30.jpg?width=721&height=406")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(futa);
    }
}