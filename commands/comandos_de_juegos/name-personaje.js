const Discord = require ('discord.js');

module.exports = {
    name: "name-personaje",
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}`)
        .setDescription("Para que escoja un nombre, escriba `nc/name-personaje-mujer` o `nc/name-persoanje-hombre`")
        .setImage(message.author.displayAvatarURL({format: "png"}))
        .setColor("RANDOM")
        .setTimestamp()
      
         message.channel.send(embed);  
    }
}