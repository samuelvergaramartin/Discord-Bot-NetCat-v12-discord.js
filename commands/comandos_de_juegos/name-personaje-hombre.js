const Discord = require ('discord.js');

module.exports = {
    name: "name-personaje-hombre",
    run: async (client, message, args) => {
    let links = ["Mauel", "Raúl", "Juan", "Carlos", "Ian"]
  var dado = links[Math.floor(Math.random() * links.length)]
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .addField("El nombre elegido es:", dado)
  .setColor("RANDOM")
    .setTimestamp()

   message.channel.send(embed);
    }
}