const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const objeto1 = new db.crearDB('objeto1')
const objeto2 = new db.crearDB('objeto2')
const objeto3 = new db.crearDB('objeto3')

module.exports = {
    name: "mochila",
    run: async (client, message, args) => {
        const user = message.author || message.mentions.members.first()

  if(!objeto1.tiene(`${user.id}`)){
    objeto1.establecer(`${user.id}`, 0)
  }
  
  if(!objeto2.tiene(`${user.id}`)){
    objeto2.establecer(`${user.id}`, 0)
  }

  if(!objeto3.tiene(`${user.id}`)){
    objeto3.establecer(`${user.id}`, 0)
  }

  const objetonumero1 = await objeto1.obtener(`${user.id}`)
  const objetonumero2 = await objeto2.obtener(`${user.id}`)
  const objetonumero3 = await objeto3.obtener(`${user.id}`)


  const embed1 = new Discord.MessageEmbed()

    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setDescription(`**__Inventario de objetos__**\nZapatillas de deporte: ${objetonumero1}\nPienso para gatos: ${objetonumero2}\nCoche de carreras: ${objetonumero3}\nTotal de objetos: ${objetonumero1 + objetonumero2 + objetonumero3}`)
    .setColor("RANDOM")
    .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
//if(message.deletable) message.delete()
    message.channel.send(embed1)

    return;
    }
}