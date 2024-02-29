const { Telegraf } = require('telegraf');
const { LanguageServiceClient } = require('@google-cloud/language').v1;

// Crée un client CLD3
const languageClient = new LanguageServiceClient();

// Crée un bot Telegram
const bot = new Telegraf('6776313554:AAGREb-M49a0IGY3HWwSNXtSyNWvQjjtkpo');

// Commande /start
bot.command('start', async (ctx) => {
    const chatId = ctx.chat.id;
    const firstName = ctx.from.first_name;
    const welcomeMessage = `Salut ${firstName}, bienvenue dans le programme hack de solkah. Choisissez une option dans le menu en cliquant sur le bouton ci-dessous:`;

    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Rejoindre 💰✅️', url: 'https://t.me/+toA5QPKK5Nc4MTc0' }],
                [{ text: 'Menu', callback_data: 'menu' }]
            ]
        }
    };

    try {
        // Détecte la langue du message
        const [result] = await languageClient.detectLanguage({
            content: welcomeMessage,
        });
        const language = result.language;
        console.log('Language:', language);
    } catch (err) {
        console.error('ERROR:', err);
    }

    ctx.reply(welcomeMessage, keyboard);
});

// Lancer le bot
bot.launch();
