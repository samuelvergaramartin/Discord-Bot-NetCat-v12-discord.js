const Discord = require ('discord.js');

module.exports = {
    name: "futa",
    run: async (client, message, args) => {
        const uno = `https://images-ext-2.discordapp.net/external/nFeOnzPlS0FzWnPaPHbwhwnw2XnQp8DCyA1kV_twDKc/http/img-l3.xvideos-cdn.com/videos/thumbs169poster/86/57/6d/86576d79c042c97199316bfbb0fd79e0/86576d79c042c97199316bfbb0fd79e0.30.jpg?width=600&height=338`
  const dos = `https://media.discordapp.net/attachments/758041855362465954/791135055228829746/20201222_120324.jpg?width=327&height=450`
  const tres = `https://cdn.discordapp.com/attachments/748975075042001045/761762067484508240/images.jpeg`
  const cuatro = `https://media.discordapp.net/attachments/758041855362465954/763083329103986708/image0_210.jpg?width=315&height=450`
  const cinco = `https://media.discordapp.net/attachments/758041855362465954/763426283534549012/wpvm01cu5a55e6ruatsa8sze13mey1ekp9jz0sqr6yooavn6wa.jpg?width=436&height=450`
  const seis = `https://media.discordapp.net/attachments/758041855362465954/783279876613472256/IMG_20201201_022921.jpg?width=338&height=450`
  
  const a = [uno, dos, tres, cuatro, cinco, seis]
  let netcat = a[Math.floor(Math.random() * a.length)]
const embed = new Discord.MessageEmbed()
        .setTitle('Futanari:')
        .setDescription(":underage:")
        .setImage(netcat)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed);
    }
}