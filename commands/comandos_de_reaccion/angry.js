const Discord = require ('discord.js');

module.exports = {
    name: "angry",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const angry = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} se enfadó 🙀`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://images-ext-1.discordapp.net/external/QHZFZlLCZi4r9wZOJoFBvANZH3nid0CVHEYStRQ9G6M/https/imgur.com/q59E1sF.gif")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(angry);
    }
}