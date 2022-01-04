const Discord = require ('discord.js');

module.exports = {
    name: "shop",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()

        .setTitle('Tienda de objetos de NetCat:')
        .setDescription('Hola! Bienvenid@ a la tienda de objetos de NetCat, para comprar un objeto, use el comando `nc/buy`.\nAquí tienes un ejemplo: nc/buy zapatillas-de-deporte')
        .addField('Objetos disponibles:', '+ __zapatillas de deporte__  - 500:coin:\n+ __pienso para gatos__  - 1000:coin:\n+ __coche de carreras__  - 5000:coin:')
        .setColor("BLUE")
        .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

        message.channel.send(embed);
    }
}