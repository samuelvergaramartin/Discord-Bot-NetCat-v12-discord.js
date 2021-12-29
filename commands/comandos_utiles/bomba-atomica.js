const Discord = require ('discord.js');

module.exports = {
    name: "bomba-atómica",
    run: async (client, message, args) => {

var posicion = message.channel.position

    message.channel.clone().then((canal) => {
     message.channel.delete()
     canal.setPosition(posicion)
     canal.send("BOOOOOOOOOOOOOMMMMMMMMM!!!!!! La bomba ha caído correctamente en el canal que me ordenastes que destruyera, y lo he clonado con todos sus permisos y toda la configuración de ese canal, misión cumplida! 💂‍♂️")
    })
    message.author.send('La bomba atómica ha caído con éxito comandante/a-nya uwu');
    message.author.send('Y ya he duplicado el canal como me ordenó al usar el comando `nc/bomba-atómica` miau miau 😸');
    }
}