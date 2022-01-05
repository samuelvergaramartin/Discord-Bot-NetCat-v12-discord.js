const Discord = require ('discord.js');

module.exports = {
    name: "resumen-consecuencias-de-la-conquista-de-américa",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const historia = new Discord.MessageEmbed()
        .setTitle(`Aquí tienes ${message.author.username}`)
        .setDescription(`Por la conquista, hubo nuevas rutas comerciales por el atlántico, por las que llegaron metales preciosos a Europa. La riqueza de Latino América fue malgastada.
Hubo una diferencia social en cuanto a su color y procedencia.
Se crearon dos grandes imperios: El portugués, en Brasil y en enclaves costeros de África y Asia y, El español, en el centro y sur de América
Se sustituyeron las culturas y lenguas precolombinas, por las lenguas europeas y el cristianismo
Las exploraciones permitieron ampliar los conocimientos geográficos, biológicos y antropológicos`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(historia);
    }
}