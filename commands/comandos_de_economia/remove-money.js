const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
//const banco = new db.crearDB('banco')

module.exports = {
    name: "remove-money",
    run: async (client, message, args) => {
    //const user = message.author;
    const persona = message.mentions.users.first();
    

  /*let dineropersona = await dinero.obtener(`${persona.id}`)
  let dinerouser = await dinero.obtener(`${user.id}`)
  if(persona.id === message.author.id) return message.channel.send("No te puedes robar a ti mismo pendej@")
  if(dineropersona == 0) return message.channel.send("Esta persona no tiene dinero, F")
  if(dineropersona < 300) return message.channel.send("Esa persona tiene muy poco dinero, no seas mal@")*/

  const cantidadd = args[0]
  if(!cantidadd) return message.channel.send("Debes decir una cantidad y mencionar a alguien.\nSintaxsis: `nc/remove-money` <cantidad> <@usuario>")
  if(!persona) return message.channel.send("Te falta mencionar a alguien.\nSintaxsis: `nc/remove-money` <cantidad> <@usuario>")

     if(cantidadd < 1){
         message.channel.send("La cantidad a mencionar debe ser mayor que 0")
     }

     if(cantidadd > 0){
     //const cantidaduser = await dinero.obtener(`${user.id}`)
     if (!dinero.tiene(`${persona.id}`))
         dinero.establecer(`${persona.id}`, 0)

     //const cantidadpersona = await dinero.obtener(`${persona.id}`)
     //if(cantidadpersona === 0) return message.channel.send("Esta persona no tiene dinero, F")

     /*if(!cantidaduser){
      dinero.set(`${persona.id}`, 0)
     }*/

     //dinero.restar(`${persona.id}`, cantidadpersona)
     dinero.restar(`${persona.id}`, cantidadd)

     return message.channel.send(`Has quitado **${cantidadd}**:coin: de la cartera de **${persona.tag}**`)
     }
  /*if(cantidadd === 'all'){
    const cantidadpersona = await dinero.obtener(`${persona.id}`)

    if(cantidadpersona === 0) return message.channel.send("Esta persona no tiene dinero, F")

    const cantidaduser = await dinero.obtener(`${user.id}`)
    if(!cantidaduser){
      dinero.set(`${user.id}`, 0)
    }

    dinero.sumar(`${user.id}`, cantidadpersona)
    dinero.restar(`${persona.id}`, cantidadpersona)


   return message.channel.send(`Le has robado **${cantidadpersona}**:coin: a **${persona.tag}**`)
  }

  const personat = await dinero.obtener(`${persona.id}`)

  if(cantidadd > personat) {
  message.channel.send("Esta persona no tiene tanto dinero, pruebe con una cantidad más pequeña")
  }
  
  if(cantidadd < personat) {
  const cantidad = await dinero.obtener(`${user.id}`)
  if(!cantidad){
    dinero.set(`${user.id}`, 0)
  }

  dinero.restar(`${persona.id}`, cantidadd)
  dinero.sumar(`${user.id}`, cantidadd)


  message.channel.send(`Le has robado **${cantidadd}**:coin: a **${persona.tag}**`)
}

if(cantidadd == personat) {
  const cantidad = await dinero.obtener(`${user.id}`)
  if(!cantidad){
    dinero.set(`${user.id}`, 0)
  }

  dinero.restar(`${persona.id}`, cantidadd)
  dinero.sumar(`${user.id}`, cantidadd)


  message.channel.send(`Le has robado **${cantidadd}**:coin: a **${persona.tag}**`)
}*/
  
  const cantidaddd = args[1]
  if(!cantidaddd) return message.channel.send('Debes decir una cantidad antes de mencionar al usuario.\nSintaxsis: `nc/remove-money` <cantidad> <@usuario> ')
//if(message.deletable) message.delete()
    }
}