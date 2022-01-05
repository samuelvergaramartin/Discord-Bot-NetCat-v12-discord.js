const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB('muterol')
const ms = require('ms')

module.exports = {
    name: "temp-mute",
    run: async (client, message, args) => {
        var perms = message.member.hasPermission("MANAGE_ROLES")
  if(!perms) return message.channel.send("No tienes suficientes permisos")
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("No tengo los permisos necesarios. Permisos que me faltan: `MANAGE_ROLES`")
    }

  let time = args[1]
  if(!time) return message.channel.send("Debes especificar el tiempo")
  let timer = ms(time)

  let mencionado = message.mentions.members.last()
  if(!mencionado) return message.channel.send("Debes mencionar a alguien")
  if(mencionado === message.guild.owner) {
    return message.channel.send("No puedes mutear al owner")
  }

  var razon = args.slice(2).join(" ")
  if(!razon){
    razon = 'No especificado'
  }

  if(!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene ningun rol para mutear. Para añadirlo, use el comando `nc/muterol`")

  let rol = await muterol.obtener(message.guild.id)

  if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya esta muteado")

  mencionado.roles.add(rol)

  const non = new Discord.MessageEmbed()
  .setTitle(`:loud_sound: Usuario desmuteado`)
  .setDescription(`El usuario **${mencionado}** ha sido desmuteado`)
  .addField("Razón:", `${razon}`)
  .addField("Staff responsable:", `${message.author.tag}`)
  .setColor("RANDOM")


  const mom = new Discord.MessageEmbed()
  .setTitle(`:mute: Usuario muteado`)
  .setDescription(`El usuario ${mencionado} ha sido muteado durante **${time} ms**`)
  .addField("Razón:", `${razon}`)
  .addField("Tiempo:", `${time} ms`)
  .addField("Staff responsable:", `${message.author.tag}`)
  .setColor("RANDOM")

  message.channel.send(mom)

  await setTimeout(async function() {

    await mencionado.roles.remove(rol)

    await message.channel.send(non).catch(error => {
     message.channel.send(`Hubo un error inesperado ${error}`)
    })

  }, timer)
//if(message.deletable) message.delete()
    }
}