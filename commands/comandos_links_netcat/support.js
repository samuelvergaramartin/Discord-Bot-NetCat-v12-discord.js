const Discord = require ('discord.js');

module.exports = {
    name: "support",
    run: async (client, message, args) => {

    const support = new Discord.MessageEmbed()
        .setTitle('Server support: https://discord.gg/3Tfwk8QdmJ ')
        .setDescription('Este es mi servidor de Discord oficial~ [haz click en el link de aquí arriba ⬆️]​')
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://images-ext-1.discordapp.net/external/ZXUqPw7g0BVqD-hI7x-6DD3br0lLVQDkklYuxsNx_q0/https/cdn.discordapp.com/avatars/787735373304299581/163f7e5c8ae413578ce17fb3596bedc2.webp')
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(support); 
    }
}