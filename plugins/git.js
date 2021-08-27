const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/xz3DVT3/mrtechbot.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `ʜɪ......

┌─────❲ *MRTECH-BOT𖤍❳* 
┊
└─────────────────✪---------𖤍
   ───────╔╗───────╔╗─
   ╔══╗╔╦╗║╚╗╔═╗╔═╗║╚╗
   ║║║║║╔╝║╔╣║╩╣║═╣║║║
   ╚╩╩╝╚╝─╚═╝╚═╝╚═╝╚╩╝
   ───────────────────

┌─────❲ *ᴀʙᴏᴜᴛ* ❳
┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ ™
┊☞ wa.me/919288405103
┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ®
┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
└──────────────✪----------𖤍

┌─────❲ *ʙᴏᴛ-ᴄᴏᴅᴇ* ❳
┊
┊𒋨  www.mrtech.cf
└──────────────✪----------𖤍


    ║▌│█║▌│ █║▌│█│║
      ©919288405103™`}) 

}));
