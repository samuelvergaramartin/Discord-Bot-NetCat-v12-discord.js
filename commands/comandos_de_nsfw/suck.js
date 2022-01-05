const Discord = require ('discord.js');

module.exports = {
    name: "suck",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const suck = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} le está haciendo una mamada a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://images-ext-2.discordapp.net/external/xYvBIfPdyukeVxSOM8xd1p2VWar2VcXkuj9asHehFPU/https/i0.wp.com/thehentaiworld.com/wp-content/uploads/2011/01/Gorgeous-Milf-Sucking-Cock-Hentai-GIF-TheHentaiWorld-11.gif?width=400&height=300")
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(suck);
    }
}