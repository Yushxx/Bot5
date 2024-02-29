const mysql = require('mysql');
const { Telegraf } = require('telegraf');

// Configuration de la base de données MySQL
const connection = mysql.createConnection({
    host: 'sql105.byethost7.com',
    user: 'b7_36069088',
    password: '009988',
    database: 'b7_36069088_bethub'
        });

// Connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// Création d'un bot Telegram
const bot = new Telegraf('6776313554:AAGREb-M49a0IGY3HWwSNXtSyNWvQjjtkpo');

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
});
