const Discord = require ('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero')
const banco = new db.crearDB('banco')

module.exports = {
    name: "bal",
    run: async (client, message, args) => {
    const user = message.author || message.mentions.members.first()

  if(!dinero.tiene(`${user.id}`)){
    dinero.establecer(`${user.id}`, 0)
  }
  
  if(!banco.tiene(`${user.id}`)){
    banco.establecer(`${user.id}`, 0)
  }

  const cantidad = await dinero.obtener(`${user.id}`)

  const cantidad2 = await banco.obtener(`${user.id}`)


  const embed1 = new Discord.MessageEmbed()

    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setDescription(`:money_with_wings:**Global**`)
    .addField(`En tu cartera:`, `${cantidad}:coin:`)
    .addField(`En el banco:`, `${cantidad2}:coin:`)
    .addField(`En total:`, `${cantidad + cantidad2}:coin:`)
    .setColor("RANDOM")
    .setFooter(`Sistema de economía NetCat`);
//if(message.deletable) message.delete()
    message.channel.send(embed1)

    return;
    }
}