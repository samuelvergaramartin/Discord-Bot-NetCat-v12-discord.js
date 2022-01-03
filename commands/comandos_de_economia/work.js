const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const a = new db.crearDB('trabajo')

let cooldown = new Set();

module.exports = {
    name: "work",
    run: async (client, message, args) => {
    if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 minutos para volver a usar este comando.")

  const user = message.author;

  if (!dinero.tiene(`${user.id}`))
    dinero.establecer(`${user.id}`, 0)
  if (!a.tiene(`${user.id}`))
    a.establecer(`${user.id}`, 0)


  let random = Math.floor(Math.random() * 175) + 100
  let working = Math.floor(Math.random() * 1) + 1

  let trabajo = ["policia", "profesor", "bombero"]
  let randomTrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

  dinero.sumar(`${user.id}`, random)
  a.sumar(`${user.id}`, working)

  
  const embed = new Discord.MessageEmbed()

  .setTitle("Trabajo")
  .setDescription(`El usuario **${user}** ha trabajado de **${randomTrabajo}** y gano **${random}:coin:** Además, tu nivel de trabajador actualmente es: **Nivel ${working}**`)
  .setColor("RANDOM")
  message.channel.send(embed)

  cooldown.add(message.author.id)
  setTimeout(function(){
    cooldown.delete(message.author.id)
  }, 250000) 
//if(message.deletable) message.delete()
    }
}