const Discord = require ('discord.js');

module.exports = {
    name: "kuni",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const kuni = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} le está lamiendo la vagina a ${user.username}~`)
        .setColor('RANDOM')
        .setImage("https://images-ext-2.discordapp.net/external/aCTAr84sT9aWI37UZcg-a6QPoTmQTFH7u3Op00T7fCs/https/wetgif.com/wp-content/uploads/hentai-34.gif?width=400&height=225")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(kuni);
    }
}