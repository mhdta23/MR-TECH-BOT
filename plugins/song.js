const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'song', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "▄ ▄ █ ▄ █ ▄ █
Min●- - - - - - -●Max";
r_text[2] = "▄ ▄ █ ▄ █ ▄ █
Min●- - - - - - -●Maxx";

var i = Math.floor(3*Math.random())

await message.sendMessage(r_text[i]);

}));
