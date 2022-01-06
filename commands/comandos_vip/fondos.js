const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const vip = new db.crearDB('vip')

module.exports = {
    name: "fondos",
    run: async (client, message, args) => {
        const user = message.author;

        if (!vip.tiene(`${user.id}`))
         vip.establecer(`${user.id}`, 0)
         const objetovip = await vip.obtener(`${user.id}`)

         if(objetovip === 0){
             message.channel.send("Lo siento, este comando es exclusivo para los miembros VIP, no tienes el objeto `miembro VIP`.\nPuedes comprar este objeto usando el comando `nc/buy miembro-VIP`.\nPuedes mirar el precio de dicho objeto en mi tienda, para ver mi tienda, use el comando `nc/shop`.\nDisculpe las molestias, que tengas un buen día!🐱")
         }

         if(objetovip === 1){
            const uno =   `https://media.discordapp.net/attachments/791270423630315521/817312471836131328/AA4.png?width=903&height=564`
            const dos = `https://media.discordapp.net/attachments/791270423630315521/817312463749251122/A.png?width=903&height=564`
            const tres = `https://media.discordapp.net/attachments/791270423630315521/817312461359284234/AA2.png?width=1002&height=563`
            const cuatro = `https://media.discordapp.net/attachments/791270423630315521/817312452005068860/EE1.png?width=800&height=564`
            const cinco = `https://media.discordapp.net/attachments/791270423630315521/817312459928109106/EE2.png?width=1002&height=564`
            const seis = `https://media.discordapp.net/attachments/791270423630315521/817312445890428938/BB1.png?width=1002&height=564`
            const siete = `https://media.discordapp.net/attachments/791270423630315521/817312405616328714/DD1.jpg?width=903&height=564`
            const ocho = `https://media.discordapp.net/attachments/791270423630315521/817312402873122816/DD6.jpg?width=1002&height=564`
            const nueve = `https://media.discordapp.net/attachments/791270423630315521/817312401870946304/EE.jpg?width=705&height=564`
            const diez = `https://media.discordapp.net/attachments/791270423630315521/817312400826826802/CC2.jpg?width=1002&height=564`
            const once = `https://media.discordapp.net/attachments/791270423630315521/817312400536764416/DD2.jpg?width=1002&height=564`
            const doce = `https://media.discordapp.net/attachments/791270423630315521/817312398221508638/DD4.jpg?width=1074&height=564`
            const trece = `https://media.discordapp.net/attachments/791270423630315521/817312395990532127/CC6.jpg?width=801&height=564`
            const catorce = `https://media.discordapp.net/attachments/791270423630315521/817312395323113472/CC4.jpg?width=1002&height=564`
            const quince = `https://media.discordapp.net/attachments/791270423630315521/817312391414415360/A3.png?width=941&height=564`
            const dieciseis = `https://media.discordapp.net/attachments/791270423630315521/817312383034327100/A4.png?width=1002&height=564`
            const diecisiete = `https://media.discordapp.net/attachments/791270423630315521/817312371290800128/BB5.jpg`
            const dieciocho = `https://media.discordapp.net/attachments/791270423630315521/817312368928227350/BB2.jpg`
            const diecinueve = `https://media.discordapp.net/attachments/791270423630315521/817312367561277480/AA6.jpg?width=1002&height=564`
            const veinte = `https://media.discordapp.net/attachments/791270423630315521/817312362490626079/AA3.jpg?width=1002&height=564`
            const ventiuno = `https://media.discordapp.net/attachments/791270423630315521/817312354424848394/AA4.jpg?width=1002&height=564`
          
            const a = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, ventiuno]
            let fon = a[Math.floor(Math.random() * a.length)]
          const embed = new Discord.MessageEmbed()
                  .setTitle('Fondos:')
                  .setDescription("Para móvil o pc:")
                  .setImage(fon)
                  .setColor('RANDOM')
                  .setTimestamp()
                  .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
          message.channel.send(embed);
         }
        

       
       }
}