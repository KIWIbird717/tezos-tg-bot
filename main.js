import { Telegraf, Markup } from "telegraf";

const token = "6971748627:AAE_KBSy9PBI6awJ-DN9N9sWCyTFXhXxwzg";
const webAppUrl = "https://c36e9febfb56b7f6.ngrok.app";

const bot = new Telegraf(token);

bot.command("start", ctx => {
	ctx.reply(
		"Welcome to the bot",
		Markup.keyboard([Markup.button.webApp("Hello", webAppUrl)])
	);
});

bot.launch();
