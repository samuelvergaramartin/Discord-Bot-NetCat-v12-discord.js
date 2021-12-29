const Discord = require ('discord.js');

module.exports = {
    name: "buenos-días",
    run: async (client, message, args) => {
        message.channel.send('Buenos días, has dormido bien??')
    }
}