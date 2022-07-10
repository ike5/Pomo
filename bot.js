/**
 * Connect with Pomo discord bot
 */

const Discord = require('discord.js')
require('dotenv').config()
const BOT_TOKEN = process.env['BOT_TOKEN']
const bot = new Discord.Client()
let count = 0;

bot.login(BOT_TOKEN)

bot.on('ready', function (event) {
    console.log(`Logged in as: ${bot.user.tag}.`)
})

bot.on('message', async msg => {
    if (msg.content.startsWith('/')) {
        try {
            console.log(`Slash number ${++count}`)
            return msg.reply(`Okay. it Works!`)
        } catch (error) {
            return msg.reply(`Error: ${error}`)
        }
    }
})