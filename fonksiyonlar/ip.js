var { Discord, Client,SlashCommandBuilder ,Collection, GatewayIntentBits ,Intents, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed, EmbedBuilder } = require("discord.js")

const { embed_footer, embed_gif, embed_color, server_ip } = require("../embeds.json")

async function ip(interaction){
    var embed = new EmbedBuilder()
                .addFields(
                    {
                        name: "SUNUCU IP'Sİ",
                        value: server_ip,
                        inline: true
                    },
                )
                .setImage(embed_gif)
                .setFooter({text:embed_footer})

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