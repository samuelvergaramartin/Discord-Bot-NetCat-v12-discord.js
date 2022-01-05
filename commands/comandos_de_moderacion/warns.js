const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
    name: "warns",
    run: async (client, message, args) => {
        var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes suficientes permisos crack!")

  let persona = message.mentions.users.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien")

  let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

  /*if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
    message.channel.send("Este usuario no tiene ningún aviso registrado")

    return;
  }*/

  if(cantidad === 0){
    message.channel.send("Este usuario no tiene ningún aviso registrado")
  }

  if(cantidad === 1){
    message.channel.send(`**${persona.tag}** tiene **un** aviso registrado`)
  }

  if(cantidad > 1){
    message.channel.send(`**${persona.tag}** tiene **${cantidad}** avisos registrados`)
  }

    }
}