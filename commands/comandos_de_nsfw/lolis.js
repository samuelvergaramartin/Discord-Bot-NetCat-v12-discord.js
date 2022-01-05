const Discord = require ('discord.js');

module.exports = {
    name: "lolis",
    run: async (client, message, args) => {
        const uno = `https://i.pinimg.com/474x/ad/10/d2/ad10d24dfc5ec07956e421f641a510c7.jpg`
  const dos = `https://i.pinimg.com/474x/48/f7/7a/48f77a2b40b1a9edb93d298e359a5526.jpg`
  const tres = `https://i.pinimg.com/474x/c8/4e/ce/c84ecea40eb254f502bbb27d0d3dd25b.jpg`
  const cuatro = `https://i.pinimg.com/474x/38/5a/ea/385aeac1fb6c3362fa14a9c235853aad.jpg`
  const cinco = `https://i.pinimg.com/474x/e9/d5/fa/e9d5fa2f3448ae46034fdcec6b490a13.jpg`
  const seis = `https://i.pinimg.com/474x/97/5c/dd/975cdd87fe34a5832f07b8e17d5edd1d.jpg`

  const a = [uno, dos, tres, cuatro, cinco, seis]
  let netcat = a[Math.floor(Math.random() * a.length)]
const embed = new Discord.MessageEmbed()
        .setTitle('Lolis:')
        .setDescription(":underage:")
        .setImage(netcat)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed);
    }
}