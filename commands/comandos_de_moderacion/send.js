const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "send",
    run: async (client, message, args) => {
        var perms = message.member.hasPermission("ADMINISTRADOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos crack!")
  
  let persona =message.mentions.users.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien")

  var mensaje = args.slice(1).join(" ")
  if(!mensaje){
    message.channel.send("Debes escribir un mensaje")
  }

  if(mensaje) {
    persona.send(`${mensaje}`)

    return message.channel.send("Mensaje enviado correctamente")
  }

    }
}