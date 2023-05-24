var { Discord, Client,SlashCommandBuilder ,Collection, GatewayIntentBits ,Intents, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed, EmbedBuilder } = require("discord.js")

var { server_ip } = require("../config.json")

async function ip(interaction){
    var embed = new EmbedBuilder()
                .addFields(
                    {
                        name: "IP",
                        value: server_ip,
                        inline: true
                    },
                )
                .setImage("https://cdn.discordapp.com/attachments/959490900520742972/1109915680830148679/standard_1.gif")
    await interaction.reply({embeds: [embed]})
}

module.exports = {
    data: new SlashCommandBuilder()
            .setName("ip")
            .setDescription("Sunucunun IP'sini ve diğer bilgileri verir."),
    async execute(interaction){
        ip(interaction)
    }
}