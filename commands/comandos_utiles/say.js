const Discord = require ('discord.js');

module.exports = {
    name: "say",
    run: async (client, message, args) => {
        
  if(message.deletable) message.delete()
  if (args.join(" ").length < 1) return message.channel.send("Miaw debes decir un mensaje");

  let permisos = message.channel.permissionsFor(message.member);

  message.channel.send(args.join(" "), {
  disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"
  });
    }
}