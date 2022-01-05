const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB('muterol')

module.exports = {
    name: "muterol",
    run: async (client, message, args) => {
        var perms = message.member.hasPermission("ADMINISTRADOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos")
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("No tengo los permisos necesarios. Permisos que me faltan: `MANAGE_ROLES`")
    }

  let rol = message.mentions.roles.first();
  if(!rol) return message.channel.send("Debes mencionar un rol")

  muterol.establecer(message.guild.id, rol.id)
const mum = new Discord.MessageEmbed()
    .setTitle("Muterol")
    .setDescription(`Se ha establecido el rol **${rol.name}** como el rol para mutear`)
    .setColor("RANDOM")

  message.channel.send(mum)
//if(message.deletable) message.delete()
    }
}