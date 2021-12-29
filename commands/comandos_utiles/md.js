const Discord = require ('discord.js');

module.exports = {
    name: "md",
    run: async (client, message, args) => {

let mensaje = args.join(" ");

if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo al MD miaw`);

const uno = `:white_check_mark: || Ya te envié el mensaje al privado miaw`
const dos = `${message.author.username}, revisa tu MD-nya`
const final = [uno, dos]
let awa = final[Math.floor(Math.random() * final.length)]


message.author.send(mensaje);

message.channel.send(awa).then(msg =>{
    msg.delete()

})

    }
}