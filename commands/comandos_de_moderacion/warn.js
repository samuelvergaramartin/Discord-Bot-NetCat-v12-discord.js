const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
    name: "warn",
    run: async (client, message, args) => {
        var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes suficientes permisos crack!")
  
  let persona =message.mentions.users.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien")

  var razon = args.slice(1).join(" ")
  if(!razon){
    razon = 'un motivo no especificado'
  }

  if(!warns.tiene(`${message.guild.id}.${persona.id}`))
  warns.establecer(`${message.guild.id}.${persona.id}`, 0)

  warns.sumar(`${message.guild.id}.${persona.id}`, 1)
    
    //persona.send(`${razon}`)
    //persona.send(`https://images-ext-2.discordapp.net/external/PSuRFyJysqnNNgmKwvpZWynbRPXlVJ0q934QstYTqo0/https/c.tenor.com/0g_vgq7PLTMAAAAM/cross-upside-down-cross.gif`)
    //persona.send(`https://images-ext-2.discordapp.net/external/EIh2gsujjXb4oxrZcMLvRA7IXdX6XfNx2iS5DPaugU4/https/c.tenor.com/BOxuvQ8efSAAAAAM/the-exorcist-o-exorcista.gif`)
    persona.send(`Hola, mensaje de prueba, mensaje de prueba, me recibes?.\nSistema de mensajería de NetCat - Fase de pruebas.\nTipo de mensaje: Mensaje sin embed  y mensaje por privado.\nPing: ${razon}\nMi creador, Samuel170703#6466, está enviando un mensaje de prueba a través de mí a cada uno de los miembros de mi servidor oficial, por favor, si has recibido este mensaje, escriba en el canal <#927987130851016804> de mi servidor oficial el siguiente comando: nc/funciona\nDisculpe las molestias.\nFDO: Sam170703#6466  Pre-NetCat#3577`)
    message.channel.send("Mensaje enviado correctamente")
  //persona.send(`Te han avisado en el servidor **${message.guild.name}** por **${razon}**`)
    }
}