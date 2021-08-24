const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UeuCBFwesPWwdcV2Sv_HoZXrNiCZGy-aNg&usqp=CAU";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater MHD T. A*
*owner number wa.me/919288405103*
*bot CoDe:https://mrtech.cf
`}) 

}));
