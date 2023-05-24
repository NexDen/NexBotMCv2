const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")
const client = global.client;
const {server_ip} = require("../config.json")

async function bakim(interaction){
    if (!interaction.member.permissions.has("ADMINISTRATOR")) 
    {
        var embed = new EmbedBuilder().
            setTitle("İşlem Başarısız")
            .setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
            .setColor("#1f1e33")
            .setFooter({text:"Raies"})
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
    .setTitle('SUNUCU BAKIMDA')
    .setColor("#1f1e33")
    .setDescription("**Sunucu bakımdayken yapılan girişlerde oluşan item vb kayıplardan siz sorumlusunuz!**")
    .addFields({
        name:"Sunucu IP'si",
        value: server_ip
    })
    .setImage(`https://cdn.discordapp.com/attachments/959490900520742972/1109915680830148679/standard_1.gif`)
    .setFooter({text:"Raies"})
    interaction.channel.send({
        embeds : [embed],
    })
    interaction.channel.send("@everyone").then(m => m.delete({timeout: 5000})).catch(err => {})
    
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("bakim")
        .setDescription("Sunucunun Bakımda Olduğunu Sunucuya Yayar.")
        .setDefaultMemberPermissions("8"),
    async execute(interaction){
        bakim(interaction)
    }
}