const Discord = require ('discord.js');

module.exports = {
    name: "test",
    run: async (client, message, args) => {
        message.channel.send('Todo en orden')
        

       
       }
}
 /*const prueba = new Discord.MessageEmbed()
        .setTitle("Prueba de un nuevo tipo de diseño de mensaje embed")
        .setDescription("Aquí abajo vendrán los cajones")
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 1\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 2\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 3\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 4\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 5\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 6\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 7\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 9\n\`\`\``, true)
        .addField(`Prueba`, `\`\`\`diff\n- Cajón número 9\n\`\`\``, true)
        .setColor("RANDOM")

        message.channel.send(prueba);*/