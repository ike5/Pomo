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
            var user = new Discord.User()
            console.log(`Slash number ${++count} for user: ${}`)
            return msg.reply(`Okay. it Works!`)
        } catch (error) {
            return msg.reply(`Error: ${error}`)
        }
    }
})

const clientId = "994954172879343626"
var discord = new Discord.Discord(clientId, Discord.CreateFlags.Default)
var userManager = discord.GetUserManager()
userManager.OnCurrentUserUpdate += () => {
    var currentUser = userManager.GetCurrentUser()
    console.log(currentUser.Username)
    console.log(currentUser.Id)
    console.log(currentUser.Discriminator)
    console.log(currentUser.Avatar)
}