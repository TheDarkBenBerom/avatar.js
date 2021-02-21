const Discord = require('discord.js');
module.exports = {
    name: "avatar",
    aliases: ["avatar1","avatar2"],
    description: "Pp atar",
    usage: "avatar",
    ownerOnly: false,

    run: async (message,args,client) => {
let kullanıcı = message.mentions.users.first() || message.author;
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('**İşte karizmatik avatarın**')
      .setURL(`${kullanıcı.avatarURL({ format: "png" , size: 1024})}`)
      .setImage(` ${kullanıcı.avatarURL({ format: "png" , size: 1024})} `)
      .setFooter('TheDark|TheDarkBot')
       message.channel.send(embed)


    }
}
// NOTE: Kod TheDarkBenBerom#9163 ve 'Vu4ll#0586  birlikte yazılmıştır.
// NOTE: Kod tamamen biz yazdık.
// NOTE: İyi Kulanımlar.
// NOTE: v12 kodur
// NOTE: Modüler : discord.js
// avatar.js diye bir dosya açıp içine atın 
