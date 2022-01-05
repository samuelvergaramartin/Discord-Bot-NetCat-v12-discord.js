const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require (`discord.js`);

module.exports = {
    name: "ban",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`No tienes el permiso "BAN_MEMBERS"`)

    let user = message.mentions.members.first();
  
    let Banreason = args.join(' ').slice(1);
    
    
   if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("No tienes permisos suficientes!")
    
    if(!user) return message.channel.send("Debes mencionar a alguien!")

    if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a una persona de un rol igual o superior al tuyo")

    if(user === message.author) return message.channel.send("No te puedes banear a ti mismo!")

    if(!Banreason) return message.channel.send("Debes escribir una razon!")

    message.channel.send("Usuario baneado correctamente")
//if(message.deletable) message.delete()
    user.ban({ reason:Banreason})
    }
}