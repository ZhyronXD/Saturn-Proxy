const config = require("../config.json");
const Discord = require("discord.js");
const emojis = require("../emoji.json");
const { MessageButton, MessageActionRow } = require('discord-buttons');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${emojis.no} | You need **Manage_Guild** permission to run this command!`);

    const btn1 = new MessageButton()
    .setEmoji("855704030177263616")
    .setStyle('green')
    .setLabel("Yes")
    .setID("nukeyes")

    const btn2 = new MessageButton()
    .setEmoji("855704124879929355")
    .setStyle('red')
    .setLabel("No")
    .setID("nukeno")

    const btn = new MessageActionRow()
    .addComponent(btn1)
    .addComponent(btn2)


    message.channel.send(`${emojis.exclamation} Are you sure want to nuke(re-create) <#${message.channel.id}>?`, { component: btn })
}