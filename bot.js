const { Telegraf } = require('telegraf');

// Création d'un bot Telegram
const bot = new Telegraf('6776313554:AAGREb-M49a0IGY3HWwSNXtSyNWvQjjtkpo');

// Objet pour stocker les informations des utilisateurs
const users = {};

// Commande /start
bot.command('start', (ctx) => {
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

    ctx.reply(welcomeMessage, keyboard);

    // Initialisation des données de l'utilisateur
    users[chatId] = {
        balance: 0,
        referralCount: 0
    };
});

// Mise en œuvre du parrainage
bot.on('callback_query', (ctx) => {
    const chatId = ctx.chat.id;
    const data = ctx.callbackQuery.data;

    if (data === 'menu') {
        // Logique du menu
    } else if (data === 'referral') {
        // Ajouter +1 au solde et au nombre de parrain
        users[chatId].balance += 1;
        users[chatId].referralCount += 1;

        // Répondre à l'utilisateur
        ctx.answerCbQuery('Vous avez rejoint avec succès grâce à un lien de parrainage!');
    }
});

// Démarrer le bot
bot.launch();
