const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const banco = new db.crearDB('banco')

module.exports = {
    name: "with",
    run: async (client, message, args) => {
    const user = message.author;

  const cantidadd = args[0]
  if(!cantidadd) return message.channel.send("Debes decir una cantidad")

  if(cantidadd === 'max'){
    const cantidad = await dinero.obtener(`${user.id}`)

    const cantidadbanco = await banco.obtener(`${user.id}`)
    if(cantidadbanco === 0) return message.channel.send("No tienes dinero en el banco")

    if(!cantidad){
      dinero.set(`${user.id}`, 0)
    }

    banco.restar(`${user.id}`, cantidadbanco)
    dinero.sumar(`${user.id}`, cantidadbanco)

   return message.channel.send(`Has sacado **${cantidadbanco}**:coin: del banco`)
  }
  if(cantidadd === 'all'){
    const cantidadbanco = await banco.obtener(`${user.id}`)

    if(cantidadbanco === 0) return message.channel.send("No tienes dinero en el banco")

    const cantidad = await dinero.obtener(`${user.id}`)
    if(!cantidad){
      dinero.set(`${user.id}`, 0)
    }

    dinero.sumar(`${user.id}`, cantidadbanco)
    banco.restar(`${user.id}`, cantidadbanco)


   return message.channel.send(`Has sacado **${cantidadbanco}**:coin: del banco`)
  }

  const bancot = await banco.obtener(`${user.id}`)

  if(cantidadd > bancot) return message.channel.send("No tienes tantas monedas en el banco")

  const cantidad = await dinero.obtener(`${user.id}`)
  if(!cantidad){
    dinero.set(`${user.id}`, 0)
  }

  banco.restar(`${user.id}`, cantidadd)
  dinero.sumar(`${user.id}`, cantidadd)

  message.channel.send(`Has sacado **${cantidadd}**:coin: del banco`)
//if(message.deletable) message.delete()
    }
}