const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const objeto1 = new db.crearDB('objeto1')
const objeto2 = new db.crearDB('objeto2')
const objeto3 = new db.crearDB('objeto3')
const objeto4 = new db.crearDB('objeto4')
const objeto5 = new db.crearDB('objeto5')
const vip = new db.crearDB('vip')

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

  if(!objeto4.tiene(`${user.id}`)){
    objeto4.establecer(`${user.id}`, 0)
  }

  if(!objeto5.tiene(`${user.id}`)){
    objeto5.establecer(`${user.id}`, 0)
  }

  if(!vip.tiene(`${user.id}`)){
    vip.establecer(`${user.id}`, 0)
  }

  const objetonumero1 = await objeto1.obtener(`${user.id}`)
  const objetonumero2 = await objeto2.obtener(`${user.id}`)
  const objetonumero3 = await objeto3.obtener(`${user.id}`)
  const objetonumero4 = await objeto4.obtener(`${user.id}`)
  const objetonumero5 = await objeto5.obtener(`${user.id}`)
  const objetovip = await vip.obtener(`${user.id}`)


  const embed1 = new Discord.MessageEmbed()

    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setDescription(`**__Inventario de objetos__**\nZapatillas de deporte: ${objetonumero1}\nPienso para gatos: ${objetonumero2}\nCoche de carreras: ${objetonumero3}\nCapa de invisibilidad: ${objetonumero4}\nGuardaespaldas: ${objetonumero5}\n**Miembro VIP**: ${objetovip}\nTotal de objetos: ${objetonumero1 + objetonumero2 + objetonumero3 + objetonumero4 + objetonumero5 + objetovip}`)
    .setColor("RANDOM")
    .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
//if(message.deletable) message.delete()
    message.channel.send(embed1)

    return;
    }
}