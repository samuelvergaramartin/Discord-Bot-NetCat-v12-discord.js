const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require (`discord.js`);

module.exports = {
    name: "kick",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`No tienes el permiso "KICK_MEMBERS"`)

    let user = message.mentions.members.first();
  
    let Kickreason = args.join(' ').slice(1);
    
    
   if(!message.member.hasPermission("KICK_MEMBERS"))return message.channel.send("No tienes permisos suficientes!")
    
    if(!user) return message.channel.send("Debes mencionar a alguien!")

    if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes expulsar a una persona de un rol igual o superior al tuyo")

    if(user === message.author) return message.channel.send("No te puedes expulsar a ti mismo!")

    if(!Kickreason) return message.channel.send("Debes escribir una razon!")

    message.channel.send("Usuario expulsado correctamente")
//if(message.deletable) message.delete()
    user.kick({ reason:Kickreason})
    }
}