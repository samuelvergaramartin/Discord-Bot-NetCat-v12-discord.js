const Discord = require ('discord.js');

module.exports = {
    name: "historia-nazi",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const historia = new Discord.MessageEmbed()
        .setTitle(`Aquí tienes ${message.author.username}`)
        .setDescription(`El nacionalsocialismo (en alemán, Nationalsozialismus), comúnmente acortado a nazismo, es la ideología del régimen que gobernó Alemania de 1933 a 1945 con la llegada al poder del Partido Nacionalsocialista Obrero Alemán de Adolf Hitler (NSDAP). Hitler instituyó una dictadura, el autoproclamado Tercer Reich`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(historia);
    }
}