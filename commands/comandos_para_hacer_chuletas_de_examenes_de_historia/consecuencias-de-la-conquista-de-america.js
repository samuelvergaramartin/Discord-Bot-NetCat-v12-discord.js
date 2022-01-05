const Discord = require ('discord.js');

module.exports = {
    name: "consecuencias-de-la-conquista-de-américa",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const historia = new Discord.MessageEmbed()
        .setTitle(`Aquí tienes ${message.author.username}`)
        .setDescription(`1.	Económicas. Nuevas rutas comerciales por el atlántico, por las que llegaron metales preciosos a Europa. Como España usaba todo sus recursos en mantener ejércitos, el oro y la plata acabaron en manos de banqueros y mercenarios por toda Europa. El aumento de gran cantidad de metales preciosos en circulación tuvo como consecuencia el aumento de los precios [1] . Como la riqueza de América fue malgastada por los monarcas hispánicos financiando sus continuas guerras, sus beneficios apenas llegaron al pueblo, al contrario, el aumento de los precios degradó su nivel de vida. 
2. Sociales. Diferenciación social según su origen étnico.
3. Blancos de origen europeo. 
4. Los españoles
5.	Los criollos, descendientes de españoles
6.	Mestizos, mezcla de europeos y amerindios
7.	Amerindios o indígenas
8.	Mulatos, mezcla de blancos y negros
9.	Negros de origen africano. 
10.	Políticas. Tras las conquistas se crearon dos poderosos imperios coloniales: el portugués en Brasil y en enclaves costeros de África y Asia y el español en el centro y sur de América. Francia, Inglaterra y Holanda se enfrentaron a los españoles por el control de las riquezas coloniales y colonizaron América del Norte (a partir del viaje de Juan Caboto en 1497 para Inglaterra), y puntos del Caribe, África y Asia. 
11. Cultuales. Perdida de la mayoría de las culturas y las lenguas precolombinas, se sustituyeron por las lenguas europeas y el cristianismo.  
12. Científicas. Las exploraciones permitieron ampliar los conocimientos geográficos, biológicos y antropológicos.  Además para mejorar el comercio trasatlántico, hubo continuos avances técnico en la navegación`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(historia);
    }
}