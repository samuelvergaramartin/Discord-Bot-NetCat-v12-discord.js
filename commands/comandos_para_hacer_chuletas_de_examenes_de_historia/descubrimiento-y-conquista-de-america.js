const Discord = require ('discord.js');

module.exports = {
    name: "descubrimiento-y-conquista-de-américa",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const historia = new Discord.MessageEmbed()
        .setTitle(`Aquí tienes ${message.author.username}`)
        .setDescription(`Los Reyes Católicos financiaron el viaje de Cristóbal Colón hacia el oeste con el fin de encontrar una ruta comercial hacia la India. De esta forma se descubrió América involuntariamente. Durante las décadas siguientes fueron conquistando territorios: primero la zona de las Antillas, luego Hernán Cortés conquistó el Imperio azteca, que pasó a conocerse como Nueva España (hoy México), después Pizarro conquistó el Imperio inca, que pasó a conocerse como Perú. Después del viaje alrededor del mundo que empezó Magallanes y terminó Elcano, también se conquistó Filipinas en Asia. Por otra parte, Portugal se queda con Brasil y Francia e Inglaterra con zonas costeras de Norteamérica.  
        
         
Por su parte los Reyes Católicos en España también financiaron viajes de exploración con el mismo objetivo: 
        
Cristóbal Colón, marinero de origen italiano, buscó otra ruta hacia la India por el oeste y llegó a las Antillas en América en 1492.  Aunque en el siglo X los nórdicos o vikingos habían llegado a Groenlandia y Norteamérica desde Islandia, no vieron que era un continente y en el siglo XV se abandonaron esas tierras por el enfriamiento climático y la hostilidad de los habitantes autóctonos.  
        
Magallanes empezó en 1519 la primera vuelta al mundo, descubrió el estrecho que lleva su nombre, pero como murió en Filipinas el viaje de vuelta a Castilla lo terminó el español Juan Sebastián Elcano en 1521. Como consecuencia de ese viaje los españoles empezaron la conquista de Filipinas, archipiélago asiático próximo a China.  
        
Los españoles intentaron llegar a la India dando la vuelta a la tierra (por el oeste) y en 1492 Cristóbal Colón descubrió América creyendo haber llegado a la India. Se encontraron con civilizaciones precolombinas (anteriores a la llegada de Colón) que fueron sometidas, como los mayas, los aztecas o los incas. El control español en América siguió estas fases:



Desde 1492 los castellanos fueron ampliando su control en las Antillas, mientras que los portugueses se instalan en la costa de Brasil desde 1500. 
        
Al mando de Hernán Cortés conquistaron el Imperio Azteca (1519-21) situado en el actual México, que se convirtió en el Virreinato de Nueva España desde 1535. 
        
De 1519 a 1522 la expedición de Magallanes y Elcano dio la vuelta al mundo por 1ª vez. Desde ese viaje se inició la conquista de Filipinas. 
        
El Imperio Inca fue conquistado por Pizarro (1532-33) que se convirtió en el Virreinato del Perú en 1542 
        
Desde Perú, México y la costa brasileña, se fueron extendiendo hacia las zonas próximas.  
        
         
        
Desde Perú hacia el norte conquistando Tierra Firme (lo que hoy conocemos como Colombia, Venezuela y zona del Amazonas (Benalcázar, Orellana) y hacia el sur, llegando a lo que hoy conocemos como Chile (Pedro de Valdivia y Almagro) y Río de la Plata, lo que hoy conocemos como Argentina (Cabot y Mendoza).  
        
Desde México se extendieron hacia el norte (California) y hacia el sur (Centroamérica) 
        
Desde la costa de Brasil los portugueses fueron adentrándose en el interior.  
        
Por debajo de los virreyes estaban los gobernadores y para la justicia se crearon audiencias.

Para evitar conflictos entre Castilla y Portugal, en 1494 ambos se reparten el mundo en dos zonas de influencia con el Tratado de Tordesillas.  Fruto de este acuerdo los portugueses se asientan en las zonas costeras de lo que hoy conocemos como Brasil. Por otra parte, franceses e ingleses se instalan en las zonas costeras del Norteamérica: los franceses en Terranova y Quebec (hoy Canadá) y los ingleses en la bahía de Hudson y en la costa este del actual Estados Unidos`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(historia);
    }
}