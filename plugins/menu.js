const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/xz3DVT3/mrtechbot.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `┌─────❲ *MRTECH-BOT𖤍❳* 
┊
└─────────────────✪---------𖤍

        ╔╗╔╗╔══╗╔══╗
        ║╚╝║║╔╗║╚║║╝
        ║╔╗║║╠╣║╔║║╗
        ╚╝╚╝╚╝╚╝╚══╝

┌─────❲ 📲*ᴅᴏᴡɴʟᴏᴀᴅ_ᴍᴇɴᴜ* ❳
┊𖣠.ᴠɪᴅᴇᴏ <ʟɪɴᴋ> [ᴠɪᴅᴇᴏ ᴅɪᴡɴʟᴏᴀᴅ ᴄʜᴇʏʏᴀᴀɴ]
┊𖣠.sᴏɴɢ <ɴᴀᴍᴇ> [sᴏɴɢ ᴋɪᴛᴛᴀɴ]
┊𖣠.ᴠɪɴsᴛᴀ <Lɪɴᴋ> [ɪɴsᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴄʜᴇʏʏᴀᴀɴ]
┊𖣠.ɪᴍɢ <ɴᴀᴍᴇ> [ɢᴏᴏɢɪʟɪʟ ɪᴍᴀɢᴇ sᴇᴀʀᴄʜ ᴄʜᴇʏʏᴀɴ]
┊𖣠.ᴀᴘᴋ ᴍᴏᴅᴇ
┊𖣠.ᴡᴀʟʟᴘᴀᴘᴇʀ [ᴡᴀʟʟᴘᴀᴘᴇʀ ᴋɪᴛᴛᴀɴ]
┊𖣠.ɪɴsᴛᴀ <ʟɪɴᴋ>
┊𖣠.ᴘɪɴᴛᴀ <ʟɪɴᴋ>
└─────────────────✪----------𖤍

┌─────❲ 😅*ғᴜɴ ᴍᴇɴᴜ* ❳
┊𖣠.ᴊᴏᴋᴇ [ᴛʜᴀᴍᴀsʜᴀ]
┊𖣠.ʙᴏᴛ [ʙᴏᴛɪɴᴏᴅ sᴀᴍsᴀᴀʀɪᴋᴋᴀɴ]
└─────────────────✪----------𖤍

┌─────❲ 🪀*ɢʀᴏᴜᴘ ᴍᴇɴᴜ* ❳
┊𖣠.ᴀᴅᴅ <ᴜsᴇʀ>
┊𖣠.ʙᴀɴ <Usᴇʀ>[ʀᴇᴍᴏᴠᴇ ᴄʜᴇʏʏᴀɴ]
┊𖣠.ᴡᴇʟᴄᴏᴍᴇ <ᴏɴ/ᴏғғ>
┊𖣠.ɢᴏᴏᴅʙʏᴇ <ᴏɴ/ᴏғғ>
┊𖣠.ᴀɴᴛɪʟɪɴᴋ <ᴏɴ/ᴏғғ>
┊𖣠.ᴘʀᴏᴍᴏᴛᴇ <@ᴜsᴇʀ>[ᴏʀᴀʟᴇ ᴀᴅᴍɪɴ ᴀᴋᴋᴀɴ]
┊𖣠.ᴅᴇᴍᴏᴛᴇ  <@ᴜsᴇʀ>[ᴀᴅᴍɪɴᴇ ᴅɪssᴍɪss ᴄʜᴇʏʏᴀᴀɴ]
┊𖣠.ᴍᴜᴛᴇ <ᴀᴅᴍɪɴs ᴏɴʟʏ>
┊𖣠.ᴜɴᴍᴜᴛᴇ <ᴀʟʟ_ᴘᴀʀᴛɪᴄɪᴘᴇɴᴛs>
└─────────────────✪----------𖤍

┌─────❲ 📀*ɪɴғᴏ ᴍᴇɴᴜ* ❳
┊𖣠.ʙʀᴀɪɴʟʏ <ǫᴜᴇsᴛɪᴏɴ>
┊𖣠.ᴡɪᴋɪ <ᴡɪᴋɪᴘᴇᴅɪᴀʏɪʟ sᴇᴀʀᴄʜ ᴄʜᴇʏʏᴀɴ>
┊𖣠.ɢɪᴛʜᴜʙ
┊𖣠.ᴏᴡɴᴇʀ <ʙᴏᴛ ᴏᴡɴᴇʀ>
┊𖣠.ɢɪᴛ <ʙᴏᴛ-ᴄᴏᴅᴇ>
┊𖣠.ᴍᴏᴠɪᴇ <ᴍᴏᴠɪᴇ ɴᴀᴍᴇ> [ᴍᴏᴠɪᴇ ᴅᴇᴛᴀɪʟᴇs]
┊𖣠.sʜᴏᴡ <ɴᴀᴍᴇ> [ɢᴇᴛ ɪɴғᴏ ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴛᴠ sᴇʀɪᴇs ᴀɴᴅ sʜᴏᴡs]
┊𖣠.ɴᴇᴡs <ᴄᴀᴛᴇɢᴏʀʏ> [ʜᴏᴛ ɴᴇᴡs ᴋɪᴛᴛᴀɴ]
┊𖣠.ǫᴜᴏᴛᴇ [ʀᴀɴᴅᴏᴍᴇ ǫᴜᴏᴛᴇ ᴋɪᴛᴛᴀɴ]
┊𖣠.sʏsᴅ [sʏsᴛᴇᴍ ᴅᴇᴛᴀɪʟs ᴋɪᴛᴛᴀɴ]
┊𖣠.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ> [സ്ഥലത്തെ കാലാവസ്ഥ അറിയാൻ ]
┊𖣠.sᴡᴇᴀᴛʜᴇʀ [sᴘᴀᴄᴇ ᴡᴇᴀᴛʜᴇʀ ᴋɪᴛᴛᴀɴ]
┊𖣠.ʟʏʀɪᴄ <sᴏɴɢ ɴᴀᴍᴇ> [ᴘᴀᴛᴛɪɴᴛᴇ ʟɪʀɪᴄs ᴋɪᴛᴛᴀᴀɴ]
┊𖣠.ᴄᴏᴠɪᴅ [7ᴄᴏᴜɴᴛʀʏ sɪʟᴇ ᴄᴏᴠɪᴅ ᴅᴇᴛᴀɪʟs]
┊𖣠.ɪᴘ <ɪᴘ ᴀᴅᴅʀᴇss> [ɪᴘ ᴀᴅᴅʀᴇss ᴅᴇᴛᴀɪʟs]
┊𖣠.ᴀʟɪᴠᴇ [ʙᴏᴛ ᴡᴏʀᴋɪɴɢ ᴀɴᴏ ᴇɴɴ ᴀʀɪʏᴀɴ]
┊𖣠.ᴡʜᴏɪs
┊𖣠.ʏᴛ <ᴛᴇxᴛ> [ʏᴏᴜᴛᴜʙɪʟ sᴇᴀʀᴄʜ ᴄʜᴇʏʏᴀᴀɴ]
└─────────────────✪----------𖤍

┌─────❲ 🛠*ᴛᴏᴏʟs ᴍᴇɴᴜ* ❳
┊𖣠.xᴍᴇᴅɪᴀ [ᴛᴇxᴛ ᴛᴏᴏʟs]
┊𖣠.sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟᴀʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ/ᴠɪᴅᴇᴏ/ɢɪғ>
┊𖣠.ᴍᴘ3 <Rᴇᴘʟᴀʏ ᴛᴏ ᴠɪᴅᴇᴏ> [Vɪᴅᴇᴏ ᴍᴘ3 ᴀᴀᴋᴋᴀᴀɴ]
┊𖣠.ᴀᴛᴛᴘ <ᴛxᴛ>[ ᴛᴇxᴛ  ʀᴀɪɴʙᴏᴡ ᴄᴏʟᴏᴜʀ sᴛɪᴄᴋᴇʀ ᴀᴋᴋᴀᴀɴ]
┊𖣠.ǫʀ <ᴛᴇxᴛ> [ᴛᴇxᴛ ǫʀ ᴄᴏᴅᴇ ᴀᴋᴋᴀᴀɴ]
┊𖣠.ʀᴇᴍᴏᴠᴇʙɢ <ʀᴇᴘʟᴀʏ ᴛᴏ ᴀ ɪᴍᴀɢᴇ> [ʙᴀᴄᴋɢʀᴏᴜɴᴅ ʀᴇᴍᴏᴠᴇ ᴄʜᴇʏʏᴀᴀɴ]
┊𖣠.ᴛᴛs <ᴛᴇxᴛ> [ᴛᴇxᴛ ᴠᴏɪᴄᴇ ᴀᴀᴋᴋᴀᴀɴ]
┊𖣠.ᴄᴀʟᴄ [ᴄᴀʟᴄᴜʟᴀᴛᴏʀ]
┊𖣠.sʜᴏʀᴛ <ʟɪɴᴋ> [ʟɪɴᴋ sʜᴏʀᴛ ᴀᴀᴋᴋᴀᴀɴ]
┊𖣠.ss <ʟɪɴᴋ> [ᴛʜᴀɴɴᴀ ʟɪɪɴᴛᴇɴᴋ sᴄʀᴇᴇɴsʜᴏᴛ ᴋɪᴛᴛᴀɴ]
┊𖣠.ᴅɪᴄᴛ <ᴛᴇxᴛ> [ᴅɪᴄᴛᴏɪɴᴏʀʏ]
┊𖣠.ᴏᴄʀ <ʀᴇᴘʟᴀʏ ᴛᴏ ɪᴍᴀɢᴇ> [ᴘʜᴏᴛᴏ ʏɪʟᴇ ᴛᴇxᴛ ᴋɪᴛᴛᴀɴ]
┊𖣠.ᴛʀᴛ
┊𖣠.ʟᴏɢᴏ [ʟᴏɢᴏ ᴛᴏᴏʟs]
┊𖣠.ᴘʜᴏᴛᴏ <ʀᴇᴘʟᴀʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ> [sᴛɪᴄᴋᴇʀ ᴘʜᴏᴛᴏ ᴀᴀᴋᴋᴀɴ]
┊𖣠.ғғɪʀᴇ <ᴛᴇxᴛ> [ғʀᴇᴇ ғɪʀᴇ ʟᴏɢᴏ]
└─────────────────✪----------𖤍

┌─────❲ 🤖*AI* ❳
┊𖣠.ʙᴏᴛ <ᴛxᴛ> [ʙᴏᴛɪɴᴏᴅ sᴀᴍsᴀᴀʀɪᴋᴋᴀᴀɴ]
┊𖣠.ᴅᴇᴇᴘᴀɪ
└─────────────────✪----------𖤍


┌─────❲ 🕋*ɪsʟᴀᴍ* ❳
┊𖣠.ᴘʀᴀʏᴇʀ <ᴄɪᴛʏ> ᴀᴅᴀɴ ᴛɪᴍᴇ ᴀʀɪʏᴀᴀɴ!
┊⚠︎.ᴛɪᴍᴇ ᴛʜᴇᴛᴛ ᴀᴀᴋᴀᴀɴ sᴀᴀᴅʜʏᴀᴅʜᴀ ᴜɴᴅ! 
└─────────────────✪----------𖤍


┌─────❲ 🧞*ᴏᴡɴᴇʀ ᴍᴇɴᴜ* ❳
┊𖣠.sʜᴜᴛᴅᴏᴡɴ [ʙᴏᴛ ᴏғғ ᴀᴋᴀᴀɴ]
┊𖣠.ᴜᴘᴅᴀᴛᴇ [Uᴘᴅᴀᴛᴇ ᴜɴᴅᴏᴏɴɴ ᴄʜᴇᴄᴋ ᴄʜᴇʏʏᴀᴀɴ]
┊𖣠.ᴜᴘᴀᴅᴀᴛᴇ ɴᴏᴡ [ʙᴏᴛ ᴜᴘᴅᴀᴛᴇ ᴄʜᴇʏʏᴀᴀɴ]
└─────────────────✪----------𖤍

┌─────────────────
┊ʙᴏᴛ ᴄᴏᴅᴇ :https://mrtech.cf
┊𐂡𝚖𝚑𝚍.𝚝𝚊
┊𐂡𝚖𝚛 𝚖𝚘𝚍𝚣
┊𐂡 wa.me/919288405103
└─────────────────✪----------𖤍


   ❚❙❘❙ ❙❙❘❘❙ ❘❚ ❙❙❘❙❘ ❘❙❘ ❘ ❙❙ 
    ©919288405103
`}) 

}));
