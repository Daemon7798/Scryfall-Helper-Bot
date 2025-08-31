require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on("clientReady", (c) =>
{
    console.log(`👀 ${c.user.username} online`);
});

client.on("interactionCreate", (inter) =>
{
    if (!inter.isChatInputCommand) return;

    if (inter.commandName === 'query')
    {
        let query = '';
        const id = inter.options.get('color-id');
        const colorExclude = inter.options.get('exclude-color');

        if (id)
        {
            switch (id.value.toLowerCase().replaceAll("/", " ").replaceAll(", ", " ").replaceAll(",", " ").trim())
            {
                case 'r':
                case 'red':
                    query += "id<=r ";
                    break;
                case 'b':
                case 'black':
                    query += "id<=b ";
                    break;
                case 'g':
                case 'green':
                    query += "id<=g ";
                    break;
                case 'w':
                case 'white':
                    query += "id<=w ";
                    break;
                case 'u':
                case 'blue':
                    query += "id<=u ";
                    break;
                case 'c':
                case 'colorless':
                    query += "id<=c ";
                    break;
                case 'white blue':
                case 'blue white':
                case 'azorius':
                    query += "id<=wu ";
                    break;
                case 'red white':
                case 'white red':
                case 'boros':
                    query += "id<=wr ";
                    break;
                case 'blue black':
                case 'black blue':
                case 'dimir':
                    query += "id<=r ";
                    break;
                case 'black green':
                case 'green black':
                case 'golgari':
                    query += "id<=bg ";
                    break;
                case 'red green':
                case 'green red':
                case 'gruul':
                    query += "id<=gr ";
                    break;
                case 'blue red':
                case 'red blue':
                case 'izzet':
                    query += "id<=ru ";
                    break;
                case 'white black':
                case 'black white':
                case 'orzhov':
                    query += "id<=bw ";
                    break;
                case 'red black':
                case 'black red':
                case 'rakdos':
                    query += "id<=br ";
                    break;
                case 'white green':
                case 'green white':
                case 'selesnya':
                    query += "id<=gw ";
                    break;
                case 'blue green':
                case 'green blue':
                case 'simic':
                    query += "id<=gu ";
                    break;
                case 'white black green':
                case 'white green black':
                case 'black white green':
                case 'black green white':
                case 'green black white':
                case 'green white black':
                case 'abzan':
                    query += "id<=wbg ";
                    break;
                case 'white blue green':
                case 'white green blue':
                case 'green white blue':
                case 'green blue white':
                case 'blue green white':
                case 'blue white green':
                case 'bant':
                    query += "id<=wug ";
                    break;
                case 'black red blue':
                case 'black blue red':
                case 'blue black red':
                case 'blue red black':
                case 'red black blue':
                case 'red blue black':
                case 'grixis':
                    query += "id<=bru ";
                    break;
                case 'white blue red':
                case 'white red blue':
                case 'red white blue':
                case 'red blue white':
                case 'blue red white':
                case 'blue white red':
                case 'jeskai':
                    query += "id<=wur ";
                    break;
                case 'black green red':
                case 'black red green':
                case 'green black red':
                case 'green red black':
                case 'red green black':
                case 'red black green':
                case 'jund':
                    query += "id<=brg ";
                    break;
                case 'white black red':
                case 'white red black':
                case 'black white red':
                case 'black red white':
                case 'red black white':
                case 'red white black':
                case 'mardu':
                    query += "id<=brw ";
                    break;
                case 'white green red':
                case 'white red green':
                case 'green white red':
                case 'green red white':
                case 'red green white':
                case 'red white green':
                case 'naya':
                    query += "id<=grw ";
                    break;
                case 'black green blue':
                case 'black blue green':
                case 'green black blue':
                case 'green blue black':
                case 'blue green black':
                case 'blue black green':
                case 'sultai':
                    query += "id<=bug ";
                    break;
                case 'green red blue':
                case 'green blue red':
                case 'red green blue':
                case 'red blue green':
                case 'blue red green':
                case 'blue green red':
                case 'temur':
                    query += "id<=gru ";
                    break;
                case 'wubrg':
                case 'five color':
                case 'all':
                    query += "id<=wubrg ";
                    break;
                default:
                    inter.reply('Error processing color id, please contact Daemon');
                    return;
            }
        }

        if (colorExclude)
        {
            switch (colorExclude.value.toLowerCase())
            {
                case 'r':
                case 'red':
                    query += "-c:r ";
                    break;
                case 'b':
                case 'black':
                    query += "-c:b ";
                    break;
                case 'g':
                case 'green':
                    query += "-c:g ";
                    break;
                case 'w':
                case 'white':
                    query += "-c:w ";
                    break;
                case ' u':
                case 'blue':
                    query += "-c:u ";
                    break;
                case 'c':
                case 'colorless':
                    query += "-c:c ";
                    break;
                default:
                    inter.reply('Error processing color exclusion, please contact Daemon');
                    return;
            }
        }

        inter.reply(`${query}`);
    }
});

client.login(process.env.TOKEN);