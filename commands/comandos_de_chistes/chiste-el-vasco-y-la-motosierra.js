const Discord = require ('discord.js');

module.exports = {
    name: "chiste-el-vasco-y-la-motosierra",
    run: async (client, message, args) => {
        message.channel.send(`Un vasco entra en una tienda con una motosierra eléctrica:
  - Oiga, usted me dijo que esta motosierra que he comprado cortaba cien árboles a la hora. La he probado, y como mucho corta cincuenta.
  - Pues no se preocupe que ahora la probamos...
    Arranca la motosierra el dependiente, y al oírla dice Patxi:
  - Aibalaostia tú, ¿y ese ruido?`);
    }
}