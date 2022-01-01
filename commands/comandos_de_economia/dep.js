const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const banco = new db.crearDB('banco')

module.exports = {
    name: "dep",
    run: async (client, message, args) => {
    const user = message.author;

  const cantidadd = args[0]
  if(!cantidadd) return message.channel.send("Debes decir una cantidad")

  if(cantidadd === 'max'){
    const cantidad = await dinero.obtener(`${user.id}`)

    const cantidadbanco = await banco.obtener(`${user.id}`)
    if(cantidad === 0) return message.channel.send("No tenes dinero en la billetera")

    if(!cantidadbanco){
      banco.set(`${user.id}`, 0)
    }

    dinero.restar(`${user.id}`, cantidad)
    banco.sumar(`${user.id}`, cantidad)

   return message.channel.send(`Has depositado **${cantidad}**:coin: en el banco`)
  }
  if(cantidadd === 'all'){
    const cantidad = await dinero.obtener(`${user.id}`)

    if(cantidad === 0) return message.channel.send("No tenes dinero en la billetera")

    const cantidadbanco = await banco.obtener(`${user.id}`)
    if(!cantidadbanco){
      banco.set(`${user.id}`, 0)
    }

    banco.sumar(`${user.id}`, cantidad)
    dinero.restar(`${user.id}`, cantidad)


   return message.channel.send(`Has depositado **${cantidad}**:coin: en el banco`)
  }

  const dinerot = await dinero.obtener(`${user.id}`)

  if(cantidadd > dinerot) return message.channel.send("No tienes tantas monedas")

  const cantidadbanco = await banco.obtener(`${user.id}`)
  if(!cantidadbanco){
    banco.set(`${user.id}`, 0)
  }

  dinero.restar(`${user.id}`, cantidadd)
  banco.sumar(`${user.id}`, cantidadd)

  message.channel.send(`Guardaste **${cantidadd}** monedas en el banco`)
if(message.deletable) message.delete()
    }
}