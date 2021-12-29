const Discord = require ('discord.js');

module.exports = {
    name: "clear",
    run: async (client, message, args) => {

if(message.deletable) message.delete()
   let cantidad = parseInt(args[0]);
  if(!cantidad) return message.channel.send("Debes decir una cantidad de mensajes correcta-nya").then(msg => msg.delete({timeout: 3000}));
message.channel.bulkDelete(cantidad);
    }
}