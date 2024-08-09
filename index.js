const axios = require('axios');
const { Telegraf } = require('telegraf');

const bot=new Telegraf('//API KEY');

bot.start((ctx) => ctx.reply('WELCOME TO MY NEW CUSTOMIZED BOT'));
bot.command('dsvlp1', async function(ctx){
    const response=await axios.get('https://raw.githubusercontent.com/GoDeepak1/dsvlp/main/1a.py');
    // console.log(response.data);
    return ctx.reply(response.data);


});
bot.command('dsvlp2', async function(ctx){
    const response=await axios.get('https://raw.githubusercontent.com/GoDeepak1/dsvlp/main/2a.py');
    // console.log(response.data);
    return ctx.reply(response.data);


});
bot.command('gg',async function(ctx){
    const response=await axios.get('https://raw.githubusercontent.com/GoDeepak1/Quiz-App/main/index.html');
    return ctx.reply(response.data)
});
bot.launch();