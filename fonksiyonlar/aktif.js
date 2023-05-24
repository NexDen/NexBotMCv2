const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")
const client = global.client;
const {server_ip} = require("../config.json")
const { embed_footer, embed_gif, embed_color } = require("../embeds.json")

async function aktif(interaction){
    if (!interaction.member.permissions.has("ADMINISTRATOR")) 
    {
        var embed = new EmbedBuilder().
            setTitle("İşlem Başarısız")
            .setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
            .setColor("#1f1e33")
            .setFooter({text:embed_footer})
        return interaction.reply(
            {
                embeds: [embed],
                ephemeral: true,
            })
            // .then(
            //     m => m.delete({timeout: 5000})
            //     ).catch(err => {});
    }
    var embed = new EmbedBuilder()
    .setTitle('SUNUCU AKTİF')
    .setColor(embed_color)
    .addFields({
        name:"Sunucu IP'si",
        value: server_ip
    })
    .setImage(embed_gif)
    .setFooter({text:embed_footer})
    interaction.channel.send({
        embeds : [embed],
    })
    interaction.channel.send("@everyone").then(m => m.delete({timeout: 5000})).catch(err => {})
    
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("aktif")
        .setDescription("Sunucunun Aktif Olduğunu Sunucuya Yayar.")
        .setDefaultMemberPermissions("8"),
    async execute(interaction){
        aktif(interaction)
    }
}