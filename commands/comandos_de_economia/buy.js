const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const objeto1 = new db.crearDB('objeto1')
const objeto2 = new db.crearDB('objeto2')
const objeto3 = new db.crearDB('objeto3')

module.exports = {
    name: "buy",
    run: async (client, message, args) => {

     const user = message.author;
     
     const objeto = args[0]
     if(!objeto) return message.channel.send("Debes decir el objeto que deseas comprar.\nSintaxsis: `nc/buy` <nombre-del-objeto>.\nPor ejemplo: nc/buy zapatillas-de-deporte")
     
     if(objeto === 'zapatillas-de-deporte') {
         const dineroencartera = await dinero.obtener(`${user.id}`)

         if(dineroencartera < 500) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

         if (!dinero.tiene(`${user.id}`))
         dinero.establecer(`${user.id}`, 0)
         if (!objeto1.tiene(`${user.id}`))
         objeto1.establecer(`${user.id}`, 0)

         let precio = Math.floor(Math.random() * 0) + 500
         let objetocomprado = Math.floor(Math.random() * 0) + 1

         dinero.restar(`${user.id}`, precio)
         objeto1.sumar(`${user.id}`, objetocomprado)

         return message.channel.send("Has comprado el objeto `zapatillas de deporte`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
     }

     if(objeto === 'pienso-para-gatos') {
        const dineroencartera = await dinero.obtener(`${user.id}`)

        if(dineroencartera < 1000) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

        if (!dinero.tiene(`${user.id}`))
        dinero.establecer(`${user.id}`, 0)
        if (!objeto2.tiene(`${user.id}`))
        objeto2.establecer(`${user.id}`, 0)

        let precio = Math.floor(Math.random() * 0) + 1000
        let objetocomprado = Math.floor(Math.random() * 0) + 1

        dinero.restar(`${user.id}`, precio)
        objeto2.sumar(`${user.id}`, objetocomprado)

        return message.channel.send("Has comprado el objeto `pienso para gatos`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
    }

    if(objeto === 'coche-de-carreras') {
        const dineroencartera = await dinero.obtener(`${user.id}`)

        if(dineroencartera < 5000) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

        if (!dinero.tiene(`${user.id}`))
        dinero.establecer(`${user.id}`, 0)
        if (!objeto3.tiene(`${user.id}`))
        objeto3.establecer(`${user.id}`, 0)

        let precio = Math.floor(Math.random() * 0) + 5000
        let objetocomprado = Math.floor(Math.random() * 0) + 1

        dinero.restar(`${user.id}`, precio)
        objeto3.sumar(`${user.id}`, objetocomprado)

        return message.channel.send("Has comprado el objeto `coche de carreras`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
    }

    }
}