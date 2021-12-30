const Discord = require ('discord.js');

module.exports = {
    name: "name-personaje-mujer",
    run: async (client, message, args) => {
    let links = ["Ana", "Kyra","Mery", "Marta", "Afrodita"]
  var dado = links[Math.floor(Math.random() * links.length)]
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .addField("El nombre elegido es:", dado)
  .setColor("RANDOM")
  .setTimestamp()

   message.channel.send(embed);
    }
}