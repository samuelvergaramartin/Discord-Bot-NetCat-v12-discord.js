const Discord = require ('discord.js');

module.exports = {
    name: "chiste-el-de-la-playa",
    run: async (client, message, args) => {
        message.channel.send(`Resulta que hay un tipo en la playa que va saludando a todo el mundo. Uno que está por allí le pregunta:
  - Oye, ¿tú cómo lo haces para llevarte bien con todo el mundo?.
Y el otro le contesta:
  - Mi truco es no discutir nunca.
  - Pero eso sólo no será, ¿no?
  - Pues no será…`);
    }
}