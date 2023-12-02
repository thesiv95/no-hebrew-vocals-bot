# Remove hebrew vocals bot

Telegram bot that removes vowels from hebrew text that is often copied from websites. These vowels are considered as extra symbols in the computer and in some cases could bring you unexpected pain :-)

This bot uses three languages for UI: Hebrew, English and Russian.

## How to use
1. Open this [link](https://t.me/no_heb_vocals_bot) (or search `@no_heb_vocals_bot` username in Telegram), then press **Start**.

2. Paste your "dirty" text, for example:
```
ֵשׁ תַעֲרוּכוֹת קְבוּעוֹת וְיֵשׁ תַעֲרוּכוֹת מִתְחַלְפוֹת.
יֵשׁ תַעֲרוּכָה עַל בָּתֵי כְּנֶסֶת חֲשׁוּבִים בָּעוֹלָם.
יֵשׁ תַעֲרוּכָה עַל אוֹמָנוּת יְהוּדִית עַתִיקָה וַחֲדָשָׁה.
יֵשׁ במוּזֵיאוֹן חֲנוּת מַזְכָּרוֹת. יֵשׁ בָּה גְלוּיוֹת צִבְעוֹנִיוֹת, יֵשׁ בָּה סְפָרִים מְעַנְיֵינִים,
```

3. You will get your "clean" text in reply, like this:
```
יש תערוכות קבועות ויש תערוכות מתחלפות.
יש תערוכה על בתי כנסת חשובי בעול.
יש תערוכה על אומנות יהודית עתיקה וחדשה.
יש במוזיאו חנות מזכרות. יש בה גלויות צבעוניות, יש בה ספרי מענייני,
```

Remember that symbols length is limited in order to keep quick performance. Normally it is 100 symbols (however, developer/admin can configure this value, see below).

## How to set up
1. Clone this repo where needed.
2. Do `npm i` to install dependencies.
3. Pay attention to environment variables (use `.env` file if you are not going to set variables via CI/CD system):
- `BOT_TOKEN` - Telegram's bot token, consider using [Botfather](https://t.me/BotFather) to create a new one or update current. Required.
- `LIMIT` - set how many symbols should be stored in one message. Please, do not set too big value (e.g. 200+). Optional (default value is 100).
4. `npm start` for production mode, `npm run dev` for development mode (app will be restarted automatically on every change).


## System requirements
Generally no specific need for OS, node at least `v.16`.

Feel free to offer PRs and tell about issues!

## Author
Ilya Soloveychik (`@thesiv95`)
