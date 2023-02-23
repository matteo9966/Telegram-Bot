import { Bot,InputFile } from "grammy";
import dotenv from "dotenv";
import fs from 'fs';
import _ from "lodash";
interface Quote {
        quote: string;
        author: string;
        profession: string;
        topics: string[];

}
const quotes =JSON.parse(fs.readFileSync('./texts/quotes.json',{encoding:'utf-8'})) as Quote[];


dotenv.config();
const token = process.env["BOT_TOKEN"] as string;
const audio = fs.readFileSync('./audios/siren 4.mp3')
function main() {

  const bot = new Bot(token);

  bot.command('ppooo',(ctx)=>{
    ctx.replyWithAudio(new InputFile(fs.createReadStream('./audios/siren 4.mp3')));
  })
  bot.command('cardio',(ctx)=>{
    ctx.reply('Gabriele vai a fare cardio');
  })
  bot.command('aggressivo',(ctx)=>{
    ctx.reply('Gabriele vai a fare cardio dio cane');
  })
  bot.command('zitta',(ctx)=>{
    ctx.reply('ZITTA BUTTANA');
  })

  bot.command('quote',(ctx)=>{
    const randomQuote = _.sample(quotes)
    let quote=""
    if(randomQuote){
      quote=`${randomQuote.quote} - ${randomQuote.author}`
    }
    ctx.reply(quote)
  })



//   bot.on("message:text", (ctx) => {
//     const chatID = ctx.chat.id;
//     const type = ctx.chat.type;
//     const member = ctx.chatMember;
//     const messageID = ctx.msg.message_id;
//     ctx.reply(
//       `
//        ciao
//       `,
//       { reply_to_message_id: messageID } // se passi reply_to_message_id risponde a quel messaggio
//     );
 
   
//   });

  bot.start();
}


main();
