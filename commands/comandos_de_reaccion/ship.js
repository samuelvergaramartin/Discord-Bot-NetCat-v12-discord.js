const Discord = require ('discord.js');

module.exports = {
    name: "ship",
    run: async (client, message, args) => {
    let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
  const cero = `https://cdn.discordapp.com/attachments/791270423630315521/817739616408961024/Noembed.png`
  const diez = `https://cdn.discordapp.com/attachments/791270423630315521/817739571386515526/10.png`
  const veinticinco = `https://cdn.discordapp.com/attachments/791270423630315521/817739573181284372/25.png`
  const treinta = `https://cdn.discordapp.com/attachments/791270423630315521/817739574948003850/30.png`
  const cuarentayocho = `https://cdn.discordapp.com/attachments/791270423630315521/817739576729927690/48.png`
  const cincuenta = `https://cdn.discordapp.com/attachments/791270423630315521/817739578529021997/50.png`
  const sesentaysiete = `https://cdn.discordapp.com/attachments/791270423630315521/817739580060860444/67.png`
  const setentaydos = `https://cdn.discordapp.com/attachments/791270423630315521/817739581365551164/72.png`
  const ochentaycuatro = `https://cdn.discordapp.com/attachments/791270423630315521/817739583344345138/84.png`
  const noventaynueve = `https://cdn.discordapp.com/attachments/791270423630315521/817739585127317534/99.png`
  const cien = `https://cdn.discordapp.com/attachments/791270423630315521/817739587203104778/100.png`
  
  const lol = [cero, diez, veinticinco, treinta, cuarentayocho, cincuenta, sesentaysiete, setentaydos, ochentaycuatro, noventaynueve, cien]
  let amor = lol[Math.floor(Math.random() * lol.length)]
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} y ${user.username} son compatilbes un...`)
  .setImage(amor)
  .setTimestamp()
  .setFooter(`• Bot creado por Sam1707#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
  message.channel.send(embed)
}
    
}