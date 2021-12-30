const Discord = require('discord.js');
const client = new Discord.Client();
const data = require('./data.json');
const fs = require ('fs');
const { arch } = require('os');
const disbut = require('discord-buttons');
disbut(client);
const db = require('megadb')
require('dotenv').config();
const prefixset = new db.crearDB('prefix')
const prefix_db = new db.crearDB('prefix')
var prefix = data.prefix;

client.comandos = new Discord.Collection()

let archivos = fs.readdirSync('./commands').filter((f) => f.endsWith('.js'))

for(var archi of archivos) {
    let comando = require("./commands/" + archi)
    client.comandos.set(comando.name, comando)
}

let archivos2 = fs.readdirSync('./commands/comandos_de_conversacion').filter((f) => f.endsWith('.js'))

for(var archi2 of archivos2) {
    let comando = require("./commands/comandos_de_conversacion/" + archi2)
    client.comandos.set(comando.name, comando)
}

let archivos3 = fs.readdirSync('./commands/comandos_utiles').filter((f) => f.endsWith('.js'))

for(var archi3 of archivos3) {
    let comando = require("./commands/comandos_utiles/" + archi3)
    client.comandos.set(comando.name, comando)
}

let archivos4 = fs.readdirSync('./commands/comandos_links_netcat').filter((f) => f.endsWith('.js'))

for(var archi4 of archivos4) {
    let comando = require("./commands/comandos_links_netcat/" + archi4)
    client.comandos.set(comando.name, comando)
}

let archivos5 = fs.readdirSync('./commands/comandos_de_reaccion').filter((f) => f.endsWith('.js'))

for(var archi5 of archivos5) {
    let comando = require("./commands/comandos_de_reaccion/" + archi5)
    client.comandos.set(comando.name, comando)
}

let archivos6 = fs.readdirSync('./commands/comandos_de_configuracion').filter((f) => f.endsWith('.js'))

for(var archi6 of archivos6) {
    let comando = require("./commands/comandos_de_configuracion/" + archi6)
    client.comandos.set(comando.name, comando)
}

let archivos7 = fs.readdirSync('./commands/comandos_de_diversion').filter((f) => f.endsWith('.js'))

for(var archi7 of archivos7) {
    let comando = require("./commands/comandos_de_diversion/" + archi7)
    client.comandos.set(comando.name, comando)
}

let archivos8 = fs.readdirSync('./commands/comandos_de_chistes').filter((f) => f.endsWith('.js'))

for(var archi8 of archivos8) {
    let comando = require("./commands/comandos_de_chistes/" + archi8)
    client.comandos.set(comando.name, comando)
}

let archivos9 = fs.readdirSync('./commands/comandos_de_gifs').filter((f) => f.endsWith('.js'))

for(var archi9 of archivos9) {
    let comando = require("./commands/comandos_de_gifs/" + archi9)
    client.comandos.set(comando.name, comando)
}

let archivos10 = fs.readdirSync('./commands/comandos_de_juegos').filter((f) => f.endsWith('.js'))

for(var archi10 of archivos10) {
    let comando = require("./commands/comandos_de_juegos/" + archi10)
    client.comandos.set(comando.name, comando)
}

function Presence(){
    client.user.setPresence({
        status: "online",
        activity: {
            name: "nc/help | NetCat v3.2 | Estoy lista para la acción",
            type: "PLAYING",
        }
    })
}

client.on("ready", () => {
    console.log('Bot encendido y listo para su uso');
    Presence()
   /* client.user.setActivity('felicidad y amor', {
        type: "STREAMING",
        url: "https://www.twitch.tv/god_of_pekka"
    })*/

})

client.on("message", async message => {
    if(message.author.bot) return;

if(message.channel.type === "dm") return;


    let prefix;

    if(prefix_db.tiene(message.guild.id)) {
        prefix = await prefix_db.obtener(message.guild.id)
    } else {
        prefix = 'pnc/'
    }

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

 
    if(!message.content.startsWith(prefix)) return;

    let cmd = client.comandos.get(command)
    if(cmd) {
        return cmd.run(client, message, args)
    }

    /*switch(command) {
        case "start":
                message.channel.send('NetCat: 🟢 ON. Todo correcto! Me estás programando correctamente, vas por buen camino , ánimo! puedes hacerlo!')
            break;
   
    } 
    switch(command) {
        case "prueba-2":
            message.channel.send('Prueba de salto de línea\nprueba del comando número 2\n🟢todo correcto')
            break;
    }
    switch(command) {
        case "embed-message-test":

            let embed = new Discord.MessageEmbed()
                .setTitle('Plantilla del menú de comandos de NetCat')
                .setDescription('Aquí irá la descripción del menú de comandos')
                .addField('Y aquí irá el listado de comandos', 'comando 1\ncomando 2\ncomando 3\ncomando 4...')
                .setColor('ff00d9')
                .setFooter('Y aquí el pie de página, #Mariolatenpiedad')

            message.channel.send(embed)
            
            break;

    }
    switch(command) {
        case "prueba-3":

            let embed = new Discord.MessageEmbed()
                .setTitle('Lista de comandos de NetCat')
                .setDescription('Comandos ordenados en 3 columnas con título')
                .addField('-----------------------Sección 1-----------------------', 'Listas de comandos de la Sección 1', false)
                .addField('Lista 1', 'comando 1\ncomando 2\ncomando 3\ncomando 4', true)
                .addField('Lista 2', 'comando 5\ncomando 6\ncomando 7\ncomando 8', true)
                .addField('Lista 3', 'comando 9\ncomando 10\ncomando 11\ncomando 12', true)
                .addField('-----------------------Sección 2-----------------------', 'Listas de comandos de la Sección 2', false)
                .addField('Lista 4', 'comando 1\ncomando 2\ncomando 3\ncomando 4', true)
                .addField('Lista 5', 'comando 5\ncomando 6\ncomando 7\ncomando 8', true)
                .addField('Lista 6', 'comando 9\ncomando 10\ncomando 11\ncomando 12', true)
                .setColor('ff00d9')
                .setFooter('Y aquí el pie de página, #Mariolatenpiedad')

            message.channel.send(embed)
            
            break;
            
    }*/
    
})

client.login(data.token);