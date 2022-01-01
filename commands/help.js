const Discord = require ('discord.js');
const { MessageMenuOption, MessageMenu } = require ("discord-buttons")

module.exports = {
    name: "help",
    run: async (client, message, args) => {

  const embed = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de conversación:', 'nc/hola\nnc/bien-y-tu\nnc/denada\nnc/tengo-sueño\nnc/me-voy\nnc/buenas-noches\nnc/buenos-días\nnc/cómo-dormiste')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed2 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de chistes:', 'nc/chiste-0-positivo\nnc/chiste-córdoba-y-la-luna\nnc/chiste-el-de-la-playa\nnc/chiste-el-vasco-y-la-motosierra\nnc/chiste-general-y-soldado\nnc/chiste-rosa')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed3 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de diversión:', 'nc/corrida\nnc/f-por\nnc/f\nnc/furros\nnc/no-corrida\nnc/no-furros\nnc/otro\nnc/paja\nnc/sí-corrida\nnc/sí-furros\nnc/tragar')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed4 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de Gifs:', 'nc/gif-f\nnc/gif-monokuma\nnc/gif-netcat-avergonzada\nnc/gif-netcat-bailando\nnc/gif-netcat-baile\nnc/gif-netcat-duele-orejas\nnc/gif-netcat-enfado\nnc/gif-netcat-guitarra\nnc/gif-netcat-manzana\nnc/gif-netcat-muerde-dedo\nnc/gif-netcat-mueve-cola\nnc/gif-netcat-nya\nnc/gif-netcat-sad\nnc/gif-netcat-sonrojada\nnc/gif-netcat-sonroje')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed5 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de NSFW:', '⚠️ Módulo en mantenimiento, disculpen las molestias.⚠️')
  //.addField('Comandos de conversación:', 'np!hola\nnp!bien-y-tu\nnp!denada\nnp!tengo-sueño\nnp!me-voy\nnp!buenas-noches\nnp!buenos-días\nnp!cómo-dormiste')
  .setColor('ECFF00')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed6 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de reacción:', 'nc/angry\nnc/blush\nnc/bored\nnc/cure\nnc/eat\nnc/feed\nnc/hug\nnc/idoly\nnc/kill\nnc/kiss\nnc/lick\nnc/pat\nnc/punch\nnc/run\nnc/scared\nnc/sonroje\nnc/spank\nnc/ship')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed7 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos útiles:', 'nc/avatar\nnc/bomba-atómica\nnc/clear\nnc/md\nnc/say\nnc/serverinfo\nnc/exit')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed8 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos para hacer chuletas de exámenes de historia:', '⚠️ Módulo en mantenimiento, disculpen las molestias.⚠️')
  //.addField('Comandos de conversación:', 'np!hola\nnp!bien-y-tu\nnp!denada\nnp!tengo-sueño\nnp!me-voy\nnp!buenas-noches\nnp!buenos-días\nnp!cómo-dormiste')
  .setColor('ECFF00')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed9 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de música:', 'nc/music/help')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed10 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de configuración:', 'nc/delete-channel\nnc/setprefix')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed11 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de economía:', 'nc/bal\nnc/dep\nnc/with\nnc/work')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed12 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de moderación:', '⚠️ Módulo en mantenimiento, disculpen las molestias.⚠️')
  //.addField('Comandos de conversación:', 'np!hola\nnp!bien-y-tu\nnp!denada\nnp!tengo-sueño\nnp!me-voy\nnp!buenas-noches\nnp!buenos-días\nnp!cómo-dormiste')
  .setColor('ECFF00')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed13 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos de juegos:', 'nc/name-personaje\nnc/name-personaje-hombre\nnc/name-personaje-mujer\nnc/roll')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

  const embed14 = new Discord.MessageEmbed()

  .setTitle('📖Comandos de NetCat📖:')
  .addField('Comandos links NetCat:', 'nc/invite\nnc/support')
  .setColor('ff00d9')
  .setTimestamp()
  .setFooter(`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))


  const embedprincipal = new Discord.MessageEmbed()

  .setTitle("📖Comandos de NetCat📖: Menú de módulos")
  .setDescription("Para ver los comandos de cualquier módulo seleccione el módulo que desee ver en la barra de menú situada abajo de este mensaje.")
  .addField('__📜Listado de módulos📜:__', ' -Comandos de conversación 🟢\n-Comandos de chistes 🟢\n-Comandos de diversión 🟢\n-Comandos de Gifs 🟢\n-Comandos de NSFW 🔴\n-Comandos de reacción 🟢\n-Comandos útiles 🟢\n-Comandos para hacer chuletas de exámenes de historia 🔴\n-Comandos de música 🟢\n-Comandos de configuración ​🟢\n-Comandos de economía 🟢\n-Comandos de moderación 🔴\n-Comandos de juegos 🟢\n-Comandos links NetCat 🟢')
  .addField('Links de NetCat:', '[ link de invitación](https://discord.com/oauth2/authorize?client_id=900470345809674260&scope=bot&permissions=8) y [servidor oficial de NetCat](https://discord.gg/3Tfwk8QdmJ )')
  .setColor('ff00d9')

  let opcion1 = new MessageMenuOption()

  .setEmoji("💬")
  .setValue("1")
  .setLabel("Comandos de conversación")
  .setDescription("Hacer click aquí para ver: Comandos de conversación")

  let opcion2 = new MessageMenuOption()

  .setEmoji("🤡")
  .setValue("2")
  .setLabel("Comandos de chistes")
  .setDescription("Hacer click aquí para ver: Comandos de chistes")

  let opcion3 = new MessageMenuOption()

  .setEmoji("😹") 
  .setValue("3")
  .setLabel("Comandos de diversión")
  .setDescription("Hacer click aquí para ver: Comandos de diversión")

  let opcion4 = new MessageMenuOption()

  .setEmoji("🎞️")
  .setValue("4")
  .setLabel("Comandos de Gifs")
  .setDescription("Hacer click aquí para ver: Comandos de Gifs")

  let opcion5 = new MessageMenuOption()

  .setEmoji("🙈")
  .setValue("5")
  .setLabel("Comandos de NSFW")
  .setDescription("Hacer click aquí para ver: Comandos de NSFW")

  let opcion6 = new MessageMenuOption()

  .setEmoji("🙀")
  .setValue("6")
  .setLabel("Comandos de reacción")
  .setDescription("Hacer click aquí para ver: Comandos de reacción")

  let opcion7 = new MessageMenuOption()

  .setEmoji("⚒️")
  .setValue("7")
  .setLabel("Comandos útiles")
  .setDescription("Hacer click aquí para ver: Comandos útiles")

  let opcion8 = new MessageMenuOption()

  .setEmoji("👀")
  .setValue("8")
  .setLabel("Comandos para hacer chuletas de exámenes de historia")
  .setDescription("Hacer click aquí para ver: Comandos para hacer chuletas de exámenes de historia")

  let opcion9 = new MessageMenuOption()

  .setEmoji("🎵")
  .setValue("9")
  .setLabel("Comandos de música")
  .setDescription("Hacer click aquí para ver: Comandos de música")

  let opcion10 = new MessageMenuOption()

  .setEmoji("⚙️")
  .setValue("10")
  .setLabel("Comandos de configuración")
  .setDescription("Hacer click aquí para ver: Comandos de configuración")

  let opcion11 = new MessageMenuOption()

  .setEmoji("💰")
  .setValue("11")
  .setLabel("Comandos de economía")
  .setDescription("Hacer click aquí para ver: Comandos de economía")

  let opcion12 = new MessageMenuOption()

  .setEmoji("💂‍♂️")
  .setValue("12")
  .setLabel("Comandos de moderación")
  .setDescription("Hacer click aquí para ver: Comandos de moderación")

  let opcion13 = new MessageMenuOption()

  .setEmoji("🕹️")
  .setValue("13")
  .setLabel("Comandos de juegos")
  .setDescription("Hacer click aquí para ver: Comandos de juegos")

  let opcion14 = new MessageMenuOption()

  .setEmoji("🖇️")
  .setValue("14")
  .setLabel("Comandos links NetCat")
  .setDescription("Hacer click aquí para ver: Comandos links NetCat")

  let opcion15 = new MessageMenuOption()

  .setEmoji("◀️")
  .setValue("15")
  .setLabel("Menú principal")
  .setDescription("Regresa al menú principal")

  let menu = new MessageMenu()

  .setID("98")
  .setPlaceholder("Haz click aquí para desplegar el listado de módulos")
  .addOption(opcion1)
  .addOption(opcion2)
  .addOption(opcion3)
  .addOption(opcion4)
  .addOption(opcion5)
  .addOption(opcion6)
  .addOption(opcion7)
  .addOption(opcion8)
  .addOption(opcion9)
  .addOption(opcion10)
  .addOption(opcion11)
  .addOption(opcion12)
  .addOption(opcion13)
  .addOption(opcion14)
  .addOption(opcion15)
  
  const msg = await message.channel.send(embedprincipal, menu)

  const filter = (menu) => menu.clicker.id === message.author.id;
  const collector = msg.createMenuCollector(filter, { time: 3600000 })

  collector.on('collect', async (menu) => {
    if(menu.values[0] === '1') {
        menu.reply.defer()
        return menu.message.edit(embed)
    }
    if(menu.values[0] === '2') {
        menu.reply.defer()
        return menu.message.edit(embed2)
    }
    if(menu.values[0] === '3') {
        menu.reply.defer()
        return menu.message.edit(embed3)
    }
    if(menu.values[0] === '4') {
        menu.reply.defer()
        return menu.message.edit(embed4)
    }
    if(menu.values[0] === '5') {
        menu.reply.defer()
        return menu.message.edit(embed5)
    }
    if(menu.values[0] === '6') {
        menu.reply.defer()
        return menu.message.edit(embed6)
    }
    if(menu.values[0] === '7') {
        menu.reply.defer()
        return menu.message.edit(embed7)
    }
    if(menu.values[0] === '8') {
        menu.reply.defer()
        return menu.message.edit(embed8)
    }
    if(menu.values[0] === '9') {
        menu.reply.defer()
        return menu.message.edit(embed9)
    }
    if(menu.values[0] === '10') {
        menu.reply.defer()
        return menu.message.edit(embed10)
    }
    if(menu.values[0] === '11') {
        menu.reply.defer()
        return menu.message.edit(embed11)
    }
    if(menu.values[0] === '12') {
        menu.reply.defer()
        return menu.message.edit(embed12)
    }
    if(menu.values[0] === '13') {
        menu.reply.defer()
        return menu.message.edit(embed13)
    }
    if(menu.values[0] === '14') {
        menu.reply.defer()
        return menu.message.edit(embed14)
    }
    if(menu.values[0] === '15') {
        menu.reply.defer()
        return menu.message.edit(embedprincipal)
    }
  })

}

}