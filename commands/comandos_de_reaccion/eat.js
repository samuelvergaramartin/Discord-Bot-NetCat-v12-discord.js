const Discord = require ('discord.js');

module.exports = {
    name: "eat",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const eat = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está comiendo 🍙`)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/399448944889036801/743063249188290630/0212e25d-1af6-4110-bd57-5a23e0eb15b2.gif?width=460&height=406")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(eat)
    }
}