const Discord = require ('discord.js');

module.exports = {
    name: "resumen-descubrimiento-y-conquista-de-américa",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const historia = new Discord.MessageEmbed()
        .setTitle(`Aquí tienes ${message.author.username}`)
        .setDescription(`Los Reyes Católicos financiaron el viaje de Cristóbal Colón hacia el oeste con el fin de encontrar una ruta comercial hacia la India, gracias a esto se descubrió América involuntariamente, empezaron a conquistar, primero la zona de las Antillas, luego el Imperio azteca, que pasó a conocerse como Nueva España (hoy México), después Pizarro conquistó el Imperio inca, que pasó a conocerse como Perú, también, a los años, se conquistó Filipinas en Asia. 

 

Desde 1492 los castellanos fueron ampliando su control en las Antillas, mientras que los portugueses se instalan en la costa de Brasil desde 1500 

 

Al mando de Hernán Cortés conquistaron el Imperio Azteca (1519-21) situado en el actual México, que se convirtió en el Virreinato de Nueva España desde 1535. 

 

De 1519 a 1522 la expedición de Magallanes y Elcano dio la vuelta al mundo por 1ª vez. Desde ese viaje se inició la conquista de Filipinas.



El Imperio Inca fue conquistado por Pizarro (1532-33) que se convirtió en el Virreinato del Perú en 1542. 

 

Desde Perú, México y la costa brasileña, se fueron extendiendo hacia las zonas próxima`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(historia);
    }
}