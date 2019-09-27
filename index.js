import Telegraf from 'telegraf'
import SocksAgent from 'socks5-https-client/lib/Agent'
import dotenv from 'dotenv'

dotenv.config()

const socksAgent = new SocksAgent({
  socksHost: process.env.PROXY_HOST,
  socksPort: process.env.PROXY_PORT,
  socksUsername: process.env.PROXY_LOGIN,
  socksPassword: process.env.PROXY_PASSWORD,
})

const bot = new Telegraf(process.env.TELEGRAM_TOKEN, {
  telegram: {
    agent: socksAgent,
  },
})

bot.start(ctx => ctx.reply('Welcome!'))

bot.launch()
