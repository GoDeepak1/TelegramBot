const axios = require('axios');
const { Telegraf } = require('telegraf');

const bot=new Telegraf('//YOUR API KEY HERE');

bot.start((ctx) => ctx.reply('WELCOME TO MY NEW CUSTOMIZED BOT'));
bot.command('dsvlp1', async function(ctx){
    const response=await axios.get('//FileLinkHere');
    // console.log(response.data);
    return ctx.reply(response.data);


});
bot.command('dsvlp2', async function(ctx){
    const response=await axios.get('//FileLinkHere');
    // console.log(response.data);
    return ctx.reply(response.data);


});
bot.command('gg',async function(ctx){
    const response=await axios.get('//FileLinkHere');
    return ctx.reply(response.data)
});
bot.launch();
