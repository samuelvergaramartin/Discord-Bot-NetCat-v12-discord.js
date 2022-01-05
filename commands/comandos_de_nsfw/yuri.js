const Discord = require ('discord.js');

module.exports = {
    name: "yuri",
    run: async (client, message, args) => {
        const uno = `https://i.pinimg.com/474x/fb/6e/d5/fb6ed5be0eedd0f07b6612ce9b0c6020.jpg`
  const dos = `https://i.pinimg.com/474x/52/53/8b/52538bddf981e3895d6c9a606b4c2c34.jpg`
  const tres = `https://i.pinimg.com/474x/3d/76/f0/3d76f0e02d0504dcf1d24a2bca257184.jpg`
  const cuatro = `https://i.pinimg.com/474x/fa/b8/3e/fab83ee658f208dc0f42609759850008.jpg`
  const cinco = `https://i.pinimg.com/474x/2c/98/fb/2c98fb14f26eb5ebb208a5efcc00d9be.jpg`

  const a = [uno, dos, tres, cuatro, cinco]
  let netcat = a[Math.floor(Math.random() * a.length)]
const embed = new Discord.MessageEmbed()
        .setTitle('Yuri:')
        .setDescription(":underage:")
        .setImage(netcat)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed);
    }
}