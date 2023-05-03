/* const telegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, {polling: true});

bot.on('message', (message) =>{

   
    let chat_id = message.from.id;

    bot.sendMessage(chat_id, 'Hello from Modernman');
}); */

require("dotenv").config();
const { Telegraf } = require("telegraf");
const nlp1 = require("./nlp1");
const nlp = require("./nlp");


const bot = new Telegraf(process.env.BOT_TOKEN);
///
bot.start((ctx)=>{
  ctx.reply('Hello! I am Wazecky, MyShop Assisstant, an eCommerce assistant bot at Modernman Shopping Mall, I hope I will help you adequately?')
})

bot.command('menu', (ctx)=>{
  /*ctx.reply('Here are our PRODUCTS!')
  ctx.telegram.sendMessage(ctx.chat.id,'Here are our <b>PRODUCTS!</b>', 
  {
    parse_mode: "HTML"
  })*/
   ctx.telegram.sendMessage(ctx.chat.id,'Choose one category?', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Sign Up With Us", callback_data: "RE"}],
        [{text: "Products", callback_data: "IT"}, {text: "Make Order", callback_data: "MO"}],
        [{text: "Add Cart", callback_data: "AD"}, {text: "See Prices", callback_data: "PR"}],
      ]
    }
  })
})

bot.action('RE', (ctx) => {
   ctx.deleteMessage()
   ctx.telegram.sendMessage(ctx.chat.id,'Use this link to create account with Modernman Mall: https://www.kilimall.co.ke/new/register', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Go Back To Menu", callback_data: "go-back"}]
      ]
    }
  })
})

bot.action('MO', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Click this link to learn more about making orders with us: https://m.kilimall.co.ke/helpIII/1992', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})


bot.action('PR', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Prices keep changing, please check your account to confirm new prices!', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})

bot.action('IT', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Click the button below to see categories of our products!', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "PRODUCTS", callback_data: "see-prod"}], [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})

bot.action('AD', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Click the button below to see categories of our products that you can add to cart!', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "PRODUCTS TO ADD TO CART", callback_data: "add-cart"}], [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})

bot.action('add-cart', (ctx)=>{
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Choose the type product you want to add to cart', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "CLOTHES FOR KIDS", callback_data: "CK"}, {text: "CLOTHES FOR WOMEN", callback_data: "CW"},],
        [{text: "CLOTHES FOR MEN", callback_data: "CM"}], [{text: "Go Back To Menu", callback_data: "go-back"}],
      ]
    }
  })
})

bot.action('CK', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Our clothes for kids are designed with high-quality, soft, and durable materials that prioritize comfort, safety, and style. From everyday essentials to formal wear, we offer a wide range of colors, patterns, and styles to fit your child unique personality. At Modernman Mall, we make dressing your child fun, easy, and stress-free with clothes you can feel good about buying and your kids. Use this link to proceed to adding cart: https://www.kilimall.co.ke/new/commoditysearch?q=clothes%20for%20kids', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})

bot.action('CW', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Feel your best in our stylish, comfortable clothes for women. We offer a range of sizes and styles for every occasion, made with high-quality, sustainable materials. At Modernman Mall, we are committed to providing affordable fashion that helps you feel confident and beautiful. Use this link to proceed to adding cart: https://www.kilimall.co.ke/new/commoditysearch?q=women%20clothes', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})

bot.action('CM', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Look and feel your best in our stylish and comfortable clothes for men. We offer a variety of options for every occasion, made with high-quality, eco-friendly materials and ethical manufacturing practices. At Modernman Mall, we are committed to providing affordable fashion that makes a positive impact on both you and the environment. Use this link to proceed to adding cart: https://www.kilimall.co.ke/new/commoditysearch?q=men%20clothes', 
 {
   reply_markup: {
     inline_keyboard: [
       [{text: "Go Back To Menu", callback_data: "go-back"}]
     ]
   }
 })
})

bot.action('see-prod', (ctx)=>{
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Choose the type product you want', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "CLOTHES FOR KIDS", url: "https://www.kilimall.co.ke/new/commoditysearch?q=Kids%20clothes"}, {text: "CLOTHES FOR WOMEN", url: "https://www.kilimall.co.ke/new/commoditysearch?q=women%20clothes"},],
        [{text: "CLOTHES FOR MEN", url: "https://www.kilimall.co.ke/new/commoditysearch?q=men%20clothes"}], [{text: "Go Back To Menu", callback_data: "go-back"}],
      ]
    }
  })
})

bot.action('go-back', (ctx)=>{
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,'Choose one category', 
  {
    reply_markup: {
      inline_keyboard: [
        [{text: "Sign Up With Us", callback_data: "RE"}],
        [{text: "Products", callback_data: "IT"}, {text: "Make Order", callback_data: "MO"},],
        [{text: "Add Cart", callback_data: "AD"}, {text: "See Prices", callback_data: "PR"}],
      ]
    }
  })
})


///
bot.on("text", async (ctx) => {
  const { Wit, log } = require("node-wit");
  const client = new Wit({
    accessToken: process.env.WITAI_TOKEN,
    logger: new log.Logger(log.DEBUG), // optional
  });
  var msg = ctx.message.text;
  var wit = await client.message(msg);
  console.log("wit reply", JSON.stringify(wit));
  var reply = await nlp.handleMessage(wit.entities, wit.traits);
  console.log("reply", reply);
ctx.reply(reply);
});

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));