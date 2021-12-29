const Discord = require ('discord.js');

module.exports = {
    name: "blush",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const blush = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} se sonrojó`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://img.wattpad.com/05f59eb091e233b6c6a5b6e9021ab207bd227996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4548384a30625141744e365a5a413d3d2d3232313032303531352e313433333331323564663839623837622e676966")
        .setFooter(`• Hecho por ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(blush);
    }
}