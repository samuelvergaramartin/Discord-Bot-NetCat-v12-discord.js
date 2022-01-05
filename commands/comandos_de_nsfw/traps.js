const Discord = require ('discord.js');

module.exports = {
    name: "traps",
    run: async (client, message, args) => {
        const uno = `https://images-ext-1.discordapp.net/external/qz-6kGgiMV2PwFVc6ulKjTVLljr_SA2rEbYs7wG_5uE/https/i.pinimg.com/474x/7e/83/67/7e8367cc85ce38c156e8aef6c0befd48.jpg?width=402&height=473`
  const dos = `https://i.pinimg.com/474x/37/66/f1/3766f1f9f028a8775fbad1eda2b659a2.jpg`
  const tres = `https://i.pinimg.com/474x/a9/6d/f6/a96df689a7d7986f341f9251d3ebb430.jpg`
  const cuatro = `https://i.pinimg.com/474x/1f/db/3e/1fdb3e69af99e15ca5b0fc63156b5a63.jpg`
  const cinco = `https://i.pinimg.com/474x/39/57/9d/39579d8aa23e23ed9dab19d1cd0d8a24.jpg`
  const seis = `https://i.pinimg.com/474x/7b/03/eb/7b03eb9d683a89cf1f7fb9ead987c80b.jpg`

  const a = [uno, dos, tres, cuatro, cinco, seis]
  let netcat = a[Math.floor(Math.random() * a.length)]
const embed = new Discord.MessageEmbed()
        .setTitle('Trapitos:')
        .setDescription(":underage:")
        .setImage(netcat)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed);
    }
}