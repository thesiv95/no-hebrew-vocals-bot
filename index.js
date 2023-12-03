const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");
const parser = require("./parser");
const { welcomeText, generalErrorMessage } = require("./consts");

dotenv.config();

const LIMIT = parseInt(process.env.LIMIT) || 100;
const token = process.env.BOT_TOKEN;

console.log('envs', token, LIMIT)

if (!token) {
  console.error("Token not found");
  process.exit(1);
} else {
  console.info("token ok, limit is", LIMIT);
}

const bot = new TelegramBot(token, { polling: true });
console.info("bot is ready");

bot.on("message", async (msg) => {
  
  try {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    if (messageText === "/start") {
      await bot.sendMessage(chatId, welcomeText, { parse_mode: "MarkdownV2" });
    } else {
      const parsedText = await parser(messageText, LIMIT);
      await bot.sendMessage(chatId, parsedText, { parse_mode: "MarkdownV2" });
    }
  } catch (error) {
    console.error(new Date(), error.message);
    await bot.sendMessage(msg.chat.id, generalErrorMessage, {
      parse_mode: "MarkdownV2",
    });
  }
});
