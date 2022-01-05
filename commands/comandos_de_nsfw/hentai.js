const Discord = require ('discord.js');

module.exports = {
    name: "hentai",
    run: async (client, message, args) => {
        const uno = `https://images-ext-1.discordapp.net/external/k9LK9at2vo54jlkrbTuVrqEGaFe1yB6KTc50b0pxPyU/https/wetgif.com/wp-content/uploads/hentai-9.gif?width=722&height=406`
  const dos = `https://media.discordapp.net/attachments/791270423630315521/815300902763888660/NSFW.gif`
  const tres = `https://media.discordapp.net/attachments/791270423630315521/815300286000005130/boobjob.gif`
  const cuatro = `https://images-ext-1.discordapp.net/external/e5L68CXPh7lFNhL-3C6D9AUYW5CtkcJ3srf3q3B_NDA/https/thumb-p8.xhcdn.com/a/qLjV23tChdUn9mXZjHWlEw/000/122/173/698_450.gif?width=400&height=300`
  const cinco = `https://images-ext-2.discordapp.net/external/xYvBIfPdyukeVxSOM8xd1p2VWar2VcXkuj9asHehFPU/https/i0.wp.com/thehentaiworld.com/wp-content/uploads/2011/01/Gorgeous-Milf-Sucking-Cock-Hentai-GIF-TheHentaiWorld-11.gif?width=400&height=300`
  
  const a = [uno, dos, tres, cuatro, cinco]
  let netcat = a[Math.floor(Math.random() * a.length)]
const embed = new Discord.MessageEmbed()
        .setTitle('Hentai:')
        .setDescription(":underage:")
        .setImage(netcat)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed);
    }
}