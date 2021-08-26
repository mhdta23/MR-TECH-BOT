const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'MRTECH-BOT Bot created by *MHD T.A*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n---------------------   ┌─────❲ *MRTECH-BOT𖤍❳* 
┊
└─────────────────✪---------𖤍

        ╔╗╔╗╔══╗╔══╗
        ║╚╝║║╔╗║╚║║╝
        ║╔╗║║╠╣║╔║║╗
        ╚╝╚╝╚╝╚╝╚══╝

┌─────❲ *ᴀʙᴏᴜᴛ* ❳
┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ 
┊☞ wa.me/919288405103
┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ
┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
└─────────────────✪----------𖤍


   ❚❙❘❙❙❙❘❘❙ ❘❚ ❙❙❘❙❘ ❘❙❘ ❘❙
    ©919288405103 ', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'MRTECH-BOT Bot created by *MHD T.A*' , MessageType.text);
        }
       else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n--------------------   ┌─────❲ *MRTECH-BOT𖤍❳* 
┊
└─────────────────✪---------𖤍

        ╔╗╔╗╔══╗╔══╗
        ║╚╝║║╔╗║╚║║╝
        ║╔╗║║╠╣║╔║║╗
        ╚╝╚╝╚╝╚╝╚══╝

┌─────❲ *ᴀʙᴏᴜᴛ* ❳
┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ 
┊☞ wa.me/919288405103
┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ
┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
└─────────────────✪----------𖤍


   ❚❙❘❙❙❙❘❘❙ ❘❚ ❙❙❘❙❘ ❘❙❘ ❘❙
    ©919288405103', MessageType.text);
        }
    }));
}
